var inmateDeck = new InmateDeck();
var actionDeck = new ActionCardDeck();


function execute(){
    gui();
    refresh();
}

function gui(){
    var body = document.getElementsByTagName('BODY')[0];
    var table = document.createElement("table");
    var tableBody = document.createElement("tbody");
    var row = document.createElement("tr");
    for (var i = 0;i<10;i++){
        var cell = document.createElement("td");
        var image = document.createElement('IMG');
        image.src = inmateDeck.inmateQueue[i].image;
        image.id = 'image' + String(i);
        cell.appendChild(image);
        var text = document.createElement("p");
        text.innerHTML = inmateDeck.inmateQueue[i].name;
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
    body.appendChild(table);
}

function refresh(){
    for (var i = 0;i<inmateDeck.inmateQueue.length;i++){
        var text = document.getElementById('text' + String(i));
        text.innerHTML = inmateDeck.inmateQueue[i].name;
        var image = document.getElementById('image' + String(i));
        image.src = inmateDeck.inmateQueue[i].image;
    }

}
