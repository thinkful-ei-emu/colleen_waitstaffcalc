'use strict';

const store = (function() {
  let mealDetails = [];

  function customerChargesSubtotal(){
    if (mealDetails.length > 0) {
      return mealDetails[0].baseMealPrice + tipTotal();
    }
    return 0;
  } 
  function customerTip(){
    if (mealDetails.length > 0) {
      return mealDetails[0].baseMealPrice * (mealDetails[0].tipPercentage/100);
    }
    return 0;
  } 
  function customerChargesTotal(){
    if (mealDetails.length > 0) {
      let tax = (mealDetails[0].taxRate/100) * mealDetails[0].baseMealPrice;
      return customerChargesSubtotal() + tax;
    } return 0;
  }

  function numberOfMeals(){
    return mealDetails.length;
  }

  function tipTotal(){
    let tipTotal = 0;
    if (mealDetails.length > 0){
      for (let i = 0; i < mealDetails.length; i++)
      {
        tipTotal += customerTip(i);
      }
    }
    return tipTotal;
  }

  function averageTip(){
    let tipTot = tipTotal();
    let numMeal = numberOfMeals();
    if (tipTot > 0){
      let avgTip = tipTot/numMeal;
      return avgTip;} return 0;
  }

  function addMeal(basePrice, tax, tipPercent){
    mealDetails.push({baseMealPrice: basePrice, taxRate: tax, tipPercentage: tipPercent});
  }

  function resetMeals(){
    mealDetails = [];
  }

  return {
    customerChargesSubtotal,
    customerChargesTotal,
    numberOfMeals,
    tipTotal,
    averageTip,
    addMeal,
    resetMeals,
    mealDetails,
    customerTip
  };
})();
