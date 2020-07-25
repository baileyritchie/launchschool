// Mortage/ Loan Calculator Assignment
/* EDGE CASES of input to APR

5%, 5.124232%, .001242, randomword,


*/

function getLoanInfo(loanAmount,APR,yearloanDuration) {
  // TODO edit this function later
  let monthlyPayment = loanAmount + APR + yearloanDuration;
}

function toMonthlyRate(APR) {
  // comes in as a string;
  if (APR.includes('%')) {
    // if it is percentage based
    APR.replace('%','');
    parseFloat(APR);
  } else if (!isNaN(APR)) {
    // this must be a random word or have letters OR be true/false
    APR = 0
  } else {
    Number(APR)
  }
  
  let monthlyRate;
  switch (APR) {
    case APR > 0 && APR < 1:
      //this is a percentage or a decimal
      //how are percentages evaluated
      monthlyRate = (APR / 12);
      break;
    case APR >= 1:
      // numeric number
      monthlyRate = (APR / 12) / 100;
      break;



  }
    
}