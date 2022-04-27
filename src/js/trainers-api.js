export default class GetTrainers {  
  static getCard() {
    let page = 41;
    return fetch(`https://api.pokemontcg.io/v2/cards/?page=${page}&${process.env.API_KEY}/`)
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