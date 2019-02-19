//-------------------------------- REVIEWS DIVS FUNCTIONS ------------------------------->

clickCount = 1;

function bottomClick() {

    clickCount++;
    
    if (clickCount > 13) {
        
        clickCount = 13;
        
    }
    
    clickTracker();

}

function topClick() {

    clickCount--;
    
    if (clickCount < 1) {
        
        clickCount = 1;
        
    }
    
    clickTracker();

}

function clickTracker() {
    
    if (clickCount === 1) {

        $("#reviewContainer1").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer2").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer3").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer4").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer5").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer6").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer7").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer8").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer9").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
        
        $("#reviewContainer10").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
        
        $("#reviewContainer11").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
        
        $("#reviewContainer12").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
        
        $("#reviewContainer13").addClass("position1").removeClass("position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");

    }

    if (clickCount === 2) {

        $("#reviewContainer1").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer2").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer3").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer4").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer5").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer6").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer7").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer8").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer9").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
        
        $("#reviewContainer10").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
        
        $("#reviewContainer11").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
        
        $("#reviewContainer12").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
        
        $("#reviewContainer13").addClass("position2").removeClass("position1 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");

    }

    if (clickCount === 3) {

        $("#reviewContainer1").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer2").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer3").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer4").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer5").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer6").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer7").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer8").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer9").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
        
        $("#reviewContainer10").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
        
        $("#reviewContainer11").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
        
        $("#reviewContainer12").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");
        
        $("#reviewContainer13").addClass("position3").removeClass("position1 position2 position4 position5 position6 position7 position8 position9 position10 position11 position12 position13");

    }

    if (clickCount === 4) {

        $("#reviewContainer1").addClass("position4").removeClass("position 1 position2 position3 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer2").addClass("position4").removeClass("position 1 position2 position3 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer3").addClass("position4").removeClass("position 1 position2 position3 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer4").addClass("position4").removeClass("position 1 position2 position3 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer5").addClass("position4").removeClass("position 1 position2 position3 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer6").addClass("position4").removeClass("position 1 position2 position3 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer7").addClass("position4").removeClass("position 1 position2 position3 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer8").addClass("position4").removeClass("position 1 position2 position3 position5 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer9").addClass("position4").removeClass("position 1 position2 position3 position5 position6 position7 position8 position9 position10 position11 position12 position13");
        
        $("#reviewContainer10").addClass("position4").removeClass("position1 position2 position3 position5 position6 position7 position8 position9 position10 position11 position12 position13");
        
        $("#reviewContainer11").addClass("position4").removeClass("position1 position2 position3 position5 position6 position7 position8 position9 position10 position11 position12 position13");
        
        $("#reviewContainer12").addClass("position4").removeClass("position1 position2 position3 position5 position6 position7 position8 position9 position10 position11 position12 position13");
        
        $("#reviewContainer13").addClass("position4").removeClass("position1 position2 position3 position5 position6 position7 position8 position9 position10 position11 position12 position13");

    }

    if (clickCount === 5) {

        $("#reviewContainer1").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer2").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer3").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer4").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer5").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer6").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer7").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer8").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer9").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11 position12 position13");
        
        $("#reviewContainer10").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11 position12 position13");
        
        $("#reviewContainer11").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11 position12 position13");
        
        $("#reviewContainer12").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11 position12 position13");
        
        $("#reviewContainer13").addClass("position5").removeClass("position1 position2 position3 position4 position6 position7 position8 position9 position10 position11 position12 position13");

    }

    if (clickCount === 6) {

        $("#reviewContainer1").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer2").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer3").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer4").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer5").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer6").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer7").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer8").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer9").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11 position12 position13");
        
        $("#reviewContainer10").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11 position12 position13");
        
        $("#reviewContainer11").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11 position12 position13");
        
        $("#reviewContainer12").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11 position12 position13");
        
        $("#reviewContainer13").addClass("position6").removeClass("position1 position2 position3 position4 position5 position7 position8 position9 position10 position11 position12 position13");

    }

    if (clickCount === 7) {

        $("#reviewContainer1").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer2").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer3").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer4").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer5").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer6").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer7").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer8").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11 position12 position13");

        $("#reviewContainer9").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11 position12 position13");
        
        $("#reviewContainer10").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11 position12 position13");
        
        $("#reviewContainer11").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11 position12 position13");
        
        $("#reviewContainer12").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11 position12 position13");
        
        $("#reviewContainer13").addClass("position7").removeClass("position1 position2 position3 position4 position5 position6 position8 position9 position10 position11 position12 position13");

    }
    
    if (clickCount === 8) {

        $("#reviewContainer1").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11 position12 position13");

        $("#reviewContainer2").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11 position12 position13");

        $("#reviewContainer3").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11 position12 position13");

        $("#reviewContainer4").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11 position12 position13");

        $("#reviewContainer5").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11 position12 position13");

        $("#reviewContainer6").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11 position12 position13");

        $("#reviewContainer7").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11 position12 position13");

        $("#reviewContainer8").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11 position12 position13");

        $("#reviewContainer9").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11 position12 position13");
        
        $("#reviewContainer10").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11 position12 position13");
        
        $("#reviewContainer11").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11 position12 position13");
        
        $("#reviewContainer12").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11 position12 position13");
        
        $("#reviewContainer13").addClass("position8").removeClass("position1 position2 position3 position4 position5 position6 position7 position9 position10 position11 position12 position13");

    }
    
    if (clickCount === 9) {

        $("#reviewContainer1").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11 position12 position13");

        $("#reviewContainer2").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11 position12 position13");

        $("#reviewContainer3").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11 position12 position13");

        $("#reviewContainer4").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11 position12 position13");

        $("#reviewContainer5").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11 position12 position13");

        $("#reviewContainer6").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11 position12 position13");

        $("#reviewContainer7").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11 position12 position13");

        $("#reviewContainer8").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11 position12 position13");

        $("#reviewContainer9").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11 position12 position13");
        
        $("#reviewContainer10").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11 position12 position13");
        
        $("#reviewContainer11").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11 position12 position13");
        
        $("#reviewContainer12").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11 position12 position13");
        
        $("#reviewContainer13").addClass("position9").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position10 position11 position12 position13");

    }
    
    if (clickCount === 10) {

        $("#reviewContainer1").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11 position12 position13");

        $("#reviewContainer2").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11 position12 position13");

        $("#reviewContainer3").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11 position12 position13");

        $("#reviewContainer4").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11 position12 position13");

        $("#reviewContainer5").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11 position12 position13");

        $("#reviewContainer6").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11 position12 position13");

        $("#reviewContainer7").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11 position12 position13");

        $("#reviewContainer8").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11 position12 position13");

        $("#reviewContainer9").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11 position12 position13");
        
        $("#reviewContainer10").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11 position12 position13");
        
        $("#reviewContainer11").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11 position12 position13");
        
        $("#reviewContainer12").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11 position12 position13");
        
        $("#reviewContainer13").addClass("position10").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position11 position12 position13");

    }
    
    if (clickCount === 11) {

        $("#reviewContainer1").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position12 position13");

        $("#reviewContainer2").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position12 position13");

        $("#reviewContainer3").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position12 position13");

        $("#reviewContainer4").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position12 position13");

        $("#reviewContainer5").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position12 position13");

        $("#reviewContainer6").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position12 position13");

        $("#reviewContainer7").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position12 position13");

        $("#reviewContainer8").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position12 position13");

        $("#reviewContainer9").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position12 position13");
        
        $("#reviewContainer10").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position12 position13");
        
        $("#reviewContainer11").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position12 position13");
        
        $("#reviewContainer12").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position12 position13");
        
        $("#reviewContainer13").addClass("position11").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position12 position13");

    }
    
    if (clickCount === 12) {

        $("#reviewContainer1").addClass("position12").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position13");

        $("#reviewContainer2").addClass("position12").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position13");

        $("#reviewContainer3").addClass("position12").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position13");

        $("#reviewContainer4").addClass("position12").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position13");

        $("#reviewContainer5").addClass("position12").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position13");

        $("#reviewContainer6").addClass("position12").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position13");

        $("#reviewContainer7").addClass("position12").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position13");

        $("#reviewContainer8").addClass("position12").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position13");

        $("#reviewContainer9").addClass("position12").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position13");
        
        $("#reviewContainer10").addClass("position12").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position13");
        
        $("#reviewContainer11").addClass("position12").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position13");
        
        $("#reviewContainer12").addClass("position12").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position13");
        
        $("#reviewContainer13").addClass("position12").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position13");

    }
    
    if (clickCount === 13) {

        $("#reviewContainer1").addClass("position13").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12");

        $("#reviewContainer2").addClass("position13").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12");

        $("#reviewContainer3").addClass("position13").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12");

        $("#reviewContainer4").addClass("position13").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12");

        $("#reviewContainer5").addClass("position13").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12");

        $("#reviewContainer6").addClass("position13").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12");

        $("#reviewContainer7").addClass("position13").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12");

        $("#reviewContainer8").addClass("position13").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12");

        $("#reviewContainer9").addClass("position13").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12");
        
        $("#reviewContainer10").addClass("position13").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12");
        
        $("#reviewContainer11").addClass("position13").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12");
        
        $("#reviewContainer12").addClass("position13").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12");
        
        $("#reviewContainer13").addClass("position13").removeClass("position1 position2 position3 position4 position5 position6 position7 position8 position9 position10 position11 position12");

    }

}

//----------------------------- REVIEW BOXES OPEN FUNCTIONS ---------------------------->

$( "#reviewButtonContainer1" ).click(function() {

    $( "#reviewButtonContainer1" ).toggleClass( "open closed" );
    
    $( "#reviewImageContainer1" ).toggleClass( "open closed" );
    
    $( "#reviewName1" ).toggleClass( "open closed" );
    
    $( "#reviewTitle1" ).toggleClass( "open closed" );
    
    $( "#reviewPar1" ).toggleClass( "open closed" );

});

$( "#reviewButtonContainer2" ).click(function() {

    $( "#reviewButtonContainer2" ).toggleClass( "open closed" );
    
    $( "#reviewImageContainer2" ).toggleClass( "open closed" );
    
    $( "#reviewName2" ).toggleClass( "open closed" );
    
    $( "#reviewTitle2" ).toggleClass( "open closed" );
    
    $( "#reviewPar2" ).toggleClass( "open closed" );

});

$( "#reviewButtonContainer3" ).click(function() {

    $( "#reviewButtonContainer3" ).toggleClass( "open closed" );
    
    $( "#reviewImageContainer3" ).toggleClass( "open closed" );
    
    $( "#reviewName3" ).toggleClass( "open closed" );
    
    $( "#reviewTitle3" ).toggleClass( "open closed" );
    
    $( "#reviewPar3" ).toggleClass( "open closed" );

});

$( "#reviewButtonContainer4" ).click(function() {

    $( "#reviewButtonContainer4" ).toggleClass( "open closed" );
    
    $( "#reviewImageContainer4" ).toggleClass( "open closed" );
    
    $( "#reviewName4" ).toggleClass( "open closed" );
    
    $( "#reviewTitle4" ).toggleClass( "open closed" );
    
    $( "#reviewPar4" ).toggleClass( "open closed" );

});

$( "#reviewButtonContainer5" ).click(function() {

    $( "#reviewButtonContainer5" ).toggleClass( "open closed" );
    
    $( "#reviewImageContainer5" ).toggleClass( "open closed" );
    
    $( "#reviewName5" ).toggleClass( "open closed" );
    
    $( "#reviewTitle5" ).toggleClass( "open closed" );
    
    $( "#reviewPar5" ).toggleClass( "open closed" );

});

$( "#reviewButtonContainer6" ).click(function() {

    $( "#reviewButtonContainer6" ).toggleClass( "open closed" );
    
    $( "#reviewImageContainer6" ).toggleClass( "open closed" );
    
    $( "#reviewName6" ).toggleClass( "open closed" );
    
    $( "#reviewTitle6" ).toggleClass( "open closed" );
    
    $( "#reviewPar6" ).toggleClass( "open closed" );

});

$( "#reviewButtonContainer7" ).click(function() {

    $( "#reviewButtonContainer7" ).toggleClass( "open closed" );
    
    $( "#reviewImageContainer7" ).toggleClass( "open closed" );
    
    $( "#reviewName7" ).toggleClass( "open closed" );
    
    $( "#reviewTitle7" ).toggleClass( "open closed" );
    
    $( "#reviewPar7" ).toggleClass( "open closed" );

});

$( "#reviewButtonContainer8" ).click(function() {

    $( "#reviewButtonContainer8" ).toggleClass( "open closed" );
    
    $( "#reviewImageContainer8" ).toggleClass( "open closed" );
    
    $( "#reviewName8" ).toggleClass( "open closed" );
    
    $( "#reviewTitle8" ).toggleClass( "open closed" );
    
    $( "#reviewPar8" ).toggleClass( "open closed" );

});

$( "#reviewButtonContainer9" ).click(function() {

    $( "#reviewButtonContainer9" ).toggleClass( "open closed" );
    
    $( "#reviewImageContainer9" ).toggleClass( "open closed" );
    
    $( "#reviewName9" ).toggleClass( "open closed" );
    
    $( "#reviewTitle9" ).toggleClass( "open closed" );
    
    $( "#reviewPar9" ).toggleClass( "open closed" );

});

$( "#reviewButtonContainer10" ).click(function() {

    $( "#reviewButtonContainer10" ).toggleClass( "open closed" );
    
    $( "#reviewImageContainer10" ).toggleClass( "open closed" );
    
    $( "#reviewName10" ).toggleClass( "open closed" );
    
    $( "#reviewTitle10" ).toggleClass( "open closed" );
    
    $( "#reviewPar10" ).toggleClass( "open closed" );

});

$( "#reviewButtonContainer11" ).click(function() {

    $( "#reviewButtonContainer11" ).toggleClass( "open closed" );
    
    $( "#reviewImageContainer11" ).toggleClass( "open closed" );
    
    $( "#reviewName11" ).toggleClass( "open closed" );
    
    $( "#reviewTitle11" ).toggleClass( "open closed" );
    
    $( "#reviewPar11" ).toggleClass( "open closed" );

});

$( "#reviewButtonContainer12" ).click(function() {

    $( "#reviewButtonContainer12" ).toggleClass( "open closed" );
    
    $( "#reviewImageContainer12" ).toggleClass( "open closed" );
    
    $( "#reviewName12" ).toggleClass( "open closed" );
    
    $( "#reviewTitle12" ).toggleClass( "open closed" );
    
    $( "#reviewPar12" ).toggleClass( "open closed" );

});

$( "#reviewButtonContainer13" ).click(function() {

    $( "#reviewButtonContainer13" ).toggleClass( "open closed" );
    
    $( "#reviewImageContainer13" ).toggleClass( "open closed" );
    
    $( "#reviewName13" ).toggleClass( "open closed" );
    
    $( "#reviewTitle13" ).toggleClass( "open closed" );
    
    $( "#reviewPar13" ).toggleClass( "open closed" );

});

//--------------------------------------- THE END -------------------------------------->