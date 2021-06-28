export function getProduct(id) {
  const products = require('../products/products.json');
  return products.find((product) => Number(product.id) === Number(id));
}

export function sortByName(products) {
  products.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    }

    return 0;
  });

  return products;
}

export function sortByScore(products) {
  products.sort(function (a, b) {
    if (a.score > b.score) {
      return 1;
    } else if (a.score < b.score) {
      return -1;
    }

    return 0;
  });

  return products;
}

export function sortByPrice(products) {
  products.sort(function (a, b) {
    if (a.price > b.price) {
      return 1;
    } else if (a.price < b.price) {
      return -1;
    }

    return 0;
  });

  return products;
}
