// 无需显式声明类型，可基于字面量类型自动推导
let userName = 'xp'
userName = 'sun'
console.log(userName)

const userObj = { name: 'xp', address: '952' }
// object
console.log(typeof userObj)

interface Address {
  id: number
  detail?: string
  get?: (a: number, b: string) => void
}

const address = { id: 12, dfdf: 'dfdf' } as Address

interface User {
  id: number
  name: string
  address?: Address
  addresses?: Address[]
}
// optional chaining operator. 可选链运算符 '?'
const user: User = {
  id: 15,
  name: 'xp',
  address: { id: 1 },
  addresses: [{ id: 12, detail: 'zzz' }]
}
