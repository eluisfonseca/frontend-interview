<template>
  <div id="app">
    <Header />
    <div class="app-content">
      <Profile />
      <Stats />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Profile from './components/Profile.vue';
import Stats from './components/Stats.vue';
import Footer from './components/Footer.vue';
import { store } from './appState.ts';

export default {
  name: 'App',
  components: {
    Header,
    Profile,
    Stats,
    Footer,
  },
  data() {
    return {
      gameState: store.state,
    };
  },
};
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
