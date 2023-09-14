# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  the event target is whatever is clicked, hovered, etc on during the event
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  yes
- What DOM element property tells you what type of element it is?
  srcElement
- What does the `element.closest()` method take as its argument and what does it return?
  it takes a string matching the element id, class, name, etc, and returns the closest element to the element with that id, name, class etc.
- How can you remove an element from the DOM?
  element.revove()
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  by adding the event listener to the parent element, check the event objects target property to find the atual clicked node

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
