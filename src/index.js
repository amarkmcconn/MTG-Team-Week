import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import GetCard from './js/card.js'

$(document).ready(function() {
  $('#card-selector').click(function() {
    let card = $('#card-selector').val();
    GetCard.getCard(card)
      .then(function(response) {
        console.log(card);
        console.log(response);
        console.log(response.cards[3]);
        let src = response.cards[61].imageUrl;
        $(".show-card-image").html("<img src='" + src + "'>");
      });
  });
});