/**
 * Sleep
 *
 * @param ms millisecond
 * @returns promise
 */
export const sleep = (ms: number) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(undefined);
    }, ms);
  });
};
