window.addEventListener('load', function () {
    new FastClick(document.body);
}, false);

// The dynamically built HTML pages. In a real-life app, In a real-life app, use Handlerbar.js, Mustache.js or another template engine
var homePage =
    '<div>' +
        '<div class="header"><h1>Main Menu</h1></div>' +
        '<div class="scroller">' +
            '<ul class="list">' +
                '<li><a href="#page1"><strong>Ranking</strong></a></li>' +
                '<li><a href="#page2"><strong>Resources</strong></a></li>' +
                '<li><a href="#page3"><strong>Existing Training</strong></a></li>' +
                '<li><a href="#page4"><strong>Acts of Inclusion</strong></a></li>' +
                '<li><a href="#page5"><strong>Calender</strong></a></li>' +
                '<li><a href="#page6"><strong>Practice Quiz</strong></a></li>' +
                '<li><a href="#page7"><strong>Self Assessment</strong></a></li>' +
                '<li><a href="#page8"><strong>Settings</strong></a></li>' +
            '</ul>' +
        '</div>' +
    '</div>';

var detailsPage =
    '<div>' +
        '<div class="header"><a href="#" class="btn">Back</a><h1>Content</h1></div>' +
        '<div class="scroller">' +
            '<div class="robot">' +
                '<img src="images/{{img}}"/>' +
                '<h2>{{name}}</h2>' +
                '<p>{{description}}</p>' +
            '</div>' +
        '</div>' +
    '</div>';


var slider = new PageSlider($("#container"));
$(window).on('hashchange', route);

// Basic page routing
function route(event) {
    var page,
        hash = window.location.hash;

    if (hash === "#page1") {
        page = merge(detailsPage, {img: "buildbot.jpg", name: "Ranking", description: "This is where the Ranking details would be. Their Inclusion score, as well as their achievements."});
//        slider.slide($(page), "right");
    } else if (hash === "#page2") {
        page = merge(detailsPage, {img: "medibot.jpg", name: "Resources", description: "This page will contain links to currently available resources."});
//        slider.slide($(page), "right");
    } else if (hash === "#page3") {
        page = merge(detailsPage, {img: "ripplebot.jpg", name: "Existing Training", description: "This page will contain links and information on existing inclusion training."});
//        slider.slide($(page), "right");
	} else if (hash === "#page4") {
        page = merge(detailsPage, {img: "buildbot.jpg", name: "Acts of Inclusion", description: "This page will contain a list of examples of acts of inclusion"});
//        slider.slide($(page), "right");
	} else if (hash === "#page5") {
        page = merge(detailsPage, {img: "medibot.jpg", name: "Calender", description: "This page will contain a calender of sorts to keep track of what days the user had positive actions."});
//        slider.slide($(page), "right");
	} else if (hash === "#page6") {
        page = merge(detailsPage, {img: "ripplebot.jpg", name: "Practice Quiz", description: "This page will contain a practice quiz that will test the user in certain situations."});
//        slider.slide($(page), "right");
	} else if (hash === "#page7") {
        page = merge(detailsPage, {img: "buildbot.jpg", name: "Self Assessment", description: "Take 20 question self assessment, and also review assessment results."});
//        slider.slide($(page), "right");
	} else if (hash === "#page8") {
        page = merge(detailsPage, {img: "medibot.jpg", name: "Settings", description: "Change settings like user nickname and reminder schedule."});
//        slider.slide($(page), "right");
    }
    else {
        page = homePage;
//        slider.slide($(homePage), "left");
    }

    slider.slidePage($(page));

}

// Primitive template processing. In a real-life app, use Handlerbar.js, Mustache.js or another template engine
function merge(tpl, data) {
    return tpl.replace("{{img}}", data.img)
              .replace("{{name}}", data.name)
              .replace("{{description}}", data.description);
}

route();