<template>
  <div class="match-stats">
    <h2>Played matches</h2>
    <div class="match-scoreboard">
      <div
        v-for="n in maxMatches"
        v-bind:key="`match-${n}`"
        v-bind:class="{ played: n <= matchHistory.length, dot: true }"
      />
    </div>
    <h2>Game history</h2>
    <div class="match-scoreboard">
      <div v-for="n in maxMatches" v-bind:key="`match-result-${n}`" class="box">
        {{ matchHistory[n - 1] }}
      </div>
    </div>
  </div>
</template>

<script>
// addSeconds,
import { format, setHours, addSeconds } from 'date-fns';
import { maxMatches } from '../../appState';

export default {
  name: 'SessionMatches',
  props: {
    matchHistory: Array,
    totalTime: Number,
  },
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
    };
  },
};
</script>

<style lang="scss" scoped>
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
</style>
