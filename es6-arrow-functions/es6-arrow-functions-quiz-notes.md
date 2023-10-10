# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  parameter => expression
- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  return is implied
- When using _concise body syntax_, how do you return an object literal?
  in parenthesis ({object literal})
- In the expression
  ```js
  foo(() => 42);
  ```
  - Identify the arrow function
    () => return 42
  - How many arguments does the arrow function take?
    zero
  - What value does it return?
    42
  - How many arguments are passed to the function `foo`?
    1
  - What type of argument is passed to the function `foo`?
    callback function
- In the expression
  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```
  - Identify the arrow function
    (y) => {console.log('4y = ${4 \* y}')}
  - How many arguments does the arrow function take?
    1
  - What value does it return?
    a string representing the result of argument \* 4
  - How many arguments are passed to the function `bar`?
    1
  - What type of argument is passed to the function `bar`?
    callback function
  - When does the arrow function's code get executed?
    after being called in the bar function
- How does the value of `this` differ between standard functions and arrow functions?
  this refers the arrow functions surrounding scope only, in standard functions this refers to the functions owner, so the global object or the methods object, if it's a method.

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
