var split = require('./index.js')
var test = require('tape')

test('split', function(t) {
  t.deepEqual(
      split('a,b([,],c),d', ',')
    , ['a', 'b([,],c),d']
  )
  t.deepEqual(
      split('a,b([,],c),d', ',', true)
    , ['a', 'b([,],c)', 'd']
  )
  t.deepEqual(
      split('a,b([,],c),d', ',', false, ['[', ']'])
    , ['a', 'b([,],c),d']
  )
  t.deepEqual(
      split('a,b([,],c),d', ',', true, [['[', ']']])
    , ['a', 'b([,]','c)','d']
  )
  t.deepEqual(
      split('a,b([,],c),d', ',', true, [['[', ']'], ['(', ')']])
    , ['a', 'b([,],c)','d']
  )
  t.deepEqual(
      split('a,b{([,],c),d}', ',', true)
    , ['a', 'b{([,],c)', 'd}']
  )
  t.deepEqual(
      split('a ? b : c : d ? e : f', ':', true, [['?', ':']])
    , ['a ? b : c ', ' d ? e : f']
  )
  t.deepEqual(
      split('"(","]",(,)', ',', true)
    , ['"("','"]"', '(,)']
  )
  t.end()
})
