interface GameState {
  cells: Cell[];
  currentPlayerMessage: string;
  winnerMessage: string;
}

interface Cell {
  text: string;
  playable: boolean;
  x: number;
  y: number;
}

export type { GameState, Cell }