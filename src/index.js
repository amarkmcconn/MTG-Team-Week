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
import GetTrainers from './js/trainers-api.js';
import GetEnergy from './js/energies-api.js';


// function background(){
//   let background =$('#body').style.background("url('https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max')");
//   return background;
// }
function displayErrors(error) {
  $('.show-errors').text(`${error}`);
}
$(document).ready(function() {
  $('#card-selector-pokemon').click(function(e) {
    e.preventDefault();
    $('#mtg-row').hide();
    $('#pokemon-row').show();
      GetPokemonCard.getCard() 
      .then(function(response) {
        if (response instanceof Error) {
          throw (`${response}`);
        } 
        let pokemon = response.data;
        let output = [];
        let i = Math.floor(Math.random() * 225);
        do { 
            if (pokemon[i].supertype === "Pokémon") {
            output.push(i);
            i++;
           }
        }
        while (output.length < 21);     
        output.forEach(function(element) {
          $("ul.pokemon-names").append("<li>" + pokemon[element].name + "</li>");
        });
          let src = response.data[output[0]].images.small;
          $("#show-pokemon").html("<img src='" + src + "'>");
        
        })
        .catch(function(error) {
          displayErrors(error);
        });

        GetTrainers.getCard() 
        .then(function(response) {
          if (response instanceof Error) {
            throw (`${response}`);
          } 
          let pokemon = response.data;
          let output = [];
          for (let i = 0; i < 250; i++) {
            if (pokemon[i].supertype === "Trainer") {
              if (output.length < 25) {
                output.push(i);
              }
            }
          }
          output.forEach(function(element) {
            $("ul.trainer-names").append("<li>" + pokemon[element].name + "</li>");
          });
            let src = response.data[output[0]].images.small;
            $("#show-trainer").html("<img src='" + src + "'>");
          })
          .catch(function(error) {
            displayErrors(error);
          });

          GetEnergy.getCard() 
          .then(function(response) {
            if (response instanceof Error) {
              throw (`${response}`);
            } 
            let pokemon = response.data;
            let output = [];
            for (let i = 0; i < 250; i++) {
              if (pokemon[i].supertype === "Energy") {
                if (output.length < 15) {
                  output.push(i);
                }
              }
            }
            output.forEach(function(element) {
              $("ul.energy-names").append("<li>" + pokemon[element].name + "</li>");
              console.log(pokemon[element].supertype);
            });
              let src = response.data[output[0]].images.small;
              $("#show-energy").html("<img src='" + src + "'>");
            })
            .catch(function(error) {
              displayErrors(error);
            });
    });

    $('#card-selector-mtg').click(function(e) {
      e.preventDefault();
      $('#pokemon-row').hide();
      $('#mtg-row').show();
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
        if (response.cards[output[0]].imageUrl === undefined) {
          src = "https://www.debaggioherbs.com/image/no_image.jpg";
        }
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
        if (response.cards[output[0]].imageUrl === undefined) {
          src = "https://www.debaggioherbs.com/image/no_image.jpg";
        }
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
        if (response.cards[output[0]].imageUrl === undefined) {
          src = "https://www.debaggioherbs.com/image/no_image.jpg";
        }
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
        if (response.cards[output[0]].imageUrl === undefined) {
          src = "https://www.debaggioherbs.com/image/no_image.jpg";
        }
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
        if (response.cards[output[0]].imageUrl === undefined) {
          src = "https://www.debaggioherbs.com/image/no_image.jpg";
        }
        $("#show-sorcery").html("<img src='" + src + "'>");    
        })
        .catch(function(error) {
          displayErrors(error);
      });
    });

    $('#toggleMtg').click(function(e) {
      e.preventDefault();
      $('#mtg-row').toggle();
    });
    $('#togglePokemon').click(function(e) {
      e.preventDefault();
      $('#pokemon-row').toggle();
    });
  });
