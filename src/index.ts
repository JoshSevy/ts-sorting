/**Bubble Sort algorithm class for array, string and linked-lists  */
class Sorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    const {length} = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {

        //All of this only works is collection of number[]
        //If collection is an array of numbers
        if(this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const temp = this.collection[j];
            this.collection[j] = this.collection[j+1];
            this.collection[j+1] = temp;
          }
        } 
        //Only going to work if collection is a string
        //If collection is a string, run this logic instead:
        //~~ logic to compare and swap character 
        if(typeof this.collection === 'string') {
          
        }
      }
    }
  }
}

const sorter = new Sorter([44, -2, 66, 0, 12, 99]);
sorter.sort();
console.log(sorter.collection)
