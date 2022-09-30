# jQuery Simple Context Menu
A simple and customizable context menu plugin for jQuery.

### Add jQuery First

```html
<script src="https://code.jquery.com/jquery-2.1.4.js"></script>
```

### Now add plugin

```html
<script src="simple-context-menu.min.js"></script>
```

### How to use?

```js
let options = [
  {
    label: "Option A",
    action: function () {
      console.log("Option A selected");
    }
  },
  {
    label: "Option B",
    action: function () {
      console.log("Option B selected");
    }
  },
];

$(selector).simpleContextMenu({
  options: options
});
```

### [See Demo](https://haruncpi.github.io/simple-context-menu/)
