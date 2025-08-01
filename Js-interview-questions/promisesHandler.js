let myPromise = new Promise((resolve, reject) => {
    // Perform an asynchronous operation here
    // For example, a setTimeout to simulate a delay:
    setTimeout(() => {
      let success = true; // Simulate a condition for success or failure
  
      if (success) {
        resolve("Operation completed successfully!"); // Resolve the promise with a value
      } else {
        reject("Operation failed!"); // Reject the promise with an error
      }
    }, 2000); // Simulate a 2-second delay
  });