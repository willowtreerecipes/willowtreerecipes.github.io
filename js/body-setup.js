//------------------------------------------------[Variables]----
// Header Stuff
const siteName = "Willowtree Recipes";

// Nav links
const aboutMeURL = "about-me.html";
const recipesURL = "recipes.html";
const menusURL = "menus.html";
const toolsURL = "tools.html";

// Footer Stuff

//---------------------------------------------------[Markup]----
let header =
`
<h1>${siteName}</h1>
`;

let nav =
`
<a href="index.html">Home</a>
<a href=${aboutMeURL}>About Me</a>
<a href=${recipesURL}>Recipes</a>
<a href=${menusURL}>Menus</a>
<a href=${toolsURL}>Tools</a>
`;

let footer =
`
<p>&copy; 2019 ${siteName} Inc.</p>
`;

document.getElementById("header").innerHTML = header;
document.getElementById("nav").innerHTML = nav;
document.getElementById("footer").innerHTML = footer;
