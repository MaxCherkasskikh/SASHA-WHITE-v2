//------------------------------ ASK TOGGLE FUNCTIONS ----------------------------->

$( "#askSashaButton" ).click(function() {

    $( "#askTalentHeadingUnderline" ).removeClass( "signup" );
    
    $( "#askTalentHeadingUnderline" ).addClass( "ask" );
    
    $( "#askSashaMainPar" ).removeClass( "signup" );
    
    $( "#askSashaMainPar" ).addClass( "ask" );
    
    $( "#askSashaSecondaryPar" ).removeClass( "signup" );
    
    $( "#askSashaSecondaryPar" ).addClass( "ask" );
    
    $( "#rantContainer" ).removeClass( "signup" );
    
    $( "#rantContainer" ).addClass( "ask" );
    
    $( "#talentContainer" ).removeClass( "signup" );
    
    $( "#talentContainer" ).addClass( "ask" );

});

$( "#talentSignUpButton" ).click(function() {

    $( "#askTalentHeadingUnderline" ).removeClass( "ask" );
    
    $( "#askTalentHeadingUnderline" ).addClass( "signup" );
    
    $( "#askSashaMainPar" ).removeClass( "ask" );
    
    $( "#askSashaMainPar" ).addClass( "signup" );
    
    $( "#askSashaSecondaryPar" ).removeClass( "ask" );
    
    $( "#askSashaSecondaryPar" ).addClass( "signup" );
    
    $( "#rantContainer" ).removeClass( "ask" );
    
    $( "#rantContainer" ).addClass( "signup" );
    
    $( "#talentContainer" ).removeClass( "ask" );
    
    $( "#talentContainer" ).addClass( "signup" );

});