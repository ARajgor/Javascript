// //console.dir(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// document.title = 123
// console.log(document.head)
// //console.log(document.all)
// console.log(document.forms[0])
// console.log(document.link)
// console.log(document.images)


//--------------GETELEMENTBYID-----------------
// let headerTitle = document.getElementById('header-title')
// let header = document.getElementById('main-header')
// console.log(headerTitle)
// headerTitle.textContent = 'hello'
// headerTitle.innerText='goodbye' //consider style 
// console.log(headerTitle.textContent) //Item lister 123
// console.log(headerTitle.innerText) //Item lister 
// headerTitle.innerHTML = '<h3>Hello</h3>' //add inside html
// header.style.borderBottom = 'solid 3px #000'

//-----------------GETELEMENTBYCLASSNAME---------------------
// let items = document.getElementsByClassName('list-group-item')
// console.log(items[1])
// items[1].textContent = 'hello2'
// items[1].style.backgroundColor = 'grey'

// items.style.backgroundColor = 'grey' //Gives error

// for (let i=0; i<items.length; i++){
//     items[i].style.backgroundColor = 'grey'
// }

//----------------GETELEMENTBYTAG-------------------------
// let li = document.getElementsByTagName('li')
// console.log(li[1])
// li[1].textContent = 'hello 2'
// li[1].style.backgroundColor = 'grey'

// for (let i=0; i<li.length; i++){
//     li[i].style.backgroundColor = 'grey'
// }

//---------------------QUERYSELECTOR-----------------------
// let header = document.querySelector("#main-header")
// header.style.borderBottom = 'solid 4px red'

// let input = document.querySelector('input')
// input.value  = 'hello world'

// let submit = document.querySelector('input[type="submit"]')
// submit.value="SEND"
// let items = document.querySelector('.list-group-item')
// items.style.color = 'red'
// let last = document.querySelector('.list-group-item:last-child')
// last.style.color = 'blue'
// let sec = document.querySelector('.list-group-item:nth-child(2)')
// sec.style.color = 'green'

//--------------------QUERYSELECTORALL--------------------------  //select elements by ID, class, or any other

// let titles = document.querySelectorAll('.title')
// console.log(titles)

// let odd  = document.querySelectorAll('li:nth-child(odd)')
// let even  = document.querySelectorAll('li:nth-child(even)')
// for (let i =0; i< odd.length; i++){
//     odd[i].style.backgroundColor = "#f4f4f4"
//     even[i].style.backgroundColor = "#ccc"
// }

//-------------------TRAVERSING DOM----------------------
//let itemList = document.querySelector('#items')
//parentNode
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentNode.parentNode)
//parentElement
// console.log(itemList.parentElement)
// itemList.parentNode.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentNode.parentNode)

//ChildNode
// console.log(itemList.childNodes) // contain line-break as text
// console.log(itemList.children[1]) // only list
// itemList.children[1].style.backgroundColor = 'yellow'

//FirstChild
// console.log(itemList.firstChild)
// //firstElementChild
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent = 'hello 1'

//lastChild
// console.log(itemList.lastChild)
// //firstElementChild
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent = 'hello 4'

//nextSibling
// console.log(itemList.nextSibling)
//nextElementSibling
// console.log(itemList.nextElementSibling)

//previousSibling
// console.log(itemList.previousSibling)
//previousElementSibling
// console.log(itemList.previousElementSibling)

// createElement

// Create a div
// let newDiv = document.createElement('div')
//Add class
// newDiv.className = 'hello'
//Add id
// newDiv.id = 'hello1'
// newDiv.setAttribute('title', 'hello div')

//create text node
// let newdivtext = document.createTextNode('hello world')
//add text to div
// newDiv.appendChild(newdivtext);
// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');

// console.log(newDiv);
// newDiv.style.fontSize = '30px'
// container.insertBefore(newDiv, h1); 


// let button = document.getElementById('button').addEventListener
// ('click', buttonClick);
// function buttonClick(e){
//     // console.log('button clicked')
//     // document.getElementById('header-title').textContent= 'Changed'
//     // document.querySelector('#main').style.backgroundColor = '#f4f4f4'
//     // console.log(e);
//     // console.log(e.target.id)
//     // console.log(e.target.classList) 
//     // let output = document.querySelector('#output')
//     // output.innerHTML = '<h3>'+e.target.id +'</h3>'

//     // console.log(e.type)
//     // console.log(e.clientX) //from window
//     // console.log(e.offsetX) //actual element itself

//     // console.log(e.altKey) //if alt press then return true (alt,ctrl,shift)


// }
// let button = document.getElementById('button')
// let box = document.getElementById('box')
//addEventListener('click', runEvent);
//addEventListener('dblclick', runEvent);
// addEventListener('mousedown', runEvent); //when hit mouse
// addEventListener('mouseup', runEvent); //hold to lift the click

// box.addEventListener('mouseenter', runEvent); //not count inner element
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover',runEvent) //any inner element
// box.addEventListener('mouseout',runEvent)

// ?box.addEventListener('mousemove', runEvent)

let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');
let select = document.querySelector('select')

// itemInput.addEventListener("keydown", runEvent)
// itemInput.addEventListener("keyup", runEvent)
// itemInput.addEventListener("keypress", runEvent)
// itemInput.addEventListener("blur", runEvent)

// itemInput.addEventListener('cut', runEvent)
// itemInput.addEventListener('paste', runEvent)

//itemInput.addEventListener('input', runEvent)

// select.addEventListener('change', runEvent) //change and input both chale

form.addEventListener('submit', runEvent)
function runEvent(e){
    e.preventDefault()
    console.log('EVENT TYPE: '+ e.type)
    //console.log(e.target.value)
    //document.getElementById('output').innerHTML= '<h3>'+e.target.value+'</h3>'
    // console.log('EVENT TYPE: ' +e.type)
    // output.innerHTML = '<h3>MouseX: '+ e.offsetX+ '</h3><h3>MouseY:'+ e.offsetY+'</h3>';

    // box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",125)"


}