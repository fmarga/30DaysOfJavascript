//setting variables
const wrapper = document.querySelector('.wrapper');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const li = document.querySelectorAll('li');
const span = document.querySelector('span');

//setting background color to the li's
for(let i = 0; i < li.length; i++) {
    let content = li[i].textContent;
    if(content.includes('Done')) {
        li[i].style.backgroundColor = '#82F5A0';
    }else if(content.includes('Ongoing')) {
        li[i].style.backgroundColor = '#EBE577';
    }else {
        li[i].style.backgroundColor = '#E66B5E';
    }
}

//change color of '2020' each second
setInterval(function() {

    let color = '#';
    const arrColor = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for(let i = 0; i < 6; i++) {
        let n = Math.floor(Math.random() *
            arrColor.length);
        color += arrColor[n];
    }

    span.style.color = color;
}, 1000);
    



