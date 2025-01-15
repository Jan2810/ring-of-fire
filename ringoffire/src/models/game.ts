export class Game {
    public players: string[] = ['Hans', 'Peter', 'Freddy'];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;

    constructor() {
        for (let i = 1; i < 14; i++) {
            this.stack.push(`ace_${i}`)
            this.stack.push(`hearts_${i}`)
            this.stack.push(`clubs_${i}`)
            this.stack.push(`diamonds_${i}`)
        };

        const shuffle = (arr: string[]) => {
            return arr.sort(() => 0.5 - Math.random());
        };

        this.stack = shuffle(this.stack);
    }
}