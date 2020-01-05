interface Data {
  a: number;
  b: string;
}

export const something = (v: Data): number => v.a;
export const other = (v: Data): string => v.b;
