//setting variables
const title = document.createElement('h1');
const subtitle = document.createElement('p');
const input = document.createElement('input');
const btn = document.createElement('button');
const divInput = document.createElement('div');
const divNumbers = document.createElement('div');
let number;


//changing value and style
document.body.style.fontFamily = "'Montserrat', sans-serif";
title.textContent = 'Number Generator';
title.style.fontSize = '36px';
title.style.color = '#7BB993';
title.style.margin = 'auto';
title.style.textAlign = 'center';

subtitle.textContent = `30DaysOfJavaScript:DOM-Day-3`;
subtitle.style.fontSize = '14px';
subtitle.style.color = '#6A686E';
subtitle.style.margin = 'auto';
subtitle.style.textAlign = 'center';
subtitle.style.textDecoration = 'underline';

divInput.style.width = '500px';
divInput.style.textAlign = 'center';
divInput.style.margin = '30px auto';
divInput.style.display = 'flex';
divInput.style.justifyContent = 'space-between';

input.style.width = '300px';
input.style.padding = '5px';
input.style.border = 'solid 1px #7BB993';

btn.textContent = 'Generate numbers';
btn.style.backgroundColor = '#7BB993';
btn.style.color = 'white';
btn.style.fontSize = '14px';
btn.style.marginLeft = '5px';
btn.style.border = 'solid 1px #7BB993';
btn.style.cursor = 'pointer';
btn.style.padding = '5px 10px';

divNumbers.style.width = '600px';
divNumbers.style.textAlign = 'center';
divNumbers.style.margin = '30px auto';
divNumbers.style.display = 'grid';
divNumbers.style.gridTemplateAreas = '1fr 1fr 1fr 1fr 1fr 1fr';

//append to the HTML
document.body.appendChild(title);
document.body.appendChild(subtitle);
document.body.appendChild(divInput);
divInput.appendChild(input);
divInput.appendChild(btn);

//eventlistener
btn.addEventListener('click', function() {
    if(input.value != typeof(number)) {
        const alerta = document.createElement('span');
        alerta.textContent = 'Input must be a number';
        alerta.style.color = 'red';
        alerta.style.fontSize = '14px';
        divInput.appendChild(alerta);
    }else {

    }
})