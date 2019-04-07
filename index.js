//------------------------------ MENU TOGGLE FUNCTION ----------------------------->

$( "#menuButtonContainer" ).click(function() {

    $( "#menuButtonContainer" ).toggleClass( "open closed" );
    
    $( "#menuButtonLineTop" ).toggleClass( "open closed" );
    
    $( "#menuButtonLineBottom" ).toggleClass( "open closed" );
    
    $( "#menuLink1" ).toggleClass( "open closed" );
    
    $( "#menuLink2" ).toggleClass( "open closed" );
    
    $( "#menuLink3" ).toggleClass( "open closed" );
    
    $( "#menuLink4" ).toggleClass( "open closed" );
    
    $( "#menuLink5" ).toggleClass( "open closed" );
    
    $( "#menuLink6" ).toggleClass( "open closed" );
    
    $( "#menuLink7" ).toggleClass( "open closed" );
    
    $( "#initialAboutContainer" ).toggleClass( "open closed" );
    
    $( "#sashaImageContainer" ).toggleClass( "open closed" );
    
    $( "#signatureContainer" ).toggleClass( "open closed" );
    
    $( "#shufflePhrasesContainer" ).toggleClass( "open closed" );
    
    $( "#diamondContainer" ).toggleClass( "open closed" );

});

//------------------------------ DIAMOND ROTATION FUNCTION ----------------------------->

window.addEventListener("DOMContentLoaded", rotateHex, true);
    
function rotateHex() {
        
    document.getElementById("sashaImageContainer1").style.transform = "rotateY(0deg)";
    
        document.getElementById("sashaImageContainer1").style.transformOrigin = "right";
    
            document.getElementById("sashaImageContainer1").style.transition = "1s";
    
                document.getElementById("sashaImageContainer1").style.transitionDelay = "0.8s";
    
    document.getElementById("sashaImageContainer2").style.transform = "rotateY(0deg)";
    
        document.getElementById("sashaImageContainer2").style.transformOrigin = "right";
    
            document.getElementById("sashaImageContainer2").style.transition = "1s";
    
                document.getElementById("sashaImageContainer2").style.transitionDelay = "0.4s";
    
    document.getElementById("sashaImageContainer3").style.transform = "rotateY(0deg)";
    
        document.getElementById("sashaImageContainer3").style.transformOrigin = "right";
    
            document.getElementById("sashaImageContainer3").style.transition = "1s";
    
                document.getElementById("sashaImageContainer3").style.transitionDelay = "0.4s";
    
    document.getElementById("sashaImageContainer4").style.transform = "rotateX(0deg)";
    
        document.getElementById("sashaImageContainer4").style.transformOrigin = "left";
    
            document.getElementById("sashaImageContainer4").style.transition = "1s";
    
                document.getElementById("sashaImageContainer4").style.transitionDelay = "0.8s";
    
    document.getElementById("sashaImageContainer5").style.transform = "rotateX(0deg)";
    
        document.getElementById("sashaImageContainer5").style.transformOrigin = "left";
    
            document.getElementById("sashaImageContainer5").style.transition = "1s";
    
                document.getElementById("sashaImageContainer5").style.transitionDelay = "1s";
    
    document.getElementById("sashaImageContainer6").style.transform = "rotateY(0deg)";
    
        document.getElementById("sashaImageContainer6").style.transformOrigin = "right";
    
            document.getElementById("sashaImageContainer6").style.transition = "1s";
    
                document.getElementById("sashaImageContainer6").style.transitionDelay = "0.6s";
    
    document.getElementById("sashaImageContainer7").style.transform = "rotateX(0deg)";
    
        document.getElementById("sashaImageContainer7").style.transformOrigin = "center";
    
            document.getElementById("sashaImageContainer7").style.transition = "1s";
    
                document.getElementById("sashaImageContainer7").style.transitionDelay = "0.2s";
    
    document.getElementById("sashaImageContainer8").style.transform = "rotateY(0deg)";
    
        document.getElementById("sashaImageContainer8").style.transformOrigin = "left";
    
            document.getElementById("sashaImageContainer8").style.transition = "1s";
    
                document.getElementById("sashaImageContainer8").style.transitionDelay = "0.6s";
    
    document.getElementById("sashaImageContainer9").style.transform = "rotateY(0deg)";
    
        document.getElementById("sashaImageContainer9").style.transformOrigin = "left";
    
            document.getElementById("sashaImageContainer9").style.transition = "1s";
    
                document.getElementById("sashaImageContainer9").style.transitionDelay = "1s";
    
    document.getElementById("sashaImageContainer10").style.transform = "rotateY(0deg)";
    
        document.getElementById("sashaImageContainer10").style.transformOrigin = "right";
    
            document.getElementById("sashaImageContainer10").style.transition = "1s";
    
                document.getElementById("sashaImageContainer10").style.transitionDelay = "0.8s";
    
    document.getElementById("sashaImageContainer11").style.transform = "rotateY(0deg)";
    
        document.getElementById("sashaImageContainer11").style.transformOrigin = "right";
    
            document.getElementById("sashaImageContainer11").style.transition = "1s";
    
                document.getElementById("sashaImageContainer11").style.transitionDelay = "0.4s";
    
    document.getElementById("sashaImageContainer12").style.transform = "rotateY(0deg)";
    
        document.getElementById("sashaImageContainer12").style.transformOrigin = "left";
    
            document.getElementById("sashaImageContainer12").style.transition = "1s";
    
                document.getElementById("sashaImageContainer12").style.transitionDelay = "0.4s";
    
    document.getElementById("sashaImageContainer13").style.transform = "rotateY(0deg)";
    
        document.getElementById("sashaImageContainer13").style.transformOrigin = "left";
    
            document.getElementById("sashaImageContainer13").style.transition = "1s";
    
                document.getElementById("sashaImageContainer13").style.transitionDelay = "0.8s";
    
};

//------------------------- TEXT SHUFFLE EFFECT FUNCTIONS ------------------------>

//--------------------------- PHRASE 1 (HELLO WORLD...) --------------------------->

$(document).ready(function() {

     var $randomnbr = $('.nbr1');
    
     var $timer = 5;
    
     var $it;
    
     var $data = 0;
    
     var index;
    
     var change;
    
     var letters = ["H", "E", "L", "L", "O", ",", "&nbsp;", "W", "O", "R", "L", "D", ".", ".", "."];

     $randomnbr.each(function() {

        change = Math.round(Math.random() * 100);
         
        $(this).attr('data-change', change);

     });

     function random() {
         
        return Math.round(Math.random() * 9);
         
     }

     function select() {
         
        return Math.round(Math.random() * $randomnbr.length + 1);
         
     }

     function value() {
         
          $('.nbr1:nth-child('+select()+')').html(''+random()+'');
         
          $('.nbr1:nth-child('+select()+')').attr('data-number', $data);
         
          $data++;

          $randomnbr.each(function() {
              
               if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                   
                    index = $('.ltr1').index(this);
                   
                    $(this).html(letters[index]);
                   
                    $(this).removeClass('nbr1');
                   
               }
              
          });
         
     }

     $it = setInterval(value, $timer);

});

//--------------------------- PHRASE 2 (MY NAME IS...) --------------------------->

$(document).ready(function() {

     var $randomnbr = $('.nbr2');
    
     var $timer = 5;
    
     var $it;
    
     var $data = 0;
    
     var index;
    
     var change;
    
     var letters = ["M", "Y", "&nbsp;", "N", "A", "M", "E", "&nbsp;", "I", "S", ".", ".", "."];

     $randomnbr.each(function() {

        change = Math.round(Math.random() * 100);
         
        $(this).attr('data-change', change);

     });

     function random() {
         
        return Math.round(Math.random() * 9);
         
     }

     function select() {
         
        return Math.round(Math.random() * $randomnbr.length + 1);
         
     }

     function value() {
         
          $('.nbr2:nth-child('+select()+')').html(''+random()+'');
         
          $('.nbr2:nth-child('+select()+')').attr('data-number', $data);
         
          $data++;

          $randomnbr.each(function() {
              
               if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                   
                    index = $('.ltr2').index(this);
                   
                    $(this).html(letters[index]);
                   
                    $(this).removeClass('nbr2');
                   
               }
              
          });
         
     }

     $it = setInterval(value, $timer);

});

//--------------------------- PHRASE 3 (SASHA WHITE!) --------------------------->

$(document).ready(function() {

     var $randomnbr = $('.nbr3');
    
     var $timer = 5;
    
     var $it;
    
     var $data = 0;
    
     var index;
    
     var change;
    
     var letters = ["S", "A", "S", "H", "A", "&nbsp;", "W", "H", "I", "T", "E", "!"];

     $randomnbr.each(function() {

        change = Math.round(Math.random() * 100);
         
        $(this).attr('data-change', change);

     });

     function random() {
         
        return Math.round(Math.random() * 9);
         
     }

     function select() {
         
        return Math.round(Math.random() * $randomnbr.length + 1);
         
     }

     function value() {
         
          $('.nbr3:nth-child('+select()+')').html(''+random()+'');
         
          $('.nbr3:nth-child('+select()+')').attr('data-number', $data);
         
          $data++;

          $randomnbr.each(function() {
              
               if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                   
                    index = $('.ltr3').index(this);
                   
                    $(this).html(letters[index]);
                   
                    $(this).removeClass('nbr3');
                   
               }
              
          });
         
     }

     $it = setInterval(value, $timer);

});

//----------------------- PHRASE 4 (I AM FIRST AND FOREMOST...) ----------------------->

$(document).ready(function() {

     var $randomnbr = $('.nbr4');
    
     var $timer = 5;
    
     var $it;
    
     var $data = 0;
    
     var index;
    
     var change;
    
     var letters = ["I", "&nbsp;", "A", "M", ",", "&nbsp;", "F", "I", "R", "S", "T", "&nbsp;", "&", "&nbsp;", "F", "O", "R", "E", "M", "O", "S", "T", ".", ".", "."];

     $randomnbr.each(function() {

        change = Math.round(Math.random() * 100);
         
        $(this).attr('data-change', change);

     });

     function random() {
         
        return Math.round(Math.random() * 9);
         
     }

     function select() {
         
        return Math.round(Math.random() * $randomnbr.length + 1);
         
     }

     function value() {
         
          $('.nbr4:nth-child('+select()+')').html(''+random()+'');
         
          $('.nbr4:nth-child('+select()+')').attr('data-number', $data);
         
          $data++;

          $randomnbr.each(function() {
              
               if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                   
                    index = $('.ltr4').index(this);
                   
                    $(this).html(letters[index]);
                   
                    $(this).removeClass('nbr4');
                   
               }
              
          });
         
     }

     $it = setInterval(value, $timer);

});

//--------------------------- PHRASE 5 (A BRAIN FUCKER.) --------------------------->

$(document).ready(function() {

     var $randomnbr = $('.nbr5');
    
     var $timer = 5;
    
     var $it;
    
     var $data = 0;
    
     var index;
    
     var change;
    
     var letters = ["A", "&nbsp;", "B", "R", "A", "I", "N", "&nbsp;", "F", "U", "C", "K", "E", "R", "."];

     $randomnbr.each(function() {

        change = Math.round(Math.random() * 100);
         
        $(this).attr('data-change', change);

     });

     function random() {
         
        return Math.round(Math.random() * 9);
         
     }

     function select() {
         
        return Math.round(Math.random() * $randomnbr.length + 1);
         
     }

     function value() {
         
          $('.nbr5:nth-child('+select()+')').html(''+random()+'');
         
          $('.nbr5:nth-child('+select()+')').attr('data-number', $data);
         
          $data++;

          $randomnbr.each(function() {
              
               if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                   
                    index = $('.ltr5').index(this);
                   
                    $(this).html(letters[index]);
                   
                    $(this).removeClass('nbr5');
                   
               }
              
          });
         
     }

     $it = setInterval(value, $timer);

});

//--------------------------- PHRASE 6 (A SAVIOR OF PEOPLE.) --------------------------->

$(document).ready(function() {

     var $randomnbr = $('.nbr6');
    
     var $timer = 5;
    
     var $it;
    
     var $data = 0;
    
     var index;
    
     var change;
    
     var letters = ["A", ".", ".", ".", "&nbsp;", "S", "A", "V", "I", "O", "R", "&nbsp;", "O", "F", "&nbsp;", "P", "E", "O", "P", "L", "E", "."];

     $randomnbr.each(function() {

        change = Math.round(Math.random() * 100);
         
        $(this).attr('data-change', change);

     });

     function random() {
         
        return Math.round(Math.random() * 9);
         
     }

     function select() {
         
        return Math.round(Math.random() * $randomnbr.length + 1);
         
     }

     function value() {
         
          $('.nbr6:nth-child('+select()+')').html(''+random()+'');
         
          $('.nbr6:nth-child('+select()+')').attr('data-number', $data);
         
          $data++;

          $randomnbr.each(function() {
              
               if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                   
                    index = $('.ltr6').index(this);
                   
                    $(this).html(letters[index]);
                   
                    $(this).removeClass('nbr6');
                   
               }
              
          });
         
     }

     $it = setInterval(value, $timer);

});

//--------------------------- PHRASE 7 (A TALENT AGENT.) --------------------------->

$(document).ready(function() {

     var $randomnbr = $('.nbr7');
    
     var $timer = 5;
    
     var $it;
    
     var $data = 0;
    
     var index;
    
     var change;
    
     var letters = ["A", ".", ".", ".", "&nbsp;", "T", "A", "L", "E", "N", "T", "&nbsp;", "A", "G", "E", "N", "T", "."];

     $randomnbr.each(function() {

        change = Math.round(Math.random() * 100);
         
        $(this).attr('data-change', change);

     });

     function random() {
         
        return Math.round(Math.random() * 9);
         
     }

     function select() {
         
        return Math.round(Math.random() * $randomnbr.length + 1);
         
     }

     function value() {
         
          $('.nbr7:nth-child('+select()+')').html(''+random()+'');
         
          $('.nbr7:nth-child('+select()+')').attr('data-number', $data);
         
          $data++;

          $randomnbr.each(function() {
              
               if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                   
                    index = $('.ltr7').index(this);
                   
                    $(this).html(letters[index]);
                   
                    $(this).removeClass('nbr7');
                   
               }
              
          });
         
     }

     $it = setInterval(value, $timer);

});

//------------------------- PHRASE 8 (AND ABOVE ALL ELSE...) ------------------------->

$(document).ready(function() {

     var $randomnbr = $('.nbr8');
    
     var $timer = 5;
    
     var $it;
    
     var $data = 0;
    
     var index;
    
     var change;
    
     var letters = ["A", "N", "D", "&nbsp;", "A", "B", "O", "V", "E", "&nbsp;", "A", "L", "L", "&nbsp;", "E", "L", "S", "E", ".", ".", "."];

     $randomnbr.each(function() {

        change = Math.round(Math.random() * 100);
         
        $(this).attr('data-change', change);

     });

     function random() {
         
        return Math.round(Math.random() * 9);
         
     }

     function select() {
         
        return Math.round(Math.random() * $randomnbr.length + 1);
         
     }

     function value() {
         
          $('.nbr8:nth-child('+select()+')').html(''+random()+'');
         
          $('.nbr8:nth-child('+select()+')').attr('data-number', $data);
         
          $data++;

          $randomnbr.each(function() {
              
               if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                   
                    index = $('.ltr8').index(this);
                   
                    $(this).html(letters[index]);
                   
                    $(this).removeClass('nbr8');
                   
               }
              
          });
         
     }

     $it = setInterval(value, $timer);

});

//------------------------- PHRASE 9 (YOUR TRUSTED CONFIDANT.) ------------------------->

$(document).ready(function() {

     var $randomnbr = $('.nbr9');
    
     var $timer = 5;
    
     var $it;
    
     var $data = 0;
    
     var index;
    
     var change;
    
     var letters = ["Y", "O", "U", "R", "&nbsp;", "T", "R", "U", "S", "T", "E", "D", "&nbsp;", "C", "O", "N", "F", "I", "D", "A", "N", "T", "."];

     $randomnbr.each(function() {

        change = Math.round(Math.random() * 100);
         
        $(this).attr('data-change', change);

     });

     function random() {
         
        return Math.round(Math.random() * 9);
         
     }

     function select() {
         
        return Math.round(Math.random() * $randomnbr.length + 1);
         
     }

     function value() {
         
          $('.nbr9:nth-child('+select()+')').html(''+random()+'');
         
          $('.nbr9:nth-child('+select()+')').attr('data-number', $data);
         
          $data++;

          $randomnbr.each(function() {
              
               if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                   
                    index = $('.ltr9').index(this);
                   
                    $(this).html(letters[index]);
                   
                    $(this).removeClass('nbr9');
                   
               }
              
          });
         
     }

     $it = setInterval(value, $timer);

});

//------------------------ PHRASE 10 (I AM HERE TO HELP YOU!) ------------------------>

$(document).ready(function() {

     var $randomnbr = $('.nbr10');
    
     var $timer = 5;
    
     var $it;
    
     var $data = 0;
    
     var index;
    
     var change;
    
     var letters = ["I", "&nbsp;", "A", "M", "&nbsp;", "H", "E", "R", "E", "&nbsp;", "T", "O", "&nbsp;", "H", "E", "L", "P", "&nbsp;", "Y", "O", "U", "!"];

     $randomnbr.each(function() {

        change = Math.round(Math.random() * 100);
         
        $(this).attr('data-change', change);

     });

     function random() {
         
        return Math.round(Math.random() * 9);
         
     }

     function select() {
         
        return Math.round(Math.random() * $randomnbr.length + 1);
         
     }

     function value() {
         
          $('.nbr10:nth-child('+select()+')').html(''+random()+'');
         
          $('.nbr10:nth-child('+select()+')').attr('data-number', $data);
         
          $data++;

          $randomnbr.each(function() {
              
               if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                   
                    index = $('.ltr10').index(this);
                   
                    $(this).html(letters[index]);
                   
                    $(this).removeClass('nbr10');
                   
               }
              
          });
         
     }

     $it = setInterval(value, $timer);

});

//-------------------------------- ABOUT SASHA PHRASES ------------------------------->

var phraseArray = [
    
    'I am talent agent',
    
    'A motivational speaker',
    
    'A muse',
    
    'A spiritual leader',
    
    'And most importantly...',
    
    'The Brain Fucker!'
    
];

var i = 0;

var aboutText = document.querySelector('#aboutSashaPhrases');

function smoke() {
    
    aboutText.innerHTML = phraseArray[i];
    
    setTimeout(nextPhrase, 3000);
    
}

function nextPhrase() {
    
    i++;
    
    if (i > phraseArray.length - 1) {
        
        i = 0;
        
    }
    
    setTimeout(smoke);
    
}

smoke();

//-------------------------------------- THE END ------------------------------------->