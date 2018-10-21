const _ = {
  clamp(number, lowerBound, upperBound) {
    numberMax = Math.max(number, lowerBound);
    numberMin = Math.min(number, upperBound);  	
    if(number >= numberMax && number > numberMin) {
      return upperBound;
    } 
    else if (number === numberMax && number === numberMin) {
      return number;
    }
    else if (number < numberMax && number <= numberMin) {
      return lowerBound;
    }
  },
  inRange(number, start, end) {
    if(end === undefined) {
      end = start;
      start = 0;
      if(number > start && number < end) {
        return true;
      }
      else if(number < start || number > end) {
        return false;
      }
      else if(number === start || number === end) {
        return false;
      }
    }
    else if(start > end) {
      let swap = end;
      end = start;
      start = swap;
      if(start < number && number < end) {
        return true;
      }
      else {
        return false;
      }
    }
     else if(number > start && number < end) {
      return true;
    }
    else if(number < start || number > end) {
      return false;
    }
    else if(number === start || number === end) {
      return false;
    }
  },
  words(string) {
    let words = string.split(' ');
    return words;
  },
  pad(string, length) {
    if(length > string.length) {
      const totalPadding = length - string.length;
      const paddedString = ' ';
      if(totalPadding % 2 === 0) {
        const halfOfPadding = totalPadding / 2;
        return  paddedString.repeat(halfOfPadding) + string + paddedString.repeat(halfOfPadding);
      }
      else if(totalPadding % 2 !== 0) {
        const startPadding = Math.floor(totalPadding / 2);
        const endPadding = totalPadding - startPadding;
        return paddedString.repeat(startPadding) + string + paddedString.repeat(endPadding);
      }
    }
    else {
      return string;
    }
  },
  has(object, key) {
    if(key in object) {
      if(typeof(object.key) === "undefined") {
        return false;
      }
      else {
        return true;
      }
    }
    else {
      return false;
    }
  },
  invert(object) {
    const invertObj = {};
    for(let key in object) {
      //let original = key; --> unused variable
      invertObj[object[key]] = key;
    }
    return invertObj;
  },
  findKey(object, predicate) {
    for (let key in object) {
      let value = object[key];
      let predicateValue = predicate(value);
      if(predicateValue) {
  	return key;
      }
    }
    return undefined;
  },
  drop(array, number) {
    let newArray = [];
    if(number === undefined) {
      number = 1;
    }
    else if(number < 0) {
      number = 0;
    }
    for(let i = 0; i < array.length; i++) {
      //console.log(array[i]);
      newArray.push(array[i]);
      //console.log(newArray);      
    }
    return newArray.slice(number);
  },
  dropWhile(array, predicate) {
    let newArray = [];
    for(let x = 0; x < array.length; x++) {
     
      if(!predicate(array[x], x, array)) {
        newArray = array.slice(x);
        //console.log(newArray);
      }
    }  
    return newArray;
  },
  chunk(array, size) {
    const arrayChunks = [];
    if(size === undefined) {
      size = 1;
    }
    for(let i = 0; i < array.length - 2; i++) {
      const arrayChunk = array.slice(i + i, i + size);
      arrayChunks.push(arrayChunk);
      size++;
      //console.log(arrayChunks);
    }
    return arrayChunks;
  }
};
  
//console.log(_.clamp(1, -2, 4));
//console.log(_.inRange(-3, -2, -6));


// Do not write or modify code below this line.
module.exports = _;
