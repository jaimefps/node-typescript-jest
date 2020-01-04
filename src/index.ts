// const express = require('express');
// const app = express();

interface Data {
  a: number;
  b: string;
}

export const something = (v: Data): number => v.a + 1;
export const other = (v: Data): string => v.b;

// app.listen(3000, () =>
//   console.log(other({ a: 1, b: 'server runniing on prot 3000' })),
// );
