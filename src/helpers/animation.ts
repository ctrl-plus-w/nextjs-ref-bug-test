import Vector from '@class/Vector';

/**
 * Linear interpolation
 * @param start The start value
 * @param end The end value
 * @param duration The progress of the animation
 * @returns A number
 */
export const lerp = (start: number, end: number, duration: number): number => {
  return start + (end - start) * duration;
};

/**
 * Linear interpolation (for Vector)
 * @param start The start value
 * @param end The end value
 * @param duration The progress of the animation
 * @returns A Vector
 */
export const vectorLerp = (
  start: Vector,
  end: Vector,
  duration: number
): Vector => {
  return new Vector(
    start.x + (end.x - start.x) * duration,
    start.y + (end.y - start.y) * duration
  );
};
