import {Algorithms} from "./algorithms/algorithms.js"


const setHex = new Set();
const setBin = new Set();
export class UID{
  constructor(){
    this.Algorithms = new Algorithms(setHex, setBin);
  }



}

const uid = new UID()
console.log(uid.Algorithms.Hex())
console.log(uid.Algorithms.Hex())
console.log(uid.Algorithms.Hex())
console.log(uid.Algorithms.Hex())
console.log(uid.Algorithms.Hex())
console.log(uid.Algorithms.Hex())
console.log(uid.Algorithms.Hex())
console.log(uid.Algorithms.Hex())
console.log(uid.Algorithms.Hex())
console.log(uid.Algorithms.Hex())
console.log(uid.Algorithms.Hex())
console.log(uid.Algorithms.Hex())
console.log(uid.Algorithms.Hex())
console.log(uid.Algorithms.Hex())
console.log(uid.Algorithms.Hex())
console.log(uid.Algorithms.Hex())
console.log(uid.Algorithms.Hex())
console.log(uid.Algorithms.Hex())





// const regex = {
//   v4: /(?:^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u,
//   v5: /(?:^[a-f0-9]{8}-[a-f0-9]{4}-5[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u
// };

// const Schema = {
//   v4: { pattern: regex.v4.toString().slice(1, -2) },
//   v5: { type: 'string', pattern: regex.v5.toString().slice(1, -2) }
// };

// let v4 = [...Schema.v4.pattern]
// const hex_v4 = v4.map(char => char.charCodeAt(0).toString(16)).slice(1,15)
// const uuidv4 = hex_v4.join("").replace(/(.{5})/g, '$1-').slice(0, -4)





// console.log(s.Hex())
// console.log(s.Hex())
// console.log(s.Hex())
// console.log(s.Hex())