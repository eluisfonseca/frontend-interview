export type MatchResult = 'p1' | 'p2' | 'd';
interface AppState {
  matchHistory: MatchResult[];
  totalTime: number;
  playerStats: {
    p1: {
      wins: number;
      loses: number;
      draws: number;
    };
    p2: {
      wins: number;
      loses: number;
      draws: number;
    };
  };
}

const defaultState: AppState = {
  matchHistory: ['p1', 'p2', 'd', 'p1'],
  totalTime: 320,
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

export const maxMatches = 9;

export const store = {
  debug: true,
  state: defaultState,
  addFinishedMatch(matchResult: 'p1' | 'p2' | 'd', matchDuration: number) {
    if (this.debug) console.log('addFinishedMatch triggered with', matchResult);
    this.state.matchHistory.push(matchResult);
    this.state.totalTime += matchDuration;
  },
  resetGame() {
    if (this.debug) console.log('Reset game triggered');
    this.state = defaultState;
  },
};
