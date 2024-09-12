const numbers = [1, 2, 3, 4, 5, 6];


numbers.forEach(function (number) {
    const liItem = document.createElement("li");
    liItem.textContent = number;
    document.querySelector('ul#list').appendChild(liItem);

});