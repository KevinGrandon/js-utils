export default class PriorityQueue {
	constructor (_sortFn) {
		this.sortFn = _sortFn
		this.nodes = []
	}

	/**
	 * Compares two nodes using the sort function.
	 */
	compare (a, b) {
		return this.sortFn(this.nodes[a], this.nodes[b])
	}

	/**
	 * Swaps two nodes.
	 */
	swap (a, b) {
		var temp = this.nodes[a]
		this.nodes[a] = this.nodes[b]
		this.nodes[b] = temp
	}

	/**
	 * Pushes an item onto the priority queue.
	 */
	push (node) {
		var size = this.nodes.push(node)
		var current = size - 1

		while (current > 0) {
			var parent = Math.floor((current - 1) / 2);

			if (this.compare(current, parent) <= 0) {
				break
			}

			this.swap(parent, current)
			current = parent
		}
	}

	/**
	 * Returns the last item from the priority queue.
	 */
	pop () {
		return this.nodes.pop()
	}

	/**
	 * Returns the first item from the priority queue.
	 */
	shift () {
		return this.nodes.shift()
	}

	/**
	 * Returns the size of the current queue.
	 */	
	size () {
		return this.nodes.length
	}
}