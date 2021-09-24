import axios from "axios";

export const add = (a, b) => {
  return a + b;
};

export const subtract = (a, b) => {
  return a - b;
};

export const isNull = () => {
  return null;
};

export const checkValue = (x) => {
  return x;
};

export const createUser = () => {
  const user = {
    name: "Ramesh",
    age: 25
  };
  return user;
};

export const fetchPost = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => res.data)
    .catch((error) => {
      console.log("error", error);
    });
};

export const reverseString = (str) => {
  return str.split("").reverse().join("");
};
