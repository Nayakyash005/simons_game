// all javascript code are written here 
// declaration of some of the all important element that we are needed the most
var buttons = ["red", "blue", "green", "yellow"];
var user_Selected_patterns = [];
var game_pattern = [];
var level  = 0;
var start = false;


$(document).keypress(function(){
if(!start){

    $(".second-title").text(level + "Level");
    next_seq();
    start = true;
}
});


$(".btn").click(function(){


    var chosencolor = $(this).attr("id");
    user_Selected_patterns.push(chosencolor);
    playsound(chosencolor);
    animate_press(chosencolor);
    check_ans(user_Selected_patterns.length-1);
})


function check_ans(current_index){

if(game_pattern[current_index] === user_Selected_patterns[current_index]){
    $(".second-title").text( "Level" + "= " + level);
    console.log("Success");
    if(game_pattern.length === user_Selected_patterns.length){

        setTimeout(function(){
            next_seq();
        },1000);
    }
}else{
    $(".second-title").text("game over click any button to restart the game");
    
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },400);
    playsound(wrong);
  
    startover();
}
 
}


function next_seq(){

    user_Selected_patterns = [];
    level++; 
    $(".second-title").text(level + " - Level");
var randNum = Math.floor(Math.random() * 4);
var anyColor = buttons[randNum];
game_pattern.push(anyColor);
$("#" + anyColor).fadeIn(100).fadeOut(100).fadeIn(100);
playsound(anyColor);        

}

function animate_press(chosencolor){
    $("#" + chosencolor).addClass("pressed");

    setTimeout(function() {
        $("#" + chosencolor).removeClass("pressed");
    },200);
}

function playsound(music){
    var audio = new Audio('Music/' + music + '.mp3');
    audio.play();
}

function startover(){

    level = 0;
    start = false;
    game_pattern = [];
    
}