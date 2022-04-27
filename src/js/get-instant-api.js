export default class GetInstants {  
  static getCard() {
    return fetch(`https://api.magicthegathering.io/v1/cards?type=Instant`)
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