module.exports = function(element, object, emitter) {
	function setCountText() {
		var singular = object.items.length === 0 || object.items.length > 1
		object.itemCountText = 'You have ' + object.items.length + (singular ? 'item' : 'items')
	}
	setCountText()

	emitter.on('add-to-cart', function(item) {
		object.items.push(item)
		setCountText()
	})
	emitter.on('remove-from-cart', function(itemToRemove) {
		var index = -1
		object.items.forEach(function(item, i) {
			if (item === itemToRemove) {
				index = i
			}
		})
		if (index) {
			object.items.splice(index, 1)
		}
		setCountText()
	})
}
