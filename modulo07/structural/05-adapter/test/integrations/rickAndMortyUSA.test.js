import { beforeEach, describe, expect, jest, test } from '@jest/globals'
import axios from 'axios'
import fs from 'fs/promises'
import RickAndMortyUSA from './../../src/business/integrations/rickAndMortyUSA.js'

describe('#RickAndMortyUSA', () => {
    beforeEach(() => jest.clearAllMocks())

    test('#getCharatersXML should return a list of Charater Entity', async () => {
        const response = await fs.readFile('./test/mocks/characters.xml')
        const expected = [{"gender": "Male", "id": 10, "location": "Worldender's lair", "name": "Alan Rails", "origin": "unknown", "species": "Human", "status": "Dead", "type": "Superhuman (Ghost trains summoner)"}]

        jest.spyOn(axios, "get").mockResolvedValue({ data: response })

        const result = await RickAndMortyUSA.getCharactersFromXML()
        expect(result).toMatchObject(expected)

    })
    
    test('#getCharatersXML should return an empty list if the API returns nothing', async () => {
        const response = await fs.readFile('./test/mocks/characters-empty.xml')
        const expected = []
        jest.spyOn(axios, "get").mockResolvedValue({ data: response })

        const result = await RickAndMortyUSA.getCharactersFromXML()
        expect(result).toStrictEqual(expected)

    })
})