let obj={
    username:"PARSHWA",
    age:21,
    fun:function(){
        console.log(this.username);
    }
}
obj.fun();


//new //constructures
function username( name){
    this.name=name;
}

let person =new username("Parshwa");
console.log(person.name);

//SYMBOLS ARE ALWAYS AN UNIQUE IDENTIFIRE THEY ARE HIDDEN PROPERTIES

let sym=Symbol("id");
console.log(sym.toString());

let obj3={
    name:"parshwa",
    age:20
}
obj[id]=1;
console.log(obj);


///recursion 


function recursion(n){

    if(n<10){
    recursion(n)
    console.log(n);
    n++;

}

}

recursion(4);


//factorial of 5

function factorial(n){
    if(n>0){
    total=n*factorial(n-1);}
    return total
}

console.log(factorial(7));

///ASYNCHRONOUS JAVASCRIPT

//JS IS SYNCHRONOUS :- in which the process is work one by one.
console.log("this");

setTimeout(()=>{
    console.log("ASynchoronous");
},5000)

console.log("is");

setTimeout(factorial(3),3000);

// callback when one function acll another fuction as an arguments

function call(val){
    console.log(val);
}

function add(a,b,callback) {
    let sum=a+b;
    callback(sum);
}

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
    console.log("3>approving data.....");
    
}
function approved(){
    console.log("4>approved ");
    
}
// callbackhell
/*
laodingdata(function(){
    collectingdata(function(){
        approved();
        approvingdata();
    })
});
collectingdata();
approvingdata();
approved();*/


laodingdata().then(collectingdata).then(approvingdata).catch((err)=>{
    console.log(err);
})

//async await
async function Ex(){ 
    await laodingdata();
    await collectingdata();
    await approvingdata();
        
}
Ex.catch((err)=>{
    console.log(err)
})


//set interval and clear interval

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


obj9.fun.call(obj9);

fun11.call(obj9,10,"male");

fun11.apply(obj9,[12,"Male"]);

a=fun11.bind(obj9,[12,"Male"]);
console.log(typeof a);//it willshow the function





