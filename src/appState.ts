const defaultState = {
  matchesCount: 0,
  matchHistory: [],
  totalTime: 0,
  playerStats: {
    p1: {
      wins: 0,
      loses: 0,
      draws: 0,
    },
    p2: {
      wins: 0,
      loses: 0,
      draws: 0,
    },
  },
};

export let store = {
  debug: true,
  state: defaultState,
  addFinishedMatch(matchResult: 'p1' | 'p2' | 'd', matchDuration: number) {
    if (this.debug) console.log('addFinishedMatch triggered with', matchResult);
    this.state.matchesCount += 1;
    this.state.matchHistory.push(matchResult);
    this.state.totalTime += matchDuration;
  },
  resetGame() {
    if (this.debug) console.log('Reset game triggered');
    this.state = defaultState;
  },
};
