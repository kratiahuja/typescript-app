export function multiply(input: number) {
  return input*2;
}

export default function multiplyWrapper(input: number) {
  multiply(input);
};
