<template>
  <div class="game-timer">
    <div class="timer-container">
      <div class="slot">{{ this.zeroPrefix(hours, 2) }}</div>
      <div>:</div>
      <div class="slot">{{ this.zeroPrefix(minutes, 2) }}</div>
      <div>:</div>
      <div class="slot">{{ this.zeroPrefix(seconds, 2) }}</div>
    </div>
  </div>
</template>

<script>
import { differenceInSeconds } from 'date-fns';

export default {
  name: 'Timer',
  props: {
    running: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    running: function() {
      console.log('aqui', this.running);
      if (this.running) {
        console.log('starting');
        this.start();
      } else {
        console.log('stopping');
        this.stop();
        this.$emit(
          'stopedTimer',
          differenceInSeconds(this.timeStopped, this.timeBegan)
        );
      }
    },
  },
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
      timeBegan: null,
      timeStopped: null,
      stoppedDuration: 0,
      started: null,
    };
  },
  methods: {
    start() {
      this.reset();
      this.timeBegan = new Date();

      this.started = setInterval(this.clockRunning, 10);
    },
    stop() {
      this.timeStopped = new Date();
      clearInterval(this.started);
    },
    reset() {
      clearInterval(this.started);
      this.stoppedDuration = 0;
      this.timeBegan = null;
      this.timeStopped = null;
    },
    clockRunning() {
      var currentTime = new Date(),
        timeElapsed = new Date(
          currentTime - this.timeBegan - this.stoppedDuration
        );

      this.hours = timeElapsed.getUTCHours();
      this.minutes = timeElapsed.getUTCMinutes();
      this.seconds = timeElapsed.getUTCSeconds();
    },
    zeroPrefix(num, digit) {
      var zero = '';
      for (var i = 0; i < digit; i++) {
        zero += '0';
      }
      return (zero + num).slice(-digit);
    },
  },
};
</script>

<style lang="scss" scoped>
.game-timer {
  flex: 1 0 100%;
  display: flex;
  justify-content: center;

  .timer-container {
    text-align: center;
    display: flex;
    align-items: center;

    .slot {
      min-width: 20px;
      text-align: left;
      font-size: font-size(m);
    }
  }
}

@media only screen and (max-width: 768px) {
  .game-timer {
    flex: 1 0 30%;
    order: 3;
  }
}
</style>
