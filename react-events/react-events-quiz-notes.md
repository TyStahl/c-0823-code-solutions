# react-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is an "event" in React?
  an action that could be triggered as a result of the user action or systme generated event
- What is an "event handler"? Which component declares the handler?
  functions that perform an action when triggered, in the parent component so that it will be re-usable, or within the compoenent if it is specific to that compoenent
- How do you pass an event handler to a React component?
  as a prop
- What is the naming convention for event handlers?
  handleXxx
- What is an "event handler prop"? Which component declares the prop?
  call back function,
  "Event handlers are defined inside a component, so they can access props. You can declare an event handler in a parent and pass it as a prop to a child. You can define your own event handler props with application-specific names."
- What are some custom event handler props a component may wish to define?
  go back go forward, play music, etc
- What is the naming convention for custom event handler props?
  onXxx

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
