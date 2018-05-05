# Angularv6Uirouter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

Adding `rxjs-compat` to ensure backward compat of rxjs between v5 and v6.

Adding Angular UI Router and add a simple app state.

Everything is ok until you activate `buildOptimizer`. It's building without any error or warning, but at run time:
The bundled import of [src/transition/interface.ts](https://github.com/ui-router/core/blob/master/src/transition/interface.ts) is empty.

Without buildOptimizer these enums are exported:
```
export enum TransitionHookPhase {
  CREATE,
  BEFORE,
  RUN,
  SUCCESS,
  ERROR,
}
export enum TransitionHookScope {
  TRANSITION,
  STATE,
}
```
and are transformed in `es5`:
```
{
  TransitionHookPhase: {0: "CREATE", 1: "BEFORE", 2: "RUN", 3: "SUCCESS", 4: "ERROR", CREATE: 0, BEFORE: 1, RUN: 2, SUCCESS: 3, ERROR: 4},
  TransitionHookScope: {0: "TRANSITION", 1: "STATE", TRANSITION: 0, STATE: 1}
}
```


## Objective

Reproduce the issue #171 on UIRouter Core: [Angular v6 build with AOT and buildOptimizer failed at runtime](https://github.com/ui-router/core/issues/171)

## Build

Run `ng build --prod` for the `production build` project. The build artifacts will be stored in the `dist/` directory.

