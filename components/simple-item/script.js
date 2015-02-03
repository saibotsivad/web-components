module.exports = function(element, object, emitter) {
	element.getElementsByClassName('add-to-cart').onclick = function(event) {
		emitter.emit('add-to-cart', object)
	}
	emitter.on('add-to-cart', function(item) {
		element.className = element.className + ' item-added'
	})
}
