//properties flags
let emp={};
emp.name="Parshwa";
console.log(Object.getOwnPropertyDescriptor(emp,"name"));


Object.defineProperty(emp,"age",{
    value:22,
    writable:false,// the value cannot be change
    configurable:false,//the value cannot be deleted
    enumerable:true//the object will not seen in the list and array.

});
console.log(Object.getOwnPropertyDescriptor(emp,"age"));


//proto 

let obj={
    name:"parshwa",
    age:20
}
let obj2={
    lname:"suresh",
    age:21
}

obj2.__proto__=obj;
console.log(obj2.name);

obj3=Object.create(obj);
console.log(obj.age);


//prototype

function Person(name,age){
 let person =Object.create(Person.prototype)
 person.name=name;
 person.age=age;
 return person
}
Person.prototype.great=function(){
    
        console.log(`Hello ${this.name}`);
    
}


let user =Person("parshwa",21)
console.log(user.great);
user.great();




//OR
function Person2(name,age){
    
    this.name=name;
    this.age=age;
    
   }
   Person2.prototype.great=function(){
       
           console.log(`Hello ${this.name}`);
       
   }
   
   
   let user2 = new Person2("parshwa",21)
   
   user2.great();
   console.log(user2);



   //Class 
   class person{
      constructor(name,age){
        this.name=name;
        this.age=age;
      }

      greet(){
        console.log(`Hello ${this.name}`);
      }
   }
   let user3 = new Person2("parshwa",21)
   
   user2.great();
   console.log(user3);

   //inheritence and static:it only works with that class only

   class animal{
    constructor(name){
        this.name=name;
    }
    speaks(){
        console.log(`${this.name} make a noise` );
    }
    static sing(){
        console.log("hi i am static class");
    }
   }

   class dog extends animal{
    constructor(name){
        super(name);
    }
    speaks(){
        console.log(`${this.name} make a noise` );
    }
   }


   let jungle =new dog("rutu");
   jungle.speaks();

   /// public and private


   class BankAccount{
    #balance=0;

    deposite(amount){
        this.#balance+=amount;
        console.log(`Deposite ${amount},new balance is ${this.balance}`);
    }

    withdraw(amount){
        if (amount>this.#balance) {
            console.log("insuficient balance");
        } else {
            this.#balance-=amount;
            console.log(`Withdraw ${amount},new balance is ${this.balance}`);

        }
    }
   }

   const account=new BankAccount();
   account.deposite(100);
   account.deposite(10000000000);


   //try catch and throw
function d(a,b){
   try {
    if (b==0) {
        throw new Error ("Cant divide by zero");
    }
    let sum =a/b;
    return sum;
    
   } catch (e) {
    console.log(e.message);
   } 
  }

  d(10,0);

  //fetch api

  fetch('myfile.txt')
  .then(responce=>{
    if (!responce.ok) {
        throw new Error ('NETWORK IS NOT RESPONDING');
        
    }
return responce.text();
     
  }).then(data=>console.log(data))
  .catch(error=> console.error(error));