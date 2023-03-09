import type { ReactElement } from 'react';

import Vector from '@class/Vector';
import Color from '@class/Color';

/**
 * The Curve
 */
class Curve {
  width: number;
  height: number;
  p0: Vector;
  p0Drag: Vector;
  p1Drag1: Vector;
  p1: Vector;
  p1Drag2: Vector;
  p2Drag: Vector;
  p2: Vector;
  color: Color;

  /**
   * Create a curve
   * @param width The width of the curve box
   * @param height The height of the curve box
   * @param p0 The first point of the curve
   * @param p0Drag The drag point of the first point
   * @param p1Drag1 The first drag point of the middle point
   * @param p1 The middle point of the curve
   * @param p1Drag2 The second drag point of the middle point
   * @param p2Drag The drag point of the last point
   * @param p2 The last point of the curvz
   * @param color The color of the curve
   */
  constructor(
    width: number,
    height: number,
    p0: Vector,
    p0Drag: Vector,
    p1Drag1: Vector,
    p1: Vector,
    p1Drag2: Vector,
    p2Drag: Vector,
    p2: Vector,
    color: Color
  ) {
    this.width = width;
    this.height = height;
    this.p0 = p0;
    this.p0Drag = p0Drag;
    this.p1Drag1 = p1Drag1;
    this.p1 = p1;
    this.p1Drag2 = p1Drag2;
    this.p2Drag = p2Drag;
    this.p2 = p2;
    this.color = color;
  }

  copy() {
    return new Curve(
      this.width,
      this.height,
      this.p0,
      this.p0Drag,
      this.p1Drag1,
      this.p1,
      this.p1Drag2,
      this.p2,
      this.p2Drag,
      this.color
    );
  }

  /**
   * Get the SVG path of the Curve
   * @returns A String
   */
  getPath(): string {
    return `
      <path
        d="M${this.p0.toString()} C${this.p0Drag.toString()} ${this.p1Drag1.toString()} ${this.p1.toString()} C${this.p1Drag2.toString()} ${this.p2Drag.toString()} ${this.p2.toString()}"
        stroke="${this.color.toString()}"
      />`;
  }

  /**
   * Get the SVG path of the Curve as a React Element
   * @returns A ReactElement
   */
  getReactPath(): ReactElement {
    return (
      <path
        d={`M${this.p0.toString()} C${this.p0Drag.toString()} ${this.p1Drag1.toString()} ${this.p1.toString()} C${this.p1Drag2.toString()} ${this.p2Drag.toString()} ${this.p2.toString()}`}
        stroke={this.color.toString()}
      />
    );
  }

  /**
   * Get the SVG of the Curve
   * @returns A ReactElement
   */
  toSvg(): string {
    return `
    <svg width="${this.width}" height="${this.height}" viewBox="0 0 ${
      this.width
    } ${this.height}" fill="none" xmlns="http://www.w3.org/2000/svg">
      ${this.getPath()}
    </svg>
    `;
  }

  /**
   * Combine the paths of two curves and return a svg tag
   * @param curve1 The first curve
   * @param curve2 The second curve
   * @returns A SVG
   */
  static combinePaths(curve1: Curve, curve2: Curve) {
    if (curve1.width !== curve2.width || curve1.height !== curve2.height)
      console.warn(
        "Warning : Combining curves that doesn't have the same size."
      );

    const width = Math.max(curve1.width, curve2.height);
    const height = Math.max(curve1.height, curve2.height);

    return `
      <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
        ${curve1.getPath()}
        ${curve2.getPath()}
      </svg>
      `;
  }

  /**
   * Combine the paths of two curves and return a react svg tag
   * @param curve1 The first curve
   * @param curve2 The second curve
   * @returns A React SVG
   */
  static reactCombinePaths(curve1: Curve, curve2: Curve): ReactElement {
    if (curve1.width !== curve2.width || curve1.height !== curve2.height)
      console.warn(
        "Warning : Combining curves that doesn't have the same size."
      );

    const width = Math.max(curve1.width, curve2.width);
    const height = Math.max(curve1.height, curve2.height);

    return (
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {curve1.getReactPath()}
        {curve2.getReactPath()}
      </svg>
    );
  }
}

export default Curve;
