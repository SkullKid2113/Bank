// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(bankAccounts) {
  let greatestBalance = 0;
  let greatestBalanceClient = {};

  for (let i = 0; i < bankAccounts.length; i++) {
    const account = bankAccounts[i];
    if (account.balance > greatestBalance) {
      greatestBalance = account.balance;
      greatestBalanceClient = account;
    }
  }

  const result = [];
  result.push(greatestBalanceClient);
  return result;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
