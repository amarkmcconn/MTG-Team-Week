export default class GetLands {  
  static getCard() {
    return fetch(`https://api.magicthegathering.io/v1/cards?types=Land`)
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