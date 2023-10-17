# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?
  npm (node package manager) is a libary and register for js software packages
- What is a package?
  a file or directory that is desribed by a package.json file
- What are some other popular package managers?
  npm, yard, chocolatey, homebrew, nix, rpm, cargo, helm, ninite, nuget, zypper, eoPKG, APT, Pacman, Snapcraft, Aptitude, DPKG, Synaptic...
- How can you create a `package.json` with `npm`?
  npm init --yes
- What is a dependency and how do you add one to a package?
  packages required by your application, npm install -package-
- What happens when you add a dependency to a package with `npm`?
  it is stored in package.json file as a "dependency" object
- What is a devDependency and how do you add one to a package?
  devDependency is a packages that are only required during development and testing
  npm install ==save-dev
- How do you define and run `npm` scripts? Why are these useful?
  in package.json make a new object called sript with property to happen when ran.
  npm run scriptname

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
