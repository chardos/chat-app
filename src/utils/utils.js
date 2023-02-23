export const convertToArray = (firebaseData) =>
  Object.keys(firebaseData).map((key) => ({ ...firebaseData[key], id: key }));

export const convertIsTypingToArray = (firebaseData) => {
  console.log('firebaseData', firebaseData);
  return Object.keys(firebaseData).map((key) => ({
    name: firebaseData[key],
    id: key,
  }));
};

export const generateRoomCode = () => {
  const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return Array(4)
    .fill(null)
    .map(() => CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)])
    .join('');
};

export const createMessageGroups = (messageList) => {
  return messageList.reduce((acc, curr) => {
    const { name, text, id } = curr;

    const groupsMinusTail = acc.slice(0, -1);
    const latestGroup = acc[acc.length - 1];
    if (latestGroup?.name !== name) {
      return [...acc, { name, messages: [{ text, id }] }];
    } else {
      return [
        ...groupsMinusTail,
        { ...latestGroup, messages: [...latestGroup.messages, { text, id }] },
      ];
    }
  }, []);
};

export const validateName = (name) => {
  if (!name) {
    return 'Please provide a name.';
  }
};

export const validateRoomCode = (roomCode) => {
  if (!roomCode) {
    return 'Please provide a room code.';
  }
};

export const isTypingListToString = (isTypingList, currentName) => {
  if (!isTypingList.length) {
    return false;
  }
  return isTypingList
    .map((item) => item.name)
    .filter((name) => name !== currentName)
    .join(', ');
};
