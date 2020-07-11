// let a = 1;
// let b = 2;
// let c = a+b;
// let isShow = true;

// let x = "I am";
// let name = "Neil";
// let concat = `${x} Hi Neil 123` // String Literals

// console.log(concat);
// let sum1 = sum(2,3);
// sum(2,3);

// function sum(y,z){
//     let sum = y + z;
//     console.log(sum);
//     return sum;
// }



// let cars = ["Honda", "Toyota", "Mitsubushi", "Chevy"]
// console.log('Length: ', cars.length)
// for(let i = 0; i < cars.length; i++)
// {
//     console.log(cars[i]);
// }

// for(let i of cars)
// {
//     console.log(i)
// }
// cars.forEach( i => console.log(i))

//document.getElementById('myH2').innerHTML = "Hello"

//Factory Function

function myCars(model) {
    return{
        model,
        something:  function () {
            console.log('factory function')
        }
    }
    
}

const cars = myCars('toyota')
cars.something()

//COnstructor function

function myBus(model) {
    this.model = model,
    this.something = () => {
        console.log('factory function')
    }
}

const bus = new myBus('Honda')
bus.something()

let x = {value: 10}
y = x.value
console.log(x)
x.value = 20