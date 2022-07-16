import simpleFormatDate from '../src/index';

test('simpleFormatDate', () => {
  expect(simpleFormatDate('2021-05-13 17:54:55', 'yyyy-MM-dd')).toBe('2021-05-13');

  expect(simpleFormatDate('2021-05-13 17:54:55', 'yyyy-MM-dd HH:mm:ss')).toBe('2021-05-13 17:54:55');

  const date = new Date();
  const month = date.getMonth() + 1;
  const formatMonth = month >= 10 ? month : `0${month}`
  const str = `${date.getFullYear()}-${formatMonth}-${date.getDate()}` ;
  expect(simpleFormatDate('', 'yyyy-MM-dd')).toBe(str);

  expect(simpleFormatDate('aa', 'yyyy-MM-dd')).toBe('aa');
});
