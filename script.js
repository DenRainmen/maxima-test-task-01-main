


let btn_next = document.querySelector(".next");
btn_next.addEventListener("click", nextPicture);

let btn_prev = document.querySelector(".prev");
btn_prev.addEventListener("click", prevPicture);

let images = document.querySelectorAll("#gallery .photos img")

console.log(images)


let imgIndex = 0;
let nextPicTime;


setInterval(nextPicture, 10000);

function nextPicture(){

	images[imgIndex].className = "";

	++imgIndex;
	if(imgIndex === images.length){
		imgIndex = 0;	
	} ;
	
	images[imgIndex].className = "showed";``

	
}

function prevPicture(){

	images[imgIndex].className = "";
	--imgIndex;

	if(imgIndex < 0){
		imgIndex = images.length - 1;
		
	}
	images[imgIndex].className = "showed";

	
}



