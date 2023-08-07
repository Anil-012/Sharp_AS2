console.log("Person 1: shows ticket");
console.log("Person 2: shows ticket");

const getButter = () => {
  return new Promise((resolve, reject) => {
    // Simulating getting butter after some time
    setTimeout(() => resolve("butter"), 2000);
  });
};

const getColdDrinks = () => {
  return new Promise((resolve, reject) => {
    // Simulating getting cold drinks after some time
    setTimeout(() => resolve("cold drinks"), 1500);
  });
};

const preMovie = async () => {
  let ticket;
  
  try {
    ticket = await getButter();
  } catch (e) {
    ticket = "sad face";
  }

  let coldDrinks;

  try {
    coldDrinks = await getColdDrinks();
  } catch (e) {
    coldDrinks = "no cold drinks";
  }

  return [ticket, coldDrinks];
};

preMovie().then(([ticket, coldDrinks]) => {
  console.log(`Person 3: shows ${ticket}`);
  console.log(`Person 3: shows ${coldDrinks}`);
});

console.log("Person 4: shows ticket");
console.log("Person 5: shows ticket");
