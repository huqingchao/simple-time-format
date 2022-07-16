import { formatType } from './types'

const tf = (i: number): string => {
  return (i < 10 ? '0' : '') + i
}


function simpleFormatDate(time: any, format: formatType = 'yyyy-MM-dd'): any {
  let t: Date

  if (time) {
    t = new Date(time)
  } else {
    t = new Date()
  }

  if (t.toString() === 'Invalid Date') {
    return time;
  }

  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, (type: string): string => {
    switch (type) {
      case 'yyyy':
        return tf(t.getFullYear())
      case 'MM':
        return tf(t.getMonth() + 1)
      case 'mm':
        return tf(t.getMinutes())
      case 'dd':
        return tf(t.getDate())
      case 'HH':
        return tf(t.getHours())
      case 'ss':
        return tf(t.getSeconds())
      default:
        return '??'
    }
  })
}

export * from './types'
export default simpleFormatDate
