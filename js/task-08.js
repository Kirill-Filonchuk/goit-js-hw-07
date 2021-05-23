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

// <div id="boxes"></div>
//   const itemsEl= ingredients.map(ing=>{
//     const item=document.createElement('li');
//     item.textContent=ing;
//     return item;
// });
// console.log(itemsEl);

// list.append(...itemsEl);

console.log()
console.log()
console.log()

const refs ={
    manage: document.querySelector('#controls'),
    input: document.querySelector('[type=number]'),
    render: document.querySelector('[data-action="render"]'),
    destroy: document.querySelector('[data-action="destroy"]'),
    result: document.querySelector('#boxes'),
}
console.log(refs.manage, refs.input, refs.render, refs.destroy, refs.result);

refs.input.addEventListener('blur', onTypeValue);

let typeValue=0;
// let fontSize= `${event.currentTarget.value}px`;
//     followUpText.style.fontSize=fontSize;

function onTypeValue (event) {
    typeValue=event.currentTarget.value;
    console.dir(event.currentTarget.value)
    const arrayOfElement = [];
    
    for (let i=0; i<=event.currentTarget.value; i+=1) {
        arrayOfElement.push(i);
    }
console.log(arrayOfElement);

const itemsEl= arrayOfElement.map(el=>{
        const item=document.createElement('div');
        item.textContent=el;
        return item;
    });

    refs.result.append(...itemsEl);
return itemsEl;
}

