// TV Shows
//
// title	year		genera		    cast					            watched
//
// Psych	    2006		comedy		James Roday, Dule Hill			    true
// West Wing	1999		drama		Martin Sheen, Dule Hill			    true
// Friends	    1994		comedy		Matthew Perry, Jennifer Aniston		true
// Full House	1987		comedy		Bob Sagat				            false

// 1. Create an array of objects
// 2. Declare a function addShow
// 	parameters - array, title, year, genra, cast
// 	function adds the new show to the array
// 3. Declare a function deleteShowByName
//	parameters - array, name
// 4. Declare a function find90sShows to return all 1990s shows
// 	parameters - array
// 5. Declare a function findByCast to return all shows with a specified cast member
// 	parameters - array, castName
// 6. Declare a function findByGenera to find all shows with a specified genrea
// 	parameters - array, genrea
// 7. Declare a function editShow to edit a show's name
// 	parameters - array, index, name
// 8. Declare a function, findUnwatched to find the first unwatched show
// 	parameters - array

//1.

let tvShows = [
  {
    title: "Psych",
    year: 2006,
    genre: "comedy",
    cast: "James Roday, Dule Hill",
    watched: true,
  },
  {
    title: "West Wing",
    year: 1999,
    genre: "drama",
    cast: "Martin Sheen, Dule Hill",
    watched: true,
  },
  {
    title: "Friends",
    year: 1994,
    genre: "comedy",
    cast: "Matthew Perry, Jennifer Aniston",
    watched: true,
  },
  {
    title: "Full House",
    year: 1987,
    genre: "comedy",
    cast: "Bob Sagat ",
    watched: true,
  },
];

//2.

function addShow(array, title, year, genre, cast) {
  let newShow = {
    title: title,
    year: year,
    genre: genre,
    cast: cast,
    watched: watched,
  };
  array.push(newShow);
}

//3

function deleteShowByName(array, title) {
  const index = array.findIndex((show) => show.title === title);
  array.splice(index, 1);
}

//4

function find90sShows(array) {
  return array.filter((show) => show.year >= 1990 && show.year <= 1999);
}
console.log("The 1990's ");
console.log(find90sShows(tvShows));

//5
function findByCast(array, castName)
//6.

//7.

//8.


// function addShow(array, title, year, genre, cast, watched) {

// 	const newShow = {
// 		title: title,
// 		year,
// 		genre,
// 		cast,
// 		watched
// 	};

// 	array.push(newShow);
// }

// function deleteShowByName(array, name) {

// 	const index = array.findIndex(show => show.title === name);

// 	array.splice(index, 1);
// }

// function findAll90sShows(array) {
// 	return array.filter(show => show.year >= 1990 && show.year <= 1999);
// }

// function findByCast(array, castName) {
// 	return array.filter(show => show.cast.includes(castName));
// }






