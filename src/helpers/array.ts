export class Arr<T = any> {
  private sourceArray: any;

  public constructor( array: T) {
    this.sourceArray = array;
  }

  public sliceInEqualParts(partsCount: number): this {
    const sourceArrayCopy = [...this.sourceArray];

    let slices: any[] = Array(partsCount).fill(null).map(() => ([]))

    sourceArrayCopy.forEach((item, index) => {
      const slicePosition = index % partsCount
      slices[slicePosition].push(item)
    })

    this.sourceArray = slices

    return this
  }

  public get() {
    return this.sourceArray
  }
}