/*

L'instruction import est utilisée pour importer des liens qui sont exportés par un autre module. 
Les modules importés sont interprétés en mode strict dans tous les cas. 
L'instruction import ne peut pas être utilisée dans les scripts embarqués sauf si ceux-ci proviennent de ressources avec type="module".

*/

import robots from './data.js';

//on "étend" Handlebars avec un helper pour générer la classe en fonction du gender 
//sinon tu pouvais juste faire ton style non pas sur base de .male ou .female mais plutôt avec .robot[data-gender='Male'] .. HAHA !!!!
Handlebars.registerHelper('robotClass', function(str) {
  return `robot ${str.toLowerCase()}`;
});

let source   = document.getElementById("entry-template").innerHTML;
let template = Handlebars.compile(source);

let html = template(robots);
$(".robots").append(html);

$('.choice button').click(function(){
   let genre = $(this).data("filter");
   $('.robot').hide();
   $(`[data-gender='${genre}']`).show();
   if (genre == "All") {
    $('.robot').show();
   }
})


