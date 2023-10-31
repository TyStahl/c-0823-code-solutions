# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  functions that start with "use" camelCase, taht get special treatment by react and must follow the Rules of Hooks
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  only called top level
  start with use
  cannot be conditional

- What is the purpose of state in React?
  persist data between rerenders, tell react to make changes
- Why can't we just maintain state in a local variable?
  because the local variable's get reset across renders
- What two actions happen when you call a `state setter` function?
  reacts cache of satate values is updated
  render compoenent with next state value

- When does the local `state variable` get updated with the new value?
  after a new render is called

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
