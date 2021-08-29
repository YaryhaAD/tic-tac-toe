class TicTacToe {

    constructor() {
        this.player = 'x'; 
        this.field = Array(9).fill(null);
        this.winSets = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        this.i = (row, col) => 3*row + col;
        this.checkWin = set => set.map(this.getFieldValue).join('').match(/(.)\1{2}/);
        
        this.getFieldValue = (row, col, arr) => this.field[arr ? row : this.i(row, col)];
    }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
        return !this.field[this.i(rowIndex, columnIndex)] ? (this.field[this.i(rowIndex, columnIndex)] = this.player, this.player = this.player == 'x' ? 'o' : 'x') : null;
    }

    isFinished() {
        return this.isDraw() || !!this.getWinner();
    }

    getWinner() {
        return this.winSets.map(this.checkWin).join('')[0] || null;
    }

    noMoreTurns() {
        return !this.field.includes(null);
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner() ;
    }
}

module.exports = TicTacToe;