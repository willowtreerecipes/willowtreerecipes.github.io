//------------------------------------------------[Variables]----
// Header Stuff
const siteName = "Willowtree Recipes";

// Nav links
const aboutMeURL = "about-me.html";
const recipesURL = "recipes.html";
const menusURL = "menus.html";
const toolsURL = "tools.html";

// Footer Stuff

// Breadcrumbs Stuff
const pathDict = {
  'index.html': 'Home',
  'recipes.html': 'Home / Recipes',
  'about-me.html': 'Home / About Me',
  'menus.html': 'Home / Menus',
  'tools.html': 'Home / Tools'
};

//---------------------------------------------------[Markup]----
let header =
`
<h1>${siteName}</h1>
`;

let nav =
`
<ul>
  <li><a href="index.html">Home</a></li>
  <li><a href=${aboutMeURL}>About Me</a></li>
  <li><div class="drop-btn">
  <a href=${recipesURL}>Recipes</a>
    <ul class="drop-content hide">
      <li><a href='#'>Main Dishes</a></li>
      <li><a href='#'>Side Dishes</a></li>
    </ul>
  </div></li>
  <li><a href=${menusURL}>Menus</a></li>
  <li><a href=${toolsURL}>Tools</a></li>
</ul>
`;

let footer =
`
<p>&copy; 2019 ${siteName} Inc.</p>
`;


$(document).ready(function(){
  document.getElementById("header").innerHTML = header;
  document.getElementById("nav").innerHTML = nav;
  document.getElementById("footer").innerHTML = footer;

  // Breadcrumbs
  let pathName = window.location.pathname;
  pathName = pathName.split('/').pop();

  document.getElementById("breadcrumbs").innerHTML = pathDict[pathName];

  $('.drop-btn').on('mouseenter', () => {
    $('.drop-content').removeClass('hide');
  })
  $('.drop-content').on('mouseleave', () => {
    $('.drop-content').addClass('hide');
  })
})
