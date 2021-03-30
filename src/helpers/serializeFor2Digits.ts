export function serializeFor2Digits(value: number): string[] {
  const [valueLeft, valueRight] = String(value).padStart(2, '0').split('');
  return [valueLeft, valueRight];
}