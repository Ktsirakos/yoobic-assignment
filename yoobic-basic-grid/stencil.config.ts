import { Config } from '@stencil/core';
// import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'yoobic-basic-grid',
  taskQueue: 'async',
  outputTargets: [
    // reactOutputTarget({
    //   componentCorePackage: 'yoobic-basic-grid',
    //   proxiesFile: '../yoobic-basic-grid-react/src/components.ts',
    // }),
    angularOutputTarget({
      componentCorePackage: 'yoobic-basic-grid',
      directivesProxyFile: '../yoobic-library-angular/src/directives/proxies.ts',
    }),
    {
      type: 'dist',
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
};
