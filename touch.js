var body = document.getElementById('body');

// We create a manager object, which is the same as Hammer(), but without the presetted recognizers. 
body = new Hammer.Manager(body);

// Press recognizer with minimal 2000ms press
body.add( new Hammer.Swipe);
// This is where the magic happens
body.on("swipeleft", function(ev) {
    console.log('You swiped left on "body"');
});
body.on("swiperight", function(ev) {
    console.log('You swiped right on "body"');
});

var submenu = document.getElementById('submenu');

// We create a manager object, which is the same as Hammer(), but without the presetted recognizers. 
submenu = new Hammer.Manager(submenu);

// Press recognizer with minimal 2000ms press
submenu.add( new Hammer.Swipe);
// This is where the magic happens
submenu.on("swipeleft", function(ev) {
    console.log('You swiped left on "submenu"');
});
submenu.on("swiperight", function(ev) {
    console.log('You swiped right on "submenu"');
});