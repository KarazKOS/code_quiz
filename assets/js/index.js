/* PsuedoCode:
A. When a user clicks "start" (Click event listener)
    1. The timer (#timer) starts and is displayed at the top of the page
      -variable for time (global)
      -function for time decrement 
      -display "none" for #intro content
    2. The first question (#question) and selection of choices (#choice 1-4) with selectable buttons is displayed below the timer (#content)
      -Loop (randomized) for questions array
      -variable to hold user answer
B. When the user selects an answer
    1. The answer is stored and compared to questions.a 
     - var for user answer
     -IF the user answer === questions.a
      -- #answerCheck informs user of correct answer
      -- The time continues on same decrement
      -- The user's score (var for score - should be global) increases
      -- The next question is displayed (uses loop for question array)
     -IF the user answer !== questions.a
      -- #answerCheck informs user of incorrect answer (and informs them of correct answer)
      -- The timer loses 10 sec off the clock 
      -- The user's score is unchanged
      -- Next question is displayed (uses loop for question array)
C.a. When the timer hits 0:
    1. No more questions are displayed
    2. The users' score is displayed (#scoreText)
    3. The user can enter their intitials (#initials) next to thier score
      --This high score information is stored locally when user hits submit button (#submit)
C.b. When there are no questions left, but there is time left on the clock:
    1. No more questions are displayed
    2. The users' score is displayed (#scoreText)
    3. The user can enter their intitials (#initials) next to thier score
      --This high score information is stored locally when user hits submit button (#submit)*/

// Global Variables
