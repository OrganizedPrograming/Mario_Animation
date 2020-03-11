jQuery(function($){
	$(document).ready(function(){

		//$('#mario').sprite({ fps: 8, no_of_frames: 5 });
		//$('#coin').sprite({ fps: 6, no_of_frames: 5 });
		$('#block').sprite({ fps: 7, no_of_frames: 4 });
		$('#bg').pan({ fps: 30, speed: 1, dir: 'left'});
		$('#clouds').pan({ fps: 30, speed: 5, dir: 'right'});
		$('#yoshi').sprite({fps: 7, no_of_frames: 6})
		.spRandom({
			top: 100,
			left: 850,
			right: 950,
			bottom: 340,
			speed: 4000,
			pause: 3000
		});
	});
});
