
import { performance, PerformanceObserver } from 'perf_hooks';
// SETUP 🏁

let iterations = 1e7;

const a: number = 1;
const b: number = 2;

const add = (x: number, y: number) => x + y;

// 🔚 SETUP

performance.mark('start');

// EXERCISE 💪

while (iterations--) {
  add(a, b);
}

// 🔚 EXERCISE

performance.mark('end');

const obs = new PerformanceObserver((list, observer) => {
  console.log(list.getEntries()[0]);
  performance.clearMarks();
  observer.disconnect();
});

obs.observe({ entryTypes: ['measure'] });

performance.measure('My Special Benchmark', 'start', 'end');