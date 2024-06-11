import { Token, Uid } from "@kovarike/cocc";

export class Algorithms {
  constructor() {
    this.bin = Uid();
    this.hex = Token();
    this.date = new Date();
    this.set = new Set()

  }

  Hex() {

    const regex = {
      hex: /(.{5})/g,
      bin: /(?:^[a-f0-9]{8}-[a-f0-9]{4}-5[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u
    };
    
    const Schema = {
      hex:  {pattern: regex.hex},
      bin: {pattern: regex.bin}
    };
    
    const dateStrings = `${this.date.getDay()}${this.date.getMonth()}${this.date.getFullYear()}${this.date.getHours()}${this.date.getMinutes()}${this.date.getSeconds()}`;
    const sequence = [...this.hex];
    const hexSequence = sequence.map((char) => char.charCodeAt(0).toString(32)).slice(0, 20);
    const hex = hexSequence.join('').toLocaleLowerCase().replace(Schema.hex.pattern, '$1-').slice(0, -1);
    
    if(this.set.has(hex)){
      return this.Hex();
    }else{
      const hex_date = `${hex}-${dateStrings}`;
      this.set.add(hex_date);
      return hex_date;

    }
  }


  Bin() {

    const regex = {
      hex: /(.{5})/g,
      bin: /(?:^[a-f0-9]{8}-[a-f0-9]{4}-5[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u
    };
    
    const Schema = {
      hex:  {pattern: regex.hex},
      bin: {pattern: regex.bin}
    };
    
    const dateStrings = `${this.date.getDay()}${this.date.getMonth()}${this.date.getFullYear()}${this.date.getHours()}${this.date.getMinutes()}${this.date.getSeconds()}`;
    console.log(dateStrings)
    const sequence = [...this.token, ...this.uid, dateStrings];

    const hexSequence = sequence.map((char) => char.charCodeAt(0).toString(32)).slice(0, 20);
    const hex = hexSequence.join('').toLocaleLowerCase().replace(Schema.hex.pattern, '$1-').slice(0, -1);
    this.set.add(hex)
    console.log(this.set.has(hex), this.set)
    return hex;
  }





}








