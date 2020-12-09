function adduser(){
    player1_name=document.getElementById("player_input_1").value;
    player2_name=document.getElementById("player_input_2").value;

    localStorage.setItem("Player_1",player1_name);
    localStorage.setItem("Player_2",player2_name);

    window.location="game_page.html";
}