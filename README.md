# web-components

Some ideas I am kicking around for making websites with shopping carts very modular.

So based on [this idea](https://medium.com/@intercom/why-cards-are-the-future-of-the-web-d3f6ce8b843a) and a few
other randomw things I've been kicking around, I thought I'd try assembling a bunch of components a person might
need in order to put together a commerce-type website easily.

Of course there's a build system and whatnot, but what I'm really trying to think through is the idea
that you could have "components" (like how you can re-use [polymer](https://www.polymer-project.org/) objects)
that you would be able to throw together into your website.

Then, when you want to construct a website, it'd be a matter of taking components and stitching them together.

# Goals, or whatever

* The templates should use some sort of really well established syntax
	- it doesn't need to be valid HTML
	- it shouldn't tie you to a particular framework (aka, angular or react.js)
	- it should allow for very small chunks
* It should be compilable into something really nicely
	- I don't want to use a huge framework like grunt
	- it should allow for LESS or whatever
* There should be enough information to let another person figure out each component
* It should be possible to publish each component to npmjs.org or something like it

# Folder layout, I guess?

So suppose that you have, like, some structure like this:

	website.com/
		components/
			component-name/
				package.json
				schema.json
				script.js
				template.html
		styles/
			// these are the less or sass or css or whatever
			main.less
			component-name.less
		scripts/
			// any libs or stuff, that are probably compiled with browserify or something?
		node_modules/
			// if any of your components are on npmjs.org they would probably end up here?

# Roadmap or something

I think the first thing to do is build a simple commerce website, and try to break
every piece of the HTML out into "cards" (which I think would be HTML5 `<article>`
elements) and making each "card" into a "module" thing.

As it goes, maybe you'll see a way to abstract things into modules in a more logical way.

# License

Not that many people will be reading this, but in case you find something useful:

All content in this repository is published under the [Very Open License](http://veryopenlicense.com).
