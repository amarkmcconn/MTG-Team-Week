export default class GetTrainers {  
  static getCard() {
    return fetch(`https://api.pokemontcg.io/v2/cards?supertype=Trainer`)
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