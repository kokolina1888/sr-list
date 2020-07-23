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
  console.log(actualArray)
  let reversedArray = [];

  for (let i = actualArray.length - 1; i >= 0; i--) {
    
    reversedArray.push(actualArray[i]);
  }
  console.log(reversedArray)
  return reversedArray;
};
