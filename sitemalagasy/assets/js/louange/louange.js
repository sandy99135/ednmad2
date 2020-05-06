var backgroundanim = document.querySelector('.backgroundanim'),
         box1 = document.querySelector('.box1'),
		 box2 = document.querySelector('.box2'),
		 box3 = document.querySelector('.box3'),
		 box4 = document.querySelector('.box4'),
		 box5 = document.querySelector('.box5'),
		 box6 = document.querySelector('.box6'),
		 box7 = document.querySelector('.box7'),
		 box8 = document.querySelector('.box8');
		    
 
box1click = function(){                       // mouseover
	           box1.addEventListener('mouseover',function() {
					backgroundanim.style.background = "opacity 1s";
					backgroundanim.style.background = "linear-gradient(#03A9F4,#19fd36)";
				},false);
                box2.addEventListener('mouseover',function() {
					backgroundanim.style.background = "opacity 1s";
					backgroundanim.style.background = "linear-gradient(#FFFFFF,#19fd36)";
				},false);
                 box3.addEventListener('mouseover',function() {
					backgroundanim.style.background = "opacity 0.5s";
					backgroundanim.style.background = "linear-gradient(#FFC107,#E91E63)";
				},false);
                 box4.addEventListener('mouseover',function() {
					backgroundanim.style.background = "opacity 0.5s";
					backgroundanim.style.background = "linear-gradient(#03A9F4,#19fd36)";
				},false);
                 box5.addEventListener('mouseover',function() {
					backgroundanim.style.background = "opacity 0.5s";
					backgroundanim.style.background = "linear-gradient(#FFC107,#19fd36)";
				},false);
                 box6.addEventListener('mouseover',function() {
					backgroundanim.style.background = "opacity 0.5s";
					backgroundanim.style.background = "linear-gradient(#FFC107,#E91E63)";
				},false);				
				box7.addEventListener('mouseover',function() {
					backgroundanim.style.background = "opacity 0.5s";
					backgroundanim.style.background = "linear-gradient(#03A9F4,#19fd36)";
				},false);				
				
				box8.addEventListener('mouseover',function() {
					backgroundanim.style.background = "opacity 0.5s";
					backgroundanim.style.background = "linear-gradient(#FFC107,#19fd36)";
				},false);				
				
			  
	};
		box1click(); 
	         