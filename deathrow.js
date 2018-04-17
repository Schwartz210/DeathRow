var gameEngine = new GameEngine();
var selectedActionCard = null;
var YELLOW = '#d8e544';
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
        cell.onclick = inmateCardOnClickHandler;
        cell.id = 'inmateCell' + String(9-i);
        var image = document.createElement('IMG');
        image.id = 'image' + String(9-i);
        cell.appendChild(image);
        var text = document.createElement("p");
        text.id = "text" + String(9-i);
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
    table.setAttribute("border", "2");
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
        cell.onclick = actionCardOnClickHandler;
        cell.id = 'actionCell' + String(i);
        cell.appendChild(text);
        row.appendChild(cell);
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    table.setAttribute("border", "2");
    return table;
}

function actionCardOnClickHandler(){
    if (selectedActionCard != null){
        document.getElementById(selectedActionCard).style.color = 'black';
    }
    var textID = 'actionText' + getNumberFromId(this.id)
    var text = document.getElementById(textID);
    selectedActionCard = textID;
    document.getElementById(textID).style.color = 'blue';
    var relevantInmateCardIndices = gameEngine.findRelevantInmateCards();
    highlightInmates(relevantInmateCardIndices);
}

function returnInmateCellsToDefaultColor(){
    for (var i=0;i<gameEngine.inmateDeck.inmateQueue.length;i++){
        var cell = document.getElementById('inmateCell' + String(i));
        cell.style.backgroundColor = 'white';
    }
}

function inmateCardOnClickHandler(){
    returnInmateCellsToDefaultColor();
    var card = document.getElementById(this.id);
    card.style.backgroundColor = YELLOW;
    console.log(this.id);
}

function getNumberFromId(id){
    id = id.replace('image','');
    id = id.replace('actionText','');
    id = id.replace('actionCell','');
    return id;
}

function highlightInmates(indices){
    returnInmateCellsToDefaultColor();
    for (var i=0;i<indices.length;i++){
        var card = document.getElementById('inmateCell' + String(indices[i]));
        card.style.backgroundColor = YELLOW;
    }
}
