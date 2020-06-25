var slogan1=document.querySelector(".slogan1");
var slogan2=document.querySelector(".slogan2");
fetch('https://edn25.herokuapp.com/slogan').then(user=>user.json()).then(
  function(data){
    slogan1.innerHTML=data[data.length-1].slogan1;
    slogan2.innerHTML=data[data.length-1].slogan2
  }
)
fetch('https://edn25.herokuapp.com/text').then(user=>user.json()).then(
  function(data){
    text1.innerHTML=data[data.length-1].text1;
    text2.innerHTML=data[data.length-1].text2
    text3.innerHTML=data[data.length-1].text3
  }
)
fetch('https://edn25.herokuapp.com/apropos').then(user=>user.json()).then(
  function(data){
    apropos1.innerHTML=data[data.length-1].apropos1;
    apropos2.innerHTML=data[data.length-1].apropos2
    apropos3.innerHTML=data[data.length-1].apropos3
    apropos4.innerHTML=data[data.length-1].apropos4;
    apropos5.innerHTML=data[data.length-1].apropos5
    apropos6.innerHTML=data[data.length-1].apropos6
  }
)
