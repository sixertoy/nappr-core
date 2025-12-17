import fs from 'fs';

const LINE_END = '\n';
const ENCODING: BufferEncoding = 'utf8';

interface GetFirstLineOptions {
  encoding?: BufferEncoding;
  lineEnding?: string;
}

export const getFirstLine = (
  filepath: string,
  popts: GetFirstLineOptions = {},
): Promise<string> => {
  const opts: Required<GetFirstLineOptions> = {
    encoding: popts.encoding || ENCODING,
    lineEnding: popts.lineEnding || LINE_END,
  };
  return new Promise((resolve, reject) => {
    const rs = fs.createReadStream(filepath, { encoding: opts.encoding });
    let acc = '';
    let pos = 0;
    let index: number;
    rs.on('data', (chunk: string) => {
      index = chunk.indexOf(opts.lineEnding);
      acc += chunk;
      if (index === -1) {
        pos += chunk.length;
      } else {
        pos += index;
        rs.close();
      }
    })
      .on('close', () => {
      { resolve(acc.slice(acc.charCodeAt(0) === 0xfeff ? 1 : 0, pos)); },
      })
      .on('error', (err: Error) => {
        reject(err);
      });
  });
};
