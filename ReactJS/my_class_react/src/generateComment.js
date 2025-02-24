import { faker } from "@faker-js/faker";

export const generateComments = (count) => {
  return Array.from({ length: count }, () => ({
    author: faker.person.firstName(),
    avatar: faker.image.avatar(),
    date: faker.date.recent().toLocaleString(),
    text: faker.lorem.sentence(),
  }));
};
