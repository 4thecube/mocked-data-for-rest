const { v4: uuidv4 } = require("uuid");

const items = {
  author: {
    firstName: "John",
    lastName: "Doe",
    picture: `https://json-mock-data.herokuapp.com/user2.jpg`,
  },
  products: [
    {
      id: uuidv4(),
      title: "Art",
      description: "What a beautiful art of Mona Lisa",
      picture: "https://json-mock-data.herokuapp.com/monaLisa.png",
      price: {
        usd: 210,
        crypto: 1,
      },
      sold: 23,
      author: {
        firstName: "John",
        lastName: "Everick",
        picture: `https://json-mock-data.herokuapp.com/user2.jpg`,
      },
    },
    {
      id: uuidv4(),
      title: "Profile picture in cyberpunk style",
      picture: "https://json-mock-data.herokuapp.com/cyberpunk.png",
      price: {
        usd: 310,
        crypto: 1.5,
      },
      sold: 91,
      author: {
        firstName: "Lanny",
        lastName: "Hash",
        picture: `https://json-mock-data.herokuapp.com/user2.jpg`,
      },
    },
    {
      id: uuidv4(),
      title: "What a beautiful art of Mona Lisa",
      picture: "https://json-mock-data.herokuapp.com/monaLisa.png",
      price: {
        usd: 250,
        crypto: 1.2,
      },
      sold: 0,
      author: {
        firstName: "Ivay",
        lastName: "Whoomegalul",
        picture: `https://json-mock-data.herokuapp.com/user2.jpg`,
      },
    },
    {
      id: uuidv4(),
      title: "Real shoes. Joke.  Just shoes design ",
      picture: "https://json-mock-data.herokuapp.com/shoes.png",
      price: {
        usd: 150,
        crypto: 0.7,
      },
      sold: 217,
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
      sold: 107,
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
      picture: "https://json-mock-data.herokuapp.com/nails.png",
      price: {
        usd: 70,
        crypto: 0.4,
      },
      sold: 85,
      author: {
        firstName: "Criss",
        lastName: "Iblogn",
        picture: `https://json-mock-data.herokuapp.com/user1.jpg`,
      },
    },
    {
      id: uuidv4(),
      title: "Japanese katana",
      picture: "https://json-mock-data.herokuapp.com/katana.jpg",
      price: {
        usd: 170,
        crypto: 1.1,
      },
      sold: 5,
      author: {
        firstName: "Yahiro",
        lastName: "Yamamoto",
        picture: `https://json-mock-data.herokuapp.com/user2.jpg`,
      },
    },
    {
      id: uuidv4(),
      title: "Sword",
      description: "Japanese sword design in cyberpunk style",
      picture: "https://json-mock-data.herokuapp.com/cybersword.png",
      price: {
        usd: 170,
        crypto: 1.2,
      },
      sold: 179,
      author: {
        firstName: "Cirito",
        lastName: "Hashimota",
        picture: `https://json-mock-data.herokuapp.com/user2.jpg`,
      },
    },
  ],
};

module.exports = items;
