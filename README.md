# simple-time-format
## 特性
+ 可在ts库中使用，内置声明文件
+ 单元测试覆盖率90%
+ 支持esm、cjs、umd
+ 小于5kb

 ## 安装
```bash
npm install simple-time-format --save
```
## 使用
+ esm
```js
import format from 'simple-time-format'
// 仅支持：'yyyy-MM-dd' | 'yyyy-MM' | 'MM-dd' | 'yyyy-MM-dd HH:mm:ss' | 'yyyy' | 'MM' | 'dd'  | 'HH' | 'mm' | 'ss' | 'HH:mm:ss' | 'HH:mm' | 'mm:ss';
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
```
