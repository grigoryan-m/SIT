window.onload = function(){
	const input = document.getElementById("search_bar");
	let objects = document.getElementsByClassName("object");

	input.addEventListener("input", log);

	function log(e){
		for(let i = 0; i < objects.length; i++){
			if(!(objects[i].innerText.toLowerCase().includes(e.target.value.toLowerCase()))){
				objects[i].style.display = "none";
			}else{
				objects[i].style.display = "block";
			}
		}	
	}
}