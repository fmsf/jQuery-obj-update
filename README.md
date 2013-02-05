jQuery-obj-update
=================

This used to be a gist https://gist.github.com/fmsf/4340742 but is now migrated here, so I can add more functionality in the future.

Update your jQuery objects contents with a simple .update(). After making DOM changes
any variable containing jQuery objects will not represent correctly the elements in the DOM.
This plugin adds to jQuery an update function which drops all old references in favor of new ones.

Behavior and usage:
```javascript
var $test = $('div.bar');
console.log($test);
>> [<div class="bar" id="b1"></div>, <div class="bar" id="b2"></div>]

$('#b2').remove();
console.log($test);
>> [<div class="bar" id="b1"></div>, <div class="bar" id="b2"></div>]

$test.update();
console.log($test);
>> [<div class="bar" id="b1"></div>]

$('body').append('<div class="bar" id="b3"></div>');
console.log($test);
>> [<div class="bar" id="b1"></div>]

$test.update();
console.log($test);
>> [<div class="bar" id="b1"></div>, <div class="bar" id="b3"></div>]
```

---------------------------------------

This pluggin currently only works if you use a selector to get the elements:

```javascript
var $foo = $("#some .path div.to a .element"); // selects all "div.bar"
(... many dom modifications ...)
$foo.update();
```

If you use a selector chain it won't work:

```javascript
var $foo = $("#some").find(".path div.to a .element").parent().children();
```