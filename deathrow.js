var gameEngine = new GameEngine();


function execute(){
    gui();
}


function gui(){
    var body = document.getElementsByTagName('BODY')[0];
    body.appendChild(getInmateTable());
    body.appendChild(getActionCardTable());
    gameEngine.refresh();
}

function getInmateTable(){
    var table = document.createElement("table");
    var tableBody = document.createElement("tbody");
    var row = document.createElement("tr");
    for (var i = 0;i<10;i++){
        var cell = document.createElement("td");
        var image = document.createElement('IMG');
        image.id = 'image' + String(i);
        cell.appendChild(image);
        var text = document.createElement("p");
        text.id = "text" + String(i);
        cell.appendChild(text);
        row.appendChild(cell);
    }
    var guillotine = document.createElement('IMG');
    var guillotineCell = document.createElement("td");
    guillotine.src = 'art/guillotine.png';
    guillotineCell.appendChild(guillotine);
    row.appendChild(guillotineCell);
    tableBody.appendChild(row);
    table.appendChild(tableBody);
    return table;
}


function getActionCardTable(){
    var table = document.createElement("table");
    var tableBody = document.createElement("tbody");
    for (var i=0;i<gameEngine.actionDeck.player1Hand.length;i++){
        var row = document.createElement("tr");
        var cell = document.createElement("td");
        var text = document.createElement("p");
        text.innerHTML = gameEngine.actionDeck.player1Hand[i].description;
        text.id = 'actionText' + String(i);
        text.onclick = actionCardOnClickHandler;
        cell.appendChild(text);
        row.appendChild(cell);
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    return table;
}

function actionCardOnClickHandler(){
    var text = document.getElementById(this.id);
    if (text.style.color == 'black'){
        text.style.color = 'blue';
    } else {
        text.style.color = 'black';
    }

}
