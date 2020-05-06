var dd=document.querySelector(".envoyer")
dd.addEventListener('click',function(e) {
e.preventDefault()
	var nom=document.querySelector(".Nom").value
	let password=document.querySelector(".Password").value
	// console.log(nom)
 //  console.log(password)
  // const data = new FormData();
  // data.append("nom", nom);
  // data.append("password", password);
   // console.log(data)
    const admin=
    {nom:"tikoJesosy",
        password:"tsifer2019"
    }
   if(admin.nom==nom && admin.password==password){
setTimeout(()=>{window.location="Table.html"},1000)
   }else{
    setTimeout(()=>{alert("Misy tsy mety kely ralahy malala")},1000)

   }

  // fetch('http://localhost:8070/login', {
  // method: 'POST',
  // // headers : new Headers(),
  // body:data
  //           }).then((res) => res.json())
  //           .then((data) =>  { 
  // if(data!=="utilisateur ou mot de passe incorrect"  ){
  // 	setTimeout(()=>{window.location="Table.html"},1000)
  // }else{
  // 	setTimeout(()=>{alert("diso ny teny miafina ralahy malala")},1000)
  // }
  //   })
  
                // setTimeout(()=>{window.location="Table.html"},1000)  	
  				},false);