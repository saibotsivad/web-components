module.exports = function(element, object, emitter) {
	element.getElementsByClassName('add-to-cart').onclick = function(event) {
		var quantity = parseInt(element.getElementsByClassName('quantity').value, 10)
		object.quantity = quantity
		if (quantity) {
			emitter.emit('add-to-cart', object)
		}
	}
	emitter.on('add-to-cart', function(item) {
		var el = element.getElementsByClassName('item-information')
		el.className = el.className + ' item-added'
	})
}
