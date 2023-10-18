# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  promises
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  async and await is almost identical in functionality, but differ in syntax. promise.then/promise.catch requires you to get resovlve value or catch error with each promise, while async/await/try/catch handles the errors in a simpler to understand way.
- When do you use `async`?
  when you are using promises
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  you use await when you are using promises, you do not use await when you are not using promises
- How do you handle errors with `await`?
  with try catch
- What do `try`, `catch` and `throw` do? When do you use them?
  try attempts to resolve promises within its block and kicks out of the function if an exception is thrown
  catch handles any exceptions thrown by try
  throw will throw an exception where it is declared
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  the code block will keep running and the promise will be saved as pending, the promise rejection will be printed out as an error
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async/await, because the syntax looks and feels like the rest of javascript and is easier to read and understand

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
