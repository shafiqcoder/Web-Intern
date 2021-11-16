console.log("It works");
const item = document.querySelector(".item");
item.innerHTML = `<h1>How are you?</h1>`;

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `cute pup`;
const myHtml = `
<div class="wrapper>
<h2>cute${desc}</h2>
<img src="${src}" alt="${desc}"/>
</div>
`;
//here myHtml is a string,

console.log(myHtml.classList);
item.innerHTML = myHtml;
const itemImage = document.querySelector(".wrapper img");
itemImage.classList.add("round");
//turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHtml);
document.body.appendChild(myFragment);

/*

Warning! A potential security loopholes
If a userinput is some html ,it will render as DOM element and it can change DOM.it can be script tag where a user can use JS functionality to hack something.JS should not be allowed to user it only be allowed by developer and from approved parties like Google analytics.It is also called XSS.
Cross-site scripting is a type of security vulnerability that can be found in some web applications. XSS attacks enable attackers to inject client-side scripts into web pages viewed by other users. A cross-site scripting vulnerability may be used by attackers to bypass access controls such as the same-origin policy.

const input= `cute pup <h1> LOVE THIS GUY</h1><style>* {display:none;}</style>`;
or 
const input= `<img onload="alert("HACKED")"/>`
output will be blank page, i

*/
