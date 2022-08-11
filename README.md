# Plazti Conf Mech

Hello! Welcome to Plazti Conf Merch By @lenxnos. This project is an electronic commerce, where a client selects one or several products and processes to pay, after paying, a map is shown with the address to send the product.

This project is on based in course of [react-hooks](https://platzi.com/cursos/react-hooks/) by [platzi](https://platzi.com)

## Payment Method 

### Paypal
The payment method integrate is paypal, add a client id on .env file
```bash
PAYPAL_PAYMENT_CLIENT_ID=CLIENT-ID
```

## GEOAPIFY API

The map is integrated with react-leaflet, but for the location request, the GEOAPIFY API is used and it needs to add an API key, after obtaining the API key remember to add it in the .env file

```bash
  GEOAPIFY_API_TOKEN=API-KEY
```