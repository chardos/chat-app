import { createMessageGroups, lettersOnly } from './utils';
import { MESSAGE_LIST } from './utils.mock';

describe('createMessageGroups', () => {
  describe('when a list of messages with 3 separate groups', () => {
    it('should return a list with 3 items', () => {
      const result = createMessageGroups(MESSAGE_LIST);
      expect(result.length).toEqual(3);
    });
  });
});

describe('lettersOnly', () => {
  describe('When given a string with special characters', () => {
    it('return with no special characters', () => {
      const result = lettersOnly('HELLO@#');
      expect(result).toEqual('HELLO');
    });
  });

  describe('When given a string with numbers', () => {
    it('return with no numbers', () => {
      const result = lettersOnly('12HELLO34');
      expect(result).toEqual('HELLO');
    });
  });
});
