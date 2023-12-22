export class Piece {
  position: number = 0;
  status: boolean = false;
  isHovered: boolean = false;

  constructor(position: number, status: boolean = false) {
    this.position = position;
    this.status = status;
  }

  isOverlapping(filedDiv: DOMRect, boatDiv: DOMRect) {
    return !(
      filedDiv.top > boatDiv.bottom ||
      filedDiv.right < boatDiv.left ||
      filedDiv.bottom < boatDiv.top ||
      filedDiv.left > boatDiv.right
    );
  }
}
