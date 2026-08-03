// 1. Basic Promise Implementation
function delayedValue(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve(value);
      } else {
        reject(new Error("Value is invalid"));
      }
    }, delay);
  });
}

delayedValue("Hello, JavaScript", 1000)
  .then(result => console.log(result))
  .catch(error => console.error(error.message));

  
// 2. Async/Await Pattern
async function fetchUserData(userId) {
  try {
    const response = await fetch(`https://example.com{userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const user = await response.json();
    return user.name;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}

// Immediately Invoked Function Expression (IIFE)
(async () => {
  try {
    const userName = await fetchUserData(1);
    console.log(`User Name: ${userName}`);
  } catch (error) {
    console.log('Caught outside:', error.message);
  }
})();


// 3. Parallel Execution with Promise.all()
async function fetchProduct(id) {
  // Simulate delay
  await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
  return { id, name: `Product ${id}`, price: Math.floor(Math.random() * 100) };
}

async function fetchMultipleProducts() {
  try {
    // Runs all three requests at the same time
    const products = await Promise.all([
      fetchProduct(1),
      fetchProduct(2),
      fetchProduct(3)
    ]);

    const total = products.reduce((sum, product) => sum + product.price, 0);
    console.log(`Total price: $${total.toFixed(2)}`);
  } catch (error) {
    console.error('One or more fetches failed:', error);
  }
}

fetchMultipleProducts();