# is-cjk-hanzi

A handy utility to determine if a character or string contains CJK (Chinese,
Japanese, Korean) Hanzi/Kanji characters.

## Installation

```bash
npm install is-cjk-hanzi
```

## Purpose

Some characters are tricky to work with because they are surrogate pairs and
have a length of 2.

```javascript
console.log('𧓈'.length); // 2
isSingleCJKHanzi('𧓈'); // true
```

## Usage

```javascript
const isCJKHanzi = require('is-cjk-hanzi');

isCJKHanzi('我'); // true
isCJKHanzi('詠む'); // true
isCJKHanzi('hello'); // false

// Check for single CJK Hanzi characters
const isSingleCJKHanzi = require('is-cjk-hanzi/isSingleCJKHanzi');

isSingleCJKHanzi('我'); // true
isSingleCJKHanzi('我的'); // false
```

## Functions

- `isCJKHanzi(inputString)`

  - Returns `true` if the input string contains at least one CJK Hanzi
    character; `false` otherwise.

- `isSingleCJKHanzi(inputCharacter)`
  - Returns `true` if the input is a single CJK Hanzi character; `false`
    otherwise.
