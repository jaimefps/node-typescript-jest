interface Data {
  a: number;
  b?: string;
}

const test = (v: Data): number => v.a + 1;
const other = (v: Data): string => v.b;

module.exports = { test, other };
