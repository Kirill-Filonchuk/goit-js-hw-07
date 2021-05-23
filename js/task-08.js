// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>
const refs={
    inputPlace: document.querySelector('#boxes'),
    createBtn:document.querySelector('[data-action="render"]'),
    inputForm:document.querySelector('[type="number"]'),
    destroyBtn:document.querySelector('[data-action="destroy"]'),
};

const randomRGB = ()=>Math.ceil(Math.random()*(255-0)+0);

const getRgbStyle = ()=>{return `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`};

const baseParamOfBox = 30;

const boxSize = (n)=> baseParamOfBox+(n-1)*10;

const boxMarkUp = (n)=>{
    const color=getRgbStyle();
    const markUp = `<div style="background-color: ${color}; width: ${boxSize(n)}px; height:${boxSize(n)}px;">${n}</div>`;
    return markUp;
}

const addMyMarckUp = function(n){
    let baseStyle="";
    for(let i=1; i<=n; i++) {
        baseStyle+=boxMarkUp(i)
    }
    refs.inputPlace.insertAdjacentHTML('afterbegin',baseStyle)
}

const normolaseInputValue=function(){ 
    let a= 0;
    if (refs.inputForm.value<=Number(refs.inputForm.max) && refs.inputForm.value>=Number(refs.inputForm.min)){
        a=refs.inputForm.value
        return a;
    } else {
        return alert('введите число в диапазоне от 0 до 100')
    }
};

refs.destroyBtn.addEventListener('click', onTargetToDestroyBtn)
function onTargetToDestroyBtn(){
    refs.inputPlace.innerHTML="";
    refs.inputForm.value='';
};


refs.createBtn.addEventListener('click', onTargetCreateBtn)
function onTargetCreateBtn(){
    refs.inputPlace.innerHTML="";
    addMyMarckUp(normolaseInputValue());
}


