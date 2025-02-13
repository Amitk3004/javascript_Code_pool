/* Removing duplicate entries of products from List of Products  */

/* mock data for duplicate elemets */
const mockData = [
    {
      id: 6548,
      name: 'Shoes',
      price: 35.01
    },
    {
      id: Number(Math.random()) * (100 - 2) + 2,
      name: 'Soap',
      price: 23.01
    },
    {
      id: Number(Math.random()) * (100 - 2) + 2,
      name: 'grain',
      price: 50.01
    },
    {
      id: Number(Math.random()) * (100 - 2) + 2,
      name: 'shirt',
      price: 20.01
    },
    {
      id: 6548,
      name: 'Shoes',
      price: 35.01
    }
  ]
  
  /* function to remove duplicate object from the list based on unique key, here our key is passed as argument to this function */
  function uniqueList(arr, key) {
    let updatedArray = [];
    let keyList = [];
    arr.forEach((obj) => {
      if (!keyList.includes(obj[key])) {
        updatedArray.push(obj);
        keyList.push(obj[key]);
      }
    });
    return updatedArray;
  }
  
  /* calling and printing of result */
  console.log(uniqueList(mockData, 'id'));