class flashcard {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
    }
}
let inputQ = document.getElementById("inputQ");
let inputA = document.getElementById("inputA");
// Declare a new array
let quiz = [];
// Create three questions
quiz.push(new flashcard('Do you love sports?', 'Yes'));
quiz.push(new flashcard('What is your favorite sport?', 'Badminton'));
quiz.push(new flashcard('Are you professional?', 'Yes'));

let sequence = -1;
//Add a listener 
document.getElementById('inputQ').onclick = function () {
    back.innerHTML = quiz[sequence].answer;
}

function next() {
    sequence = (sequence + 1);
    inputQ.innerHTML = quiz[sequence].question;
    inputA.innerHTML = "";
}
function previous() {
    if (sequence > -1) {
        sequence = (sequence - 1);
    } else if (sequence == -1) {
        sequence = quiz.length - 1;
    }
    inputQ.innerHTML = quiz[sequence].question;
    inputA.innerHTML = "";
}