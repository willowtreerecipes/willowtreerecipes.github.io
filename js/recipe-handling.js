import {recipes} from "./modules/json-handler.mjs";
/*
const recipes = {
  'BBQ Meatballs': {
    'ingredients': ['ground beef', 'onions', 'worsteshire sauce'],
    'servings': 4,
    'time': '1 hour',
    'steps': ['mix the stuff together', 'pour bbq sauce over', 'bake']
  },
  'Curry Coconut Fish': {
    'ingredients': ['curry powder', 'coconut flakes', 'panko', 'fish'],
    'servings': 'flexible',
    'time': '30 min',
    'steps': [
      'bread the fish in mix of curry, coconut, and panko',
      'bake at 425F for 15 minutes'
    ]
  }
}
*/

//recipe cards generation
let recip = new Object();
let markup = [];
for (recipe in recipes) {
  recip.name = recipe;
  recip.servings = recipes[recipe]['servings'];
  recip.ingredients = recipes[recipe]['ingredients'];
  recip.steps = recipes[recipe]['steps'];
  recip.time = recipes[recipe]['time'];

recipeCard += `
<article class="recipe">
  <a href="#">
    <h3>${recip.name}</h3>
  </a>
  <p>Servings: ${recip.servings}</p>
  <p>Time to make: ${recip.time}</p>
  <p>Ingredients:</p>
    <ul class="ingredients">
      ${mapList(recip.ingredients)}
    </ul>
</article>
`;
}

document.getElementById('recipes-container').innerHTML = recipeCard;


function mapList(array) {
  let html = [];
  for (var i=0;i<array.length; i++) {
    html += `<li>${array[i]}</li>`;
  }
  return html
}
