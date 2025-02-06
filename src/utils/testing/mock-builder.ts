import * as Factory from "factory.ts";
import { faker } from "@faker-js/faker";
import { PostType } from "@/api";

export const postBuilder = Factory.Sync.makeFactory<PostType>({
  userId: Factory.each(() => faker.number.int({ max: 100 })),
  id: Factory.each(() => faker.number.int({ max: 50 })),
  title: Factory.each(() => faker.lorem.words(5)),
  body: Factory.each(() => faker.lorem.sentence(2)),
});
