(() => {
  console.log("Trevoooooooor");
//I wrote a written plan on read.me
//Soyoooon
  let nameContainer = document.querySelector(".textName"),
  	  phoneContainer = document.querySelector(".textPhone"),
  	  hobbiesContainer = document.querySelector(".textHobby"),
  	  emailContainer = document.querySelector(".textEmail"),
  	  infoContainer = document.querySelector(".textP1"),

  	  getPicById = document.querySelector("#pic");
      getElementById = document.querySelector("#girl");
      getImgById = document.querySelector("#hobby");


const yoonButtons = document.querySelectorAll(".bts");


 const ourNames = ["Soyoon Lee", "Yufeng Lin"];
 	 ourPhones = ["519 617 0703", "416 836 6885"];
 	  ourHobbies =["Struggling with Java Script", "Work Out & Rifitting the car"];
      ourEmail = ["s_lee77176@fanshaweonline.ca", "y_lin35@fanshaweonline.ca"];
       ourInfos = ["hailed from Seoul, South Korea. Shy, introverted, hate doing a presentation with passion, used to study music composition in S.Korea.", "I came from ZheJiang, Hangzhou.I graduated from ZheJiang A&F University  and majored in digital media. I'm good at production video effects and 3D animation.I have been practised in Zhejiang TV station."];

       ourPic = ["images/soyoonpic.png", "images/TomLin.png"]
       ourIcon = ["images/girl.svg", "images/boy.svg"]
       ourHicons = ["images/hobby.svg", "images/game.svg"];


function changeInfo(){

let arrayIndex = this.dataset.arrayref;


	nameContainer.textContent = ourNames[arrayIndex];
	phoneContainer.textContent = ourPhones[arrayIndex];
	hobbiesContainer.textContent = ourHobbies[arrayIndex];
	emailContainer.textContent = ourEmail[arrayIndex];
	infoContainer.textContent = ourInfos[arrayIndex];
	getPicById.src = ourPic[arrayIndex];
 	getElementById.src = ourIcon[arrayIndex];
 	getImgById.src = ourHicons[arrayIndex];
//debugger;
}

//nameContainer.textContent += "hi"

//debugger;

//yoonButtons.addEventListener("click", changeInfo);
yoonButtons.forEach(button => button.addEventListener("click", changeInfo));



 })();