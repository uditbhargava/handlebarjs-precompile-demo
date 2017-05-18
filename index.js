window.onload = function (){
	//Retrieve the template data from the HTML .
	//var template = $('#handlebars-demo').html();

	var context = { "name" : "Ritesh Kumar", "occupation" : "developer" };

	//Compile the template data into a function
	// var templateScript = Handlebars.compile(template);

	 //var html = templateScript(context);
	//html = 'My name is Ritesh Kumar . I am a developer.'
	var template = JST['templates/ppt.hbs'];
	var html = template(context);
	$(document.body).append(html);

    var context2 = { "quiz" : "physics"};
    var template2 = JST['templates/quiz.hbs'];
    var html2 = template2(context2);
    $(document.body).append(html2);


    var context3 = { "home" : "main home"};
    var template3 = JST['templates/poll/home.hbs'];
    var html3 = template3(context3);
    $(document.body).append(html3);



    var context4 = { "report" : "student poll"};
    var template4 = JST['templates/poll/report.hbs'];
    var html4 = template4(context4);
    $(document.body).append(html4);

}

