export class Piece {
  public position: number = 0;
  public status: boolean = false;

  constructor(position: number, status: boolean = false) {
    this.position = position;
    this.status = status;
  }
}
