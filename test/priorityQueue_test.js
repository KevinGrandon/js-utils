import assert from 'assert'
import PriorityQueue from '../src/priorityQueue'

describe('#priorityQueue()', function () {
	it('pop order, high -> low', function () {
		let queue = new PriorityQueue((a, b) => b.val - a.val)

		assert.equal(queue.size(), 0)
		queue.push({name: 'b', val: 1})
		queue.push({name: 'a', val: 2})
		assert.equal(queue.size(), 2)
		assert.equal(queue.pop().name, 'a')
		assert.equal(queue.pop().name, 'b')
		assert.equal(queue.size(), 0)
	})

	it('pop order, low -> high', function () {
		let queue = new PriorityQueue((a, b) => a.val - b.val)

		assert.equal(queue.size(), 0)
		queue.push({name: 'b', val: 10})
		queue.push({name: 'a', val: 5})
		assert.equal(queue.size(), 2)
		assert.equal(queue.pop().name, 'a')
		assert.equal(queue.pop().name, 'b')
		assert.equal(queue.size(), 0)
	})
})