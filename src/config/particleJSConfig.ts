import { IConfig } from '@class/ParticleJS';

interface IAdditionalConfig {
  fps: number;
}

const particleJSConfig: IConfig & IAdditionalConfig = {
  fps: 120,
  particle: {
    minSize: 4,
    size: 11,
    amount: 40,
    speed: 4
  },
  attract: {
    distance: 300,
    rotateX: 500,
    rotateY: 500
  }
};

export default particleJSConfig;
