$(document).ready( function(){
//Create sketch grid
	$('#header button[name="grid"]').click( function(){
		//var numDivs = prompt("Please enter a grid between 4 and 64"); //come back to this
		var numDivs = 32;
		var size = (960/numDivs);
		var grd = '<div class="sqr"></div>';
		for (i=0; i < numDivs; i++){
			for (j=0; j < (numDivs-1); j++){
				$('#container').append(grd);
			}
			$('#container').append(grd);
		}
		$('.sqr').css("height", size);
		$('.sqr').css("width", size);
	});

//Reset button to erase 'sketch'
	$('#header button[name="reset"]').click( function(){
		$('.sqr').removeClass('sketched');
	});
//Sketch!
	$(document).on('mouseenter', '.sqr', function() {
			$(this).addClass('sketched');
	});
});
