import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([44, -2, 66, 0, 12, 99])
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
