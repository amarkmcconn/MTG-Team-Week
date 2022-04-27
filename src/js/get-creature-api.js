export default class GetCreatures {  
  static getCard() {
    return fetch(`https://api.magicthegathering.io/v1/cards?types=Creature`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.status);
        }
        return response.json();
      })
      .catch(function(error) {
        return (error);
      });
  }
}