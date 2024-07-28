var a=document.getElementsByTagName('li');
console.log(a);

var b=document.getElementsByClassName('Male');
console.log(b);

var c=document.getElementById('sigma');
console.log(c);

var d=document.querySelector('.qs');
console.log(d);
 
var e=document.querySelectorAll('.qs');
console.log(e);


//sibling

console.log(document.querySelector('.female').previousElementSibling)



var a=document.querySelectorAll('.female');
a.forEach(element => console.log(element.previousElementSibling)
    
);

//append child

const ul=document.querySelector('ul');
const newe=document.createElement('li');
newe.textContent="Parshwa";
ul.appendChild(newe);

const ul7=document.querySelector('ul');
const newes=document.createElement('li');
newes.textContent="My love";
ul.append(newes);


//remove

const ul2=document.querySelector('.Male');
ul2.remove();


//replace child 

const list= document.querySelector('ul');

const childtochange=list.children[1];

const newli=document.createElement('li');
newli.textContent='this is begining'
list.replaceChild(newli,childtochange);

//Parent node
var Parent=document.querySelector('html');
var p=Parent.parentElement;
console.log(p);

var Parent=document.querySelector('html');
var q=Parent.parentNode;
console.log(q);
// precious silbling

var k=document.querySelector(".female");
console.log(k.previousElementSibling);

var k=document.querySelector(".female");
console.log(k.previousSibling);


// next sibling

var n=document.querySelector(".female");
console.log(k.nextElementSibling);

// first child
var fchild=document.querySelector('ul');
console.log(fchild.firstChild);


var fchild=document.querySelector('ul');
console.log(fchild.firstElementChild);


// last Child
var lchild=document.querySelector('ul');
console.log(lchild.lastChild);


var lchild=document.querySelector('ul');
console.log(lchild.lastElementChild);


/// INNNER text

var a=document.querySelector('h1').innerText;
console.log(a);


var s=document.querySelector('h1').textContent;
console.log(s)

// insert the element

var target=document.querySelector('.hero');
var newE='<b> PARSHWA HAGARE </b>';
target.insertAdjacentHTML('beforebegin',newE)

///innner Html
let inner= document.querySelector('.hero');
console.log(inner);
inner.innerHTML+='<i>PARSHWA JAIN </i>'
console.log(inner.innerHTML);

//outer html
let outer=document.querySelector('.hero');
console.log(outer);
outer.outerHTML+='<i>seju parshwa hagare </i>';
console.log(outer.outerHTML);


//style in dom

document.body.style.backgroundColor="pink";

let h=document.querySelector('h1');
h.style.color="orange";
h.style.border="2px solid black";

//get and set attributes 

let hero =document .querySelector('.hero');
console.log(hero.getAttribute('about'));

hero.setAttribute("example",121);
console.log(hero.outerHTML);