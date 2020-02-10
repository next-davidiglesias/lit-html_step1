// Import lit-html functions
import {html, render} from 'lit-html';

const myTemplate = (name, time) => {
  return html`
     ${time === '12'? html` Buenos días ${name} <button`: html` Buenas noches ${name}` }
  `;
}


render(myTemplate('lit-html','24'), document.body.querySelector('.first')
);


render(myTemplate('lit-html','12'), document.body.querySelector('.second')
);

