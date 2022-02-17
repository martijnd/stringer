import Stringer from './main';

describe('Stringer', () => {
    it('returns the uppercase string', () => {
        expect(new Stringer('test').toUpperCase().s).toBe('TEST');
    })

    it('returns a lowercase string', () => {
      expect(new Stringer('TEST').toLowerCase().s).toBe('test');
    })

    it('prepends multiple values to the string', () => {
      expect(new Stringer('TEST').prepend('bezem', 'kist').s).toBe('bezemkistTEST');
    })

    it('prepends a single value to the string', () => {
      expect(new Stringer('TEST').prepend('bezem').s).toBe('bezemTEST');
    })

    it('prepends multiple values to the string', () => {
      expect(new Stringer('TEST').append('kist', 'bezem').s).toBe('TESTkistbezem');
    })

    it('appends a single value to the string', () => {
      expect(new Stringer('TEST').append('bezem').s).toBe('TESTbezem');
    })

    it('gets the portion of the string before the given input', () => {
      expect (new Stringer('Welcome to the universe!').before('the').s).toBe('Welcome to ');
    });

    it('gets the portion of the string after the given input', () => {
      expect (new Stringer('Welcome to the universe!').after('the').s).toBe(' universe!');
    });

    it('converts to camelCase', () => {
      expect(new Stringer('test case').camel().s).toBe('testCase');
    })

    it('converts to PascalCase', () => {
      expect(new Stringer('test case').pascal().s).toBe('TestCase');
    })

    it('returns the underlying string', () => {
      expect(new Stringer('test case').s).toBe('test case');
    })
})
