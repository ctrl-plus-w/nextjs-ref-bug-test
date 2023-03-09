class Color {
  r: number;
  g: number;
  b: number;
  a: number;

  constructor(r: number, g: number, b: number, a = 1) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  toString(alpha = true) {
    return alpha
      ? `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`
      : `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
}

export default Color;
