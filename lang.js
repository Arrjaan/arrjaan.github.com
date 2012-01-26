$(window).bind('hashchange', function() {
	var lang = window.location.hash;
	if ( lang == "#nl" ) nl();
	if ( lang == "#en" ) en();
});
$(document).ready(function() {
	var page = window.location.hash;
});

function en() {
	document.getElementById("title").innerHTML = "<h2>Welcome</h2>";
	document.getElementById("content").innerHTML = "Welcome to my GitHub page! More info is coming soon.";
	document.getElementById("sb_title").innerHTML = "<h2>Coming Soong</h2>";
	document.getElementById("sb_content").innerHTML = "-";
	document.getElementById("edited").innerHTML = "Last edited at";
}

function nl() {
	document.getElementById("title").innerHTML = "<h2>Welkom</h2>";
	document.getElementById("content").innerHTML = "Welkom op mijn GitHub pagina! Meer informatie volgt binnenkort.";
	document.getElementById("sb_title").innerHTML = "<h2>Binnenkort</h2>";
	document.getElementById("sb_content").innerHTML = "-";
	document.getElementById("edited").innerHTML = "Laatst aangepast op";
}