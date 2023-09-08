# css-positioning-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the **default** value for the `position` property of HTML elements?
  static
- How does setting `position: relative` on an element affect document flow?
  it doesnt' change the regular document flow, but allows you to move it relative to where it started even overlapping other elements.
- How does setting `position: relative` on an element affect where it appears on the page?
  it stays in its static position until modify
- How does setting `position: absolute` on an element affect document flow?
  it removes itself from the document flow and sits on a seperate layer.
- How does setting `position: absolute` on an element affect where it appears on the page?
  it appears within its nearest parent container that isn't static. starting with the html viewport containing block unless the positioning context is changed by changing the positioning property of an element you want the absolute positioned element to be nested inside of.
- How do you constrain an absolutely positioned element to a containing block?
  changing its containing blocks positioning to relative.
- What are the four box offset properties?
  top, right, bottom, left

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
