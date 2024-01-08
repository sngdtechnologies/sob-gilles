


const headerv = document.querySelector(".headerv");
const btnhome = document.getElementById("btnhome");
const fermer = document.getElementById("close");

fermer.addEventListener("click",()=>{
    headerv.classList.remove("translate-x-[0%]");
    
})


btnhome.addEventListener("click",()=>{
    headerv.classList.add("translate-x-[0%]");
})

let tabsContainer = document.querySelector("#tabs");

let tabTogglers = tabsContainer.querySelectorAll("a");


tabTogglers.forEach(function(toggler) {
  toggler.addEventListener("click", function(e) {
    e.preventDefault();

    let tabName = this.getAttribute("href");

    let tabContents = document.querySelector("#tab-contents");

    for (let i = 0; i < tabContents.children.length; i++) {

      tabTogglers[i].parentElement.classList.remove("border-green-600", "border-b",  "-mb-px", "opacity-100");  tabContents.children[i].classList.remove("hidden");
      if ("#" + tabContents.children[i].id === tabName) {
        continue;
      }
      tabContents.children[i].classList.add("hidden");

    }
    e.target.parentElement.classList.add("border-green-600", "border-b-4", "-mb-px", "opacity-100");
  });
});

document.getElementById("default-tab").click();



// scroll charging span skills

window.addEventListener("scroll",()=>{
   console.log(document.ScrollX);
})




// animation pourcentage skills

lesskillsline = document.querySelectorAll(".skillsline");



window.addEventListener("scroll",()=>{ 
console.log(window.scrollY);
if(window.scrollY > 100 && window.scrollY < 241){ 

   for(let i = 0 ; i < lesskillsline.length;i++){ 
      console.log( lesskillsline[i]);
      lesskillsline[i].className += "transition-all","ease","duration-500";
      
      lesskillsline[0].style.width = 85 + "%";
      lesskillsline[1].style.width = 95 + "%";
      lesskillsline[2].style.width = 70 + "%";
      lesskillsline[3].style.width = 70 + "%";

      lesskillsline[4].style.width = 60 + "%";
      lesskillsline[5].style.width = 40 + "%";   
      lesskillsline[6].style.width = 60 + "%";

      lesskillsline[7].style.width = 50 + "%";
      lesskillsline[8].style.width = 75 + "%";
      lesskillsline[9].style.width = 65 + "%";
      lesskillsline[10].style.width = 70 + "%";

      
      lesskillsline[11].style.width = 60 + "%";
      lesskillsline[12].style.width = 55 + "%";
      lesskillsline[13].style.width = 35 + "%";
      lesskillsline[14].style.width = 40 + "%";
      lesskillsline[15].style.width = 40 + "%";

       
   
  };

  }

});



// const sr =  ScrollReveal({ reset: true });

// sr.reveal("#initiative",{
//   duration:1000,
//   Delay:5,
//   distance:"280px",
//   origin:"bottom"

// })

document.addEventListener("change",()=>{

  document.body.style.backgroundColor ="RED";

}
)