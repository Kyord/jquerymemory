var arr;
var teste = false;

var level = 0;
var lvsize = [12, 16, 16, 16, 16]; //Colocar easy, normal e hard com mais 1 array?

$(document).ready(function(){
	$("#game").sortable();
	$("#game").disableSelection();
	$("#game").sortable("option", "revert", true );
	
	$("#play").click(function(){
		sort();

		$("#play").hide();
		$("h1").hide();
	});

	$('#game').sortable({
		update: function(event, ui) {
			if($(this).sortable('toArray').toString() == arr || teste) {
				$("#game").hide();

				level += 1;
				$("h1").text("CONGRATULATIONS, YOU WIN!!!");
				listRemove();
				init();
			}
		}
	});
});

function init() {
	createArray(lvsize[level]);
	shuffle(arr);
	listAdd();

	for (var i = 0; i < lvsize[level]; i++) {
		$("#"+i).css("background-image", "url(img/illusion"+level+"/"+i+".jpg)");
	}

	$("#play").fadeIn(1500);
	$("h1").fadeIn(1500);
}

function sort() {
	$("#game").sortable("disable").fadeIn(2000, function() {
		for (var i = 0; i < lvsize[level]; i++)
			$("#"+arr[i]).css("background-image", "url(img/illusion"+level+"/"+i+".jpg)");

		$("#game").sortable("enable");
	}).css("display", "flex");
}

function listRemove(){
	for(var i = 0; i < lvsize[level]; i++){
		$('#'+i).remove();
	}
}

function listAdd(){
	for(var i = 0; i < lvsize[level]; i++) {
		$("#game").append('<li id="'+i+'"></li>');
	}
}

function createArray(size) {
	arr = new Array(size);

	for (var i = 0; i < lvsize[level]; i++) {
		arr[i] = i;
	}
}

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};