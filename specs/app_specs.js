
(function() {
	'use strict';

	describe('App: demoApp', function() {
		beforeEach(module('demoApp'))

		it('is version 0.0.1', inject(function(version){
			expect(version).toBe('0.0.1');
		}));

		it('exists', function() {
			expect(true).toBe(true);
		});

	});
}());