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
        for (var i = 0;i<this.inmateDeck.inmateQueue.length;i++){
            var text = document.getElementById('text' + String(i));
            text.innerHTML = this.inmateDeck.inmateQueue[i].name;
            var image = document.getElementById('image' + String(i));
            image.src = this.inmateDeck.inmateQueue[i].image;
        }
    }

    turn(){
        this.changePlayer();
        this.refresh();
        this.actionDeck.draw(this.activePlayer);
        this.status = 'stop';
    }

    changePlayer(){
        if (this.activePlayer == 'player1'){
            this.activePlayer = 'AI';
        } else {
            this.activePlayer = 'player1';
        }
    }
}
