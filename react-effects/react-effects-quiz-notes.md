# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  after it is rendered initially, in 'commit' phase
- What is a React Effect?
  a react effect is a hook at that runs a function after the intial and mounting to the dom to synchronize react component with systems outside of react
- When should you use an Effect and when should you not use an Effect?
  you should use an effect when you want to synchronize external systems such as an api, reading/writing file system, http requests, rendering videos, timers // Not handling events
- When do Effects run?
  after the render and commit/mount to dom, when there have been changes to the listed dependencies during a rendering cycle
- What function is used to declare an Effect?
  `useEffect(()=>{})``
- What are Effect dependencies and how do you declare them?
  reactive values - variables functions declared outside use effect function, list them in a dependencies array after callback function
- Why would you want to clean up from an Effect?
  to ensure its runs only once or does the right manipulation, garbage collection,
- How do you clean up from an Effect?
  return cleanup function in callback function of useEffect
- When does the cleanup function run?
  on mount, on unmount, before every effect

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
