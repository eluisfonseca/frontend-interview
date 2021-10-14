<template>
  <div class="players-stats">
    <h2>Game victories %</h2>
    <div class="players">
      <div>
        <h3>Player 1</h3>
        <div class="winrate">
          <div class="entry">
            <div class="percentage">{{ calculateRate('p1') }}%</div>
            <p>V</p>
          </div>
          <div class="entry">
            <div class="percentage">{{ calculateRate('p1', false) }}%</div>
            <p>L</p>
          </div>
        </div>
      </div>
      <div />
      <div>
        <h3>Player 2</h3>
        <div class="winrate">
          <div class="entry">
            <div class="percentage">{{ calculateRate('p2') }}%</div>
            <p>V</p>
          </div>
          <div class="entry">
            <div class="percentage">{{ calculateRate('p2', false) }}%</div>
            <p>L</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerStats',
  props: {
    matchHistory: Array,
  },
  methods: {
    calculateRate: function(player, isWin = true) {
      let numberOfMatches = isWin
        ? this.matchHistory.filter((winner) => winner === player).length
        : this.matchHistory.filter(
            (winner) => winner !== player && winner !== 'd'
          ).length;
      return ((numberOfMatches * 100) / this.matchHistory.length).toFixed(0);
    },
  },
};
</script>

<style lang="scss" scoped>
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
          color: white;
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .players-stats {
    width: 100%;
  }
}
</style>
