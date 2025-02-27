/*
The Dependency Inversion Principle helps create flexible and maintainable code by ensuring high-level modules don't directly depend on low-level details.
 Instead, both rely on abstractions, allowing for easier updates and modifications.
 */
//Here store is the which accepts different payment methods , without changing the High- level module which is Store
 class Store {
    constructor(paymentProcessor){
        this.paymentProcessor = paymentProcessor;
    }

    purchaseBike(quantity){
        this.paymentProcessor.pay(200*quantity)
    }

    purchaseHelmet(quantity){
        this.paymentProcessor.pay(15*quantity)
    }
 }
 class Stripe {
    constructor(user){
        this.user = user;
    }

    makePayment(amountInCents){
        console.log(`${this.user} made payment of $${amountInCents / 100} with stripe`)
    }
 }

 class StripePaymentProcessor {
    constructor(user){
        this.stripe = new Stripe(user);
    }

    pay(amountInDollars){
        this.stripe.makePayment(amountInDollars * 100)
    }
 }

 class Phonepe{
    constructor(user){
        this.user = user;
    }

    makePayment(amountInRupees){
        console.log(`${this.user} made ${amountInRupees} rupees payment to Phonepay`)
    }
 }

 class PhonePayProcessor{
    constructor(user){
        this.phonepay = new Phonepe(user);
    }

    pay(amountInDollars){
        this.phonepay.makePayment(amountInDollars * 87.24);
    }
 }

 const purchaseStore = new Store(new StripePaymentProcessor('Ram'));
 purchaseStore.purchaseBike(2);

const store = new Store(new PhonePayProcessor('Sai'));
store.purchaseHelmet(1);