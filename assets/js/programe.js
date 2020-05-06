var  retour = document.querySelector('#programe .info .fa'),    
	          voir1 = document.querySelector(' .P1'),
			  voir2 = document.querySelector(' .P2'),
			  voir3 = document.querySelector(' .P3'),
			  voir4 = document.querySelector(' .P4'),
			  info = document.querySelector('#programe .info');
			 


infoclick = function(){ 

               voir1.addEventListener('click',function() {
					info.style.opacity = "1";
					info.style.zIndex = "3";
				},false); 
              voir2.addEventListener('click',function() {
					info.style.opacity = "1";
					info.style.zIndex = "3";
				},false); 
              voir3.addEventListener('click',function() {
					info.style.opacity = "1";
					info.style.zIndex = "3";
				},false); 
              voir4.addEventListener('click',function() {
					info.style.opacity = "1";
					info.style.zIndex = "3";
				},false); 				
				
	            retour.addEventListener('click',function() {
					
					// info.style.transition = "transform 0.5s";
					info.style.opacity = "0";
					info.style.zIndex = "-1";
				},false);	 
				 

	};
		infoclick();
