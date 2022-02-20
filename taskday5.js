//Do the below programs in anonymous function

//a.odd number
const odd = (function () {
  for (var i = 1; i < 10; i += 2) {
    console.log(i);
  }
})();

//b.Convert all the strings to title caps

const toTitleCase = function (str) {
    return str
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };
  console.log(toTitleCase("welcome to w3docs"));
  
//c.sum of all numbers
const sum = (function () {
    const set1 = new Set([1, 2, 3, 4]);
  
    let sum = 0;
    set1.forEach((num) => {
      sum += num;
    });
    console.log(sum);
  })();

//d.prime number
const prime = (function () {
  for (var counter = 0; counter <= 100; counter++) {
    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
      if (counter % i === 0 && i !== counter) {
        notPrime = true;
      }
    }
    if (notPrime === false) {
      console.log(counter);
    }
  }
})();

//e.palindromes 

const arr = ["carecar", 1344, 12321, "did", "cannot"];
const isPalindrome = function (el) {
  const str = String(el);
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] === str[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};
const findPalindrome = function (arr) {
  return arr.filter((el) => isPalindrome(el));
};
console.log(findPalindrome(arr));

//f.median of two sorted arrays of the same size

var medianOfArr = function (arr1, arr2) {
    var concat = arr1.concat(arr2);
    concat = concat.sort(function (a, b) {
      return a - b;
    });
    console.log(concat);
    var length = concat.length;
  
    if (length % 2 == 1) {
      console.log(concat[length / 2 - 0.5]);
      return concat[length / 2 - 0.5];
    } else {
      console.log((concat[length / 2] + concat[length / 2 - 1]) / 2);
      return (concat[length / 2] + concat[length / 2 - 1]) / 2;
    }
  };
  arr1 = [1, 4, 7, 9];
  arr2 = [2, 5, 8];
  medianOfArr(arr1, arr2);

  //g.frequency
  var arr2=[3, 'q', 'q', 'q', 2, 3, 'q', 3, 'q', 2, 4, 9, 3];
  var ab = 1;
  var a = 0;
  var item;
  for (var i=0; i<arr2.length; i++)
  {
          for (var j=i; j<arr2.length; j++)
          {
                  if (arr2[i] == arr2[j])
                   a++;
                  if (ab<a)
                  {
                    ab=a; 
                    item = arr2[i];
                  }
          }
          a=0;
  }
  console.log(item+" ( " +ab +" times ) ") ;

//h.Rotate an array by k times

var rotateArray = function (arr, k) {
  for (let i = 0; i < k; i++) {
    let temp = arr[0];
    for (let j = 0; j < arr.length; j++) {
      arr[j] = arr[j + 1];
    }
    arr[arr.length - 1] = temp;
  }
  return arr;
};

let arr = [1, 2, 3, 4, 5];
k = 10;
console.log(rotateArray(arr, k));


//Do the below programs in arrow functions

//a.odd number
const oddnumber = () => {
  for (var i = 1; i < 10; i += 2) {
    console.log(i);
    // console.log("odd numbers are");
  }
};
oddnumber();

//b.Convert all the strings to title caps
var toTitleCase = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
  
      })
      .join(" ");
  };
  console.log(toTitleCase("how are you"));


//c.sum of all numbers
const sumNum = () => {
    const set1 = new Set([1, 2, 3, 4]);
  
    let sum = 0;
    set1.forEach((num) => {
      sum += num;
    });
    console.log(sum);
  };
  sumNum();


//d.prime number in arrow funtion
const prime = (() => {
  for (var counter = 0; counter <= 100; counter++) {
    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
      if (counter % i === 0 && i !== counter) {
        notPrime = true;
      }
    }
    if (notPrime === false) {
      console.log(counter);
    }
  }
})();

//e. palindromes
const arr = ["carecar", 1344, 12321, "did", "cannot"];
const isPalindrome = (el) => {
  const str = String(el);
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] === str[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};
const findPalindrome = (arr) => {
  return arr.filter((el) => isPalindrome(el));
};
console.log(findPalindrome(arr));
