export default class GetPokemonCard {  
  static getCard() {
    return fetch(`https://api.pokemontcg.io/v2/cards/?${process.env.API_KEY}/`)
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