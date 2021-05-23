// Напиши скрипт, который бы при потере фокуса (blure) на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }


const followUpInput = document.querySelector('#validation-input');

followUpInput.addEventListener('blur', onTargetInput)

function onTargetInput(event){
    const inputLength=event.currentTarget.value.length;
    const dataLength=event.currentTarget.attributes["data-length"].nodeValue;
    if(inputLength==dataLength){
        followUpInput.classList.remove('invalid');
        followUpInput.classList.add('valid')
        
    } else {
        followUpInput.classList.remove('valid');
        followUpInput.classList.add('invalid')
    }
    console.log(`inputLength ${inputLength}, dataLength ${dataLength}`)
}

// DRAFT

// console.log('followUpInput:', followUpInput)

//    return console.log(`inputLength ${inputLength}, dataLength ${dataLength}`)