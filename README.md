```markdown
## 🛠 Установка и настройка

### 1. Клонирование репозитория
```bash
git clone https://github.com/your-repo/jwt-auth-example.git
cd jwt-auth-example
```

### 2. Установка зависимостей
```bash
npm install
```
> Устанавливает все необходимые пакеты для работы сервера

## 🚀 Запуск приложения

### Серверная часть
```bash
npm start
```
Сервер будет доступен по адресу:  
🌐 `http://localhost:3000`

### Клиентская часть
Откройте файл `index.html` одним из способов:
- Перетащите файл в окно браузера
- Используйте меню браузера:  
  `Файл → Открыть файл...`

## 🔐 Работа с системой аутентификации

### 📝 Регистрация нового пользователя
1. Заполните форму "Register":
   - Введите имя пользователя
   - Придумайте надежный пароль
2. Нажмите кнопку "Register"

### 🔑 Вход в систему
1. В форме "Login" введите:
   - Ваше имя пользователя
   - Пароль, указанный при регистрации
2. Нажмите "Login"

### 🔒 Доступ к защищенным данным
После успешного входа:
1. Нажмите "Fetch Protected Data"
2. Система покажет защищенную информацию, доступную только авторизованным пользователям
```
