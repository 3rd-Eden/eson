
var Parser = require('../')
  , glob = Parser.glob;

describe('glob', function(){
  it('should perform a sync glob', function(){
    glob('', 'glob test/fixtures/*.js', Parser).should.eql(
      ['test/fixtures/bar.js',
       'test/fixtures/baz.js',
       'test/fixtures/foo.js']
    );

    glob('', 'glob test/fixtures/b*.js', Parser).should.eql(
      ['test/fixtures/bar.js',
       'test/fixtures/baz.js']
    );

    glob('', 'glob test/fixtures/{bar,foo}.js', Parser).should.eql(
      ['test/fixtures/bar.js',
       'test/fixtures/foo.js']
    );
  })
})
