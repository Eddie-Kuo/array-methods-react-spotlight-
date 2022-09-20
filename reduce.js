// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers brands
// REQS: use .reduce

export const getSneaks = (brands) => {
  const allSneakers = brands.reduce((acc, curr) => [...acc, ...curr.shoes], []);
  return allSneakers;
};

// INPUT: the array of dogs from data.js
// OUTPUT: the average age of the dogs
// REQS: use .reduce
export const getAverageAge = (dogs) => {
  const averageAge = dogs.reduce((acc, curr) => (acc + curr.age), 0);
  return averageAge / dogs.length;
};
