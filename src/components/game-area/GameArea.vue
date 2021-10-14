<template>
  <div class="game-area-container">
    <div class="header">
      <h1>Tic tac toe games</h1>
      <p>Welcome to the best game in the world.</p>
      <div class="buttons-container">
        <button v-bind:class="{ active: isTicTacToe }" v-on:click="toggleGame">
          Tic tac toe
        </button>
        <button v-bind:class="{ active: !isTicTacToe }" v-on:click="toggleGame">
          4-in-a-row
        </button>
      </div>
      <div class="play-area">
        <div class="player-1">
          <h1>Player 1</h1>
          <div class="points">{{ calculateWins('p1') }}</div>
        </div>
        <Board
          :isTicTacToe="isTicTacToe"
          @gameStarted="toggleTimer"
          @gameEnded="toggleTimer"
        />
        <div class="player-2">
          <h1>Player 2</h1>
          <div class="points">{{ calculateWins('p2') }}</div>
        </div>
        <!-- <button v-on:click="toggleTimer">
          Start\Stop
        </button> -->
        <Timer v-bind:running="gameStarted" @stopedTimer="onMatchFinnish" />
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../../appState';
import Timer from './Timer.vue';
import Board from './Board.vue';

export default {
  name: 'GameArea',
  components: {
    Timer,
    Board,
  },
  data() {
    return {
      gameState: store.state,
      isTicTacToe: true,
      gameStarted: false,
      matchDuration: 0,
      currentPlayer: 'p1',
      // onMatchFinnish
    };
  },
  methods: {
    calculateWins: function(player) {
      return this.gameState.matchHistory.filter(
        (winner) => winner === player || winner === 'd'
      ).length;
    },
    toggleTimer: function() {
      console.log('cenas');
      this.gameStarted = !this.gameStarted;
    },
    onMatchFinnish: function(duration) {
      console.log(duration);
      this.matchDuration = duration;
      store.addFinishedMatch(this.currentPlayer, duration);
    },
    toggleGame: function() {
      this.isTicTacToe = !this.isTicTacToe;
    },
  },
};
</script>

<style lang="scss" scoped>
.game-area-container {
  background-color: useColor('white');
  padding: 30px 10%;
  text-align: center;

  .buttons-container {
    margin-bottom: 40px;
    button {
      font-size: font-size(m);
      text-align: center;
      padding: 5px 10px;
      min-width: 136px;
      background-color: white;
      color: useColor('black');
      border: none;
      outline: none;
      transition: background-color 1s, color 500ms;
      height: 42px;
      border-radius: 4px;

      &.active {
        background-color: useColor('gray');
        color: white;
      }
    }
  }

  .play-area {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;

    .player-1,
    .player-2 {
      flex: 0 1 20%;
    }

    .points {
      font-size: font-size(xxl);
    }
  }
}

@media only screen and (max-width: 768px) {
  .game-area-container {
    padding: 15px;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .play-area {
      .player-1 {
        order: 2;
      }

      .game-timer {
        flex: 1 0 30%;
        order: 3;
      }

      .player-2 {
        order: 4;
      }

      h1 {
        font-size: font-size(m);
      }

      .points {
        font-size: font-size(xl);
      }
    }
  }
}
</style>
