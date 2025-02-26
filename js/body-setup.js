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
  'index.html': '<a href="index.html">Home</a>',
  'recipes.html': '<a href="index.html">Home</a> / <a href="recipes.html">Recipes</a>',
  'about-me.html': '<a href="index.html">Home</a> / <a href="about-me.html">About Me</a>',
  'menus.html': '<a href="index.html">Home</a> / <a href="menus.html">Menus</a>',
  'tools.html': '<a href="index.html">Home</a> / <a href="tools.html">Tools</a>'
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

  // Fill entire window if content isn't enough to
  let winHeight = $(window).height();
  let bodHeight = $('.body').height();
  if (bodHeight<winHeight) {
    $('.body').css({height: '100vh'})
  }

  // Recipes navigation dropdown menu
  $('.drop-btn').on('mouseenter', () => {
    $('.drop-content').slideDown(200);
  })
  $('.drop-content').on('mouseleave', () => {
    $('.drop-content').slideUp(100);
  })

  // Aside hiding
  $('.tag-nav-btn').on('click', () => {
    $('.tag-nav').toggleClass('hide')
    if ($('.tag-nav').hasClass('hide')) {
      $('.tag-nav-btn').html('<')
    } else $('.tag-nav-btn').html('>')
  })
})
