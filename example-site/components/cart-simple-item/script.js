module.exports = function(element, object, emitter) {
	element.getElementsByClassName('remove-item').onclick = function() {
		emitter.emit('remove-from-cart', object)
	}
}
