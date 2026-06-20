import test from 'node:test';
import assert from 'node:assert';
import isLetterS from './index.js';

test('is_letter_s - Standard Behavior (Boolean Mode)', () => {
  // Latin 'S's
  assert.strictEqual(isLetterS('s'), true, "Failed on lowercase Latin 'S'");
  assert.strictEqual(isLetterS('S'), true, "Failed on uppercase Latin 'S'");

  // International variants (Cyrillic & Greek)
  assert.strictEqual(isLetterS('с'), true, "Failed on Cyrillic small letter 'Es'");
  assert.strictEqual(isLetterS('С'), true, "Failed on Greek capital letter 'Es'");
  assert.strictEqual(isLetterS('ș'), true, "Failed on Latin small letter S with comma below 'ș'");

  // The Ligature Existential Crisis
  assert.strictEqual(isLetterS('ẞ'), '¯\\_(ツ)_/¯', "Failed to shrug at 'ẞ'");
  assert.strictEqual(isLetterS('$'), '¯\\_(ツ)_/¯', "Failed to shrug at '$'");

  // Obvious non-S characters
  assert.strictEqual(isLetterS('b'), false, "Incorrectly identified 'b' as an S");
  assert.strictEqual(isLetterS('Z'), false, "Incorrectly identified 'Z' as an S");
  assert.strictEqual(isLetterS('💩'), false, "Incorrectly identified an emoji as an S");
});

test('is_letter_s - Enterprise Analytics (Verbose Mode)', () => {
  // Check that descriptions are returned properly
  assert.deepStrictEqual(
    isLetterS('Š', { verbose: true }), 
    {verdict: true, description: 'Latin Capital Letter S with caron'}
  );
  
  assert.deepStrictEqual(
    isLetterS('Ѕ', { verbose: true }), 
    {verdict: true, description: 'Cyrillic Capital Letter Dze'}
  );

  assert.deepStrictEqual(
    isLetterS('ȿ', { verbose: true }), 
    {verdict: true, description: 'Latin Small Letter S with swash tail'}
  );

  // Check fallback for a non-A character in verbose mode
  assert.deepStrictEqual(
    isLetterS('Q', { verbose: true }), 
    {verdict: false, description: 'Not any kind of S'}
  );
});

test('is_letter_s - Defensive Resilience', () => {
  // Ensure the engine doesn't implode if passed non-string garbage
  assert.strictEqual(isLetterS(null), false, "Failed to handle null safely");
  assert.strictEqual(isLetterS(undefined), false, "Failed to handle undefined safely");
  assert.strictEqual(isLetterS(138), false, "Failed to handle a number safely");
  assert.strictEqual(isLetterS(['s']), false, "Failed to handle an array safely");
});
