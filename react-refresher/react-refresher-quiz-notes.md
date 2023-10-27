# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you define a React component?

"React Components are JavaScript functions that return markup:
`function MyButton() {
  return (
    <button>I'm a button</button>
  );
}`
with a Js/Ts function that takes props (object data) and returns a react element

- How do you use JSX in a React component?

returning markup inside parenthesis
you have to close self closing tags,
you have to wrap multiple jsx tags in shared parent elements like <> or <div>
use curly braces in insert javascript code

- How do you declare the props a React component needs?

you can declare props in a parent component and pass them to the child

- How do you pass props to a React component?

in props of a callback function

- How do you include JavaScript expressions in JSX?

inside curly braces

- What are React hooks and what are the three "Rules of Hooks"?

functions starting with use ex: useState
1.Hooks can only be called inside React function components.
2.Hooks can only be called at the top level of a component.
3.Hooks cannot be conditional.

- How do you manage state in a React component?

useState hook, first variable stores state, second variable is the function that changes state

- How do you handle events in React?

with event handler functions

- How do you let a parent component know that an event happened?

pass state to the parent as a prop

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
