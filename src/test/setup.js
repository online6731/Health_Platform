import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();
  document.documentElement.className = '';
  localStorage.clear();
});

class ResizeObserverMock {
  constructor(callback) {
    this.callback = callback;
  }

  observe(target) {
    this.callback([{ target, contentRect: target.getBoundingClientRect() }]);
  }
  unobserve() {}
  disconnect() {}
}

class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

globalThis.ResizeObserver = ResizeObserverMock;
globalThis.IntersectionObserver = IntersectionObserverMock;

Object.defineProperty(window, 'matchMedia', {
  configurable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener() {},
    removeEventListener() {},
    addListener() {},
    removeListener() {},
    dispatchEvent() { return false; },
  }),
});

Object.defineProperty(navigator, 'clipboard', {
  configurable: true,
  value: { async writeText() {} },
});

window.scrollTo = () => {};
HTMLElement.prototype.scrollIntoView = () => {};
HTMLElement.prototype.getBoundingClientRect = () => ({
  width: 1024,
  height: 640,
  top: 0,
  right: 1024,
  bottom: 640,
  left: 0,
  x: 0,
  y: 0,
  toJSON: () => ({}),
});
