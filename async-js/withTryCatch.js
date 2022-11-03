
const getData = (user) =>{

    return new Promise((resolve, reject) => {
        setTimeout(() => {
           user !== undefined 
            ? resolve({user})
            : reject(new Error("No User in BD"));
          }, 300);
    })
} 

function validateData(user) {
    if (user === '') {
      const error = new Error('No user provided!');
      error.code = 1;
      throw error;
    }
  }





getData('Jhon').then((user)=>{
      console.log(user)
  }).catch((error) => {
    console.log(error)
})

;( async () => {
    try {
       await getData()
    } catch (error) {
        console.log(error)
    }
})();

/**
 * Desta forma o cod vai bloquear
 */

// try {
//     getData()
// } catch (error) {
//     console.log(error);
// }


getData('').then((user)=>{
    try {
        validateData(user.user)
    } catch (error) {
        console.log(error.code)
    }
})

getData('').then((user)=>{
    validateData(user.user)
}).catch((error) => {
    console.log('result error: ', error.code)
}); 
  

