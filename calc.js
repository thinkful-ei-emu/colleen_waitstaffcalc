'use strict';
const calc = (function(){
  function handleSubmit(){
    $('form').submit(function(){
      event.preventDefault();
      let baseMealPrice = parseInt($('#js-base-meal-price').val());
      let taxRate = parseInt($('#js-tax-rate').val());
      let tipPercentage = parseInt($('#js-tip-percentage').val());
      store.addMeal(baseMealPrice, taxRate, tipPercentage);
      console.log(store.mealDetails);
      $('#js-base-meal-price').val('');
      $('#js-tax-rate').val('');
      $('#js-tip-percentage').val('');
      render();
    });
      
  }

  function handleReset(){
    $('#reset').on('submit', '#reset', function(){
      event.preventDefault();
      store.resetMeals();
      $('#js-base-meal-price').val('');
      $('#js-tax-rate').val('');
      $('#js-tip-percentage').val('');
      $('.js-subtotal').html('0');
      $('.js-total').html('$0');
      $('.js-tip').html('$0');
      $('.js-tip-total').html('$0');
      $('.js-meal-count').html('0');
      $('.js-avg-tip').html('$0');
      render();
    });}

  function generateCustomerCharges(){
    let custSubTot = store.customerChargesSubtotal();
    let custTot = store.customerChargesTotal();
    let custTip = store.customerTip();

    $('.js-subtotal').html(`$${custSubTot}`);
    $('.js-total').html(`$${custTot}`);
    $('.js-tip').html(`$${custTip}`);

  }
  function myEarnings(){
    let tipTot = store.tipTotal();
    let mealCount = store.numberOfMeals();
    let avgTip = store.averageTip();

    $('.js-tip-total').html(`$${tipTot}`);
    $('.js-meal-count').html(mealCount);
    $('.js-avg-tip').html(`$${avgTip}`);
  }

  function bindEventHandlers(){
    handleSubmit();
    handleReset();
  }

  function render(){
    myEarnings();
    generateCustomerCharges();
  }

  return {
    bindEventHandlers,
    render
  };
})();