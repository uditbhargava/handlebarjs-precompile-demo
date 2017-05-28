window.onload = function (){
	//Retrieve the template data from the HTML .
	//var template = $('#handlebars-demo').html();

	var context = { "name" : "Ritesh Kumar", "occupation" : "developer" };

	//Compile the template data into a function
	// var templateScript = Handlebars.compile(template);

	 //var html = templateScript(context);
	//html = 'My name is Ritesh Kumar . I am a developer.'
	var template = JST['templates/leftbar.hbs'];
	var html = template(context);
    Handlebars.registerPartial("leftbar", html);
    
    var template = JST['templates/right.hbs'];
	var html2 = template(context);
    Handlebars.registerPartial("rightbar", html2);
    
    var template = JST['templates/main.hbs'];
	var html3 = template();
    
	$(document.body).append(html3);
}

