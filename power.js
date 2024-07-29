function calculatePow(base, pow) {
    if (pow !== 0) {
      return base * calculatePow(base, pow - 1);
    } else {
      return 1;
    }
  }
  
  const base = parseInt(prompt('Enter the base:'));
  const pow= parseInt(prompt('Enter the power:'));
  
  const ans = calculatePow(base, powerRaised);
  
  console.log(`${base}^${pow} = ${ans}`);