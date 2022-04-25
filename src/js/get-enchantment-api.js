export default class GetEnchantments {  
  static getCard() {
    // let pageNum = Math.floor(Math.random() * 300);
    return fetch(`https://api.magicthegathering.io/v1/cards?type=Enchantment`)
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