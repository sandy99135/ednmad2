var  header = document.querySelector('#header'),    
	         newlife = document.querySelector('#newlife'),
			 socio1	 = document.querySelector('#socio1')
			 chanteur1 	 = document.querySelector('.chanteur1 img'),
			 chanteur2 	 = document.querySelector('#chanteur2 img'),
			 bouton = document.querySelector('#bouton');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	
	if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		header.style.backgroundColor = "rgba(51,51,51,1)";
		header.style.height = "60px";
		header.style.lineHeight = "1.25em";
		bouton.style.top = "10px";
		socio1.style.opacity = "1";
	}
    else {	
	    header.style.backgroundColor = "rgba(2,0,0,0.4)"; 
	    header.style.height = "90px";
		header.style.lineHeight = "3.25em";
		bouton.style.top = "30px";
		socio1.style.opacity = "0";
	}
	
	
	 if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
		 chanteur2.style.transition = "transform 2s";
		 chanteur2.style.transform = "scale(0.9)";
		
	}
     else {	
	     chanteur2.style.transition = "transform 2s";
		 chanteur2.style.transform = "scale(1)";
	 }

};	
scrollFunction();


