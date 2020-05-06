var  header = document.querySelector('#header'),    
	         newlife = document.querySelector('.bout'),
			 socio1	 = document.querySelector('#socio1')
			 chanteur1 	 = document.querySelector('.chanteur1 img'),
			 chanteur2 	 = document.querySelector('#chanteur2 img'),
			 bouton = document.querySelector('#bouton');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	
	if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		header.style.position= "fixed";
		header.style.right= "0";
		header.style.backgroundColor = "rgba(51,51,51,1)";
		header.style.height = "60px";
		header.style.lineHeight = "1.25em";
		bouton.style.top = "10px";
		socio1.style.opacity = "1";
	}
    else {	
    	header.style.position= "absolute";
	    header.style.backgroundColor = "rgba(2,0,0,0.4)"; 
	    header.style.height = "90px";
		header.style.lineHeight = "3.25em";
		bouton.style.top = "30px";
		socio1.style.opacity = "0";
	}
	// if(document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700) {
	// 	newlife.style.transform = "translateX(-200px)";
	// 	newlife.style.trasition = "0.9s";
	// }
	
	// if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
		// chanteur2.style.transition = "transform 2s";
		// chanteur2.style.transform = "scale(0.9)";
		
	// }
    // else {	
	    // chanteur2.style.transition = "transform 2s";
		// chanteur2.style.transform = "scale(1)";
	// }

};	
// scrollFunction();


// $(document).ready(function(){
// $(window).scroll(function(){	
// 	var positionTop = $(document).scrollTop();
// 	console.log(positionTop);
// 	if((positionTop > 2000)&&(positionTop < 2200)){
// 		// $('#newlife').addClass('animated bounceInLeft');
// 		$('#newlife.bout').addClass('animated flipInX');
// 	}
// 	if((positionTop > 650)&&(positionTop < 800)){
// 		// $('#newlife').addClass('animated bounceInLeft')translateX(-100%);;
// 		$('.sary').addClass('animated bounceInLeft');
// 		$('.sary').style.transform ="translateX(0%)" ;
// 	}
// 	if((positionTop > 3450)&&(positionTop < 3650)){
// 		$('#programe h1 ').addClass('animated zoomIn');
// 	}
	
// });	
// });