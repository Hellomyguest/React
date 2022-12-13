# Панель администратора

<p align="center">
<a href="#установка-и-запуск">Установка и запуск</a> •
<a href="#технологический-стек">Технологический стек</a> •
<a href="#описание">Описание</a>
</p>

## Установка и запуск
```javascript
git clone git@github.com:Hellomyguest/react-app.git
cd react-app
npm install
npm start
```

## Технологический стек

- #### Development environment: <br><img src="https://seeklogo.com/images/C/create-react-app-logo-BA592B4FB4-seeklogo.com.png" width="24"> **Create-react-app** (https://create-react-app.dev/)
- #### Language:<br><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png" width="24"> **JavaScript** (https://www.typescriptlang.org/) 
- #### State manager: <br><img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" width="24"> **Redux** (https://redux.js.org/) 
- #### Git hooks: <br>🐶 **Husky** (https://typicode.github.io/husky/#/) 
- #### Code analyzer: <br><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/24px-ESLint_logo.svg.png?20211012234406"> **ESLint** (https://eslint.org/) 
- #### Code formatter: <br><img src="https://prettier.io/icon.png" width="24"> **Prettier** (https://prettier.io/) 

## Описание
Заказы в панели администратора интернет-магазина представлены в виде таблицы с пагинацией.
<br>
Таблица поддерживает:
<br>
1. Поиск по полям ФИО покупателя и № заказа
2. Фильтрацию по полям Дата оформления/Статус заказа/Сумма заказа
3. Смену статусу заказа по выбранным заказам
4. Удаление вызванных заказов
5. Редактирование заказов