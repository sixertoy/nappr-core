import { sleep } from './sleep';

describe('sleep', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should resolve after specified milliseconds', async () => {
    const promise = sleep(100);
    let resolved = false;

    promise.then(() => {
      resolved = true;
    });

    expect(resolved).toBe(false);
    vi.advanceTimersByTime(100);
    await promise;
    expect(resolved).toBe(true);
  });

  it('should return a promise', () => {
    const result = sleep(100);
    expect(result).toBeInstanceOf(Promise);
  });

  it('should handle zero milliseconds', async () => {
    const promise = sleep(0);
    vi.advanceTimersByTime(0);
    await promise;
    expect(true).toBe(true);
  });
});
