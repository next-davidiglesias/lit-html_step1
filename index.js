// Import lit-html functions
import {html, render} from 'lit-html';
let time = '12';

const myTemplate = (name) => {
  return html`
     ${time === '12'? html` Buenos días `: html` buenas noches` }
  
  `;
}

const changeTime = () =>{
  time  = time === '12' ? '24' : '12';
}
  

render(myTemplate('lit-html'), document.body.querySelector('section')
);


