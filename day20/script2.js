const p = document.querySelectorAll('p');
//Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
p.forEach((p) => {
    p.style.color = 'red';
    p.style.backgroundColor = '#333';
    p.style.fontSize = '1.5rem';
});


//Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
for(let i = 0; i < p.length; i++) {
    if(i % 2 == 0) {
        p[i].style.color = 'red';
    }else{
        p[i].style.color = 'green';
    }
}