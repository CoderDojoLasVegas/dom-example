casper.test.begin('Localhost test', 0, function suite(test) {
  casper.start('localhost:3000', function() {
    this.getElementsInfo('selector string');
  });
});
