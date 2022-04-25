import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import GetEnchantments from './js/get-enchantment-api.js';
import GetInstants from './js/get-instant-api.js';
import Creature from './js/get-creature-api.js';
import GetLand from './js/get-land-api.js';
import Sorcery from './js/get-sorc-api.js';



$(document).ready(function() {
  $('#card-selector').click(function(e) {
    e.preventDefault();
    Creature.getCreature()
      .then(function(response) {
        let src = response.cards[10].imageUrl;
        $("#show-creature").html("<img src='" + src + "'>");
      });
    GetEnchantments.getCard()
      .then(function(response) {
        let src = response.cards[10].imageUrl;
        $("#show-enchantment").html("<img src='" + src + "'>");
      });
    GetInstants.getCard()
      .then(function(response) {
        let src = response.cards[5].imageUrl;
        $("#show-instant").html("<img src='" + src + "'>");    
      });
    GetLand.getCard()
      .then(function(response) {
        let src = response.cards[1].imageUrl;
        $("#show-land").html("<img src='" + src + "'>");    
      });
    Sorcery.getSorceries()
      .then(function(response) {
        let src = response.cards[10].imageUrl;
        $("#show-sorcery").html("<img src='" + src + "'>");    
      });  
  });
});