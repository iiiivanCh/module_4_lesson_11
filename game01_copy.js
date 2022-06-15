'use strict';

const resultMachine = Math.floor(Math.random() * 101);
const userNumber = prompt('Вы ввели не число от 1 до 100, пожалуйста, повторите попытку');
console.log(resultMachine);

function doPlay(resultMachine, userNumber) {
  if (userNumber === 'null' || userNumber === null) {
    alert('До свидания');
    return;
  } else
  if (userNumber === '') {
    alert('Вы ничего не добавили. До свидания');
    return;
  }
  if (resultMachine > userNumber) {
    userNumber = prompt('Больше!');
  } else
  if (resultMachine < userNumber) {
    userNumber = prompt('Меньше!');
  } else
  if (resultMachine == userNumber) {
    alert('Правильно!');
    return;
  }
  return doPlay(resultMachine, userNumber);
}

doPlay(resultMachine, userNumber);
