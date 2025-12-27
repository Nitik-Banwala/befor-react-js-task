
/////////////////map//////////////////

const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);

console.log(doubled);

//////////////Filter://///////////////

const nums = [1, 2, 3, 4, 5];

const oddNumbers = nums.filter(num => num % 2 !== 0);

console.log(oddNumbers);

//////////////////////Reduce:///////////

const values = [1, 2, 3, 4, 5];

const sum = values.reduce((total, num) => total + num, 0);

console.log(sum);


////////////////////Find:///////////////

const users = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' }
];

const user = users.find(u => u.id === 2);

console.log(user);



//////////////////Object.keys:////////////////



const obj = { a: 1, b: 2 };

const keys = Object.keys(obj);

console.log(keys);



//////////////////Destructuring:///////////////



const person = { name: 'A', age: 30 };

const { name, age } = person;

console.log(name); 
console.log(age);  




//////////////Spread Operator:////////////////


const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const mergedObj = { ...obj1, ...obj2 };

console.log(mergedObj);


///////////////Arrow Function://///////////////



const add = (a, b) => a + b;

console.log(add(5, 3));

////////////////Callback Function://///////



function doSomething(callback) {
    console.log("Doing something...");
    callback();
}

function myCallback() {
    console.log("Callback executed!");
}

doSomething(myCallback);


//////////////////Closure://////////////////

doSomething(() => {
    console.log("Arrow callback called!");
});


//////////////////Promise://////////////////



const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello World");
    }, 2000);
});

myPromise.then(message => {
    console.log(message);
});


/////////////Async/Await://////////////





function fakeApi() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: "User data loaded" });
        }, 2000);
    });
}

async function fetchData() {
    console.log("Fetching data...");

    const response = await fakeApi();
    console.log(response.data);
}

fetchData();

////////////////Event Listener:////////////




const button = document.getElementById("Btn");

button.addEventListener("click", () => {
    console.log("Button clicked!");
});


///////////////Event Binding://///////////


// import React, { Component } from "react";

// class ClickButton extends Component {
//     constructor(props) {
//         super(props);

//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         console.log("Clicked");
//     }

//     render() {
//         return (
//             <button onClick={this.handleClick}>
//                 Click Me
//             </button>
//         );
//     }
// }

// export default ClickButton;


