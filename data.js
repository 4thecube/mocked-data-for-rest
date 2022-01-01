const express = require("express");

const { v4: uuidv4 } = require("uuid");

const items = [
  {
    id: uuidv4(),
    title: "Art",
    description: "What a beautiful art of Mona Lisa",
    price: {
      usd: 210,
      crypto: 1,
    },
    author: {
      firstName: "John",
      lastName: "Everick",
      picture: `http:localhost:4200/user2.jpg`,
    },
  },
  {
    id: uuidv4(),
    title: "Pixel art",
    description: "John Wick pixel art",
    price: {
      usd: 110,
      crypto: 0.5,
    },
    author: {
      firstName: "Anne",
      lastName: "Holdberg",
      picture: `http:localhost:4200/user1.jpg`,
    },
  },
  {
    id: uuidv4(),
    title: "Kitty",
    description: "3D model of maine coon cat",
    price: {
      usd: 110,
      crypto: 0.5,
    },
    author: {
      firstName: "Sarah",
      lastName: "Neesh",
      picture: `http:localhost:4200/user1.jpg`,
    },
  },
  {
    id: uuidv4(),
    title: "Wooden sword",
    description: "Good sword made of wood",
    price: {
      usd: 410,
      crypto: 2,
    },
    author: {
      firstName: "Rose",
      lastName: "Sasxb",
      picture: `http:localhost:4200/user1.jpg`,
    },
  },
  {
    id: uuidv4(),
    title: "Profile picture",
    description: "Profile picture in cyberpunk style",
    price: {
      usd: 310,
      crypto: 1.5,
    },
    author: {
      firstName: "Lanny",
      lastName: "Hash",
      picture: `http:localhost:4200/user2.jpg`,
    },
  },
  {
    id: uuidv4(),
    title: "Shoes",
    description: "Real shoes",
    price: {
      usd: 150,
      crypto: 0.7,
    },
    author: {
      firstName: "Darek",
      lastName: "Mainswo",
      picture: `http:localhost:4200/user2.jpg`,
    },
  },
  {
    id: uuidv4(),
    title: "Minecraft seeds",
    description: "Unique seeds that make your journey really exciting",
    price: {
      usd: 50,
      crypto: 0.3,
    },
    author: {
      firstName: "Dunno",
      lastName: "Wy",
      picture: `http:localhost:4200/user2.jpg`,
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
      picture: `http:localhost:4200/user1.jpg`,
    },
  },
  {
    id: uuidv4(),
    title: "Divas in the Space",
    description:
      "Beautiful Divas in the Space. Art. Softcore style. We are all made from stardust. Be shiny. ",
    price: {
      usd: 270,
      crypto: 1.5,
    },
    author: {
      firstName: "Nicolas",
      lastName: "Whaldou",
      picture: `http:localhost:4200/user2.jpg`,
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
      picture: `http:localhost:4200/user2.jpg`,
    },
  },
];

module.exports = items;
