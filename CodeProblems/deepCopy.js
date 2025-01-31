function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    if (Array.isArray(obj)) {
      return obj.map((item) => deepCopy(item));
    }
  
    const copy = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepCopy(obj[key]);
      }
    }
    return copy;
  }
  
  const originalObject = { a: 1, b: { c: 2 } };
  const deepCopyObject = deepCopy(originalObject);

  