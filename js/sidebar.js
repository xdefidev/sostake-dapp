let open = false;

function openNav() {  
  if(window.matchMedia('(max-width: 1040px)').matches){
    open = true;
    document.getElementById('sidebar').style.width="100%";
    document.getElementById('menuButton').src="media/menu_remove.svg";
  }    
}

function closeNav() {
  if(window.matchMedia('(max-width: 1040px)').matches){
        open = false;
        document.getElementById('sidebar').style.width="0";
        document.getElementById('menuButton').src="media/menu_add.svg";
  }
}

document.getElementById("menuButton").addEventListener("click", function(){
  if(!open){    
    openNav();
  } 
  else {    
    closeNav();
  }     
    
});

document.getElementById("calculator").addEventListener("click",function(){
  document.getElementsByClassName("account")[0].classList.add("hide");
  document.getElementsByClassName("stake")[0].classList.add("hide");
  document.getElementsByClassName("dashboard")[0].classList.add("hide");
  document.getElementsByClassName("calculator")[0].classList.remove("hide");
  document.getElementById("dashboard").classList.remove("selected");
  document.getElementById("stake").classList.remove("selected");
  document.getElementById("account").classList.remove("selected");
  document.getElementById("calculator").classList.add("selected");

  if(window.matchMedia('(max-width: 1040px)').matches){
    console.log("match");
    closeNav()
  }
});

document.getElementById("account").addEventListener("click",function(){
  document.getElementsByClassName("account")[0].classList.remove("hide");
  document.getElementsByClassName("calculator")[0].classList.add("hide");
  document.getElementsByClassName("stake")[0].classList.add("hide");
  document.getElementsByClassName("dashboard")[0].classList.add("hide");
  document.getElementById("account").classList.add("selected");
  document.getElementById("stake").classList.remove("selected");
  document.getElementById("calculator").classList.remove("selected");
  document.getElementById("dashboard").classList.remove("selected");
  if(window.matchMedia('(max-width: 1040px)').matches){
    console.log("match");
    closeNav()
  } 
});

document.getElementById("dashboard").addEventListener("click",function(){
  document.getElementsByClassName("account")[0].classList.add("hide");
  document.getElementsByClassName("calculator")[0].classList.add("hide");
  document.getElementsByClassName("stake")[0].classList.add("hide");
  // document.getElementsByClassName("stake")[0].classList.add("hide");
  document.getElementsByClassName("dashboard")[0].classList.remove("hide");
  document.getElementById("dashboard").classList.add("selected");
  document.getElementById("calculator").classList.remove("selected");
  document.getElementById("account").classList.remove("selected");
  document.getElementById("stake").classList.remove("selected");
  // document.getElementById("stake").classList.remove("selected");

  if(window.matchMedia('(max-width: 1040px)').matches){
    console.log("match");
    closeNav()
  }
});

document.getElementById("stake").addEventListener("click",function(){
  document.getElementsByClassName("account")[0].classList.add("hide");
  document.getElementsByClassName("calculator")[0].classList.add("hide");
  document.getElementsByClassName("dashboard")[0].classList.add("hide");
  document.getElementsByClassName("stake")[0].classList.remove("hide");
  document.getElementById("stake").classList.add("selected");
  document.getElementById("dashboard").classList.remove("selected");
  document.getElementById("account").classList.remove("selected");
  document.getElementById("calculator").classList.remove("selected");

  if(window.matchMedia('(max-width: 1040px)').matches){
    console.log("match");
    closeNav()
  }
});

document.getElementById("stakebutton").addEventListener("click",function(){
  document.getElementsByClassName("import3")[0].classList.add("hide");
  document.getElementsByClassName("import2")[0].classList.remove("hide");
  document.getElementById("unstakebutton").classList.remove("active");
  document.getElementById("stakebutton").classList.add("active");
});

document.getElementById("unstakebutton").addEventListener("click",function(){
  document.getElementsByClassName("import2")[0].classList.add("hide");
  document.getElementsByClassName("import3")[0].classList.remove("hide");
  document.getElementById("unstakebutton").classList.add("active");
  document.getElementById("stakebutton").classList.remove("active");
});

document.getElementsByClassName("import3")[0].classList.add("hide");

// window.matchMedia('(max-width: 1041px)').addEventListener("change", function(){
//   console.log("TEST MAX")
//   document.getElementById('sidebar').style.width="15em";
// })

// window.matchMedia('(min-width: 1040px)').addEventListener("change", function(){
//   console.log("TEST MIN")
//   document.getElementById('sidebar').style.width="0px";
// })