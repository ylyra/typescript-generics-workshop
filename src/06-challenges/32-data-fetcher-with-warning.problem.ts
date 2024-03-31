import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

const fetchData = async <TResult>(url: string): Promise<
  TResult extends {} ? TResult : "You must pass a type argument to fetchData"
> => {
  const data = await fetch(url).then((response) => response.json());
  return data;
};

it("Should fetch data from an API", async () => {
  const data = await fetchData<{ name: string }>(
    "https://swapi.dev/api/people/1",
  );
  expect(data.name).toEqual("Luke Skywalker");

  type tests = [Expect<Equal<typeof data, { name: string }>>];
});

it("Should fetch data from an API", async () => {
  const data = await fetchData<{ name: string }[]>(
    "https://swapi.dev/api/people",
  );

  type tests = [Expect<Equal<typeof data, { name: string }[]>>];
});

it("Should force you to add a type annotation with a helpful error message", async () => {
  const data = await fetchData("https://swapi.dev/api/people/1");

  type tests = [
    Expect<Equal<typeof data, "You must pass a type argument to fetchData">>,
  ];
});
