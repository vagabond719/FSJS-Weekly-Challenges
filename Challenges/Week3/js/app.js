<<<<<<< HEAD
//  1.)  Make sure you have a reference to jQuery from a CDN in the index.html file.  

//  2.)  Use a jQuery to hide all of the answers to all the questions.
$('.answer').hide();

/*  3.)  Write code to show the answer when hovering over a flash card, and hide it when the mouse leaves. 
    Find the approriate event on the jQuery API page to trigger an action on hover https://api.jquery.com/category/events/
    Hint: You can use "this" inside your jQuery function to reference a selected DOM node.  */
$('.flash-card').mouseover(function() {$(this).find(".answer").show();});
$('.flash-card').mouseout(function() {$(this).find(".answer").hide();});

/*  4.) Use jQuery to find the button element on the page and have it toggle all of the answers on and off when clicked.
    Hint: jQuery has a toggle function that can toggle the visibility of a selected DOM node.
    Bonus:  Change the text of the button using jQuery when you toggle the answers on/off. */  
$(".cheat-button").click(function() {
    if($('.answer').is(":visible")) {
        $('.answer').hide();
        $(".cheat-button").text("Show All Answers");
    } else {
        $('.answer').show();
        $(".cheat-button").text("Hide All Answers");
    }
=======
//  1.)  Make sure you have a reference to jQuery from a CDN in the index.html file.  

//  2.)  Use a jQuery to hide all of the answers to all the questions.
$('.answer').hide();

/*  3.)  Write code to show the answer when hovering over a flash card, and hide it when the mouse leaves. 
    Find the approriate event on the jQuery API page to trigger an action on hover https://api.jquery.com/category/events/
    Hint: You can use "this" inside your jQuery function to reference a selected DOM node.  */
$('.flash-card').mouseover(function() {$(this).find(".answer").show();});
$('.flash-card').mouseout(function() {$(this).find(".answer").hide();});

/*  4.) Use jQuery to find the button element on the page and have it toggle all of the answers on and off when clicked.
    Hint: jQuery has a toggle function that can toggle the visibility of a selected DOM node.
    Bonus:  Change the text of the button using jQuery when you toggle the answers on/off. */  
$(".cheat-button").click(function() {
    if($('.answer').is(":visible")) {
        $('.answer').hide();
        $(".cheat-button").text("Show All Answers");
    } else {
        $('.answer').show();
        $(".cheat-button").text("Hide All Answers");
    }
>>>>>>> fae6d0129541e56ae07920b8df60e163e6a6f654
});