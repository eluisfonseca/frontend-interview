<template>
  <div
    v-bind:class="{ cell: true, empty: !player, 'four-in-row': !isTicTacToe }"
    v-on:click="clickCell"
  >
    <img :src="imgSrc()" v-if="player" alt="Sword Health Logo" />
  </div>
</template>

<script>
export default {
  name: 'Cell',
  props: {
    player: String,
    winner: Boolean,
    isTicTacToe: Boolean,
  },
  methods: {
    imgSrc: function() {
      const imgSufix = this.winner ? '_bright' : '_dark';
      return this.player === 'p1'
        ? require(`../../assets/images/X${imgSufix}.svg`)
        : require(`../../assets/images/O${imgSufix}.svg`);
    },
    clickCell: function() {
      this.$emit('clicked', this.$vnode.key);
    },
    getImgUrl() {
      return require('../../assets/images/X_dark.svg');
    },
  },
};
</script>

<style lang="scss" scoped>
.cell {
  width: 30%;
  padding: 7px;
  box-sizing: border-box;
  flex-shrink: 0;

  &.four-in-row {
    width: 14%;
    border: 1px solid useColor('gray');
    &.empty {
      padding-bottom: 12%;
    }
  }

  &.empty {
    padding-bottom: 28%;
  }

  &:first-of-type:not(.four-in-row) {
    border-right: 1px solid useColor('gray');
    border-bottom: 1px solid useColor('gray');
  }

  &:nth-child(2):not(.four-in-row) {
    border-right: 1px solid useColor('gray');
    border-bottom: 1px solid useColor('gray');
    border-left: 1px solid useColor('gray');
  }

  &:nth-child(3):not(.four-in-row) {
    border-left: 1px solid useColor('gray');
    border-bottom: 1px solid useColor('gray');
  }

  &:nth-child(4):not(.four-in-row) {
    border-right: 1px solid useColor('gray');
    border-bottom: 1px solid useColor('gray');
    border-top: 1px solid useColor('gray');
  }

  &:nth-child(5):not(.four-in-row) {
    border: 1px solid useColor('gray');
  }

  &:nth-child(6):not(.four-in-row) {
    border-top: 1px solid useColor('gray');
    border-bottom: 1px solid useColor('gray');
    border-left: 1px solid useColor('gray');
  }

  &:nth-child(7):not(.four-in-row) {
    border-top: 1px solid useColor('gray');
    border-right: 1px solid useColor('gray');
  }

  &:nth-child(8):not(.four-in-row) {
    border-right: 1px solid useColor('gray');
    border-top: 1px solid useColor('gray');
    border-left: 1px solid useColor('gray');
  }

  &:nth-child(9):not(.four-in-row) {
    border-top: 1px solid useColor('gray');
    border-left: 1px solid useColor('gray');
  }

  &:hover {
    border: 1px solid useColor('black');
  }

  img {
    height: 95%;
    width: 95%;
  }
}

@media only screen and (max-width: 768px) {
}
</style>
