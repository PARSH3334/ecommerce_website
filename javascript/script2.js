let arr=[10,20,30,40,50];
for(let f in arr){
    console.log(arr[f])
}

//here for in  will print the index and for of will print the the values

for(let f of arr){
    console.log(f)
}

//multidimentional array
let arr2=[["jhon30",50],["parshwa",22],["harsh",33]]
console.log(arr[1][0]);

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        console.log(arr[i][j]);
    }
}
//or
for (let i of arr) {
    for(k of i){
        console.log(arr[i][k]);
        console.log(k);
    }
}


// copy and spread in arrays.
let arrd=[10,20,30,40,50];
let arrs=arrd.slice(0).concat(["items","harry","peter"]);
let arrf=[...arrd]

arrs.push(88);
//array distruction
let arrays=["thomos","chad","neo","bala"] 
let[item1,item2,...items]=arrays;
console.log(item1);
console.log(item2);
console.log(items3);


//objects

let obj={
    username:"PARSHWA",
    age:21,
    fun:function(){
        console.log("i am blog");
    }
}

console.log(obj.age)
console.log(obj.username);
obj.key="items";
let a="key2";
obj[a]="items2";

for(let i in obj){
    console.log(obj[i]);
}

for(let i in Object.keys(obj)){
    console.log(obj[i]);
}

//OBJECT IN ARRAY
let arrw=[{user:1,names:"tate"},{user:2,names:" thomas"},{user:3,names:"chad"}];

for(let i of arr){
    console.log(i.names)
}

let [items1,items2]=arrw;
console.log(item1);
console.log(items2);

let [{names},{names:name2}]=arrw;
console.log(names);
console.log(name2);



//function and lexical scope and debugger
function fun() {
    debugger;
    var a=1
    console.log("i am function");
    function fun2() {
        console.log("i am function 2"+a);//lexical scope:- it will check either that variable is in that function scope or not then it will find it in next function.
        
    }
    fun2();
    
}

fun();


//sets
const s=new Set([10,20,30,40,50,30,20]);
s.add(90);
s.length();// not works


///MAPS

const m=new Map();
m.set("key1","value1");
m.set("key2","value2");
m.set("key3","value3");
m.set("key4","value4");
m.get("keys1");

var map1=new Map([[1,"one"],["fname","mouse"]])
console.log(map1.get("fname"));

var k=m.keys();
for(var key of k){
    console.log(key);  
}










