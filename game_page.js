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
    document.getElementById("num1").innerHTML="";
    document.getElementById("num2").innerHTML="";
}