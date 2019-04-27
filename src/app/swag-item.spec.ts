import { SwagItem } from './swag-item';

describe('SwagItem', () => {
  it('should create an instance', () => {
    expect(new SwagItem()).toBeTruthy();
  });
  it('should create an instance with a default name of empty string', () => {
    expect(new SwagItem().name).toBe('')
  })
});
