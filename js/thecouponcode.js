/*

Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

 */

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    let currDate = new Date(currentDate)
    let expDate = new Date(expirationDate)
    
    if(enteredCode === correctCode && currDate <= expDate){
      return true
      
    } else{
      return false
      
    }
  }