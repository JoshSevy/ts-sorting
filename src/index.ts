import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([44, -2, 66, 0, 12, 99])
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('XsTwDfQ');
const charSorter = new Sorter(charactersCollection);
charSorter.sort();
console.log(charactersCollection.data);
