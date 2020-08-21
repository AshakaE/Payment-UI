// LAYOUT DYNAMICS

const cardTab = document.querySelector('.card-option');
const bankTab = document.querySelector('.bank-option');
const ussdTab = document.querySelector('.ussd-option');

const methodCard = document.querySelector('.method__card');
const methodBank = document.querySelector('.method__bank');
const methodUssd = document.querySelector('.method__ussd');

const ccinput = document.getElementById('cc');

const tabPill = document.querySelector('.tab-pill');

window.addEventListener('load', function() {
    cardTab.style.color = "white"; 
    cardTab.style.fontWeight = "600"; 
    bankTab.style.color = "#094168";
    ussdTab.style.color = "#094168";    
  });


card.addEventListener('click', function(){
    tabPill.style.transform = "translateX(0)"
    setTimeout(function(){
        cardTab.style.color = "white";
        cardTab.style.fontWeight = "600";  
        bankTab.style.color = "#094168";
        bankTab.style.fontWeight = "400"; 
        ussdTab.style.color = "#094168"; 
        ussdTab.style.fontWeight = "400"; 
    }, 400);

    setTimeout(function(){
        methodCard.style.display = 'flex'
        methodCard.style.opacity = '1'
        methodBank.style.display = 'none'
        methodBank.style.opacity = '0'
        methodUssd.style.display = 'none' 
        methodUssd.style.opacity = '0'
        
      },500);

})

bank.addEventListener('click', function(){
    tabPill.style.transform = "translateX(100%)"
    setTimeout(function(){
        cardTab.style.color = "#094168";
        cardTab.style.fontWeight = "400"; 
        bankTab.style.color = "white";
        bankTab.style.fontWeight = "600"; 
        ussdTab.style.color = "#094168"; 
        ussdTab.style.fontWeight = "400";
    }, 400);
    setTimeout(function(){ 
        methodCard.style.display = 'none'
        methodCard.style.opacity = '0'
        methodBank.style.display = 'flex'
        methodBank.style.opacity = '1'
        methodUssd.style.display = 'none' 
        methodUssd.style.opacity = '0' 
      },500); 
})

ussd.addEventListener('click', function(){
    tabPill.style.transform = "translateX(200%)"
    setTimeout(function(){
        cardTab.style.color = "#094168";
        cardTab.style.fontWeight = "400"; 
        bankTab.style.color = "#094168";
        bankTab.style.fontWeight = "400"; 
        ussdTab.style.color = "white";
        ussdTab.style.fontWeight = "600"; 
    }, 400);
    setTimeout(function(){
        methodCard.style.display = 'none'
        methodCard.style.opacity = '0'
        methodBank.style.display = 'none'
        methodBank.style.opacity = '0'
        methodUssd.style.display = 'flex' 
        methodUssd.style.opacity = '1'
      },500);
      
})

cc.addEventListener('input', function(){
  var value = ccinput.value;

  if (value.startsWith('5399') || value.startsWith('55'))  {
    ccinput.style.backgroundImage = 'url(./assets/img/mastercard.png)'
  } else if (value.startsWith('41')) {
    ccinput.style.backgroundImage = 'url(./assets/img/visa.png)'
  } else if (value.startsWith('506')) {
    ccinput.style.backgroundImage = 'url(./assets/img/verve.png)'
  } else {ccinput.style.backgroundImage = ''}
})

