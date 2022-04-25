import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import GetCard from './js/card.js';

$(document).ready(function() {
  $('#card-selector').click(function() {
    GetCard.getCard()
      .then(function(response) {
        console.log(response);
        console.log(response.cards[3]);
        let src = response.cards[61].imageUrl;
        $(".show-card-image").html("<img src='" + src + "'>");
        let src2 = response.cards[4].imageUrl;
        $(".show-card-image-two").html("<img src='" + src2 + "'>");
        let src3 = response.cards[7].imageUrl;
        $(".show-card-image-three").html("<img src='" + src3 + "'>");
      });
  });
});