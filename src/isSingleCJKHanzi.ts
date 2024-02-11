import isCJKHanzi from './isCJKHanzi';
import hasUTF16SurrogatePairAt from '@stdlib/assert-has-utf16-surrogate-pair-at';

/**
 * Returns true if the text contains a single valid CJK character.
 */
function isSingleCJKHanzi(text: string) {
  const isHanzi = isCJKHanzi(text);
  if (text.length === 1) {
    return isHanzi;
  }
  return isHanzi && text.length === 2 && hasUTF16SurrogatePairAt(text, 0);
}

export default isSingleCJKHanzi;