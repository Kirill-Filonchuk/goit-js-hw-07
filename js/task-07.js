// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const contrByRange= document.querySelector('#font-size-control');
console.dir(contrByRange);
const followUpText=document.querySelector('#text');
console.dir(followUpText);

function onTargetRange(event) {
    let fontSize= `${event.currentTarget.value}px`;
    followUpText.style.fontSize=fontSize;
    return ;
}
contrByRange.addEventListener('input', onTargetRange);
