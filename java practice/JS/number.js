let number = Number(prompt("enter a number"));

function numberchecker(n) {
    if(n >= 10)
        return true;
    else
        return false;
}

let answer = numberchecker(number)
console.log(answer);
alert(answer);