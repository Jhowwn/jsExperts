"use strict";var mocha;module.link('mocha',{default(v){mocha=v}},0);var chai;module.link('chai',{default(v){chai=v}},1);var Person;module.link('../src/person.js',{default(v){Person=v}},2);
const { describe, it } = mocha;

const {expect } = chai;


describe('Person', () => {
  it('Should return a person instance from a string', () => {
    const person = Person.generateInstanceFromString(
      '2 bike,carro 20000 2020-01-01 2020-08-01'
    )
    const expected = {
      from: '2020-01-01',
      to:  '2020-08-01',
      kmTraveled: '20000', 
      vehicles: ['bike', 'carro'],
      id: '2', 
    }

    expect(person).to.be.deep.equal(expected);
  })

  it('Should format values', () => {
    const person = new Person({
      from: '2020-01-01',
      to:  '2020-08-01',
      kmTraveled: '20000', 
      vehicles: ['bike', 'carro'],
      id: '2', 
    })
    const result = person.formatted("pt-BR")
    const expected = {
      id: 2,
      vehicles: 'bike e carro',
      kmTraveled: '20.000 km',
      from: '01 de janeiro de 2020',
      to: '01 de agosto de 2020'
    }

    expect(result).to.be.deep.equal(expected)
  })
})