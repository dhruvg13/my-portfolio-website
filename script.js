// header scrolling effect
$(window).on('scroll', function(){
	if($(window).scrollTop()){
      $('header').addClass('nav-show');
		  
	} 
	else{
		$('header').removeClass('nav-show');
	}
	   
})


function markActive(link) {
    // Remove the "active" class from all links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Add the "active" class to the clicked link
    link.classList.add('active');
}

document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section"); // Assuming you have <section> elements for each section

    sections.forEach(function (section) {
        const link = document.querySelector('a[href="#' + section.id + '"]');
        const rect = section.getBoundingClientRect();

        if (rect.top <= 0 && rect.bottom >= 0) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});


//hamburger
const navSlide = () => {
	 const hamburger = document.querySelector(".hamburger");
	 const navbar = document.querySelector(".nav-bar");
	 const navLinks = document.querySelectorAll(".nav-bar li");

     hamburger.onclick = () => {
		
	 navbar.classList.toggle("nav-active");
		 
      //Animation links
	 navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = "";
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+1}s`;
		   }
		});
	  //hamburger animation
	 hamburger.classList.toggle("toggle");
    }
	 
	}

window.onload = () => navSlide();