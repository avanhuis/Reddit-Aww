$(function(){

	$.get('https://www.reddit.com/r/aww/.json', function(somethingElse){


	//Makes the Sections
		function createDivs() {
			for(i = 0; i < 10; i++) {
				var title = somethingElse.data.children[i].data.title;
				var imgUrl = somethingElse.data.children[i].data.url;
				var author = somethingElse.data.children[i].data.author;
				var comments = somethingElse.data.children[i].data.permalink;
				var numComments = somethingElse.data.children[i].data.num_comments;					

				var dogStory = $("<h2></h2>").html("<a href='" + imgUrl + "'>" + title + "</a>");
				// $("body").append(dogStory);

				var commentSection = $("<p></p>").html(numComments + " " + "<a href='http://www.reddit.com/" + comments + "'>comments</a>");

				var authorName = $("<h3></h3>").html(author);

				var url = somethingElse.data.children[i].data.thumbnail;
				var dogImage = $("<img />").attr("src" , url);

				var divsection = $('<div class="divclass"></div>');

				divsection.append([dogStory, authorName, dogImage, commentSection]);

				$("body").append(divsection);
			}
				// if(i === 11) break;
		}

		createDivs();

	});

});


      