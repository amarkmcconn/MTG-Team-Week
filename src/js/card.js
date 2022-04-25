export default class GetCard {  
  static getCard(card) {
    let pageNum = Math.floor(Math.random() * 10)
    return fetch(`https://api.magicthegathering.io/v1/cards?page=${pageNum}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      })
  }
} 