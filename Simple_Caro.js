let x = document.getElementById("game");
let board = [];
let data = "";
for (let i=0;i<5;i++){
    board[i] = [0, 0, 0, 0, 0];
}
for (let i=0;i<5;i++){
    data += "</br>";
    for (let j=0;j<5;j++){
        data += board[i][j] + "&nbsp;&nbsp;";
    }
}
data += "<br/><br/> <input type='button' value='Change Value' onclick='changeValue()'>"
x.innerHTML= data;

function changeValue() {
    let positionX = prompt("X:");
    let positionY = prompt("Y:");
    data = "";
    board[positionX - 1][positionY - 1] = "x";
    for (let i=0; i<5; i++) {
        data += "</br>";
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp;&nbsp;";
        }
    }
    data += "<br/><br/> <input type='button' value='Change Value' onclick='changeValue()'>"
    x.innerHTML = data;
}

