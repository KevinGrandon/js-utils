import assert from 'assert'
import classSet from '../src/classSet'

describe('#classSet()', function () {
	it('should concatenate classes', function () {
		let result = classSet({
			foo: true,
			bar: true,
			baz: false
		})
		assert.equal(result, 'foo bar');
	})
})