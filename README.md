# is_letter_s
Tests if argument is the letter S

## Install
npm install is_letter_s --save

## Usage
```javascript
import isLetterS from 'is_letter_s';

// Basic usage
isLetterS('s'); //true
isLetterS('Ṧ'); //true
isLetterS('p'); //false

// Verbose usage, returns description of S variant.
isLetterS('Ș', { verbose: true }); // returns 'Latin Capital Letter S with comma below'

// Also handles ambigous situations!
isLetterS('$'); //¯\_(ツ)_/¯
isLetterS('ⓢ'); //¯\_(ツ)_/¯
isLetterS('Ƨ'); //¯\_(ツ)_/¯
```
