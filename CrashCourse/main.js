/*
alert();
console.log(); console.warn(); console.error();
*/

/* Declare variable: var(globally scope),let - reassign value , const */
let score;
score = 21;
//console.log(score);

/*Data Types: String, Numbers, Boolean, null, undefind, Symbol and object */
const s = 'Ayush';
const age = 30;
const rating = 4.5;
const iscool = true;
const x  = null; //return 0/null -> garbage object
const y = undefined;
let z;

/*------------Concatenation--------------*/
//console.log('my name is '+s+' and i am '+age);
const hello = `my name is ${s} and i am ${age}` //template literals method
//console.log(hello); 

/*-------------String--------------------*/
//console.log(s.length,  s.substring(0,2).toUpperCase(), s.split(''));

/*Arrays*/
const number = new Array(1,2,3,4,5);
const fruits = ['apple', 'oranges', 10, true]
fruits[3] = 'grapes';
fruits.push('mangos');
fruits.unshift('strawberries') //unshift add data at 0th index and shift remove
//fruits.pop()
// console.log(fruits);
// console.log(Array.isArray(fruits));
// console.log(fruits.indexOf(10));

/*------------Object--------------------*/

const person = {
    firstName: 'ayush',
    lastName: 'rajgor',
    age:20,
    hobbies: ['reading', 'music'],
    address:{
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
const {firstName, lastName, address: {city}} = person
//console.log(person.address.city);
// console.log(person.hobbies[1]);
// console.log(city);
person.email = 'ayush@gmail.com'

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
]
//console.log(todos[1].text);

const todoJSON = JSON.stringify(todos); // convert into JSON

const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }
//console.log(myObj.cars[1].models[0]) // 320

const fruits1 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);


//console.log(fruits1.get("apples"))
//console.log(fruits1.has("apples")) //return true
/*-------------for, While-------------------*/
for (let i = 0; i < todos.length; i++) {
    //console.log(todos[i].text);
}
for(let todo of todos){
    //console.log(todo.id);
}

/*------------forEach, map, filter---------------*/
todos.forEach(function(todo){
 //console.log(todo.text);
})

const todoText = todos.map(function(todo){
    return todo.text; //return text array to todoText
})
//console.log(todoText);

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text; //retun text which only completed is true
})
//console.log(todoCompleted); 

/*--------if----------*/

const b = '10';
if(b == 10){ /*console.log(true)*/; } //true
if(b === 10){ console.log(true); } //flase,check for datatype, num != string
// normal if else, else if statement
// and:&&, or:||

/*-------ternary operator---------*/
const t = 0
const color = t > 1 ? 'red':'blue'
//console.log(color); //print red

// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('no color');
// }

/*----------------function--------------*/

function addNums(num1, num2){                 // (num1=1,num2=1) <- can assgin default value 
    return("number is", num1+num2, "okay");
}
console.log(/*addNums(1,2)*/);

const addNum = (num1, num2) => num1+num2;
console.log(/*addNum(2,3)*/);
todos.forEach((todo)=> console.log(/*todo.text*/))



/*------*****--------OOP-------*****------- */

function Person(firstName, lastName, dob){
    this.firstName =firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear  = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}
const person1 =new Person('Ayush','Rajgor','02-25-2002');
//console.log(person1.dob.getFullYear())
//console.log(person1.getFullName())

Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
} 
// console.log(person1.getFullName())
// console.log(person1)


class persons {
    constructor(firstName, lastName, dob){
        this.firstName =firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

const persons1 =new persons('Ayush','Rajgor','02-25-2002');

/*---------------------------DOM-------------------------*/

//console.log(window)

//Single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

// Multiple element
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

const item = document.querySelectorAll('.item')

item.forEach((item => console.log(/*item*/)))

// const ul = document.querySelector('.items')
// ul.lastElementChild.remove()
// ul.firstElementChild.textContent = 'hello'
// ul.children[1].innerText = 'world'
// ul.lastElementChild.innerHTML = '<h1>Okay</h1>'


const btn = document.querySelector('.btn')
btn.style.background ='#437'


// btn.addEventListener('click', (e) =>{
//     e.preventDefault()
//     console.log(e.target)
//     document.querySelector('#my-form').style.background = '#ccc'
//     document.querySelector('body').classList.add('bg-dark')
//     document.querySelector('.items')
//     .lastElementChild.innerHTML= '<h1>hELLO</H1>'
// })

const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit)
function onSubmit(e){
    e.preventDefault();
    console.log(nameInput.value)
    if(nameInput.value === '' || emailInput === ''){
        //alert('Please enter fields')
        msg.classList.add('error')
        msg.innerHTML = 'Please enter fields'
        setTimeout(()=> msg.remove(), 3000)
    }else{
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`))
        userList.appendChild(li)
        console.log('success')
        nameInput.value = ''
        emailInput.value = ''
    }
}

