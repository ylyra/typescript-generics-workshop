import { Equal, Expect } from "../helpers/type-utils";

const makeStatus = <TStatuses extends string>(statuses: TStatuses[]) => {
  return statuses;
};

const statuses = makeStatus(["INFO", "DEBUG", "ERROR", "WARNING"]);

type T = typeof statuses

type tests = [
  Expect<Equal<typeof statuses, Array<"INFO" | "DEBUG" | "ERROR" | "WARNING">>>,
];
