<template>
  <div id="app">
    <Header />
    <div class="app-content">
      <Profile />
      <GameArea />
      <Stats />
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';
import Profile from './components/Profile.vue';
import Stats from './components/stats/Stats.vue';
import Footer from './components/Footer.vue';
import GameArea from './components/game-area/GameArea.vue';
import { store } from './appState';

export default Vue.extend({
  name: 'App',
  components: {
    Header,
    Profile,
    Stats,
    Footer,
    GameArea,
  },
  data() {
    return {
      gameState: store.state,
    };
  },
});
</script>

<style lang="scss">
@import './styles/general/__general.scss';

#app {
  font-family: 'Glacial Indifference', 'GlacialIndifference', Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: useColor('black');
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;

  .app-content {
    flex: 1;
    overflow: auto;
  }
}
</style>
