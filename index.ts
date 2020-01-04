const express = require('express');
const app = express();

interface Data {
  a: number;
  b?: string;
}

const test = (v: Data): number => v.a + 1;
const other = (v: Data): string => (v.b ? v.b : 'nothing');

app.listen(3000, () =>
  console.log(other({ a: 1, b: 'server runniing on prot 3000' })),
);

// test

module.exports = { test, other };
