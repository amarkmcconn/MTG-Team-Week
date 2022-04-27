import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import GetEnchantments from './js/get-enchantment-api.js';
import GetInstants from './js/get-instant-api.js';
import GetCreatures from './js/get-creature-api.js';
import GetLands from './js/get-land-api.js';
import GetSorceries from './js/get-sorc-api.js';
// import GetCard from './js/card.js';
import GetPokemonCard from './js/pokemon.js';


// function background(){
//   let background =$('#body').style.background("url('https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max')");
//   return background;
// }
function displayErrors(error) {
  $('.show-errors').text(`${error}`);
}
$(document).ready(function() {
  $('#card-selector').click(function(e) {
    e.preventDefault();
      GetPokemonCard.getCard() 
      .then(function(response) {
        if (response instanceof Error) {
          throw (`${response}`);
        } 
        let pokemon = response.data;
        let output = [];
        let i = 225;

        do { 
            if (pokemon[i].supertype === "Pokémon") {
            output.push(i);
            i++;
           }
        }
        while (output.length < 2);     
        
        output.forEach(function(element) {
          $("ul.pokemon-names").append("<li>" + pokemon[element].name + "</li>");
          console.log(pokemon[element].supertype);
        });
          let src = response.data[output[0]].images.small;
          $("#show-pokemon").html("<img src='" + src + "'>");
        
        })
        .catch(function(error) {
          displayErrors(error);
        });

      //   GetCard.getCard() 
      //   .then(function(response) {
      //     if (response instanceof Error) {
      //       throw (`${response}`);
      //     }
      //       let src = response.cards[1].imageUrl;
      //       $(".show-card-image").html("<img src='" + src + "'>");
      //     })
      //     .catch(function(error) {
      //       displayErrors(error);
      //     });
 
      GetCreatures.getCard()
      .then(function(response) {
        if (response instanceof Error) {
          throw (`${response}`);
        }
        let nameSrc = response.cards;
        let output = [];
        let i = Math.floor(Math.random() * 95);
        do {
          output.push(i);
          i++;
        }
        while (output.length < 2);     
        
        output.forEach(function(element) {
          $("ul.creature-names").append("<li>" + nameSrc[element].name + "</li>");
        });
        let src = response.cards[output[0]].imageUrl;
        $("#show-creature").html("<img src='" + src + "'>");
        })
          .catch(function(error) {
            displayErrors(error);
        });
    GetLands.getCard()
      .then(function(response) {
        if (response instanceof Error) {
          throw (`${response}`);
        }
        let output = [];
        let i = Math.floor(Math.random() * 95);
        do {
          output.push(i);
          i++;
        }
        while (output.length < 2);     
        let nameSrc = response.cards;
        output.forEach(function(element) {
          $("ul.land-names").append("<li>" + nameSrc[element].name + "</li>");
        });
        let src = response.cards[output[0]].imageUrl;
        $("#show-land").html("<img src='" + src + "'>");
      })
      .catch(function(error) {
        displayErrors(error);
    });
    GetEnchantments.getCard()
      .then(function(response) {
        if (response instanceof Error) {
          throw (`${response}`);
        }
        let output = [];
        let i = Math.floor(Math.random() * 95);
        do {
          output.push(i);
          i++;
        }
        while (output.length < 2);     
        let nameSrc = response.cards;
        output.forEach(function(element) {
          $("ul.enchantments-names").append("<li>" + nameSrc[element].name + "</li>");
        });
        let src = response.cards[output[0]].imageUrl;
        $("#show-enchantment").html("<img src='" + src + "'>");
      })
      .catch(function(error) {
        displayErrors(error);
    });
    GetInstants.getCard()
      .then(function(response) {
        if (response instanceof Error) {
          throw (`${response}`);
        }
        let output = [];
        let i = Math.floor(Math.random() * 95);
        do {
          output.push(i);
          i++;
        }
        while (output.length < 2);     
        let nameSrc = response.cards;
        output.forEach(function(element) {
          $("ul.instants-names").append("<li>" + nameSrc[element].name + "</li>");
        });
        let src = response.cards[output[0]].imageUrl;
        $("#show-instant").html("<img src='" + src + "'>");    
      })
      .catch(function(error) {
        displayErrors(error);
    });
    GetSorceries.getCard()
      .then(function(response) {
        if (response instanceof Error) {
          throw (`${response}`);
        }
        let output = [];
        let i = Math.floor(Math.random() * 95);
        do {
          output.push(i);
          i++;
        }
        while (output.length < 2);     
        let nameSrc = response.cards;
        output.forEach(function(element) {
          $("ul.sorcery-names").append("<li>" + nameSrc[element].name + "</li>");
        });
        let src = response.cards[output[0]].imageUrl;
        $("#show-sorcery").html("<img src='" + src + "'>");    
      })
      .catch(function(error) {
        displayErrors(error);
    });
    });
  });