


const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);

console.log(doubled);



const nums = [1, 2, 3, 4, 5];

const oddNumbers = nums.filter(num => num % 2 !== 0);

console.log(oddNumbers);



const values = [1, 2, 3, 4, 5];

const sum = values.reduce((total, num) => total + num, 0);

console.log(sum);




const users = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' }
];

const user = users.find(u => u.id === 2);

console.log(user);




const obj = { a: 1, b: 2 };

const keys = Object.keys(obj);

console.log(keys);







const person = { name: 'A', age: 30 };

const { name, age } = person;

console.log(name); 
console.log(age);  







const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const mergedObj = { ...obj1, ...obj2 };

console.log(mergedObj);






const add = (a, b) => a + b;

console.log(add(5, 3));





function doSomething(callback) {
    console.log("Doing something...");
    callback();
}

function myCallback() {
    console.log("Callback executed!");
}

doSomething(myCallback);





doSomething(() => {
    console.log("Arrow callback called!");
});






const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello World");
    }, 2000);
});

myPromise.then(message => {
    console.log(message);
});






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




const button = document.getElementById("Btn");

button.addEventListener("click", () => {
    console.log("Button clicked!");
});



