class GameEngine{
    constructor(){
        this.inmateDeck = new InmateDeck();
        this.actionDeck = new ActionCardDeck();
        this.activePlayer = 'player1';
        this.status = 'go';
    }

    round(){
        this.actionDeck.startRound();
        while (this.inmateDeck.hasCardsInQueue()){
            if (this.status == 'go'){
                this.turn();
            }
        }
    }

    refresh(){
        for (var i = 0;i<10;i++){
            var text = document.getElementById('inmateText' + String(i));
            var image = document.getElementById('inmateImage' + String(i));
            if (this.inmateDeck.inmateQueue[i] != null){
                text.innerHTML = this.inmateDeck.inmateQueue[i].name;
                image.src = this.inmateDeck.inmateQueue[i].image;
            } else {
                text.innerHTML = '';
                image.src = 'art/nothing.png';
            }
            returnInmateCellsToDefaultColor();
            if (selectedActionCard != null){
                document.getElementById(selectedActionCard).style.color = 'black';
            }
        }
    }

    changePlayer(){
        if (this.activePlayer == 'player1'){
            this.activePlayer = 'AI';
        } else {
            this.activePlayer = 'player1';
        }
    }

    turn(){
        this.inmateDeck.moveToScorePile(this.activePlayer);
        this.changePlayer();
        this.refresh();
        this.actionDeck.draw(this.activePlayer);
        this.status = 'stop';

    }

    findRelevantInmateCards(){
        var out = [];
        var actionCard = this.actionDeck.player1Hand[getNumberFromId(selectedActionCard)];
        if (this.actionDeck.getCardTypeFromActionCardCellID(selectedActionCard) == 'SwapCard'){
            for (var i=0;i<this.inmateDeck.inmateQueue.length;i++){
                if (actionCard.indices > 0){ //backwards
                    if (i+actionCard.indices<this.inmateDeck.inmateQueue.length){
                        out.push(i);
                    }
                } else { //forwards
                    if (i>=actionCard.indices*-1){
                        out.push(i);
                    }
                }
            }
        }
        return out;
    }
}
