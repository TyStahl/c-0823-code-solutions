# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  testing. what we expect is what we get
- What is the purpose of events and event handling?
  events are interactions and event handling tells the program what to do when interacted with
- Are all possible parameters required to use a JavaScript method or function?
  no, some are optional
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener
- What is a callback function?
  a function that is passed into another function as an argument
- What object is passed into an event listener callback when the event fires?
  an object based on Event describing the event that has occurred, and it returns nothing
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  the button that is queryied for, check for a domquery
- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  passing in a reference of handleclick
  ```js
  element.addEventListener('click', handleClick());
  ```
  passing in result of handleclick

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
