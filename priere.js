var dd=document.querySelector(".envoyer")
dd.addEventListener('click',function(e) {
  e.preventDefault()
	var nom=document.querySelector(".Nom").value
	var prenom=document.querySelector(".Prenom").value
	var numero=document.querySelector(".Numero").value
	let message=document.querySelector(".Message").value
	
  const data = new FormData();
  data.append("nom", nom);
  data.append("prenom", prenom);
  data.append("numero", numero);
  data.append("message", message);
  fetch('https://edn25.herokuapp.com/priere', {
  method: 'POST',
  headers : new Headers(),
  body:data
            }).then((res) => res.json())
            .then((data) =>  {
  if(data!=="Les champs nom ,prenom ,numero et messages sont obligatoires"){
  	 setTimeout(()=>{window.location="merci.html"},1000)
  }else{
  	alert("il y a un erreur")
  }
              	})
              .catch((err)=>console.log(err))
 
                  	
  				},false);