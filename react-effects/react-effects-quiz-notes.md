# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  after it is rendered, in 'commit' phase
- What is a React Effect?
  a react effect is a hook at that runs a function after the intial and mounting to the dom
- When should you use an Effect and when should you not use an Effect?
  you should use an effect when you are using external system such as an api
- When do Effects run?
  after the render and commit/mount to dom
- What function is used to declare an Effect?
  `useEffect(()=>{})``
- What are Effect dependencies and how do you declare them?
  reactive values - variables functions declared inside your componennt, list them in a dependencies array after callback function
- Why would you want to clean up from an Effect?
  to ensure its runs only once or does the right manipulation
- How do you clean up from an Effect?

- When does the cleanup function run?

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
