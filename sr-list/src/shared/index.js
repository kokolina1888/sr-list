export const firebaseLooper = (snapshot) => {
 
  let data = [];
  
  snapshot.forEach((childSnapshot) => {
   
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key,
    });
  });
  
  return data;
};
export const reverseArray = (actualArray) => {
  let reversedArray = [];
  for (let i = actualArray.length - 1; i >= 0; i--) {    
    reversedArray.push(actualArray[i]);
  }
  return reversedArray;
};

export const plainObject = (actualArray) => {
  
  let newObj = {};
  for(let ind in actualArray){
    newObj[actualArray[ind].id] = actualArray[ind].name
  }
  return newObj
 
};

export const plainObjectWithData = (actualArray) => {
  let newObj = {};
  for (let ind in actualArray) {
    newObj[actualArray[ind].id] = actualArray[ind];
  }
  return newObj;
};


