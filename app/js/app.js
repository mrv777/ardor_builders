document.addEventListener("DOMContentLoaded", function() {

	var theater = theaterJS();

  theater
    .on("type:start, erase:start", function() {
      // add a class to actor's dom element when he starts typing/erasing
      var actor = theater.getCurrentActor();
      actor.$element.classList.add("is-typing");
    })
    .on("type:end, erase:end", function() {
      // and then remove it when he's done
      var actor = theater.getCurrentActor();
      actor.$element.classList.remove("is-typing");
    });

  theater.addActor("ardorTitle", { accuracy: 0.8, speed: 0.95 }).addActor("ardorDesc", { accuracy: 0.8, speed: 0.95 });

  theater
    .addScene("ardorTitle:Ardor Builders", 300)
    .addScene("ardorDesc:Community built Projects, Tools, and Resources for the Ardor Blockchain", 300);


  var mixer = mixitup('.cards_container', 
  	{
    	animation: {
	      enable: false
	  	},
	  	load: {
	  		filter: '.projects',
	      sort: 'random'
	  	}
	  }
	);

  // $( ".card.hackathon" ).css( "display", "none" )

});
