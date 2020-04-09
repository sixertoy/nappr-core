import fs from 'fs';

const LINE_END = '\n';
const ENCODING = 'utf8';

function getFirstLine(filepath, popts = {}) {
  const opts = {
    encoding: popts.encoding || ENCODING,
    lineEnding: popts.lineEnding || LINE_END,
  };
  return new Promise((resolve, reject) => {
    const rs = fs.createReadStream(filepath, { encoding: opts.encoding });
    let acc = '';
    let pos = 0;
    let index;
    rs.on('data', chunk => {
      console.log('chunk', chunk);
      index = chunk.indexOf(opts.lineEnding);
      acc += chunk;
      if (index === -1) {
        pos += chunk.length;
      } else {
        pos += index;
        rs.close();
      }
    })
      .on('close', () =>
        resolve(acc.slice(acc.charCodeAt(0) === 0xfeff ? 1 : 0, pos))
      )
      .on('error', err => reject(err));
  });
}

export default getFirstLine;
