//Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
const firstParagraph = document.querySelector('p');


//Get each of the the paragraph using document.querySelector('#id') and by their id
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const p3 = document.querySelector('#p3');
const p4 = document.querySelector('#p4');


//Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const paragraphs = document.querySelectorAll('p');


//Loop through the nodeList and get the text content of each paragraph
for(let i = 0; i < paragraphs.length; i++) {
    let content = paragraphs[i].textContent;
    console.log(content);
}


//Set a text content to paragraph the fourth paragraph,Fourth Paragraph
paragraphs[3].textContent = 'Fourth Paragraph';


//Set id and class attribute for all the paragraphs using different attribute setting methods
for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].setAttribute('id', `id ${i}`);
}
paragraphs.forEach((p) => p.classList.add('paragraph'));