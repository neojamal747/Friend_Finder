/*
Your html-routes.js file should include two routes:
	-A GET Route to /survey which should display the survey page.
	-A default USE route that leads to home.html which displays the home page.
*/
//Dependencies
var path = require("path")

module.exports = function(app){
	app.get("/survey", function (request, response) {
		response.sendFile(path.join(__dirname, "/../../app/public/survey.html"));
	});

	app.use("/", function(request, response){
		response.sendFile(path.join(__dirname, "/../../app/public/home.html"));
	});
}

