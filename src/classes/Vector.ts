/**
 * A vector
 */
class Vector {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  /**
   * Get the vector coordinates as string
   * @param parenthesis Whether the vector coordinates will be wrapped in parenthesis
   * @param sep The separator of the coordinate
   * @returns A string
   */
  toString(parenthesis = false, sep = ' ') {
    const content = `${this.x}${sep}${this.y}`;
    return parenthesis ? `(${content})` : content;
  }

  /**
   * Make the sum of two vectors
   * @param v1 Vector 1
   * @param v2 Vector 2
   * @returns A Vector
   */
  static add(v1: Vector, v2: Vector) {
    return new Vector(v1.x + v2.x, v1.y + v2.y);
  }

  /**
   * Subtract two vectors (v1 - v2)
   * @param v1 Vector 1
   * @param v2 Vector 2
   * @returns A Vector
   */
  static sub(v1: Vector, v2: Vector) {
    return new Vector(v1.x - v2.x, v1.y - v2.y);
  }
}

export default Vector;
