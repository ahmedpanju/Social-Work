
exports.home = function(req, res) {

	res.render('index', {
		title: "TEST"
	});
};


exports.research = function(req, res) {
    res.render('research', {
        title: "TEST"
    })
};

exports.contact = function(req, res) {
    res.render('contact', {
        title: "TEST"
    })
};

exports.notFound = function(req, res) {
	res.render('notFound', {
		title : "Oops, this page doesn't exist"
	});
};