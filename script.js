'use strict'

guessNubmer ();
function guessNubmer () {
let number = (Math.floor(Math.random() * 100) + 1);
getNumber();

function getNumber() {
    let stringUser = prompt ('Угадай число от 1 до 100');
    let numberUser = Number(stringUser);

 console.log (numberUser);
  repFun();
  function repFun () {
    if (numberUser === number) {
    alert ("Поздравляю, Вы угадали!!!");
    guessNubmer ();
    } else {
    rep ();
    };

  function rep () {
    if (stringUser === null) {
        alert ("Игра окончена");
    } else if (numberUser > number) {
     alert ("Загаданное число меньше");
     getNumber();
    } else if (numberUser < number) {
    +alert ("Загаданное число больше");
    getNumber();
    } else if (numberUser === isNaN()) {
    +alert ("Введи число");
    getNumber();
    };
    };   
};
};
};


