function openBlock (id) {
<<<<<<< HEAD
    var block = document.getElementById(id);
=======
    /*var block = document.getElementById(id);
>>>>>>> fae6d0129541e56ae07920b8df60e163e6a6f654
    var blocks = document.getElementById("main_content").getElementsByTagName("div");

    for (var y = 0; y < blocks.length; y++) {
        blocks[y].style.display = "none";
    }
    block.style.display = "block";
<<<<<<< HEAD
    
    // TODO: remove the "active" class from all of the li elements inside the menu
    // TODO: add the "active" class to the li element that contains the link that was clicked

}

// TODO: add the "hover" class to the menu items when you hover over them


// TODO: set up the tooltip plugin on all of the links in the menu

=======
    */
    $("#main_content div").hide();
    $('#' + id).show();
    
    //$(id).show();
    
    // TODO: remove the "active" class from all of the li elements inside the menu
    $("#menu li").removeClass("active");
    // TODO: add the "active" class to the li element that contains the link that was clicked
    var menuItem = "#menu_item_" + id;
    $(menuItem).parent().addClass("active");
}

// TODO: add the "hover" class to the menu items when you hover over them
//Used CSS

// TODO: set up the tooltip plugin on all of the links in the menu
$('#menu a').tooltip({delay:1000});
>>>>>>> fae6d0129541e56ae07920b8df60e163e6a6f654
