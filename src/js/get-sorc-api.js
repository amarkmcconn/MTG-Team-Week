export default class GetSorceries{  
  static getSorceries() {
    // let pageNum = Math.floor(Math.random() * 300);
    return fetch(`http://api.magicthegathering.io/v1/cards?type=sorcery`)
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