let number = 100;

if (number < 50) {
    alert('ნაკლლებია 50_ზე')
} if (number > 20)  {
    alert('მეტია 20_ზე')
} else {
    alert('error')
}



let firstname = 'მარიამ'

if (firstname) {
    alert('true')
} else {
    alert('false')
}

switch (firstname) {
    case "მარიამ":
        alert('true')
        break;
    default:
        alert('false')
        break;
}

let numb = 10

console.log(typeof numb)

let stringNumb = numb.toString()

alert(stringNumb)

console.log(typeof stringNumb)