const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

let users = []; // "База данных" пользователей (для простоты храним в памяти)

app.post('/register', (req, res) => {
    const { username, password } = req.body;
  
    if (users.find(u => u.username === username)) {
      return res.status(400).json({ message: 'User already exists' });
    }
  
    const newUser = { id: users.length + 1, username, password };
    users.push(newUser);
  
    res.status(201).json({ message: 'User registered successfully' });
  });

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1]; // Берем токен после "Bearer "

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }

      req.user = user; // Добавляем информацию о пользователе в объект запроса
      next(); // Передаем управление следующему обработчику
    });
  } else {
    res.sendStatus(401); // Unauthorized
  }
};

app.get('/protected', authenticateJWT, (req, res) => {
  res.json({ message: '{This is a protected route}', user: req.user });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});