import { createMessageGroups } from './utils';

const MESSAGE_LIST = [
  {
    name: 'Rich',
    text: 'Hello',
    id: '-NOsuFJPD7CuswSUtIi8',
  },
  {
    name: 'Rich',
    text: 'How are you',
    id: '-NOsuH3dXhAQsfdsYhLP',
  },
  {
    name: 'kevin',
    text: 'Im good thanks',
    id: '-NOsuJJFrvMVoXgBvwwP',
  },
  {
    name: 'kevin',
    text: 'How are you',
    id: '-NOsuK3U5gyohCC98IOE',
  },
  {
    name: 'Rich',
    text: 'Very good',
    id: '-NOsuLF48r3kqquOkCdb',
  },
  {
    name: 'Rich',
    text: 'I am building an app',
    id: '-NOsuMpcTr1QVL0PiWqb',
  },
  {
    name: 'Rich',
    text: 'Its fun',
    id: '-NOsuNKc_RVQ23Jsc4gK',
  },
];

describe('createMessageGroups', () => {
  describe('when a list of messages with 3 separate groups', () => {
    it('should return a list with 3 items', () => {
      const result = createMessageGroups(MESSAGE_LIST);
      expect(result.length).toEqual(3);
    });
  });
});
