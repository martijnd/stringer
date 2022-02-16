class Stringer {
  private value: string;

  constructor(value: string) {
    this.value = value;
  }
  toString() {
    return this.value
  }

  toUpperCase() {
    this.value = this.value.toUpperCase();

    return this;
  }

  toLowerCase() {
    this.value = this.value.toLowerCase();

    return this;
  }

  prepend(...value: string[]) {
    this.value = value.join('') + this.value;

    return this;
  }

  append(...value: string[]) {
    this.value = this.value + value.join('');

    return this;
  }

  before(value: string) {
    const pos = this.value.indexOf(value);
    this.value = this.value.slice(0, pos);

    return this;
  }

  after(value: string) {
    const pos = this.value.indexOf(value);
    this.value = this.value.slice(pos + value.length, this.value.length);

    return this;
  }

  camel() {
    this.value = this.value.split(' ')
      .map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');

    return this;
  }

  pascal() {
    this.value = this.value.split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');

    return this;
  }
}

export default Stringer;
