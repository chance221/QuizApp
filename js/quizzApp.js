'use strict';
/////////////////////////////////////////////////////////////DATA///////////////////////////////////////////////////////////
const APPQUESTIONS = [
    {
        id:1,
        question:`What is the proper temperature of a fully cooked chicken?"`,
        A:`200 degrees fahrenheit`,
        B:`165 degrees fahrenheit`,
        C:`140 degrees fahrenheit`,
        D:`180 degrees fahrenheit`,
        imgSrc: "media/chickenTemp.jpg", 
        alt: "cooked chicken" 
    },

    {
        id:2,
        question:`How many cups in a quart?`,
        A:`4`,
        B:6,
        C:10,
        D:3,
        imgSrc:"media/cupQuart.jpg", 
        alt:"measuring cups"

    },

    {
        id:3,
        question:`What is a safe temperature for pork`,
        A:`190 degrees fahrenheit`,
        B:`150 degrees fahrenheit`,
        C:`165 degrees fahrenheit`,
        D:`145 degrees fahrenheit`,
        imgSrc:"media/pork.jpg", 
        imgAlt:"cooked pork"
    },

    {
        id:4,
        question:`How much time should you let cooked meat rest?`,
        A:`6 minutes`,
        B:`4 minutes`,
        C:`3 minutes`,
        D:`10 minutes`,
        imgSrc:"media/timer.jpg", 
        imgAlt:"cooking timer"
    },

    {
        id:5,
        question:`How long should you cook shrimp?`,
        A:`until flesh is pearly & opaque`,
        B:`6 minutes`,
        C:`until black`,
        D:`just keep cooking it`,
        imgSrc:"media/shrimp.jpg", 
        imgAlt:"cooked shrimp"
    },

    {
        id:6,
        question:`Which one of the these ingredients goes into a roux?`,
        A:`Butter`,
        B:`Broth`,
        C:`Water`,
        D:`Cheese`,
        imgSrc:"media/roux.jpg", 
        imgAlt:" cooked roux"
    },

    {
        id:7,
        question:`What what temperature is steak cooked to medium?`,
        A:`170-175 degrees fahrenheit`,
        B:`120-125 degrees fahrenheit`,
        C:`155-160 degrees fahrenheit`,
        D:`145-150 degrees fahrenheit`,
        imgSrc:"media/steak.jpg", 
        imgAlt:"cooked steak"
    },

    {
        id:8,
        question:`How many teaspoons in a tablespoon?`,
        A:2,
        B:`3`,
        C:6,
        D:4,
        imgSrc:"media/teaspoon.jpg", 
        imgAlt:"measuring spoons"
    },

    {
        id:9,
        question:`What does it mean to "julienne"?`,
        A:`To cut stuff up nice`,
        B:`To chop into blocks evenly`,
        C:`To cut into thin match-like sticks about 2 inches long`,
        D:`To slice into fine rectangles 3 about inches long`,
        imgSrc:"media/julienne.jpg", 
        imgAlt:"chopping board"
    },

    {
        id:10,
        question:`What does it mean to sear?`,
        A:`To boil`, 
        B:`To slow cook over extended periods of time`,
        C:`To fry`,
        D:`To brown food quickly on all sides using high heat`,
        imgSrc:"media/sear.jpg", 
        imgAlt:"seared scallops"
    }


]

const APPANSWERS = [
    `165 degrees fahrenheit`,
    `4`,
    `145 degrees fahrenheit`,
    `3 minutes`,
    `until flesh is pearly & opaque`,
    `Butter`,
    `155-160 degrees fahrenheit`,
    `3`,
    `To cut into thin match-like sticks about 2 inches long`,
    `To brown food quickly on all sides using high heat`,
]

/////////////////////////////////////////////////////////////DATA End///////////////////////////////////////////////////////////


////////////////////////////////////////////// Variables///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let totalQuestions = 10;
let correctAnswers = 0;
let currentQuestionNumberIndex = 0;
let questionNumber = (currentQuestionNumberIndex + 1);

/////////////////////////////////////////////////////////////Variables End///////////////////////////////////////////////////////////



////////////////////////////////////////Functions///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function quizzStart(){
    $('.js-start').click(function(){
        console.log("starting quiz");
        
        nextQuestion();
    });
}

function nextQuestion(){
    
    console.log('running next question');
    $('.quizz-space').empty();
    const question = APPQUESTIONS[currentQuestionNumberIndex];

    const questionsAnswered = currentQuestionNumberIndex;

    $('.quizz-space').html(questionTemp(question, correctAnswers, questionsAnswered));
}

function questionTemp(questions, correctAnswers, questionsAnswered){
    
    console.log('running questionTemp');
    
    return`
    <img  class="questionImage" src=${questions.imgSrc} alt=${questions.imgAlt}>
    <form class="quizz-app-form">
        <fieldset name = "question-and-answer">
            <legend class="questions">Question ${questions.id} of 10</legend>
            
                <h2>${questions.question}</h2> 
                <label>
                    <input type ="radio" name="answer-list" id="A" value="" checked="checked"> A.<span>${questions.A}</span>
                </label><br><br>
                <label>
                    <input type ="radio" name="answer-list" id="B" > B.<span>${questions.B}</span>
                </label><br><br>
                <label>
                    <input type ="radio" name="answer-list" id ="C" > C.<span>${questions.C}</span>
                </label><br><br>
                <label>
                    <input type ="radio" name="answer-list" id ="D" > D.<span>${questions.D}</span>
                </label><br><br>
                <div class = "answer-submit">
                    <button class= "answer-submit-btn js-answer-submit-btn" type="submit">
                        <span class="btn-label">Check Answer</span>
                    </button>
                </div>
                <div class="answer-space"> 
                    <p>${correctAnswers} out of ${questionsAnswered} answers correct so far</p>
                </div>
        </fieldset>
    </form>`
}

function itterateScore(){
    ++correctAnswers;
    console.log('score itterated');
}


function itterateQuestions(){
    ++currentQuestionNumberIndex;
    console.log('Question Index Itterated');
}

function checkAnswer(answer) {
    
    console.log('checking answer')

    if(answer.text() === APPANSWERS[currentQuestionNumberIndex]){
        return true;
    } else {
        return false;
    }
}

function handleSubmit(correctAnswers, question, questionsAnswered){
    
    console.log('running check answer')

    $('.quizz-space').on('click', '.js-answer-submit-btn', function(event){

        event.preventDefault();

        const answer = $('input:checked').siblings('span');

        const rightAnswer = checkAnswer(answer);
        
        if(rightAnswer){
                generateCorrectMessage();
                itterateScore();
                itterateQuestions();
        } else{
                generateIncorrectMessage(); 
                itterateQuestions();
        }
    })
}

function handleNextClick(){
    $('.quizz-space').on('click', '.js-next-btn', function(event){
        
        console.log('next click registered');

        if(currentQuestionNumberIndex < totalQuestions){
            nextQuestion();
        } else {
            generateResultsPage(correctAnswers, totalQuestions);    
        }
    })
}

function generateCorrectMessage(){
    
    console.log("correct answer running");

    $('.quizz-space').html(correctAnswerTempelate);
}

function generateIncorrectMessage(){
    
    console.log("incorrect answer running");

    $('.quizz-space').html(incorrectFeedbackTemplate(currentQuestionNumberIndex));
    
}

function generateResultsPage(correctAnswers, totalQuestions){
    console.log("generating results running");
    
    resetQuiz(); 
    
    let resultsPercentage = correctAnswers/totalQuestions;

    if(resultsPercentage >= .7){
        $('.quizz-space').html(passedTempelate);
    } else{
        $('.quizz-space').html(failTempelate); 
    }

    return resultsPercentage;
}

function resetQuiz(){
    $('.quizz-space').on('click', '.js-reset-btn', function(event){
        currentQuestionNumberIndex = 0;
        correctAnswers = 0;
        nextQuestion();
    })
}

const passedTempelate =
`<section class="feedback-page" role="main">
    <h2>Great Job! You are well on your way to becomming a master in the Kitchen but feel free to take the quiz again</h2>
    <img class = "feedbackImage" src="media/congrats.jpg" alt="congratulations meme">
    <div class = "nextBtnSection">
        <button class="js-reset-btn">Restart Quiz</button>
    </div>    
</section>`;

const failTempelate = 
`<section class="feedback-page" role="main">
    <h2>Not quite a master chef yet but you are well on your way! Keep leaning by taking the quiz again</h2>
    <img class = "feedbackImage" src="media/fail.jpg" alt="matthew mcconaughey meme">
    <div class = "nextBtnSection">
        <button class="js-reset-btn">Restart Quiz</button>
    </div>
</section>`;

const correctAnswerTempelate =
`<section class="feedback-page" role="main">
    <h2>Correct!</h2>
    <img width="400" class = "feedbackImage" src="media/correct.jpg" alt="success fist pump baby">
    <div class = "nextBtnSection">
        <button class="js-next-btn">Next Question</button>
    </div>
</section>`;

function incorrectFeedbackTemplate(currentQuestionNumberIndex) {
    return `
      <section class="feedback-page" role="main">
        <img width="400" height="400" class = "feedbackImage" src="media/incorrect.jpg" alt="incorrect meme showing a cat wearing a tophat">
        <h2>Whoops! Looks like the answer was ${APPANSWERS[currentQuestionNumberIndex]}.</h2>
        <div class = "nextBtnSection">
            <button class="js-next-btn">Next Question</button>
        </div>
      </section>`;
  }

function quizzAppFlow(){
    quizzStart();
    handleSubmit();
    handleNextClick()
}


quizzAppFlow();