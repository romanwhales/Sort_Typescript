import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 10000]);
numbersCollection.sort();
console.log(numbersCollection.data);
// sorter.sort();
// console.log(numbersCollection.data);
const charactersCollection = new CharactersCollection('Xaayb');

charactersCollection.sort();
console.log(charactersCollection.data);

// const sorter = new Sorter([10, 3, -5, 0]);
// sorter.sort();
// console.log(sorter.collection);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

// const linkedSorter = new Sorter(linkedList);
linkedList.sort();
linkedList.print();
