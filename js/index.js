function hamburger(){
	var menu = document.getElementsByClassName("hamburger")[0];
	if(!menu.classList.contains("active")){
		menu.classList.add("active");
	}else{
		menu.classList.remove("active");
	}
}	