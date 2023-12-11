let questions = document.querySelectorAll(".accordion__item h3");
let answers = document.querySelectorAll(".accordion__item p");

// hide all the answer except clicked one
let answerArray = [...answers];
function hideAllAnswer(inputIndex) {
    answerArray.forEach((value, ind) => {
        if (ind != inputIndex) {
            value.classList.remove("open");
        }
    });
}

// open answer when click the question
let questionsArray = [...questions];
questionsArray.forEach((value, ind) => {
    value.addEventListener("click", function (event) {
        // hide all answer except clicked
        hideAllAnswer(ind);
        answerArray[ind].classList.toggle("open");
    });
});
