var slogan1=document.querySelector(".slogan1");
var slogan2=document.querySelector(".slogan2");
fetch('https://edn25.herokuapp.com/slogan').then(user=>user.json()).then(
  function(data){
    slogan1.innerHTML=data[data.length-1].slogan1;
    slogan2.innerHTML=data[data.length-1].slogan2
  }
)
