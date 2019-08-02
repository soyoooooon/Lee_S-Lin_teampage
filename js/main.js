(() => {
  console.log('hello');
 
	let getElementById = document.querySelector("#girl");
 	let getImgById = document.querySelector("#hobby");
 	let getPicById = document.querySelector("#pic");


  const teamInfo = document.querySelectorAll(".text"),
  		teamButton = document.querySelector(".team"),
  		yoonButton = document.querySelector(".bts");



//4 const 4 classes 
  const teamData = [
  		["sy", `Yufeng Lin`],
  		["phone1", `dth jghjdbs`],
  		["hobby1", `car`],
  		["email1", `email`],
  		["intro1", `intro2`]
  			];
  

  
  function changeText(e){

  
  	  let arrayOffset = this.dataset.offset; 
  	  teamInfo.textContent = teamData[arrayOffset][0];
  	 


debugger;

  }



 function changeImg(e) {
 	getElementById.src = `images/boy.svg`;
 	getImgById.src = `images/game.svg`;
 	getPicById.src = `images/TomLin.png`;

//debugger;
  }

 teamButton.addEventListener("click", changeImg);
 yoonButton.forEach(button => button.addEventListener("click", changeText));

})();
