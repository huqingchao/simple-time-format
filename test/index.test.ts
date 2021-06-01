import simpleFormatDate from '../src/index';

test('simpleFormatDate', () => {
  expect(simpleFormatDate('2021-05-13 17:54:55', 'yyyy-MM-dd')).toBe('2021-05-13');
  expect(simpleFormatDate('2021-05-13 17:54:55', 'yyyy-MM-dd HH:mm:ss')).toBe('2021-05-13 17:54:55');
  expect(simpleFormatDate('', 'yyyy-MM-dd')).toBe('2021-05-31');
  expect(simpleFormatDate('aa', 'yyyy-MM-dd')).toBe('NaN-NaN-NaN');
});
