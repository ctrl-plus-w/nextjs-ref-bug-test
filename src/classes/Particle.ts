import Vector from '@class/Vector';

/**
 * The particle
 */
class Particle {
  position: Vector;
  velocity: Vector;
  radius: number;
  opacity: number;

  constructor(
    position: Vector,
    velocity: Vector,
    radius: number,
    opacity: number
  ) {
    this.position = position;
    this.velocity = velocity;
    this.radius = radius;
    this.opacity = opacity;
  }
}

export default Particle;
