import { Sorter } from './Sorter';
export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }
  get length(): number {
    return this.data.length;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }
  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');
    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;

    this.data = characters.join('');
  }
  // sort(): void {
  //   const { length } = this;

  //   // All of this only works if collection is number[]

  //   for (let i = 0; i < length; i++) {
  //     for (let j = 0; j < length - i - 1; j++) {
  //       if (this.compare(j, j + 1)) {
  //         this.swap(j, j + 1);
  //       }
  //     }
  //   }
  // }
}
