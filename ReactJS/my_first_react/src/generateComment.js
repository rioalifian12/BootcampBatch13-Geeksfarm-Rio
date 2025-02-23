import { faker } from "@faker-js/faker";

export const generateComments = () => {
  return new Array(5).fill().map(() => ({
    avatar: faker.image.avatar(),
    author: faker.person.firstName(),
    date: faker.date.recent().toLocaleString(),
    text: faker.lorem.sentence(),
  }));
};
