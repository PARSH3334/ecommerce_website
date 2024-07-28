/*console.log(2);

let a=9;
console.log(a);

//primitive data types
//1 number
let num=50;
console.log(num);

//2 string
let str="hello world";
console.log(str);

//3 boolean

let bol=true;
console.log(bol);

//4 null

let k=null;
console.log(k);

//5 undefined

let u;
console.log(u);

//non-primitive data types
//1 array

let arr=[1,2,3,4,5];
console.log(arr);
//2 object

let obj={name:"john",age:25};
console.log(obj);

//functions
//1 function declaration

function greet(){
    console.log("hello i am parshwa");
}

greet();

//2 function expression

let greet2=function(){
    console.log("hello i am parshwa");
}

greet2();

// type conversion//
//1 string to number
let str1="10";

let num1=Number(str1);
console.log(num1+5);
//number to string

let num2=20;

let str2=String(num2);
console.log(str2+"hello");


//operators
//1 assignment operator

let x=10;
x+=5;
console.log(x);

//2 arithmetic operators
console.log(2+5);
console.log(2-5);
console.log(2*5);
console.log(2/5);//quiotient
console.log(2%5);//remainder

//3 comparison operators

let d="5";// it will convert it into the 9;
let m=9;

console.log(d==m);
console.log(d>=m);
console.log(d>m);
console.log(d<m);
console.log(d<=m);
console.log(d!=m);

//4 logical operators

let e=true;
let f=false;

console.log(e&&f);
console.log(e||f);

if(e&&f){
    console.log("both true");
}else{
    console.log("both false or one of it is false");
}

//switch case

let parshwa=2;

switch(parshwa){
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    default:
        console.log("default");
        break;
}

//loops
//1.for
let array=[1,3,4,5,6]
for(let i=0;i<array.length;i++){
    console.log(array[i]);
    array.push(10);
}

//2. while

let j=0;
while(j<5){
    console.log(j);
    j++;
}

let array=[2,3,4,"parshwa","hagare"];
console.log(array);
array.splice(1,1,"jain");
console.log(array);

//for each values

array.forEach(function(item,index,array){
    console.log(index,item,array);
});


//another method
let array2=[1,2,3,4,5,6,67,]
array2.forEach((val,item,array)=>{
    console.log(val,item,array);
})


let slicing=array2.slice(2,4);
console.log(slicing);

let map=array2.map(function(val,index,array){
    return val*2 ,array*5;
})

console.log(map);

 let filter=array2.filter((val,index,array)=>{
    console.log(val);
 })

 ///for in and of

 for(let i in array2){
    console.log(i);
 }

 for (let i of array2) {
    console.log(i);
 }

 //multidimentional array
 let array3=[["parshwa",50],["suresh",70],["jain",90]];
 console.log(array3[1][0]);

 for(let i in array3){
    for(k of i){
        console.log(array3[i][k]);
        console.log(k);
        
    }
 }
 //copy and spread

 let array4=[1,2,3,4,5];
 let array5=[...array4];//spread
 let array6=array4.slice(0).concat(["item","harray","peter"]);
console.log(array4);
console.log(array5);
console.log(array6);
//array desitruction
let[item1,item2,...items]=array6;
 console.log(item1);
 console.log(item2);
 console.log(items);

let obj={
    name2:"parshwa",
    age2:20,
    fun2:function(){
        console.log("i am parshwa suresh hagare and my proffesion is to kill the people but write now i am in rest mode ");
    }

}

console.log(obj.age2);
console.log(obj.fun2());

let obj2={...obj};
//fuctions

function fun2(){
    debugger;
    var a=1;
    console.log("i am fun2");
    function fun3(){
        console.log("i am function 3"+a);

    }
    fun3();

}
fun2();


// constructor

function fun8(name){
    this.name=name;
}

let person_name=new fun8("Parshwa");

console.log(person_name.name);

//recursion 

function recursion(n){
    if(n>0){
        total=n*recursion(n-1);
        return total;
    }


}
console.log(recursion(8));

recursion(8);

// async and await

console.log("this");

setTimeout(()=>{
    console.log("i am setTimeout");
},1000)

console.log("is");
setTimeout(recursion(8),1000);

//call back hell;
function laodingdata(){
    return new Promise((resolve, reject) => {
     setTimeout(()=>{
         console.log("1>Loading data.....");
         resolve();
 
     },4000)
    })
     
     
 
 }
 function collectingdata(){
     new Promise((resolve, reject) => {
         setTimeout(()=>{
             console.log("2>COLLECTING DATA.....");
             resolve();
     
         },2000)
     })
     
     
 }
 function approvingdata(){

    new Promise((resolve,reject)=>{
         setTimeout(()=>{
             console.log("3>approving data.....");
             resolve();
    },1000)
    })
     
 }
 function approved(){
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("4>approved data.....");
            resolve();
   },500)
   })
    
     
 }
 
laodingdata().then(collectingdata).then(approvingdata).then(approved).catch((err)=>{
    console.log(err);
})


async function Ex(){ 
    await laodingdata();
    await collectingdata();
    await approvingdata();
        
}

setInterval(add(4),2000)
function add(val){
    val=val+2;

}

setInterval(date,1)
function date(){
    let date=new Date().toLocaleTimeString();
    console.log(date);
}

setTimeout(()=>{
    clearInterval(inter);
},10000)

// call bind apply

function fun11(age,gender){
    console.log(this.fName,age,gender);
}

var obj9={
    fName:"Jhon",
    fun:function(){
        console.log(this.fName);
    }

}

var obj10={
    fName:"parshwa"
}


obj9.fun.call(obj10);

fun11.call(obj10,18,"male");

fun11.apply(obj10,[19,"male"]);
a=fun11.bind(obj9,[12,"Male"]);
console.log (a);//it willshow the function

//proto
let obj={
    name:"parshwa",
    age:20
}

let obj2={
    name2:"suresh",
    age:25
}


obj2.__proto__=obj;
console.log(obj2.name);//it will show parshwa

obj3=Object.create(obj);
console.log(obj.age);

//prototypes

function Person(names,age) {
    let person=Object.create(Person.prototype)
    person.names=names;
    return person
}

Person.prototype.great=function(){
    console.log("hello world");
}

let user=Person("parshwa",21);
console.log(user.great);
user.great();

//class

class Person1{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    getFullName(){
        return this.name+" "+this.age;
    }
}
let user3=new Person("parshwa",21);

console.log(user3.getFullName());

//inheritance
class animal{
    constructor(name){
        this.name=name;
    }
    eat(){
        console.log(this.name+" is eating");
    }
    static sing(){
        console.log("hi i am static class ");
    }

    
}
class dog extends animal{
    constructor(name,bark){
        super(name);
        this.bark=bark;
    }

    speaks(){
        console.log(this.name+" is barking");
    }
}

let jungle=new dog("rutu");

jungle.eat();

class banksAcoount{
    constructor(name,balance){
        this.name=name;
        this.balance=balance;
    }
}


function d(a,b){
    try{
        if(b==0){
            throw new Error("division by zero");
        }
        let sum=a/b;
        return sum;
    }catch(e){
        console.log(e.message);
        return null;
    }
}

d(10,0);
*/
fetch('myfile.txt').then(responce=>{
    if(!responce.ok){
        throw new Error('Network is not responding');
    }
    return responce.text();
})
.then(data=>console.log(data))
.catch(error=>console.error(error));


//

