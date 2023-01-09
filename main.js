

/* NAV MENU */

const hamburger =document.querySelector('#favcon');
const navMenu =document.querySelector('.nav-menu');

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
})




/*   REGISTRATION FORM  */

const form =document.forms.registration;
const fullname =form.fullname;
const email =form.email;
const phone =form.phone;
const register =document.getElementById('register')



register.addEventListener('click', (e)=>{
  e.preventDefault();
  validation();
  
})


function validation(){
  

  if(fullname.value ===''){
  alert('Full name required!')

}

else if(email.value ===''){
 
  alert('Email required!')
}


else if(phone.value ===''){

  alert('Phone number required!')
}
else{
 
  console.log('Name' + fullname.value);
  console.log('Email' + email.value);
  console.log('Phone' + phone.value);
  fullname.value ="";
  email.value="";
  phone.value="";
  alert('You have successfully signed up!, you will receive a notification shortly!');
}
}


/* -------------------------------------------------------------------------------------------- */


//newsList is the variable that holds an array of strings
  const newsList = [
  "What films should an aspiring journalist watch?",
  "Buried underpants and tea bags help scientists evaluate soil",
  "Decoder: Mining asteroids for minerals can help spare Earth",
  "Media glare can enrich tennis pros yet imperil mental health",
  "'Nightmare' TV show 'Euphoria — health threat or high art?",
  "Decoder: Armenia in a bind as Ukraine war resets global order",
  "What books should an aspiring journalist read?",
  "Marie Colvin shined a light on war-torn corners of the world",
];



const searchButton = document.getElementById('search-btn');


searchButton.addEventListener('click', (e)=>{

  
e.preventDefault();

search();

})



function search() {

  //inputValue is the variable that contains the search string
  const inputValue = document.getElementById("search-text").value;
  let newResults = newsList.filter((value) => value.toLowerCase().includes(inputValue.toLowerCase()))
  
  if(inputValue ===""){
    alert('What do you have in mind?')
  
  }


else if(newResults.length === 0){
alert('Search not found');
}
else{

  document.getElementById('field-areas').style.display ='block';
  document.getElementById('indicator').innerHTML='Did you mean?';
  document.getElementById('field-areas').innerText = (newResults);
  return newResults;

}
}

//------------sample 2 -----------------------------------------------------------------------------

// let newsListToLowerCase = newsList.map(element =>{
//  return element.toLowerCase();
//});

//let holdValue =[];
//let x=0;

//for( let i=0; i<newsList.length; i++){
// let result = newsListToLowerCase[i].match(inputValue.toLocaleLowerCase());
//if((result !=null) || (result !=undefined)){
//  holdValue[x] = newsList[i];
//   x++;
//}

//}
//newsList = holdValue;
//return newsList;
//}






