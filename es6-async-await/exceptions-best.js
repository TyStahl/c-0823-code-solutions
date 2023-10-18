import read from './read.js';

const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce() {
  // try {
  const msg = await read('foo', false);
  console.log(elapsed(), 'throwOnce: ', msg);
  // } catch (error) {
  //   console.error(elapsed(), 'throwOnce Error: ', error.message);
  // }
}

async function throwSeveral() {
  // try {
  const msg1 = await read('foo1', false);
  console.log(elapsed(), 'throwSeveral1: ', msg1);

  const msg2 = await read('foo1', false);
  console.log(elapsed(), 'throwSeveral2: ', msg2);

  const msg3 = await read('foo1', false);
  console.log(elapsed(), 'throwSeveral3: ', msg3);
  // } catch (error) {
  //   console.log(elapsed(), 'throwSeveral Error: ', error.message);
  // }
}

async function throwChained() {
  // try {
  const msg1 = await read('foo-chain', false);
  console.log(elapsed(), 'throwChained1: ', msg1);

  const msg2 = await read(msg1, false);
  console.log(elapsed(), 'throwChained2: ', msg2);

  const msg3 = await read(msg2, false);
  console.log(elapsed(), 'throwChained3: ', msg3);
  // } catch (error) {
  // console.log(elapsed(), 'throwChained Error: ', error.message);
  // }
}

try {
  await throwOnce();
  await throwSeveral();
  await throwChained();
} catch (error) {
  console.log(elapsed(), 'error: ', error.message);
}
// await throwOnce();
// await throwSeveral();
// await throwChained();
