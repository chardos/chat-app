export const convertToArray = (firebaseData) =>
  Object.keys(firebaseData).map((key) => firebaseData[key]);
