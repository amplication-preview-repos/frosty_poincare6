import { JsonValue } from "type-fest";

export type Gallery = {
  createdAt: Date;
  description: string | null;
  id: string;
  image: JsonValue;
  title: string | null;
  updatedAt: Date;
};
