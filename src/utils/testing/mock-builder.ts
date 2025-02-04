import * as Factory from "factory.ts";
import { faker } from "@faker-js/faker";
import { Post } from "@/api";

export const postBuilder = Factory.Sync.makeFactory<Post>({
  userId: Factory.each(() => faker.number.int({ max: 100 })),
  id: Factory.each(() => faker.number.int({ max: 50 })),
  title: Factory.each(() => faker.lorem.words(5)),
  body: Factory.each(() => faker.lorem.sentence(2)),
});
