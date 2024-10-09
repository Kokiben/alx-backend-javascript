const weakMap = new WeakMap();

const queryAPI = (endpoint) => {
  // Get the current request count or initialize it to 0 if not set.
  let requestCount = weakMap.get(endpoint) || 0;

  // Increment the request count by 1.
  requestCount += 1;
  
  // Update the WeakMap with the new request count.
  weakMap.set(endpoint, requestCount);

  // Check if the request count exceeds the threshold.
  if (requestCount >= 5) {
    throw new Error('Endpoint load is high');
  }

  return requestCount;
};

export { weakMap, queryAPI };
