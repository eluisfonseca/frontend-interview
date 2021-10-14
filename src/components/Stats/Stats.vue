<template>
  <div class="stats-container">
    <div class="header">
      <h1>Awesome statistics</h1>
      <p>All statistics in one place!</p>
    </div>
    <div class="game-stats">
      <PlayerStats v-bind:matchHistory="gameState.matchHistory" />
      <SessionMatches
        v-bind:totalTime="gameState.totalTime"
        v-bind:matchHistory="gameState.matchHistory"
      />
    </div>
    <div>
      <h2>Total time</h2>
      <p>{{ formattedTime(gameState.totalTime) }}</p>
    </div>
  </div>
</template>

<script>
import { format, setHours, addSeconds } from 'date-fns';
import { maxMatches, store } from '../../appState';
import SessionMatches from './Matches.vue';
import PlayerStats from './Players.vue';

export default {
  name: 'Stats',
  components: {
    SessionMatches,
    PlayerStats,
  },
  // props: {
  //   matchHistory: Array,
  //   totalTime: Number,
  //   playerStats: Object,
  // },
  methods: {
    formattedTime: function(seconds) {
      console.log(new Date(0));
      let helperDate = setHours(new Date(0), 0);
      return format(addSeconds(helperDate, seconds), 'HH:mm:ss');
    },
  },
  data() {
    return {
      maxMatches,
      gameState: store.state,
    };
  },
};
</script>

<style lang="scss" scoped>
.stats-container {
  padding: 15px 10%;

  .header {
    text-align: center;
  }

  & > div {
    text-align: center;
  }

  .players-stats {
    min-width: 45%;
    .players {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 360px;
      margin: 0 auto;

      > div {
        flex: 0 0 140px;

        &:nth-child(2) {
          flex: 1 0 40px;
        }
      }

      .winrate {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .entry {
          &:first-of-type {
            margin-right: 7px;
          }

          &:last-of-type {
            margin-left: 7px;
          }

          .percentage {
            height: 56px;
            width: 56px;
            border-radius: 50%;
            background-color: useColor('gray');
            line-height: 56px;
            font-size: font-size(m);
            font-weight: bold;
            color: useColor('white');
          }
        }
      }
    }
  }

  .game-stats {
    display: flex;
    justify-content: space-between;

    .match-stats {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;

      .match-scoreboard {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin-bottom: 30px;

        .dot {
          height: 22px;
          width: 22px;
          border: 1px solid useColor('gray');
          border-radius: 50%;
          margin-right: 3px;

          &.played {
            background-color: useColor('gray');
          }

          &:last-of-type {
            margin: 0;
          }
        }

        .box {
          box-sizing: border-box;
          height: 31px;
          width: 31px;
          border: 1px solid useColor('gray');
          margin-right: 5px;
          line-height: 31px;
          text-align: center;
          text-transform: capitalize;
          font-size: font-size(m);

          &:last-of-type {
            margin: 0;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .stats-container {
    padding: 15px;
    .players-stats {
      width: 100%;
    }
    .game-stats {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
