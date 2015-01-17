# Group Split

Splits a string on a key, but does not split in the middle of matching pairs.

```
split('red (255, 0, 0), blue (0, 255, 0), green (0, 0, 255)', ',', true)
// ['red (255, 0, 0)', 'blue (0, 255, 0)', 'green (0, 0, 255)']

split('"(", <-- ignore that paren', ',')
// ['"("', '<-- ignore that paren']
```

##### `instance.split(str, key, pairs, all)` -> Array of strings
* str: the original string to split
* key: the key to split on
* all: like the g flag in a regexp, if true will split all rather just on the
 first instance of key
* pairs: an array of arrays. inner arrays should contain 2 single character
strings.  defaults to `['(', ')'], ['[', ']'], ['"', '"', true],
["'", "'", true]`. If the 3rd item in the array is truthy, the split will
ignore all other pairs until the current pair is closed.
