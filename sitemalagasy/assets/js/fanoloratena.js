var  papa = document.querySelector('#papa'),    
             bout = document.querySelector('.bout'),
             retour = document.querySelector('.retour');

             boutclick = function(){                       
	            bout .addEventListener('click',function() {
					papa.style.transition = "transform 0.5s";
					papa.style.transform = "translateY(0%)";
                },false);
                retour .addEventListener('click',function() {
					papa.style.transition = "transform 0.5s";
					papa.style.transform = "translateY(-100%)";
				},false);	 
			
			  
	};
    boutclick();