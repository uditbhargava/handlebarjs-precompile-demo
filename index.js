window.onload = function (){
	//Retrieve the template data from the HTML .
	//var template = $('#handlebars-demo').html();

	var context = { "first_name" : "suman bogati", "last_name" : "developer" };

	//Compile the template data into a function
	// var templateScript = Handlebars.compile(template);

	 //var html = templateScript(context);
	//html = 'My name is Ritesh Kumar . I am a developer.'
	
    
    /*
    var template = JST['templates/right.hbs'];
	var html2 = template();
    Handlebars.registerPartial("rightbar", html2); */
    
		// var template = JST['templates/main.hbs'];
	   // var html3 = template();
	 
	 
	 
		
		
		Handlebars.registerPartial("person", Handlebars.templates['person.hbs']);
		
		//Handlebars.registerPartial("person", Handlebars.templates['main.hbs']);
		
		var template = Handlebars.templates['main.hbs'];
		
		//var template = Handlebars.compile($("#people-template").html());
	  
		var data = template(context);
		document.querySelector('#result').innerHTML = data;
}

