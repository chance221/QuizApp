'use strict';

const APPQUESTIONS = [
    {
        id:1,
        question:`What is the proper temperature of a fully cooked chicken?"`,
        A:`200 &#176`,
        B:`165 &#176`,
        C:`140 &#176`,
        D:`180 &#176`,
        imgSrc: "media/chickenTemp.jpg", 
        alt: "cooked chicken" 
    },

    {
        id:2,
        question:`How many cups in a quart?`,
        A:4,
        B:6,
        C:10,
        D:3,
        imgSrc:"media/cupQuart.jpg", 
        alt:"measuring cups"

    },

    {
        id:3,
        question:`What is a safe temperature for pork`,
        A:`190 &#176`,
        B:`150 &#176`,
        C:`165 &#176`,
        D:`145 &#176`,
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
        A:`Until flesh is pearly & opaque`,
        B:`6 minutes`,
        C:`Until black`,
        D:`Just keep cooking it`,
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
        A:`170-175 &#176`,
        B:`120-125 &#176`,
        C:`155-160 &#176`,
        D:`145-150 &#176`,
        imgSrc:"media/steak.jpg", 
        imgAlt:"cooked steak"

    },

    {
        id:8,
        question:`How many teaspoons in a tablespoon?`,
        A:2,
        B:3,
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
    `165 &#176`,
    4,
    `145 &#176`,
    `3 minutes`,
    `Until flesh is pearly & opaque`,
    `Butter`,
    `155-160 &#176`,
    3,
    `To cut into thin match-like sticks about 2 inches long`,
    `To brown food quickly on all sides using high heat`,
]


// What needs to happen?

// 1.Need a variable to keep track of question number, the correct answers and the final score
//2. need to set tempelate for the question HTML (including what question the user is on)
//3. Need to set tempelate for the correct answers (need to show current and final score)
//4. Need to set tempelate for opening screen (give basic reasoning for app and instructions)
//5. Need to set tempelate for closing results screen.(including an option to start over toggle restart div class to un-hide)
//6. Need to write a function to check on the answers. (function needs to give feedback to current correct answer and current score)
//7. Need to write a function to render the correct content to the screen. (Cannot allow users to go back or restart until the end)
//8. 

//still need to make sure string literals are updated
function questionTemp(questions, answers, questionsAnswered){
    return
    `<form class="quizz-app-form" action="/some-server-endpoint" method="post">
    <fieldset name = "question-and-answer">
        <legend class="questions">Question 1 of 10</legend>
        <label for="question">
        <h2>What is the proper temperature of a fully cooked chicken?</h2> 
                <input type ="radio" name="answer-list" id="A" > A. 200 &#176 <br>
                <input type ="radio" name="answer-list" id="B" > B. 165 &#176 <br>
                <input type ="radio" name="answer-list" id ="C" > C. 200 &#176 <br>
                <input type ="radio" name="answer-list" id ="D" > D. 200 &#176 <br>
        </label>
        <div class = "answer-submit">
            <button class= "answer-submit-btn js-answer-submit-btn" type="submit">
                <span class="btn-label">Check Answer and Move to Next Question</span>
            </button>
        </div>
        <div class="answer-space"> 
            <p>0 out of 0 answers correct so far</p>
        </div>
        <div class = "restart js-restart hide">
            <button class= "restart-btn js-restart-btn">
                    <span class="btn-label">Restart Quiz</span>
            </button>
        </div>
    </fieldset>
</form>`
}