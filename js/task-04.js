// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


let counterValue = 0;

const changeValue = document.querySelector('#value')

const increment = () => counterValue+=1;
const decrement = () => counterValue-=1;

const btnIncrem = document.querySelector('[data-action="increment"]');
const btnDecrem = document.querySelector('[data-action="decrement"]');

const onIncrBtnTarg = () => changeValue.textContent=increment();
const onDecrBtnTarg = () => changeValue.textContent=decrement();

btnIncrem.addEventListener('click',onIncrBtnTarg)
btnDecrem.addEventListener('click',onDecrBtnTarg)

 

//=========DRAFT

// let counterValue = 0;

// const changeValue = document.querySelector('#value')
// console.dir(changeValue);

// const increment = function () {
//    return counterValue+=1
// }

// console.log(increment());
// console.log(increment());

// const decrement = function () {
//     return counterValue-=1
//  }
// console.log(decrement());

// const btnDecrem = document.querySelector('[data-action="decrement"]');
// console.log(btnDecrem);

// const btnIncrem = document.querySelector('[data-action="increment"]');
// console.log(btnIncrem);

// btnDecrem.addEventListener('click',onDecrBtnTarg)

// btnIncrem.addEventListener('click',onIncrBtnTarg)

// function onIncrBtnTarg (){
//     let i = increment()
//     changeValue.textContent=i;
//    return console.log('IncrCLick',i)
// }

// function onDecrBtnTarg (){
//     let d = decrement()
//     changeValue.textContent=d;
//     return console.log('DecrCLick', d)
//  }
 