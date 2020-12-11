import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([44, -2, 66, 0, 12, 99]);
numbersCollection.sort();

const numb = numbersCollection.data;


const charactersCollection = new CharactersCollection('XsTwDfQ');
charactersCollection.sort();

const chars = charactersCollection.data;

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();

console.log(`NumSort: ${numb}`);
console.log(`CharSort: ${chars}`);
linkedList.print();
