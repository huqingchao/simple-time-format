# simple-time-format
![NPM](https://img.shields.io/npm/l/simple-time-format)
![npm](https://img.shields.io/npm/dm/simple-time-format)
![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hm/simple-time-format)
## 特性
+ 单元测试覆盖率100%
+ 支持esm、cjs、umd
+ 小于1kb
+ 支持ts

 ## install
```bash
npm install simple-time-format --save
```
## use
+ esm
```js
import format from 'simple-time-format'
format(new Date(), 'yyyy-MM-dd')
```
+ commonjs 
```js
const format =  require('simple-time-format')
format(new Date(), 'yyyy-MM-dd')
```

+ script
```js
<script src="http://cdn.jsdelivr.net/npm/simple-time-format/dist/index.umd.js"></script>
format(new Date(), 'yyyy-MM-dd')
```

## api
```typescript
type formatType = 'yyyy-MM-dd' | 'yyyy-MM' | 'MM-dd' | 'yyyy-MM-dd HH:mm:ss' | 'yyyy' | 'MM' | 'dd' | 'HH' | 'mm' | 'ss' | 'HH:mm:ss' | 'HH:mm' | 'mm:ss';

function simpleFormatDate(time: any = '', format: formatType = 'yyyy-MM-dd' ): any {}

simpleFormatDate('2021-05-13 17:54:55', 'yyyy-MM-dd') // 2021-05-13

simpleFormatDate('2021-05-13 17:54:55', 'yyyy-MM-dd HH:mm:ss') // 2021-05-13 17:54:55

simpleFormatDate() || simpleFormatDate('', 'yyyy-MM-dd') // 当前时间
```