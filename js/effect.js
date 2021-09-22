$(document).ready(function(){
	function check_browser(){
		if(navigator.userAgent.indexOf("MSIE") != -1)
		{
			var webpage = document.getElementById("webpage");
			webpage.style.display="none";
			document.body.style.background="black";
			document.body.innerHTML = "<h1 align='center' style='font-family:sans-serif;font-size:100px;'>Please open in chrome browser</h1>";
			document.body.style.color="white";
		}
	}

	check_browser();
});