# Recurring Plans

## Introduction
Rave helps you collect payments recurrently from your customers using a payment plan. Payment plans allow you create a subscription for your customers.

When you have created a payment plan you can subscribe a customer to it by simply passing the plan ID in your form value to charge the customers card.

# Sample implementation

```html
<form method="POST" action="{{ route('createpaymentplan') }}" id="paymentForm">
    {{ csrf_field() }}
    <input type="text" name="name" placeholder="Plan Name" />
    <input type="text" name="amount" placeholder="Amount" />
    <input type="text" name="interval" placeholder="Interval" />
    {{-- <input type="text" name="duration" placeholder="Duration" /> <!-- Uncomment if you want to add a duration --> --}}
    <input type="submit" value="Create"  />
</form>
```

#### Route

```php
Route::post('/paymentplans/create', 'RaveController@createPaymentPlan')->name('createpaymentplan');
```


#### Controller

```php
public function createPaymentPlan()
  {
    $data = Rave::createPaymentPlan();

    dd($data);

    // $data
    // {
    //   "id": 354,
    //   "name": "test plan",
    //   "amount": 500,
    //   "interval": "daily",
    //   "duration": 0,
    //   "status": "active",
    //   "currency": "NGN",
    //   "plan_token": "rpp_0621cdded016449f6267",
    //   "date_created": "2018-07-30T10:08:43.000Z"
    // }
  }
```

```html
<h3>Subscribe to Linda Ikeji TV - N500.00 per month</h3>
<form method="POST" action="{{ route('pay') }}">
    {{ csrf_field() }}
    <input type="hidden" name="amount" value="500" /> <!-- Replace the value with your transaction amount -->
    <input type="hidden" name="email" value="test@test.com" /> <!-- Replace the value with your customer email -->
    <input type="hidden" name="firstname" value="Oluwole" /> <!-- Replace the value with your customer firstname -->
    <input type="hidden" name="lastname" value="Adebiyi" /> <!-- Replace the value with your customer lastname -->
    <input type="hidden" name="phonenumber" value="090929992892" /> <!-- Replace the value with your customer phonenumber -->
    {{-- <input type="hidden" name="paymentplan" value="354" /> <!-- Ucomment and Replace the value with the payment plan id --> --}}
    <input type="submit" value="Buy"  />
</form>
```
