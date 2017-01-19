# Kink.com Coding Challenge - Carousel

## Goal
Using the HTML below, write a self-executing vanilla JavaScript function that cycles through the images (much like a carousel). Each image should be displayed for roughly 1 second before moving on to the next image.

## Source HTML
```html
<html>
	<head>
		<style>
			img {
				display: none;
			}
		</style>
	</head>
	<body>
		<h1>My Carousel</h1>
		<div id="images">
			<img name="image" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=1&w=350&h=200" />
			<img name="image" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=2&w=350&h=200" />
			<img name="image" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=3&w=350&h=200" />
			<img name="image" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=4&w=350&h=200" />
			<img name="image" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=5&w=350&h=200" />
		</div>
		<script>
			/**
			 * your code here!
			 */
		</script>
	</body>
</html>
```

## Example
Your output should emulate the following animated gif:

![](https://github.com/Kink-Com/CodingChallenge/blob/master/carousel/carousel.gif)

## Guidelines
- All code should be written in vanilla JavaScript (ES6).
- Please refrain from using the following ES6 features:
	- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
	- [Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)
	- [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
	- [Default](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
	- [Rest](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
	- [Spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
- Please do not use any third party libraries or plugins.
- Documentation and maintainability is a plus.

### Time Allotment
We respect your time and would prefer you not spend more than 3-5 hours. Feel free to include code comments to indicate any features you don't have time to implement.
