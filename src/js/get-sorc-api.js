export default class Sorcery {  
  static getSorceries() {
    // let pageNum = Math.floor(Math.random() * 300);
    return fetch(`https://api.magicthegathering.io/v1/cards?type=Sorcery`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}