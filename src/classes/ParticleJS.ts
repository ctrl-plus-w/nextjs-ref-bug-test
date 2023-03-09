import Particle from '@class/Particle';
import Vector from '@class/Vector';

export interface IConfig {
  particle?: {
    minSize?: number;
    size?: number;
    amount?: number;
    speed?: number;
  };
  attract?: {
    distance?: number;
    rotateX?: number;
    rotateY?: number;
  };
}

/**
 * ParticleJS - The class managing the particles
 */
class ParticleJS {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D | null;

  width: number;
  height: number;

  particleConfig: {
    minSize: number;
    size: number;
    amount: number;
    speed: number;
  };

  attractConfig: {
    distance: number;
    rotateX: number;
    rotateY: number;
  };

  particles: Particle[];

  constructor(canvas: HTMLCanvasElement, config: IConfig) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');

    this.width = canvas.width;
    this.height = canvas.height;

    this.particleConfig = {
      minSize: config?.particle?.minSize || 0,
      size: config?.particle?.size || 10,
      amount: config?.particle?.amount || 10,
      speed: config?.particle?.speed || 2
    };

    this.attractConfig = {
      distance: config?.attract?.distance || 300,
      rotateX: config?.attract?.rotateX || 2500,
      rotateY: config?.attract?.rotateY || 2500
    };

    this.particles = [];

    this.generateParticles();
  }

  /**
   * Clear the class
   */
  clear() {
    this.particles = [];
  }

  /**
   * Animation Frame Tick
   */
  tick() {
    this.clearCanvas();

    for (let i = 0; i < this.particles.length; i++) {
      const particle = this.particles[i];

      this.updateParticle(particle, i);
      this.drawParticle(particle, i);
    }
  }

  /**
   * Clear the canvas
   */
  clearCanvas() {
    if (!this.context) return;

    this.context.clearRect(0, 0, this.width, this.height);
  }

  /**
   * Update a particle
   * @param particle The particle to update
   * @param i The particle index
   */
  updateParticle(particle: Particle, i: number) {
    const ms = this.particleConfig.speed / 2;

    // Update particle position depending on the velocity
    particle.position.x += particle.velocity.x * ms;
    particle.position.y += particle.velocity.y * ms;

    // Invert velocity if bouncing
    const distFromCenter =
      Math.sqrt(particle.position.x ** 2 + particle.position.y ** 2) +
      particle.radius;
    if (distFromCenter >= this.width / 2) {
      particle.velocity = new Vector(
        -particle.velocity.x,
        -particle.velocity.y
      );
    }

    // Attract to others particles
    for (let j = i + 1; j < this.particles.length; j++) {
      this.attractParticles(particle, this.particles[j]);
    }
  }

  /**
   * Render a particle on the canvas
   * @param particle The particle to update
   * @param _i The index of the particle
   */
  drawParticle(particle: Particle, _i: number) {
    if (!this.context) return;

    this.context.fillStyle = `rgba(28, 22, 4, ${particle.opacity})`;

    this.context.beginPath();
    this.context.arc(
      particle.position.x + this.width / 2,
      particle.position.y + this.height / 2,
      particle.radius,
      0,
      2 * Math.PI
    );
    this.context.closePath();
    this.context.fill();
  }

  /**
   * Update the particles to attract each other
   * @param p1 Particle 1
   * @param p2 Particle 2
   */
  attractParticles(p1: Particle, p2: Particle) {
    const deltaX = p1.position.x - p2.position.x;
    const deltaY = p1.position.y - p2.position.y;

    const dist = Math.sqrt(deltaX ** 2 + deltaY ** 2);

    if (dist <= this.attractConfig.distance) {
      const acceleration = new Vector(
        deltaX / (this.attractConfig.rotateX * 1000),
        deltaY / (this.attractConfig.rotateY * 1000)
      );

      p1.velocity = Vector.sub(p1.velocity, acceleration);
      p2.velocity = Vector.add(p2.velocity, acceleration);
    }
  }

  /**
   * Generate the particles
   */
  generateParticles() {
    console.log('generating particles');
    for (let i = 0; i < this.particleConfig.amount; i++) {
      const randomDist =
        Math.random() * (this.width / 2 - this.particleConfig.size);
      const randomAngle = Math.random() * Math.PI * 2;
      const randomOpacity = Math.random() * 0.5 + 0.5;
      const randomRadius =
        Math.random() *
          (this.particleConfig.size - this.particleConfig.minSize) +
        this.particleConfig.minSize;

      const position = new Vector(
        Math.cos(randomAngle) * randomDist,
        Math.sin(randomAngle) * randomDist
      );

      const velocity = new Vector(Math.random() - 0.5, Math.random() - 0.5);

      this.particles.push(
        new Particle(position, velocity, randomRadius, randomOpacity)
      );
    }
  }
}

export default ParticleJS;
