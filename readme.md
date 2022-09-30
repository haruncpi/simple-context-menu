# jQUery Simple Context Menu

### Add jQuery First
```
<script src="https://code.jquery.com/jquery-2.1.4.js"></script>
```

### Now add plugin
```
<script src="simple-context-menu.min.js"></script>
```

### How to use?

```
$(selector).simpleContextMenu({
    options: [
        {label: 'Option A', action: function(){ console.log('Option A selected')}},
        {label: 'Option B', action: function(){ console.log('Option B selected')}}
    ]
})
```