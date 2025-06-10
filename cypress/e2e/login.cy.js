describe('Проверка авторизации', function () {

    it('Верный логин и пароль', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт

        cy.get('#mail').type('german@dolnikov.ru') //Ввели правильный логин
        cy.get('#pass').type('iLoveqastudio1') //Ввели правильно пароль
        cy.get('#loginButton').click() //нажал кнопку войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно') //Проверил что пользователь видит сообщение об успешной авторизации
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверил наличие крестика

})
    it('Проверка восстановл.пароля', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').click() //Нажал на кнопку Забыли пароль

        cy.get('#mailForgot').type('german@dalnikov.ru') //Ввел любой имейл 
        cy.get('#restoreEmailButton').click() //Нажал отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail') //Проверил что пользователь видит сообщение об успешной отпраки пароля на emeil
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверил наличие крестика
})
    it('Верный логин и НЕверный пароль', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт

        cy.get('#mail').type('german@dolnikov.ru') //Ввели правильный логин
        cy.get('#pass').type('iLoveqastudio') //Ввели НЕправильный пароль
        cy.get('#loginButton').click() //Нажал кнопку войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет') //Проверил что пользователь видит сообщение "Такого логина или пароля нет"
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверил наличие крестика

}) 
    it('НЕверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт

        cy.get('#mail').type('german@dalnikov.ru') //Ввели НЕправильно логин
        cy.get('#pass').type('iLoveqastudio1') //Ввели правильно пароль
        cy.get('#loginButton').click() //Нажал кнопку войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет') //Проверил что пользователь видит сообщение "Такого логина или пароля нет"
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверил наличие крестика

}) 
    it('Проверка валидации', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт

        cy.get('#mail').type('germandolnikov.ru') //Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1') //Ввели правильно пароль
        cy.get('#loginButton').click() //Нажал кнопку войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации') //Проверил что пользователь видит сообщение "Нужно исправить проблему валидации"
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверил наличие крестика

}) 
    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт

        cy.get('#mail').type('GerMan@Dolnikov.ru') //Ввели логин строчными буквами
        cy.get('#pass').type('iLoveqastudio1') //Ввели правильно пароль
        cy.get('#loginButton').click() //Нажал кнопку войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно') //Проверил что пользователь видит сообщение об успешной авторизации
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверил наличие крестика

})
      }) 

      