import simpleFormatDate from '../src/index'

describe('simpleFormatDate', () => {
  test('yyyy-MM-dd', () => {
    expect(simpleFormatDate('2021-05-13 17:54:55', 'yyyy-MM-dd')).toBe(
      '2021-05-13'
    )
  })

  test('yyyy-MM-dd HH:mm:ss', () => {
    expect(simpleFormatDate('2021-05-13 17:54:55', 'yyyy-MM-dd HH:mm:ss')).toBe(
      '2021-05-13 17:54:55'
    )
  })

  test('current format time', () => {
    const date = new Date()
    const month = date.getMonth() + 1
    const formatMonth = month >= 10 ? month : `0${month}`
    const str = `${date.getFullYear()}-${formatMonth}-${date.getDate()}`

    expect(simpleFormatDate('', 'yyyy-MM-dd')).toBe(str)
  })

  test('default time', () => {
    const date = new Date()
    const month = date.getMonth() + 1
    const formatMonth = month >= 10 ? month : `0${month}`
    const str = `${date.getFullYear()}-${formatMonth}-${date.getDate()}`

    expect(simpleFormatDate()).toBe(str)
  })

  test('Invalid Date', () => {
    expect(simpleFormatDate('aa', 'yyyy-MM-dd')).toBe('aa')
  })
})
