import {
  add,
  subtract,
  isNull,
  checkValue,
  createUser,
  fetchPost,
  reverseString
} from "./functions";
test("Add  2 + 2  should be 4", () => {
  expect(add(2, 2)).toBe(4);
});

test("Add  2+ 2 should not be 5", () => {
  expect(add(2, 2)).not.toBe(5);
});

test("Should subtract 2 values", () => {
  expect(subtract(3, 2)).toBe(1);
});

test("should be null", () => {
  expect(isNull()).toBeNull();
});

test("should return falsy value", () => {
  expect(checkValue(undefined)).toBeFalsy();
});

test("should return a user", () => {
  const user = {
    name: "Ramesh",
    age: 25
  };
  expect(createUser()).toEqual(user);
});

test("Name should be in the array", () => {
  const users = ["Ramesh", "Kumar", "Mani"];
  expect(users).toContain("Mani");
});

test("shoud return Leanne Graham with asysn data", async () => {
  expect.assertions(1);
  const data = await fetchPost();
  expect(data.name).toEqual("Leanne Graham");
});

test("Reverse  is defined", () => {
  expect(reverseString).toBeDefined();
});

test("Reverse a string", () => {
  expect(reverseString("Hello")).toEqual("olleH");
});
