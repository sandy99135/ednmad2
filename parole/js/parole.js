var listes = document.querySelector('#listes'),    
	         blocliste = document.querySelector('#blocliste');
			 retour = document.querySelector('#retour');
			 


listeclick = function(){                             // voir liste hira
	            listes.addEventListener('click',function() {
					listes.style.transition = "transform 0.3s";
					listes.style.opacity = "1";
					
					blocliste.style.transition = "transform 0.3s";
					blocliste.style.transform = "translateX(400px)";
					
					
					retour.style.style.opacity = "0.8";
				},false);	 
				retour.addEventListener('click',function() {
					listes.style.transition = "transform 0.3s";
					listes.style.opacity = "0.8";
					
					blocliste.style.transition = "transform  0.3s";
					blocliste.style.transform = "translateX(0px)";
					
					
					retour.style.style.opacity = "1";
				},false);
			  
	};
		listeclick();
