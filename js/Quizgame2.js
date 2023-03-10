let score = 0;
prompt (`WELCOME TO THE SDGS QUIZ
         press ok`);  
prompt (`LET'S GET STARTED
         press ok`);
let ans1 = prompt (`Q.1 When is the earth day celebrated worldwide ?
                   a. 9th december
                   b. 12th march
                   c. 22th april`);
if (ans1 === "c") 
{
    prompt (`Correct answer`,'press ok');
    score++;
    prompt (`Your score is: ` + score, 'press ok');
   
} 
else 
{
        prompt (`Oops wrong answer,better luck next time`,'press ok to continue');
}
let ans2 = prompt (`Q.2 what is the goal of life below water ?
        a. To able to live underwater by 2040
        b. To protect marine and costal region from significant damage 
        c. To understand about water`);
if (ans2 === "b") 
{
        prompt (`Correct answer`,'press ok');
  score++;
  prompt (`Your score is: ` + score, 'press ok');
  
} 
else 
{
        prompt (`Oops wrong answer,better luck next time`,'press ok to continue');
}
let ans3 = prompt (`Q.3 when is water day celebrated worldwide ?
                    a. 22nd march 
                    b. 14th april 
                    c. 8th march`);
if(ans3 === "a")
{
        prompt (`Correct answer`,'press ok');
    score++;
    prompt (`Your score is: ` + score, 'press ok');
   
}
else
{
        prompt (`Oops wrong answer,better luck next time`,'press ok to continue');
}
let ans4 = prompt (`Q.4 which marine organism is responsible for producing most of Earth's oxygen ?
         a. Whales
         b. seaweeds
         c. plankton`);
if(ans4 === "c")
{
        prompt (`Correct answer`,'press ok');
  score++;
  prompt(`Your score is: ` + score, 'press ok');

}
else
{
        prompt (`Oops wrong answer,better luck next time`,'press ok to continue');
}
let ans5 = prompt(`Q.5 How much plastic is estimated to enter the oceans each year
            a. 8 million
            b. 10 million
            c. 1 million`);
if(ans5 === "a")
{
        prompt (`Correct answer`,'press ok');
    score++;
    prompt (`Your score is: ` + score, 'press ok');
    
}
else
{
        prompt (`Oops wrong answer,better luck next time`,'press ok to continue');
}
let ans6 = prompt (`Q.6 what is the primary cause of coral reef degradation ?");
                    a.Pollution
                    b.Climate change
                    c.Industrial waste`);
if(ans6 === "b")
{
        prompt (`Correct answer`,'press ok');
    score++;
    prompt (`Your score is: ` + score, 'press ok');
  
}
else
{
        prompt (`Oops wrong answer,better luck next time`,'press ok to continue');
}
let ans7 = prompt (`Q.7 which of the following is not a marine protected area");
                    a. Marine parks
                    b. Marine sancturies
                    c. Marines Zoos`);
if(ans7 === "c")
{
        prompt (`Correct answer`,'press ok');
    score++;
    prompt (`Your score is: ` + score, 'press ok');
    
}
else
{
        prompt (`Oops wrong answer,better luck next time`,'press ok to continue');
}
let ans8 = prompt(`Q.8 What percentage of world's oxygen comes from marine plants
                   a. 20%
                   b. 30%
                   c. 50%`);
if(ans8 === "b")
{
        prompt (`Correct answer`,'press ok');
    score++;
    prompt(`Your score is: ` + score, 'press ok');
    
} 
else
{
        prompt (`Oops wrong answer,better luck next time`,'press ok to continue');
}
let ans9 = prompt (`Q.9 Which of the following is the major threat to the coral reefs
                    a. Overfishing
                    b. Climate change and Pollution
                    c. all of the above`);
if(ans9 === "c")
{
        prompt (`Correct answer`,'press ok');
    score++;
    prompt (`Your score is: ` + score, 'press ok');
}
else
{
    prompt (`Oops wrong answer,better luck next time`,'press ok to continue');
           
}
let ans10 = prompt (`Q.10 Which of the following is a sustainable method of fishing
                    a. Bottom trawling
                    b. Longlining
                    c. Fish Farming`);
if(ans10 === "c")
{
        prompt (`Correct answer`,'press ok');
    score++;
    
}
else
{
    prompt (`Oops wrong answer,better luck next time`,'press ok to continue');
}

prompt ("Congratulations!! Your total score is : "+score);

