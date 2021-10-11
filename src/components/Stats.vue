<template>
  <div class="stats-container">
    <div class="header">
      <h1>Awesome statistics</h1>
      <p>All statistics in one place!</p>
    </div>
    <div class="game-stats"></div>
    <div>
      <h2>Total time</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stats',
  props: ['matches', 'history', 'time', 'playerData'],
};
</script>

<style lang="scss" scoped>
.stats-container {
  padding: 15px 10%;

  .header {
    text-align: center;
  }
}

@media only screen and (max-width: 768px) {
  .stats-container {
    padding: 15px;
  }
}
</style>
