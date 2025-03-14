// Code your solutions in this file
function writeCards(names, event) {
    const newArray = []; 

    for (let i = 0; i < names.length; i++) { 
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        newArray.push(message); 
    }

    return newArray; 
}

const messages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
console.log(messages);


function countDown(){
    let num =10
    while (num >=0){
        console.log(num)
        num--
        
    }
}
countDown()