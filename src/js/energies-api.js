export default class GetEnergy {  
  static getCard() {
    return fetch(`https://api.pokemontcg.io/v2/cards?supertype=Energy`)
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