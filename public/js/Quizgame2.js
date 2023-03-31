let score = 0;

function start() {
        let startC = prompt(`WELCOME TO THE SDG's QUIZ`, 'Press OK to continue');
        if (startC === null) {
                return
        }

        let midC = prompt(`LET'S GET STARTED`, 'Press OK to continue');
        if (midC === null) {
                return
        }


        let ans1 = prompt(`Q.1 When is the earth day celebrated worldwide ?
                   a. 9th december
                   b. 12th march
                   c. 22th april`);
        if (ans1 === "c") {
                score++;
                correct1 = prompt(`Correct answer,  
Your score is: ` + score);
                if (correct1 === null) {
                        return
                }

        }
        else if (ans1 === null) { // cancel button
                return
        }
        else {
                wrong1 = prompt(`Oops wrong ans, better luck next time`,
                        `Press OK to continue`);
                if (wrong1 === null) {
                        return
                }

        }

        let ans2 = prompt(`Q.2 what is the goal of life below water ?
        a. To able to live underwater by 2040
        b. To protect marine and costal region from significant 
                damage 
        c. To understand about water`);
        if (ans2 === "b") {
                score++;
                correct2 = prompt(`Correct answer, 
Your score is: ` + score);
                if (correct2 === null) {
                        return
                }
        }
        else if (ans2 === null) { // cancel button
                return
        }
        else {
                wrong2 = prompt(`Oops wrong ans, better luck next time`,
                        `Press OK to continue`);
                if (wrong2 === null) {
                        return
                }
        }


        let ans3 = prompt(`Q.3 when is water day celebrated worldwide ?
                    a. 22nd march 
                    b. 14th april 
                    c. 8th march`);
        if (ans3 === "a") {
                score++;
                correct3 = prompt(`correct answer,
Your score is: ` + score);
                if (correct3 === null) {
                        return
                }
        }
        else if (ans3 === null) { // cancel button
                return
        }
        else {
                wrong3 = prompt(`Oops wrong answer, better luck next time`,
                        `Press OK to continue`);
                if (wrong3 === null) {
                        return
                }
        }


        let ans4 = prompt(`Q.4 which marine organism is responsible for producing most of Earth's oxygen ?
         a. Whales
         b. seaweeds
         c. plankton`);
        if (ans4 === "c") {
                score++;
                correct4 = prompt(`Correct answer,
Your score is: ` + score);
                if (correct4 === null) {
                        return
                }

        }
        else if (ans4 === null) { // cancel button
                return
        }
        else {
                wrong4 = prompt(`Oops wrong answer,better luck next time`,
                        `Press OK to continue`);
                if (wrong4 === null) {
                        return
                }
        }

        let ans5 = prompt(`Q.5 How much plastic is estimated to enter the oceans each year
            a. 8 million
            b. 10 million
            c. 1 million`);
        if (ans5 === "a") {
                score++;
                correct5 = prompt(`correct answer,
Your score is: ` + score);
                if (correct5 === null) {
                        return
                }
        }
        else if (ans5 === null) { // cancel button
                return
        }
        else {

                wrong5 = prompt(`Oops wrong answer,better luck next time`,
                        `Press OK to continue`);
                if (wrong5 === null) {
                        return
                }
        }


        let ans6 = prompt(`Q.6 what is the primary cause of coral reef degradation ?
                    a.Pollution
                    b.Climate change
                    c.Industrial waste`);
        if (ans6 === "b") {
                score++;
                correct6 = prompt(`Correct answer,
Your score is: `+ score);
                if (correct6 === null) {
                        return
                }
        }
        else if (ans6 === null) { // cancel button
                return
        }
        else {

                wrong6 = prompt(`Oops wrong answer,better luck next time`,
                        `Press OK to continue`);
                if (wrong6 === null) {
                        return
                }
        }
        let ans7 = prompt(`Q.7 which of the following is not a marine protected area ?
                    a. Marine parks
                    b. Marine sancturies
                    c. Marines Zoos`);
        if (ans7 === "c") {
                score++;
                correct7 = prompt(`Correct answer,
Your score is: ` + score);
                if (correct7 === null) {
                        return
                }
        }
        else if (ans7 === null) { // cancel button
                return
        }
        else {

                wrong7 = prompt(`Oops wrong answer,better luck next time`,
                        `Press OK to continue`);
                if (wrong7 === null) {
                        return
                }
        }
        let ans8 = prompt(`Q.8 What percentage of world's oxygen comes from marine plants ?
                   a. 20%
                   b. 30%
                   c. 50%`);
        if (ans8 === "b") {
                score++;
                correct8 = prompt(`Correct answer,
Your score is: `+ score);
                if (correct8 === null) {
                        return
                }
        }
        else if (ans8 === null) { // cancel button
                return
        }
        else {
                wrong8 = prompt(`Oops wrong answer,better luck next time`,
                        `Press OK to continue`);
                if (wrong8 === null) {
                        return
                }
        }

        let ans9 = prompt(`Q.9 Which of the following is the major threat to the coral reefs ?
                    a. Overfishing
                    b. Climate change and Pollution
                    c. all of the above`);
        if (ans9 === "c") {
                score++;
                correct9 = prompt(`Correct option,
Your score is: `+ score);
                if (correct9 === null) {
                        return
                }
        }
        else if (ans9 === null) { // cancel button
                return
        }
        else {
                wrong9 = prompt(`Oops wrong answer,better luck next time`,
                        `Press OK to continue`);
                if (wrong9 === null) {
                        return
                }
        }

        let ans10 = prompt(`Q.10 Which of the following is a sustainable method of fishing ?
                    a. Bottom trawling
                    b. Longlining
                    c. Fish Farming`);
        if (ans10 === "c") {

                correct10 = prompt(`Correct answer`);
                score++;
                if (correct10 === null) {
                        return
                }
        }
        else if (ans10 === null) { // cancel button
                return
        }
        else {

                wrong10 = prompt(`Oops wrong answer,better luck next time`,
                        `Press OK to continue`);
                if (wrong10 === null) {
                        return
                }




        }
        prompt("Congratulation!! Your total score is: " + score);

}

start()
