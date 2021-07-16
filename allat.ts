export class Allat {

    constructor(nev: string) {
      this.nev = nev;
    }
    nev: string;
    mianeve() {
        document.write(this.nev);
    }
}