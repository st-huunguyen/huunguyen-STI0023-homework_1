# **Pizza Challenge**
​
Let’s build a simple page to order a pizza using Reactjs. This webapp needs to retrieve customer information, the type of pizza they want to order as well as their payment information and displays at the end a JSON payload containing all the information retrieved.
## **Information retrieval**
​
### **Customer information**
​
We will need to ask for the following information from the customer:
​
- Name
- Address (street name, house number, postal code, city)
- Phone number
​
### **Pizza selection**
​
The page should let the customer choose what kind of pizza they want to order:
Choose one of the 3 pizza sizes:
​
```
Small ($15)
Medium ($20)
Large ($25)
```
​
Choose any combination of the following toppings:
​
```
Olives (+$3)
Pepperoni (+$4)
Mushrooms (+$2)
Pepper (+$2)
```
​
​
When the user changes an option, the price should be displayed and updated in real time.
​
### **Payment information**
​
The page should have a form for entering credit card information:
​
- Credit card number
- Expiration date MM/YY
- Security Code
​
The form should validate the card at an appropriate time (on blur or on submit). We suggest you to use the library of your choice for it (suggestion: [**https://www.npmjs.com/package/card-validator**](https://www.npmjs.com/package/card-validator))Here is valid test number: 4242 4242 4242 4242
​
​
### **Order the pizza**
​
When the user orders the pizza, display an order confirmation page and log the JSON payload with all the information required to place an order. Build a payload which would make sense to send to an API.
​
**Requirements**
​
- Keep it simple, try to reduce your dependencies.
- You have full freedom in UI and UX design.
- Using React functional components
- Using react-hook-form for form, should be implemented validation for it.
- Should have state management for this exercise.