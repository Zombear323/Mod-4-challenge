var quizstart = document.querySelector('button');
var timerstart = document.querySelector('button');
function starttimer(event){
    console.log("test", event)
};
function starquiz(event){
    console.log("test", event)
};
quizstart.addEventListener('click', starquiz, starttimer);



/*

quiz start screen
    >includes basic instructions
    >start button that take you to quiz questions
    >start button that begins timer
quiz questions screen
    >question top text
    >multiple possible answers buttons below question
    >indication of correct or incorrect at the bottom
    >question chages after holding for a moment to show result
    >4-5 questions, 4 choices per Q
    >leads to game over screen if time is out or questions are done
game over screen
    >Game end text
    >input box for score logger
    >submit button that logs inputted text and takes you leaderboard
leaderboard screen
    >can be switched to from any screen via click
    >button that returns to quiz start screen
    >logs game over score with name
    >lists scores from highest to lowest
    
*/