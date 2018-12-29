# book-keeping
生活账本（带日、月、年统计）

## Requirements
- *用户必须在登录状态下进行操作
- 用户可以自定义账单类目，最多 24 个

## Tables
每个表自带 createdAt, updatedAt

### User
用户表
```js
{
  username: 'test', // String
  phoneNO: '13812345678', // String
  pwd: '@sdsaxas', // String - md5
  asset: 12888.88, // Number
}
```
### Account
账单
```js
{
  amount: 22.00, // Number - 两位小数
  isIncome: false, // Boolean
  isNeedful: true, // Boolean
  remark: '餐费', // String - 限制 24 字符
  user: '', // ObjectId
  catalog: '', // ObjectId
}
```
### Catalog
类目
```js
{
  name: '购物', // String
  user: '', // ObjectId
  remark: '', // String
}
```

### Record
记录
```js
{
  day: '2018-12-25', // Date
  income: 22222, // Number
  outcome: 1000, // Number
  user: '', // ObjectId
}
```

### App
app
```js
{
  version: '1.0.0', // String
  help: '', // String
  isForce: '', // String
}
```
