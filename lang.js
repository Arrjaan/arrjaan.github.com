$(window).bind('hashchange', function() {
	var lang = window.location.hash;
	if ( lang == "#nl" ) nl();
	if ( lang == "#en" ) en();
});

$(document).ready(function() {
	var lang = window.location.hash;
	if ( lang == "#nl" ) nl();
	if ( lang == "#en" ) en();
});

function en() {
	document.getElementById("title").innerHTML = "<h2>Welcome</h2>";
	document.getElementById("content_txt").innerHTML = "Welcome to my GitHub page! More information is coming soon.";
	document.getElementById("sb_title").innerHTML = "<h2>Information</h2>";
	document.getElementById("sb_content").innerHTML = "I am currently working on project <a href=\"/Portall\">Portall</a>. All help is welcome!";
	document.getElementById("edited").innerHTML = "Last edited at";
}

function nl() {
	document.getElementById("title").innerHTML = "<h2>Welkom</h2>";
	document.getElementById("content_txt").innerHTML = "Welkom op mijn GitHub pagina! Meer informatie volgt binnenkort.";
	document.getElementById("sb_title").innerHTML = "<h2>Informatie</h2>";
	document.getElementById("sb_content").innerHTML = "Ik ben momenteel bezig met project <a href=\"/Portall\">Portall</a>. Hulp is van harte welkom!";
	document.getElementById("edited").innerHTML = "Laatst aangepast op";
}