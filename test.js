var util = require('utils');

casper.test.begin('Localhost test', 0, function suite(test) {
  casper.start('http://localhost:3000', function() {
  })
  .then(function() {
  	this.fillSelectors('form#dom-form', {
  		'input#dom-number-input': 4,
  		'input#dom-phrase-input': 'Bottles of beer on the wall!'
  	}, false);
  })
  .thenClick('button#dom-click', function(){
  	var list = this.getElementsInfo('ul#dom-list > li');
  	for(var i = 0; i < list.length; i ++)
  		test.assertEquals(list[i].text, (1 + i) + " Bottles of beer on the wall!");
  })
  .then(function() {
  	this.fillSelectors('form#jquery-form', {
  		'input#jq-number-input': 4,
  		'input#jq-phrase-input': 'Bottles of beer on the wall!'
  	}, false);
  })
  .thenClick('button#jq-click', function(){
  	var list = this.getElementsInfo('ul#jq-list > li');
  	for(var i = 0; i < list.length; i ++)
  		test.assertEquals(list[i].text, (1 + i) + " Bottles of beer on the wall!");
  })
  .run(function() {
  	test.done();
  });
});
