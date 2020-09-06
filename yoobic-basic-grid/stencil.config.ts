import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'yoobic-basic-grid',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
  ],
};
