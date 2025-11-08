declare module "lenis" {
  export interface LenisOptions {
    duration?: number;
    easing?: (t: number) => number;
    smoothWheel?: boolean;
    touchMultiplier?: number;
    infinite?: boolean;
    wheelMultiplier?: number;
    lerp?: number;
    syncTouch?: boolean;
    syncTouchLerp?: number;
    wrapper?: HTMLElement;
    content?: HTMLElement;
    gestureOrientation?: "vertical" | "horizontal";
  }

  export default class Lenis {
    constructor(options?: LenisOptions);
    on(event: string, callback: Function): void;
    raf(time: number): void;
    destroy(): void;
  }
}

