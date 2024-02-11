import test from 'ava';
import isCJKHanzi from './isCJKHanzi';
import isSingleCJKHanzi from './isSingleCJKHanzi';

const validCJKCharacters = ['𠈓', '我', '啲', '𠡍', '𡉴', '𧓈'];
const validCJKStrings = [...validCJKCharacters, '詠む'];
const invalidCJKCharacters = ['a', '1', ' ', ''];
const invalidSingleCJKCharacters = ['我的', '乖離', 'a', '1', 'asdf', ' ', ''];

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

test('isSingleCJKHanzi returns true for valid single CJK characters', (t) => {
  validCJKCharacters.forEach((string) => {
    t.true(isSingleCJKHanzi(string));
  });
});

test('isSingleCJKHanzi returns false for invalid single CJK characters', (t) => {
  invalidSingleCJKCharacters.forEach((string) => {
    t.false(isSingleCJKHanzi(string));
  });
});