// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
// 
// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const inputField = document.querySelector('#name-input')
const spanTextFromInput = document.querySelector('#name-output')

const onInputTextField = (event)=> event.currentTarget.selectionStart>0 ?
        spanTextFromInput.textContent=event.currentTarget.value :
        spanTextFromInput.textContent='незнакомец';

inputField.addEventListener('input', onInputTextField);




