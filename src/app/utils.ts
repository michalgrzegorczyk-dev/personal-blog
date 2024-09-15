export function shuffle<T>(array: T[]): T[] {
  const length = array.length;
  const result = [...array];

  for (let index = 0; index < length; index++) {
    const randomIndex = Math.floor(Math.random() * (length - index)) + index;
    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }

  return result;
}
