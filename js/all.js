this["JST"] = this["JST"] || {};

this["JST"]["templates/home.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;
    // comment for commit 2

  return "<div>\n	I am in "
    + container.escapeExpression(((helper = (helper = helpers.home || (depth0 != null ? depth0.home : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"home","hash":{},"data":data}) : helper)))
    + " of Poll, So what are you doing.\n</div>\n";
},"useData":true});

this["JST"]["templates/ppt.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div>\n	Hello Friends, I am a "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + ". I am a "
    + alias4(((helper = (helper = helpers.occupation || (depth0 != null ? depth0.occupation : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"occupation","hash":{},"data":data}) : helper)))
    + ".\n</div>\n";
},"useData":true});

this["JST"]["templates/quiz.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div>\n	The quiz is for "
    + container.escapeExpression(((helper = (helper = helpers.quiz || (depth0 != null ? depth0.quiz : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"quiz","hash":{},"data":data}) : helper)))
    + ".	\n</div>\n";
},"useData":true});

this["JST"]["templates/report.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div>\n	Here is the report for "
    + container.escapeExpression(((helper = (helper = helpers.report || (depth0 != null ? depth0.report : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"report","hash":{},"data":data}) : helper)))
    + ".\n</div>\n";
},"useData":true});
