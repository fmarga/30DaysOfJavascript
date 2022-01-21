//Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
    //Even numbers background is green
    //Odd numbers background is yellow

//setting variables
const title = document.createElement('h1');
const title2 = document.createElement('h3');
const div = document.createElement('div');
let number;

//changing title
title.textContent = 'Number Generator';
title.style.fontSize = '24px';
title.style.fontFamily = "'Montserrat', sans-serif";
title.style.margin = '5px auto';
title.style.textAlign = 'center';

//changing sub-title
title2.textContent = '30DaysOfJavaScript:DOM Day 2';
title2.style.fontSize = '16px';
title2.style.fontFamily = "'Montserrat', sans-serif";
title2.style.fontWeight = '300';
title2.style.textDecoration = 'underline';
title2.style.margin = '20px auto';
title2.style.textAlign = 'center';

//changing div
div.setAttribute('class', 'wrapper');
div.style.width = '600px';
div.style.margin = 'auto';
div.style.display = 'grid';
div.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr';

//append to the HTML document
document.body.appendChild(title);
document.body.appendChild(title2);
document.body.appendChild(div);

//changing number
for(let i = 0; i <= 101; i++) {

    number = document.createElement('p');
    number.textContent = i;
    number.style.display = 'inline-block';
    number.style.margin = '2px';
    number.style.fontSize = '20px';
    number.style.fontFamily = "'Montserrat', sans-serif";
    number.style.color = 'white';
    number.style.padding = '8px 25px';
    number.style.textAlign = 'center';

    if(i % 2 == 0) {
        number.style.backgroundColor = '#43CA7B';
    }else if(i % 2 != 0) {
        number.style.backgroundColor = '#E8C943';
    }

    div.appendChild(number);
}