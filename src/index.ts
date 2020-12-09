/**Bubble Sort algorithm*/
class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {
    const {length} = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const temp = this.collection[j];
          this.collection[j] = this.collection[j+1];
          this.collection[j+1] = temp;
        }
      }
    }
  }
}

const sorter = new Sorter([44, -2, 66, 0, 12, 99]);
sorter.sort();
console.log(sorter.collection)
