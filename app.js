var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var campgrounds = [
		{name: "Salmon Creek", image: "https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg"},
		{name: "Golden Coast", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
		{name: "Granite Hill", image: "https://farm9.staticflickr.com/8422/7842069486_c61e4c6025.jpg"},
];	

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	

	res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
});

app.post("/campgrounds", function(req, res) {
	//get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};
	campgrounds.push(newCampground);
	//redirect back to campgrounds page
	res.redirect("/campgrounds");
}); //this is a different route since it is a POST. Naming is following the REST convention.

app.listen(3000, function() {
	console.log('YelpCamp server listening on port 3000!');
});
