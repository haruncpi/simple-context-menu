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
    label: 'Copy',
    icon: '<i class="fa fa-copy"></i>',
    action: () => console.log('Copy selected')
  },
  ...,
  ...,
  ...
];

$(selector).simpleContextMenu({
  options: options
});
```

# Options

| option      | default | description|
| ----------- | ----------- | ------ |
| class      | null       | You can set custom css class to context menu container|
|onShow|null| set an `callback` function, which will trigger after context menu shown
|onHide|null| set an `callback` function, which will trigger after context menu hide
|options|[]| set an `array` of object. Each object possible option `label` ( string ), `action` ( function ) and `icon` ( string )

For icon you can set font awesome or anything

`icon: '<i class="fa fa-copy"></i>'` or 

`icon: '<img src="images/copy-icon.png">'`

### [See Demo](https://haruncpi.github.io/simple-context-menu/)
