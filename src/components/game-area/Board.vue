<template>
  <div class="board">
    <Cell
      v-for="(player, index) in board"
      :player="player"
      :winner="winningPositions.includes(index)"
      @clicked="cellClicked"
      :key="index"
      :isTicTacToe="isTicTacToe"
    />
  </div>
</template>

<script>
import { store } from '../../appState';
import Cell from './Cell.vue';

const winningCombinations = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

export default {
  name: 'Board',
  components: { Cell },
  props: {
    isTicTacToe: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    isTicTacToe: function() {
      if (this.isTicTacToe) {
        this.board = Array(9).fill(null);
      } else {
        // this.board = Array(6).fill(Array(7).fill(null));
        this.board = Array(42).fill(null);
      }
    },
  },
  data() {
    return {
      gameState: store.state,
      gameStarted: false,
      matchDuration: 0,
      currentPlayer: 'p1',
      board: Array(9).fill(null),
      winningPositions: [],
      // onMatchFinnish
    };
  },
  methods: {
    togglePlayer: function() {
      this.currentPlayer = this.currentPlayer === 'p1' ? 'p2' : 'p1';
    },
    cellClicked: function(cellNumber) {
      if (!this.gameStarted) {
        this.gameStarted = true;
        this.$emit('gameStarted');
      }
      if (this.winningPositions.length === 0 && !this.board[cellNumber]) {
        this.$set(this.board, cellNumber, this.currentPlayer);
        this.confirmWin();
      }
    },
    confirmWin: function() {
      const moves = this.board.reduce((acc, curr) => acc + (curr ? 1 : 0), 0);
      if (moves >= 5) {
        let positions = winningCombinations.find((positions) => {
          let a, b, c;
          [a, b, c] = positions;

          console.log(a, b, c);
          return (
            this.board[a] &&
            this.board[b] &&
            this.board[c] &&
            this.board[a] === this.board[b] &&
            this.board[b] === this.board[c]
          );
        });
        console.log('win', positions, this.currentPlayer);
        if (positions) {
          this.winningPositions = positions;
          this.$emit('gameEnded');
        } else {
          console.log('a1');
          this.togglePlayer();
        }
      } else {
        console.log('a2');
        this.togglePlayer();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.board {
  flex: 1 0 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  margin-bottom: 20px;
}

@media only screen and (max-width: 768px) {
  .board {
    order: 1;
    flex: 1 0 100%;
  }
}
</style>
