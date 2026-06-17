/**
 * is_letter_s
 * Copyright (C) 2026 Kyle Munz
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 */

// Multi-alphabet 'S' registry
export const Buncha_Ss = new Map([
  //Latin Esses
  ['S', 'Latin Capital Letter S'],
  ['s', 'Latin Small Letter S'],
  ['Ś', 'Latin Capital Letter S with acute'],
  ['ś', 'Latin Small Letter S with acute'],
  ['Ŝ', 'Latin Capital Letter S with circumflex'],
  ['ŝ', 'Latin Small Letter S with circumflex'],
  ['Ş', 'Latin Capital Letter S with cedilla'],
  ['ş', 'Latin Small Letter S with cedilla'],
  ['Š', 'Latin Capital Letter S with caron'],
  ['š', 'Latin Small Letter S with caron'],
  ['Ș', 'Latin Capital Letter S with comma below'],
  ['ș', 'Latin Small Letter S with comma below'],
  ['Ṣ', 'Latin Capital Letter S with dot below'],
  ['ṣ', 'Latin Small Letter S with dot below'],
  ['Ṡ', 'Latin Capital Letter S with dot above'],
  ['ṡ', 'Latin Small Letter S with dot above'],
  ['Ṥ', 'Latin Capital Letter S with acute and dot above'],
  ['ṥ', 'Latin Small Letter S with acute and dot above'],
  ['Ṧ', 'Latin Capital Letter S with caron and dot above'],
  ['Ṧ', 'Latin Capital Letter S with caron and dot above'],
  ['Ṩ', 'Latin Capital Letter S with dot below and dot above'],
  ['ṩ', 'Latin Small Letter S with dot below and dot above'],
  
  // Cyrillic variations
  ['С', 'Cyrillic Capital Letter Es'],
  ['с', 'Cyrillic Small Letter Es'],
  ['Ҫ', 'Cyrillic Capital Letter Es with descender'],
  ['ҫ', 'Cyrillic Small Letter Es with descender'],
  ['Ѕ', 'Cyrillic Capital Letter Dze'],
  ['ѕ', 'Cyrillic Small Letter Dze'],
  
  // Greek Sigmas (Standard and Terminal)
  ['Σ', 'Greek Capital Letter Sigma'],
  ['σ', 'Greek Small Letter Sigma'],
  ['ς', 'Greek Small Letter Terminal Sigma'],

  // Romanian variations
  ['Ș', 'Latin Capital Letter S with comma below'],
  ['ș', 'Latin Small letter S with comma below'],

  // Braille
  ['⠎', 'Braile Letter S'],

  // Miscellaneous
  ['ȿ', 'Latin Small Letter S with swash tail'],
  ['ʂ', 'Latin Small Letter S with Hook '],
  ['ˢ', 'Modifier Letter Small S'],
  ['ₛ', 'Latin Subscript Small Letter S'],

  // Historical Chaos: The Long S (Used in 18th-century printing, looks like an f)
  ['ſ', 'Latin Small Letter Long S'],
  ['ẛ', 'Latin Small Letter Long S with dot above'],
  ['ẜ', 'Latin Small Letter Long S with diagonal stroke'],
  ['ẝ', 'Latin Small Letter Long S with high stroke']
]);

// Ligatures and typographic edge cases
export const Maybe_Ss = new Map([
  ['ß', 'German Sharp S / Eszett (Ligature of long s and short s)'],
  ['ẞ', 'German Capital Sharp S'],
  ['ﬆ', 'Latin Small Ligature S T'],
  ['ﬅ', 'Latin Small Ligature Long S T'],
  ['$', 'Dollar Sign'],
  ['₴', 'Ukrainian Hryvnia Currency Symbol'],
  ['Ƨ', 'Latin Capital Letter Tone Two'],
  ['ƨ', 'Latin Small letter Tone Two'],
  ['ʃ', 'Latin Small Letter Esh'],
  ['ʅ', 'Latin Small Letter Squat Reversed Esh'],
  ['ʆ', 'Latin Small Letter Esh with Curl'],
  ['ʦ', 'Latin Small Letter TS Digraph'],
  ['ʧ', 'Latin Small Letter Tesh Digraph'],
  ['ʪ', 'Latin Small Letter LS Digraph'],
  ['Ⓢ', 'Circled Letter Capital Letter S'],
  ['ⓢ', 'Circled Letter Small Letter S']
]);

/**
 * Validates if a character is an 'S'.
 * @param {string} input - The character to test.
 * @param {Object} [options] - Configuration options.
 * @param {boolean} [options.verbose=false] - If true, returns the character description instead of a boolean.
 * @returns {boolean|string} True/False, a description (if verbose), or a shrug for maybes.
 */
export default function isLetterS(input, options = {}) {
  const isVerbose = options.verbose === true;

  if (Buncha_Ss.has(input)) {
    return isVerbose ? Buncha_Ss.get(input) : true;
  }

  if (Maybe_Ss.has(input)) {
    return isVerbose ? Maybe_Ss.get(input) : '¯\\_(ツ)_/¯';
  }

  return isVerbose ? 'Not any kind of S' : false;
}
