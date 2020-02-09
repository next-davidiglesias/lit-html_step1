// Import lit-html functions
import {html, render} from 'lit-html';

const myTemplate = (name) => 
   html`<div>Hello ${name}</div>`;

const myHeader = () => html `<h1> Hi I'm a header </h1>`;

const myFooter = (name) => html `<p> Hi I'm a footer for ${name} </p>`;

render(myHeader(), document.body.querySelector('header')
);

render(myTemplate('lit-html'), document.body.querySelector('section')
);

render(myFooter('lit-html'), document.body.querySelector('footer')
);
