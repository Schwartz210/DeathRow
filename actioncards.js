class ActionCard{
    constructor(description){
        this.description = description;
    }
}

class SwapCard extends ActionCard{
    constructor(description, indices){
        super(description);
        this.indices = indices;
    }

    specialAbility(card){
        var index1 = inmateDeck.getPlaceInQueue(card);
        var index2 = index1 + this.indices;
        var temp = inmateDeck.inmateQueue[index1];
        inmateDeck.inmateQueue[index1] = inmateDeck.inmateQueue[index2];
        inmateDeck.inmateQueue[index2] = temp;
        refresh();
    }
}

class SlideCard extends ActionCard{
    constructor(description, maxIndices){
        super(description);
        this.maxIndices = maxIndices;
    }
}


class ActionCardDeck extends Deck{
    constructor(){
        super();
        this.deck = [];
        this.build();
        Deck.shuffle(this.deck);
    }

    build(){
        this.deck.push(new SwapCard("Move an inmate forward 3 places", -3));
        this.deck.push(new SwapCard("Move an inmate backwards 1 place", 1));
        this.deck.push(new SwapCard("Move an inmate forward 2 places", -2));
        this.deck.push(new SwapCard("Move an inmate forward 3 places", -5));
    }


}
