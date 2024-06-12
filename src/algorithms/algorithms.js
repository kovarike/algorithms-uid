import { Token, Uid } from "@kovarike/cocc";

export class Algorithms {
  constructor(setHex, setBin) {
    this.bin = Uid();
    this.hex = Token();
    this.date = new Date();
    this.setHex = setHex;
    this.setBin = setBin;

  }

  Hex() {

    const regex = {
      hex: /(.{5})/g
    };
    
    const Schema = {
      hex:  {pattern: regex.hex}
    };
    
    const dateStrings = `${this.date.getDay()}${this.date.getMonth()}${this.date.getFullYear()}${this.date.getHours()}${this.date.getMinutes()}${this.date.getSeconds()}`;
    const sequence = [...this.hex];
    const hexSequence = sequence.map((char) => char.charCodeAt(0).toString(32)).slice(0, 20);
    const hex = hexSequence.join('').toLocaleLowerCase().replace(Schema.hex.pattern, '$1-').slice(0, -1);
    
    if(this.setHex.has(hex)){
      return this.Hex();
    }else{
      const hex_date = `${hex}-${dateStrings}`;
      this.setHex.add(hex_date);
      return hex_date;

    }
  }


  Bin() {

    const regex = {
      bin: /(.{10})/u
    };
    
    const Schema = {
      bin: {pattern: regex.bin}
    };
    
    const dateStrings = `${this.date.getDay()}${this.date.getMonth()}${this.date.getFullYear()}${this.date.getHours()}${this.date.getMinutes()}${this.date.getSeconds()}`;
    const sequence = [...this.bin];
    const binSequence = sequence.map((char) => char.charCodeAt(0).toString()).slice(1, -2);
    const bin = binSequence.join('').toLocaleLowerCase().replace(Schema.bin.pattern, '$1-').slice(0, -5);
    if(this.setBin.has(bin)){
      return this.Bin();
    }else{
      const bin_date = `${bin}-${dateStrings}`;
      this.setBin.add(bin_date);
      return bin_date;

    }
  }





}








