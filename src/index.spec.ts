import { log } from './index';

describe('index module', (): void => {
  describe('log()', (): void => {
    let consoleLogSpy: jest.SpyInstance;

    beforeEach((): void => {
      consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    it('should log', (): void => {
      expect.assertions(2);

      log();

      expect(consoleLogSpy).toHaveBeenCalledTimes(1);
      expect(consoleLogSpy).toHaveBeenCalledWith('hello world');
    });
  });
});
