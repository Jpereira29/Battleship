type Position = {
  top: number;
  left: number;
  // bottom: number;
  // right: number;
};

export class Boat {
  id: number = 0;
  name: string;
  size: number;
  positions: Position = {
    top: this.random() * 40,
    left: this.random() * 40,
    // bottom: 50,
    // right: 40,
  };

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }

  random(): number {
    return Math.floor(Math.random() * 6) + 1;
  }
}

