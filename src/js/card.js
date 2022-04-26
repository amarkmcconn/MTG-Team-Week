export default class GetCard {  
  static getCard() {
    return fetch(`https://api.magicthegathering.io/v1/cards?`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.status);
        }
        return response.json();
      })
      .catch(function(error) {
        return Error(error);
      });
  }
}