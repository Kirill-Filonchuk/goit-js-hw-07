// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const contrByRange= document.querySelector('#font-size-control');
console.dir(contrByRange);
const followUpText=document.querySelector('#text');
console.dir(followUpText);

contrByRange.min=10;
contrByRange.max=32;
contrByRange.step=4;


// followUpText.style.fontSize=`${contrByRange.value}px`
contrByRange.value=16;

const onTargetRange=(event) => followUpText.style.fontSize=`${event.currentTarget.value}px`;
    
contrByRange.addEventListener('input', onTargetRange);
