describe('Demo', function() {
    'use strict';

    // mock the demo module //to run tests you must mock all the parts out test will need to run properly
    beforeEach(angular.mock.module('Demo'));

    // test capitalize filter
    it('capitalize filter should calitalize first letter in a string', function() {
        inject(function(capitalizeFilter) {//when referencing a filter in angular you need to write out filternamrFilter
            expect(capitalizeFilter('test')).not.toBe('test');
            expect(capitalizeFilter('test')).toBe('Test');
        });
    });

    it("replaces any 's' with a 'th' ", function() {
        inject(function(daffyFilter){
            expect(daffyFilter('silly strings.')).toBe('thilly thtringth.');
            expect(daffyFilter('silly strings.')).not.toBe('silly strings.');

            expect(daffyFilter('Silly strings.')).toBe('Thilly thtringth.');
            expect(daffyFilter('Silly strings.')).not.toBe('Silly strings.');

        });
    });


});
