// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

const findLiItem = document.querySelectorAll('ul#categories > li.item');
console.log(`В списке ${findLiItem.length} категории.`)
console.dir(findLiItem)

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4
for (let i=0; i<findLiItem.length; i+=1) {
const categoryOfItem = findLiItem[i].firstElementChild.textContent;
const quantOfElement = findLiItem[i].lastElementChild.querySelectorAll('li');
console.log(`Категория: ${categoryOfItem}`);
console.log(`Количество элементов: ${quantOfElement.length}`);
}