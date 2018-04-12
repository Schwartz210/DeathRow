class Inmate{
    constructor(name, points, color){
        this.name = name;
        this.points = points;
        this.color = color;
        this.image = 'art/' + color + String(points) + '.png'
    }


}

class InmateDeck extends Deck{
    constructor(){
        super();
        this.deck = [];
        this.inmateQueue = [];
        this.build();
        Deck.shuffle(this.deck);
        this.draw(10);
    }

    build(){
        this.deck.push(new Inmate("Jay", 1, 'blue'));
        this.deck.push(new Inmate("Robert", 2, 'green'));
        this.deck.push(new Inmate("Henry", 4, 'red'));
        this.deck.push(new Inmate("Joe", 5, 'purple'));
        this.deck.push(new Inmate("Morgan", 3, 'red'));
        this.deck.push(new Inmate("Larry", 1, 'green'));
        this.deck.push(new Inmate("Bob", 2, 'purple'));
        this.deck.push(new Inmate("Devon", 4, 'green'));
        this.deck.push(new Inmate("Louis", 3, 'blue'));
        this.deck.push(new Inmate("David", 2, 'red'));
        this.deck.push(new Inmate("Jim", 1, 'purple'));
        this.deck.push(new Inmate("Hubert", 2, 'green'));
    }

    draw(quantity){
        for (var i = 0; i < quantity; i++){
            this.inmateQueue.push(this.deck.pop());
        }
    }

    isInmateInQueue(inmate){
        for (var i = 0; i < this.inmateQueue.length;i++){
            if (this.inmateQueue[i].name == inmate.name){
                return true;
            }

        }
        return false;
    }

    getPlaceInQueue(card){
        if (this.isInmateInQueue(card) == false){
            return -1;
        }

        for (var i = 0; i < this.inmateQueue.length;i++){
            if (card.name == this.inmateQueue[i].name){
                return i;
            }
        }
    }

    swapByIndices(index1, index2){
        var temp = inmateDeck[index1];
        inmateDeck[index1] = inmateDeck[index2];
        inmateDeck[index2] = temp;
    }

    copyRandomQueueCard(){
        var index = Math.floor(Math.random() * this.inmateQueue.length);
        return this.inmateQueue[index];
    }





}
