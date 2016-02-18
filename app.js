$(function(){

	//Makes the Sections
	function createDivs(elm) {
		for(i = 0; i < 10; i++) {
				elm.append("<div class='x1' +  ></div>");
				// $(".x1").append(x3);
				$.get('https://www.reddit.com/r/aww/.json', function(somethingElse){
    				var title = somethingElse.data.children[i].data.title;
    
    				var dogStory = $("<h1></h1>").text(title);
  					$('body').append(dogStory);
   

    				var url = somethingElse.data.children[i].data.thumbnail;
    
    				var dogImage = $("<img />").attr("src" , url);
    
    $('body').append([dogStory, dogImage]);

		});
				if(i === 11) break;
		};

	};

	createDivs($("body"));

	// for(var i=1; i<=24; i++){
 //        seatNumber.push(i);
 //        $(".seat-chart").append(function(){
 //            return "<div class='available' id='d" + i.toString() +"'></div>";

 //        })
 


	});


      