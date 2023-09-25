# `<mark-collapse>` [![Published on npm](https://img.shields.io/npm/v/@markai/mark-collapse.svg)](https://www.npmjs.com/package/@markai/mark-collapse)

- This is simple web component built using the [lit.dev](https://lit.dev/) library.
- It provides a simple way to create collapsible content sections.
- Users can toggle the visibility of the content by interacting with the component.

### Installation

```shell
npm i @markai/mark-collapse
```

```shell
yarn add @markai/mark-collapse
```

### Usage

Example of mark-collapse usage patten.

1. Import the mark-collapse element:

```js
import '@markai/mark-collapse';
```

2. Add the mark-collapse element to your HTML:

```html
<mark-collapse open>
  <p>This content can be collapsed and expanded.</p>
</mark-collapse>
```

### Properties

| name   | Type      | Description                                                                                                                                                 |
| ------ | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `open` | `boolean` | Determines whether the content is currently `open` (visible) or closed (hidden). By default, it is set to `false`, meaning the content is initially closed. |

### Methods

| name     | Return | Description                                                                                                                       |
| -------- | ------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `toggle` | `void` | allows you to programmatically toggle the visibility of the content. Call this method to change the state of the `open` property. |

### Slots

| name      | Description                                                                                                                         |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `default` | to insert content that you want to collapse. Place your content within the `<slot></slot>` tags inside the `mark-collapse` element. |

### CSS Custom Properties

| Name                                  | Default | Description                                            |
| ------------------------------------- | ------- | ------------------------------------------------------ |
| `--mark-collapse-transition-duration` | `0.5s`  | The duration of the collapse/expand animation.         |
| `--mark-collapse-transition-timing`   | `0.5s`  | The timing function for the collapse/expand animation. |
