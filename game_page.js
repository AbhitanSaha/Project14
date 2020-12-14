player1_name=localStorage.getItem("Player_1");
player2_name=localStorage.getItem("Player_2");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

function send(){
   num1=document.getElementById("num1").value;
   num2=document.getElementById("num2").value;
   actualans=parseInt(num1)*parseInt(num2);
    question_word="<h4 id='num_display'>"+num1+"x"+num2+"</h4>";
    input_box="<br>Answer:<input type='number' id='input_check_box'>";
    chack_button="<br><br><button class='btn btn-info'onclick='check()' >Check</button>";
    row=question_word+input_box+chack_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
}
question_turn="player1";
answer_turn="player2";
function check(){
    get_word2=document.getElementById("input_check_box").value;
    word2=get_word2.toLowerCase();
    console.log("answer in lower case="+word);

    if(actualans==word2){
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
        if(answer_turn=="player2"){
            answer_turn="player1";
            document.getElementById("player_answer").innerHTML="Answer-"+player1_name;
        }
        else{
            answer_turn="player2";
            document.getElementById("player_answer").innerHTML="Answer-"+player2_name;
        }
        if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question-"+player2_name;
        }
        else{
            question_turn="player1";   
            document.getElementById("player_question").innerHTML="Question-"+player1_name;
        }
        document.getElementById("output").innerHTML="";
    }
}