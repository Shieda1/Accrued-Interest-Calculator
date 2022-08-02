// https://calculator.swiftutors.com/accrued-interest-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const accruedInterestRateRadio = document.getElementById('accruedInterestRateRadio');
const accruedInterestCostRadio = document.getElementById('accruedInterestCostRadio');
const annualInterestRateRadio = document.getElementById('annualInterestRateRadio');
const holdingDaysRadio = document.getElementById('holdingDaysRadio');

let accruedInterestRate;
let dcf = 360;
let investmentAmount = v2;
let annualInterestRate = v3;
let holdingDays = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

v1.addEventListener('click', function() {
  if(days360.selected)
    dfc = 360;
  else if(days365.selected) 
    dfc = 365;
})

accruedInterestRateRadio.addEventListener('click', function() {
  variable1.textContent = 'Day Count Fraction (DCF)';
  variable2.textContent = 'Annual Interest Rate (%)';
  variable3.textContent = 'Holding Days';
  annualInterestRate = v2;
  holdingDays = v3;
  result.textContent = '';
  variable4.style.display = 'none';
  v4.style.display = 'none';
});

accruedInterestCostRadio.addEventListener('click', function() {
  variable1.textContent = 'Day Count Fraction (DCF)';
  variable2.textContent = 'Investment Amount ($)';
  variable3.textContent = 'Annual Interest Rate (%)';
  variable4.textContent = 'Holding Days';
  investmentAmount = v2;
  annualInterestRate = v3;
  holdingDays = v4;
  result.textContent = '';
  variable4.style.display = 'inline';
  v4.style.display = 'inline';
});

annualInterestRateRadio.addEventListener('click', function() {
  variable1.textContent = 'Day Count Fraction (DCF)';
  variable2.textContent = 'Accrued Interest Rate (%)';
  variable3.textContent = 'Holding Days';
  accruedInterestRate = v2;
  holdingDays = v3;
  result.textContent = '';
  variable4.style.display = 'none';
  v4.style.display = 'none';
});

holdingDaysRadio.addEventListener('click', function() {
  variable1.textContent = 'Day Count Fraction (DCF)';
  variable2.textContent = 'Accrued Interest Rate (%)';
  variable3.textContent = 'Annual Interest Rate (%)';
  accruedInterestRate = v2;
  annualInterestRate = v3;
  result.textContent = '';
  variable4.style.display = 'none';
  v4.style.display = 'none';
});

btn.addEventListener('click', function() {
  
  if(accruedInterestRateRadio.checked)
    result.textContent = `Accrued Interest Rate = ${computeAccruedInterestRate().toFixed(2)} %`;

  else if(accruedInterestCostRadio.checked)
    result.textContent = `Accrued Interest Cost = ${computeAccruedInterestCost().toFixed(2)} $`;

  else if(annualInterestRateRadio.checked)
    result.textContent = `Annual Interest Rate = ${computeAnnualInterestRate().toFixed(2)} %`;

  else if(holdingDaysRadio.checked)
    result.textContent = `Holding Days = ${computeHoldingDays().toFixed(2)}`;
})

// calculation

function computeAccruedInterestRate() {
  console.log(dcf)
  console.log(Number(holdingDays.value))
  console.log(Number(annualInterestRate.value))
  return (Number(holdingDays.value) * Number(annualInterestRate.value)) / dcf;
}

function computeAccruedInterestCost() {
  return (computeAccruedInterestRate() * Number(investmentAmount.value)) / 100;
}

function computeAnnualInterestRate() {
  return (Number(accruedInterestRate.value) * dcf) / Number(holdingDays.value);
}

function computeHoldingDays() {
  return (Number(accruedInterestRate.value) * dcf) / Number(annualInterestRate.value);
}