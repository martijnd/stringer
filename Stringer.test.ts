import Stringer from './main';

describe('Stringer', () => {
    it('returns the uppercase string', () => {
        expect(new Stringer('test').toUpperCase().toString()).toBe('TEST');
    })

    it('returns a lowercase string', () => {
      expect(new Stringer('TEST').toLowerCase().toString()).toBe('test');
    })

    it('prepends multiple values to the string', () => {
      expect(new Stringer('TEST').prepend('bezem', 'kist').toString()).toBe('bezemkistTEST');
    })

    it('prepends a single value to the string', () => {
      expect(new Stringer('TEST').prepend('bezem').toString()).toBe('bezemTEST');
    })

    it('prepends multiple values to the string', () => {
      expect(new Stringer('TEST').append('kist', 'bezem').toString()).toBe('TESTkistbezem');
    })

    it('appends a single value to the string', () => {
      expect(new Stringer('TEST').append('bezem').toString()).toBe('TESTbezem');
    })

    it('gets the portion of the string before the given input', () => {
      expect (new Stringer('Welcome to the universe!').before('the').toString()).toBe('Welcome to ');
    });

    it('gets the portion of the string after the given input', () => {
      expect (new Stringer('Welcome to the universe!').after('the').toString()).toBe(' universe!');
    });

    it('converts to camelCase', () => {
      expect(new Stringer('test case').camel().toString()).toBe('testCase');
    })

    it('converts to PascalCase', () => {
      expect(new Stringer('test case').pascal().toString()).toBe('TestCase');
    })
})
