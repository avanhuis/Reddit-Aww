$(function(){

	$.get('https://www.reddit.com/r/aww/.json', function(somethingElse){
	//Makes the Sections
		function createDivs() {
			for(i = 0; i < 10; i++) {
					// $(".x1").append(x3);
				var title = somethingElse.data.children[i].data.title;
				var imgUrl = somethingElse.data.children[i].data.url;

				var dogStory = $("<h1></h1>").html("<a href='" + imgUrl + "'>" + title + "</a>");
				$('body').append(dogStory);

				var url = somethingElse.data.children[i].data.thumbnail;
				var dogImage = $("<img />").attr("src" , url);

				$('body').append([dogStory, dogImage]);

			}
				// if(i === 11) break;
		}

		createDivs();

	});

});


      