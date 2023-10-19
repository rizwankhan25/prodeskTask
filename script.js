// function findDuplicate(arra1) {
//     var object = {};
//     var result = [];

//     arra1.forEach(function (item) {
//       if(!object[item])
//           object[item] = 0;
//         object[item] += 1;
//     })

//     for (var prop in object) {
//        if(object[prop] >= 2) {
//            result.push(prop);
//        }
//     }
//     return result;
// }

// console.log(findDuplicate([3,9,18,3,28,6,17,9,3]));

function createPyramid(height) {
    for (let i = 1; i <= height; i++) {
      let space = ' '.repeat(height - i);
      let stars = '*'.repeat(2 * i - 1);
      console.log(space + stars);
    }
  }
  
  createPyramid(5);