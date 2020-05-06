var  retour = document.querySelector('.retour'),    
	         hamberger = document.querySelector('#hamberger'),
			 bloc = document.querySelector('.bloc'),
			 menu = document.querySelector('#menu '),
			 logo = document.querySelector('#logo '),
			 toriteny= document.querySelector('#toriteny '),
			 menuli = document.querySelector('#menu li'),
			 retourdiv = document.querySelector('.top'),
			 header2= document.querySelector('#header2 ');

initiation = 0;
hambergerclick = function(){                       // CLIQUER SUR AMBERGER
	            hamberger.addEventListener('click',function() {
					initiation = 1; 
					header2.style.transition = "top 0.5s";
					header2.style.top = "0%";
				},false);	 
				if(initiation = 1){	 
				retour.addEventListener('click',function() {
					header2.style.transition = "top 0.5";
			        header2.style.top = "-100%"; 
				},false);
				retourdiv.addEventListener('click',function() {
					header2.style.transition = "top 0.5";
			        header2.style.top = "-100%"; 
				},false);
			  }
	};
		hambergerclick();
