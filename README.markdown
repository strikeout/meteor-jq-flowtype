A wrapper for the excellent FlowType.JS library (https://github.com/simplefocus/FlowType.JS)
----

Responsive web typography at its finest: font-size and line-height based on element width.
Check out the [demo site](http://simplefocus.com/flowtype).


In Meteor, just use it as you normally would - but in your Templates rendered function

```js
Template.body.rendered = function(e) {
	$('body').flowtype({
	   minimum   : 500,
	   maximum   : 1200,
	   minFont   : 12,
	   maxFont   : 40,
	   fontRatio : 30,
	   lineRatio : 1.45
	});
}
```
