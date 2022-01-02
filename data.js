const express = require("express");

const { v4: uuidv4 } = require("uuid");

const items = [
  {
    id: uuidv4(),
    title: "Art",
    description: "What a beautiful art of Mona Lisa",
    picture: "https://json-mock-data.herokuapp.com/monaLisa.png",
    price: {
      usd: 210,
      crypto: 1,
    },
    author: {
      firstName: "John",
      lastName: "Everick",
      picture: `https://json-mock-data.herokuapp.com/user2.jpg`,
    },
  },
  {
    id: uuidv4(),
    title: "Pixel art",
    description:
      "The Knight on horse riding riding riding, the knight in armor ofc, riding riding",
    picture: "https://json-mock-data.herokuapp.com/space.png",
    price: {
      usd: 110,
      crypto: 0.5,
    },
    author: {
      firstName: "Anne",
      lastName: "Holdberg",
      picture: `https://json-mock-data.herokuapp.com/user1.jpg`,
    },
  },
  {
    id: uuidv4(),
    title: "Kitty",
    description: "Cat and boxes",
    picture: "https://json-mock-data.herokuapp.com/cat.png",
    price: {
      usd: 110,
      crypto: 0.5,
    },
    author: {
      firstName: "Sarah",
      lastName: "Neesh",
      picture: `https://json-mock-data.herokuapp.com/user1.jpg`,
    },
  },
  {
    id: uuidv4(),
    title: "Wooden",
    description: "Good wooden art",
    picture: "https://json-mock-data.herokuapp.com/wooden.jpg",
    price: {
      usd: 410,
      crypto: 2,
    },
    author: {
      firstName: "Rose",
      lastName: "Sasxb",
      picture: `https://json-mock-data.herokuapp.com/user1.jpg`,
    },
  },
  {
    id: uuidv4(),
    title: "Profile picture",
    description: "Profile picture in cyberpunk style",
    picture: "https://json-mock-data.herokuapp.com/cyberpunk.png",
    price: {
      usd: 310,
      crypto: 1.5,
    },
    author: {
      firstName: "Lanny",
      lastName: "Hash",
      picture: `https://json-mock-data.herokuapp.com/user2.jpg`,
    },
  },
  {
    id: uuidv4(),
    title: "Shoes",
    description: "Real shoes. Joke.  Just shoes design ",
    picture: "https://json-mock-data.herokuapp.com/shoes.png",
    price: {
      usd: 150,
      crypto: 0.7,
    },
    author: {
      firstName: "Darek",
      lastName: "Mainswo",
      picture: `https://json-mock-data.herokuapp.com/user2.jpg`,
    },
  },
  {
    id: uuidv4(),
    title: "Minecraft seeds",
    description: "Unique seeds that make your journey really exciting",
    picture: "https://json-mock-data.herokuapp.com/minecraft.png",
    price: {
      usd: 50,
      crypto: 0.3,
    },
    author: {
      firstName: "Dunno",
      lastName: "Wy",
      picture: `https://json-mock-data.herokuapp.com/user2.jpg`,
    },
  },
  {
    id: uuidv4(),
    title: "Fancy nails design",
    description:
      "Ultra mega super shiny nails design, which will be ultra mega super modern in this year",
    price: {
      usd: 70,
      crypto: 0.4,
    },
    author: {
      firstName: "Criss",
      lastName: "Iblogn",
      picture: `https://json-mock-data.herokuapp.com/user1.jpg`,
    },
  },
  {
    id: uuidv4(),
    title: "Cosmonaut logo",
    description:
      "Beautiful in the Space. Art. We are all made from stardust. Be shiny. ",
    price: {
      usd: 270,
      crypto: 1.5,
    },
    author: {
      firstName: "Nicolas",
      lastName: "Whaldou",
      picture: `https://json-mock-data.herokuapp.com/user2.jpg`,
    },
  },
  {
    id: uuidv4(),
    title: "Sword",
    description: "Japanese sword design in cyberpunk style",
    price: {
      usd: 170,
      crypto: 1.2,
    },
    author: {
      firstName: "Cirito",
      lastName: "Hashimota",
      picture: `https://json-mock-data.herokuapp.com/user2.jpg`,
    },
  },
];

module.exports = items;
