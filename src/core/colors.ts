const COLORS = {
  BLUE: 34,
  CYAN: 36,
  GRAY: 90,
  GREEN: 32,
  MAGENTA: 35,
  RED: 31,
  WHITE: 37,
  YELLOW: 33,
} as const;

const getColor = (msg: string, code: number): string =>
  `\u001b[${code}m${msg}\u001b[39m`;

export type ColorName =
  | 'blue'
  | 'bold'
  | 'cyan'
  | 'gray'
  | 'grey'
  | 'green'
  | 'magenta'
  | 'red'
  | 'white'
  | 'yellow';

export interface Colors {
  blue: (msg: string) => string;
  bold: (msg: string) => string;
  cyan: (msg: string) => string;
  gray: (msg: string) => string;
  grey: (msg: string) => string;
  green: (msg: string) => string;
  magenta: (msg: string) => string;
  red: (msg: string) => string;
  white: (msg: string) => string;
  yellow: (msg: string) => string;
}

const colors: Colors = {
  blue: (msg: string) => getColor(msg, COLORS.BLUE),
  bold: (msg: string) => `\u001b[0;1m${msg}\u001b[0;0m`,
  cyan: (msg: string) => getColor(msg, COLORS.CYAN),
  gray: (msg: string) => getColor(msg, COLORS.GRAY),
  green: (msg: string) => getColor(msg, COLORS.GREEN),
  grey: (msg: string) => getColor(msg, COLORS.GRAY), // alias of gray
  magenta: (msg: string) => getColor(msg, COLORS.MAGENTA),
  red: (msg: string) => getColor(msg, COLORS.RED),
  white: (msg: string) => getColor(msg, COLORS.WHITE),
  yellow: (msg: string) => getColor(msg, COLORS.YELLOW),
};
export default colors;
