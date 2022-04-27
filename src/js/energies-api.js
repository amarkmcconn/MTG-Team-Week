export default class GetEnergy {  
  static getCard() {
    let page = 38;
    console.log(page);
    return fetch(`https://api.pokemontcg.io/v2/cards/?page=${page}&${process.env.API_KEY}`)
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