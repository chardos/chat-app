export const convertToArray = (firebaseData) =>
  Object.keys(firebaseData).map((key) => ({ ...firebaseData[key], id: key }));

export const generateRoomCode = () => {
  const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return Array(4)
    .fill(null)
    .map(() => CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)])
    .join('');
};
