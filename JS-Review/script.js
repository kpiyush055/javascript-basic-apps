const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
//Destructuring Objects
const book = getBook(2);
// const title = book.title;
// const auth = book.author;

const {title, author, pages, publicationDate, genres, hasMovieAdaptation} = book;

console.log(title, author, genres);
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];
const[primaryGenre, secondaryGenre,...otherGenre] = genres;
console.log(primaryGenre, secondaryGenre, otherGenre);

const newGenre = [...genres, "epic Fantasies"]
newGenre;

const updatedbook = {
// Upadting a new property
...book, moviePublicationDate : "2001-11-12"
, rottenTomatos : 4.5,
//updating a existing property
pages : 1225,
};

updatedbook;

//Template Literals
const {moviePublicationDate, rottenTomatos} = updatedbook;
const summary = `${title} has been given ${rottenTomatos} on rotten tommatos. ${hasMovieAdaptation ? 'There is movie based on this book.' : ''} The movie publication date is ${moviePublicationDate.split("-")[0]}`;
summary;

//Ternary Operator
const pagesRange = pages > 1000 ? "Over a thousand" : "Less than thousand";
pagesRange;
console.log(`The book has ${pagesRange} pages`);

//Arrow function (ES6 feature) very important for callback functions.
// Normal function
// function getYear(str){
//   return str.split("-")[0];
// }
const getYear = (str) => str.split("-")[0];

console.log(getYear(moviePublicationDate));

//short circuiting and logical operators
console.log(hasMovieAdaptation && "some");
console.log('some' && hasMovieAdaptation);

console.log("John" && "Some");
console.log(0 && "string"); //falsy --> 0, null, undefined
console.log("string" && 0);

console.log(0 || hasMovieAdaptation);
console.log("string" || hasMovieAdaptation);

//we can use short circuiting for setting up the default values
console.log(book.translations.spanish);

const defaultValue = book.translations.spanish || "No ES version";
console.log(defaultValue);

console.log(book.reviews.librarything.reviewsCount)
const ct = book.reviews.librarything.reviewsCount || "No data";
ct;// here it should be 0 but its returning no data. Its not treating 0 as a value. So solve this problem javascript as introduced ;




