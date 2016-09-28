var offset = 1;
var testOBJ;

function addPokemon(name) {
    $(
        `
        <li class="poke-card">
            <h3 class="name">${name}</h3>
        </li>
    `
    ).appendTo('#pokemon');
};

function getPoke() {
        $.getJSON("http://pokeapi.co/api/v2/pokemon/?limit=20&offset=" + offset,
            function(json) {
                //console.log(json)
                $.each(json.results, function(i, value) {
                    //console.log(value)
                    // 1.1)  Use the addPokemon function to show each of the Pokémon names that were retrieved.  
                    addPokemon(value.name);
                });
                $(".poke-card").click(function() {
                    //$(".poke-card").hide();
                    //alert($(this).text())
                    getPokeStats($(this).text().trim());
                })
            });
        // 2.3) Use jQuery to disable the next/previous buttons if there are no more Pokémon to retrieve in that direction.  
        if (offset === 1) {
            $("#previous").hide();
        } else {
            $("#previous").show();
        }
        if (offset === 801) {
            $("#next").hide();
        } else {
            $("#next").show();
        }
    }
    // 1.)  Use the PokéAPI from http://pokeapi.co along with jQuery's getJSON function to retrieve the first 20 Pokémon.
$(document).ready(function() {
        getPoke();
    })
    //Hint: Learn how to access resources via the documentation http://pokeapi.co/docsv2/#resource-lists
    // 2.)  Use jQuery to create a click handler for the next and previous buttons.
    // 2.1) Use the "next" and "previous" properties of the pokemon resource object to get the next or previous list of Pokémon.
    // 2.2) When a user clicks next or previous, remove all existing Pokémon from the ul element and add the new list of Pokémon.
$("#previous").click(function() {
    offset -= 20;
    $("#pokemon").empty();
    getPoke();
});
$("#next").click(function() {
    offset += 20;
    $("#pokemon").empty();
    getPoke();
});
/*  Super Awesome Bonus!
    When you click on a Pokémon name, hide all the names and show a larger card that contains details about that Pokémon such as their sprite (picture), name,
    type or anything else you would like to include.  Add a way to go back to the list when your're done looking at the detail.

    Be creative, you can style/arrange the detail information however you like! 
*/
function getPokeStats(pokemon) {
    var modalHTML = "";
    console.log(pokemon);
    $.getJSON("http://pokeapi.co/api/v2/pokemon/" + pokemon, function(json) {
        //console.log(json)
        testOBJ = json;
        modalHTML += '<img class="quickRemove" src="' + json.sprites
            .front_default +
            '"><br class="quickRemove"><br class="quickRemove">'
        $.each(json.abilities, function(i, value) {
            //console.log(value.ability.name);
            modalHTML +=
                '<h1 class="quickRemove">Ability #' + (i +
                    1) + ' : ' + value.ability.name +
                '</h1><br class="quickRemove">'
        });
        $("#myModal").append(modalHTML);
    });
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
    $("#myModal").show();
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        $(".quickRemove").remove();
        modal.style.display = "none";
    };
}