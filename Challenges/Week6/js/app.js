//#Week 6 JQuery Code Challenge

//Objects
		
//Code Challenge:
//Create an object named "Box" with 3 properties, height, width, volume.
var box = {
    Height : 1,
    Width : 1,
    Depth : 1,
    increment : function(value) {
        console.log(value)
        var reg = /Increase|Decrease|Print/;
        var upDown = value.match(reg).toString();
        value = value.replace(reg,"");
        if(upDown === "Increase") {
            this[value] += 1;
        } else if (upDown === "Print") {
            $("#statsSpan").empty().append("<strong>Box Stats</strong><br>" +
            "Height: " + box.Height + "<br>" +
            "Width: " + box.Width + "<br>" +
            "Depth: " + box.Depth + "<br>" +
            "Volume: " + (box.Height * box.Width * box.Depth));
        } else if(upDown === "Decrease") {
            if (this[value] > 1) {
                this[value] -= 1;
            } else {
                alert("The value of " + value + " cannot be negative. The value will be set to 1.")
            }
            
        }   
        console.log(this[value]);
    }
}

$(".btn").click(
    function() {
        var id = $(this).attr("id");
        box.increment(id);
    }
);
//Create 2 buttons for Height. The first button decreases the Box Height by 1. The second button increases the Box Height by 1.
//Create a button that prints the object and its attributes to the page (use the span "output".
 
//Extra credit
//Create interactive buttons to decrease or increase the Width and Volume