import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import GetCard from './js/card.js';
// import GetEnchantments from './js/get-enchantment-api.js';
// import GetInstants from './js/get-instant-api.js';
// import GetCreature from './js/get-creature-api.js';
// import GetLand from './js/get-land-api.js';
// import GetSorceries from './js/get-sorc-api.js';



$(document).ready(function() {
  $('#card-selector').click(function() {
    GetCard.getCard()
      .then(function(response) {
        let src = response.cards[61].imageUrl;
        $(".show-card-image").html("<img src='" + src + "'>");
      });
  });
});