 var ENtete = document.querySelector('#header'),
		     retour = document.querySelector('#retour'),    
	         hamberger = document.querySelector('#hamberger'),
			 bloc = document.querySelector('.bloc'),
			 menu = document.querySelector('#menu '),
			 logo = document.querySelector('#logo '),
			 toriteny= document.querySelector('#toriteny '),
			 
			 icone= document.querySelector('.plus'),
			 prev= document.querySelector('.prev'),
			 show= document.querySelector('.show'),
			 show2= document.querySelector('.show2'),
			 show3= document.querySelector('.show3'),
			 textshow= document.querySelector('#textshow'),
			 menuli = document.querySelector('#menu li');
 
 var initiat = 0;
         iconeclick = function(){   // CLIQUER SUR icone
		             
					 
	            icone.addEventListener('click',function() {
					 show.style.transition = "left 0.5s";
					 show2.style.transition = "left 0.8s";
					 show3.style.transition = "left 1s";
					 icone.style.transition = "left 0.6s";
					 prev.style.transition = "left 0.5s";
					 textshow.style.transition = "left 1.3s";
					
					 initiat = 1;
					 show.style.left= "0%";
					 show2.style.left = "-10%";
					 show3.style.left = "-22%";
					//  show3.style.zIndex = "2";
					 
					 
					 textshow.style.opacity = "0.8";
					 textshow.style.zIndex = "2";
					 textshow.style.animation = "animet1 1.3s" ;
					 
					 icone.style.opacity = "0";
					 icone.style.zIndex = "1";
					 
					 logo.style.opacity = "0";
					 logo.style.zIndex = "-1";
					 
					 prev.style.opacity = "1";
					 prev.style.zIndex = "1";
					 
					 
			},false);
			 
		       if(initiat = 1){
					prev.addEventListener('click',function() {
					 initiat = 0;
					 
					 show.style.transition = "left 0.5s";
					 show2.style.transition = "left 0.8s";
					 show3.style.transition = "left 1s";
					 icone.style.transition = "left 0.6s";
					 prev.style.transition = "left 0.5s";
					 textshow.style.transition = "left 1.3s";
					 
					 show.style.transition = "left 0.5s";
					 show2.style.transition = "left 0.8s";
					 show3.style.transition = "left 1s";
					 
				     show.style.left= "-100%";
					 show2.style.left= "-100%";
                     show3.style.left = "-100%";
					 
					 textshow.style.opacity = "0.8";
					 textshow.style.zIndex = "-1";
					 textshow.style.animation = "animet2 1.3s" ;
					 
					 prev.style.opacity = "0";
					 prev.style.zIndex = "-1";
					 
					 icone.style.opacity = "0.8";
					 icone.style.zIndex = "1";
					 
					  logo.style.opacity = "1";
					 logo.style.zIndex = "2";
					 
					 
			},false); 
			}
		  
		  
		  };
		iconeclick();
		