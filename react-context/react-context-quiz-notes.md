# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?
  to pass necessary data to children-grandchildren components without passing props to child to child to child etc.
- What values can be stored in context?
  any values or undefined
- How do you create context and make it available to the components?
  by using the createContext() function and passing in the context value, and then wrapping elements in the context.provider and pass it the data in a value property
- How do you access the context values?
  by passing it the values in the value property on the context provider element
- When would you use context? (in addition to the best answer: "rarely")
  when you need to pass values down a long component tree

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
