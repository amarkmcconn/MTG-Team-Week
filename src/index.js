import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
// import GetEnchantments from './js/get-enchantment-api.js';
// import GetInstants from './js/get-instant-api.js';
// import GetCreatures from './js/get-creature-api.js';
// import GetLands from './js/get-land-api.js';
// import GetSorceries from './js/get-sorc-api.js';
import GetCard from './js/card.js';

function displayErrors(error) {
  $('.show-errors').text(`${error.message}`);
}

$(document).ready(function() {
  $('#card-selector').click(function(e) {
    e.preventDefault();
    // GetCreatures.getCard()
    //   .then(function(response) {
    //     let nameSrc = response.cards;
    //     let output = [];
    //     let i = Math.floor(Math.random() * 95);
    //     do {
    //       output.push(i);
    //       i++;
    //     }
    //     while (output.length < 2);     
        
    //     output.forEach(function(element) {
    //       $("ul.creature-names").append("<li>" + nameSrc[element].name + "</li>");
    //     });
    //     let src = response.cards[output[0]].imageUrl;
    //     $("#show-creature").html("<img src='" + src + "'>");
    //     })
    //     .catch(function(response) {
    //       console.log(response);
    //       displayErrors(response);
    //   });
    // GetLands.getCard()
    //   .then(function(response) {
    //     let output = [];
    //     let i = Math.floor(Math.random() * 95);
    //     do {
    //       output.push(i);
    //       i++;
    //     }
    //     while (output.length < 2);     
    //     let nameSrc = response.cards;
    //     output.forEach(function(element) {
    //       $("ul.land-names").append("<li>" + nameSrc[element].name + "</li>");
    //     });
    //     let src = response.cards[output[0]].imageUrl;
    //     $("#show-land").html("<img src='" + src + "'>");
    //   });
    // GetEnchantments.getCard()
    //   .then(function(response) {
    //     let output = [];
    //     let i = Math.floor(Math.random() * 95);
    //     do {
    //       output.push(i);
    //       i++;
    //     }
    //     while (output.length < 2);     
    //     let nameSrc = response.cards;
    //     output.forEach(function(element) {
    //       $("ul.enchantments-names").append("<li>" + nameSrc[element].name + "</li>");
    //     });
    //     let src = response.cards[output[0]].imageUrl;
    //     $("#show-enchantment").html("<img src='" + src + "'>");
    //   });
    // GetInstants.getCard()
    //   .then(function(response) {
    //     let output = [];
    //     let i = Math.floor(Math.random() * 95);
    //     do {
    //       output.push(i);
    //       i++;
    //     }
    //     while (output.length < 2);     
    //     let nameSrc = response.cards;
    //     output.forEach(function(element) {
    //       $("ul.instants-names").append("<li>" + nameSrc[element].name + "</li>");
    //     });
    //     let src = response.cards[output[0]].imageUrl;
    //     $("#show-instant").html("<img src='" + src + "'>");    
    //   });
    // GetSorceries.getCard()
    //   .then(function(response) {
    //     let output = [];
    //     let i = Math.floor(Math.random() * 95);
    //     do {
    //       output.push(i);
    //       i++;
    //     }
    //     while (output.length < 2);     
    //     let nameSrc = response.cards;
    //     output.forEach(function(element) {
    //       $("ul.sorcery-names").append("<li>" + nameSrc[element].name + "</li>");
    //     });
    //     let src = response.cards[output[0]].imageUrl;
    //     $("#show-sorcery").html("<img src='" + src + "'>");    
    //   });  

    GetCard.getCard() 
      .then(function(response) {
        // console.log(response.cards[0]);
        if (response instanceof Error) {
          throw Error(`API Error: ${response.message}`);
        }
          let src = response.cards[1].imageUrl;
          $(".show-card-image").html("<img src='" + src + "'>");
        })
        .catch(function(error) {
          // console.log(error);
          // console.log(error.message)
          displayErrors(error);
        });
      });
  });
  // });