// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = () => {
    let num = Math.floor(Math.random() * 100)
    let arr = mockUpStrand();
    return {
      _specimenNum: num,
      _dna: arr,

      mutate () {
        let mutatedDna = this._dna;
        let id = Math.floor(Math.random() * 15);
        mutatedDna[id] = returnRandBase();
        while (mutatedDna[id] !== this._dna[id]) {
          return mutatedDna.splice(id, 1, mutatedDna[id]);
        }      
        return mutatedDna;
      },

      compareDNA (obj) {
          let numOfSame = 0;
          for (let i = 0; i < this._dna.length; i++) {
            if (this._dna[i] === obj._dna[i]) {
              numOfSame++;
            } 
          }
        let percentOfCompare = Number.parseFloat(numOfSame / 15 * 100).toFixed(0);
        return `specimen #${this._specimenNum} and specimen #${obj._specimenNum} have ${percentOfCompare}% DNA in common`;
      },

      willLikelySurvive () {
        let count = 0;
        for (let i = 0; i < this._dna.length; i++) {
          if (this._dna[i] === 'C' || this._dna[i] === 'G') {
            count++;
          }
        }
        let survivePercent = Number.parseFloat(count / 15 * 100).toFixed(0);
        if (survivePercent >= '60') {
          return true;
        } else {
          return false;
        }
      }

    }
  }

  const pAequorCollection = () => {
    let collection = []
    let pAequorObj = { }
    for (let i = 0; i < 31; i++) {
      pAequorObj = pAequorFactory();
      collection.push(pAequorObj);
    }
    return collection;
  }

console.log(pAequorCollection())
