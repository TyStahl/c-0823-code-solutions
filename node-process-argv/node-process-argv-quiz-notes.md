# node-process-argv-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `process` object in a Node.js program?
  the process object is an instance of EventEmitter

- How do you access the `process` object in a Node.js program?
  you can explicitly access the process object with require
  `const process = require('process');`
- What is the data type of `process.argv` in Node.js?
  array
  the process.argv property returns an array containing the command line arguments passed when the Node.js process was launched.

"The first element will be process.execPath. See process.argv0 if access to the original value of argv[0] is needed. The second element will be the path to the JavaScript file being executed. The remaining elements will be any additional command line arguments."

- How do you access the command line arguments in a Node.js program?
  looping through the process.argv property

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
