import test from 'ava';
import isCJKHanzi from './isCJKHanzi';

const validCJKCharacters = ['𠈓', '我', '啲', '𠡍', '𡉴', '𧓈'];
const validCJKStrings = [...validCJKCharacters, '詠む'];
const invalidCJKCharacters = ['a', '1', ' ', ''];

test('isCJKHanzi returns true for valid CJK strings', (t) => {
  validCJKStrings.forEach((string) => {
    t.true(isCJKHanzi(string));
  });
});

test('isCJKHanzi returns false for invalid CJK strings', (t) => {
  invalidCJKCharacters.forEach((string) => {
    t.false(isCJKHanzi(string));
  });
});
