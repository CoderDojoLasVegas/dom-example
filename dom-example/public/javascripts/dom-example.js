// JQuery Code
$(document).ready(function() {
	$('button#jq-click').click(function() {
		// Get input values
		var jqNumber = $('input#jq-number-input').val(),
			jqPhrase = $('input#jq-phrase-input').val();

		// Empty our children nodes
		$('ul#jq-list').empty();

		for(var i = 0; i < jqNumber; i ++) {
			$('ul#jq-list').append("<li>" + (i + 1) + " " + jqPhrase + "</li>");
		}
	});
});

// HTML DOM non JQuery Way
(function(){
	var button = document.getElementById('dom-click');

	button.onclick = function() {

		// Get input values
		var domNumber = document.getElementById('dom-number-input').value,
			domPhrase = document.getElementById('dom-phrase-input').value;

		// Get dom-list
		var domList = document.getElementById('dom-list');

		// Empty dom-list
		while(domList.firstChild)
			domList.removeChild(domList.firstChild);

		// Create li reference to clone
		var liRef = document.createElement('li');

		for(var i = 0; i < domNumber; i ++) {
			var li = liRef.cloneNode(false);
			var text = document.createTextNode((i + 1) + " " + domPhrase);
			li.appendChild(text);
			domList.appendChild(li);
		}
	};
})(); 