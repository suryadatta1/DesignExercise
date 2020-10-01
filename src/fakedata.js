import faker from 'faker';

const arr = [];

for (let i = 1; i <= 12; i++) {
  arr.push({
    title: faker.commerce.productName(),
    image: faker.image.image(),
    currencyType: 'INR',
    price: faker.commerce.price(),
  });
}

export default arr;
