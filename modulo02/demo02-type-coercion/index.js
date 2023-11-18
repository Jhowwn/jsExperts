9999999999999999 // 16
// 10000000000000000
true + 2
// 3
'21' + true
//'21true'
'21' - true
// 20
'21' - - 1
//22
0.1+0.2 === 0.3
//false 

3>2>1
//false 
3>2>=1
//true

"B" + "a" + + "a" + "a"
// BaNaNa


//----------------------------------------------------------------
console.assert(String(123) === '123', 'explicit convertion to string')
console.assert(123 + '' === '123', 'explicit convertion to string')

console.assert(('hello' || 123) === 'hello', '|| returns the first elements if both elements is true')
console.assert(('hello' && 123) === 123, '|| returns the last elements if both elements is true')

//-------------------------------------------------------------

const item = {
  name: 'Jhonatan',
  age: 22,
  // string: se não for primitivo, chama o valueOf
  toString() {
    return `Name: ${this.name}, Age: ${this.age}`
  },
  // number: se não for primitivo, chama o toString
  valueOf() {
    return {hey: 'hey jude',}
    // return 007
  },
  //ele tem prioridade na parada!
  [Symbol.toPrimitive](coercionType) {
    // console.log('trying to convert to', coercionType)
    const types = {
      string: JSON.stringify(this),
      number: '47'
    }

    return types[coercionType] || types.string
  }
}

//console.log('toString', String(item))

// //vai retornar NaN pois o toString retornou a string
//console.log('valueOf', Number(item))  

//depois de adicionar o toPrimitive
// console.log('String', String(item))
// console.log('Number', Number(item))
// //chama a conversão default
// console.log('Data', new Data(item))

console.assert(item + 0 === '{"name":"Jhonatan","age":22}0')
// console.log('!!item is true?', !!item)
console.assert(!!item)

// console.log('string.concat', 'Ae'.concat(item))
console.assert('Ae'.concat(item) === 'Ae{"name":"Jhonatan","age":22}')

// console.log('implict + explicit coercion (using==)', item == String(item))
console.assert(item == String(item))

const item2 = { ...item, name: 'Sousa', age:20}
// console.log('New Object', item2)
console.assert(item2.name == 'Sousa')