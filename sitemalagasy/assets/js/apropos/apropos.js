var aidepaste  = document.querySelectorAll('#aidepasteur article div');    
            
			 
aidepastclick = function(){                       
	            aidepaste[0].addEventListener('click',function() {
					this.style.opacity = "1";
					aidepaste[1].style.opacity = "0";
					aidepaste[2].style.opacity = "0";
					aidepaste[3].style.opacity = "0";
					aidepaste[4].style.opacity = "0";
				    },false);
                aidepaste[1].addEventListener('click',function() {
					this.style.opacity = "1";
					aidepaste[0].style.opacity = "0";
					aidepaste[2].style.opacity = "0";
					aidepaste[3].style.opacity = "0";
					aidepaste[4].style.opacity = "0";
				   },false);
                aidepaste[2].addEventListener('click',function() {
					this.style.opacity = "1";
					aidepaste[0].style.opacity = "0";
					aidepaste[1].style.opacity = "0";
					aidepaste[3].style.opacity = "0";
					aidepaste[4].style.opacity = "0";
				   },false);				   
				aidepaste[3].addEventListener('click',function() {
					this.style.opacity = "1";
					aidepaste[0].style.opacity = "0";
					aidepaste[1].style.opacity = "0";
					aidepaste[2].style.opacity = "0";
					aidepaste[4].style.opacity = "0";
				   },false);
			    aidepaste[4].addEventListener('click',function() {
					this.style.opacity = "1";
					aidepaste[0].style.opacity = "0";
					aidepaste[1].style.opacity = "0";
					aidepaste[2].style.opacity = "0";
					aidepaste[3].style.opacity = "0";
				   },false);
	 };
		 aidepastclick();
