import { Boat } from "@/models";

export class Field {
  id: number = 0;
  name: string;
  freePositions: number[] = [];
  boats: Boat[] = [];

  constructor(name: string) {
    this.name = name;
  }

  setFreePosition(position: number) {
    this.freePositions.push(position);
  }
}
