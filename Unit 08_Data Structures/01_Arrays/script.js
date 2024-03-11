const numbers = [7, 5, 9, 75, 97, 79];

for(let i = 0; i < 10; i++){
    let num = Math.floor(Math.random() * 10) + 1;
    numbers.push(num);
}

document.getElementById("unsorted").innerHTML = numbers;

numbers.sort(function(a, b){return a - b});
document.getElementById.innerHTML =
//YOUDO:  finish the sort and print to the sorted id

