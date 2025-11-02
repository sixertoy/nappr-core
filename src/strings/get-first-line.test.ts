import { writeFileSync, unlinkSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';
import getFirstLine from './get-first-line';

describe('getFirstLine', () => {
  it('should read first line from file', async () => {
    const filepath = join(tmpdir(), `test-${Date.now()}.txt`);
    writeFileSync(filepath, 'first line\nsecond line\nthird line', 'utf8');

    const result = await getFirstLine(filepath);
    expect(result).toBe('first line');

    unlinkSync(filepath);
  });

  it('should handle single line file', async () => {
    const filepath = join(tmpdir(), `test-${Date.now()}.txt`);
    writeFileSync(filepath, 'only line', 'utf8');

    const result = await getFirstLine(filepath);
    expect(result).toBe('only line');

    unlinkSync(filepath);
  });

  it('should handle empty file', async () => {
    const filepath = join(tmpdir(), `test-${Date.now()}.txt`);
    writeFileSync(filepath, '', 'utf8');

    const result = await getFirstLine(filepath);
    expect(result).toBe('');

    unlinkSync(filepath);
  });
});
