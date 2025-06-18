const dotenv = require('dotenv');
const fetch = require('node-fetch'); // Only needed if using Node.js < v18

dotenv.config();
const { PAYPAL_CLIENT_ID, PAYPAL_APP_SECRET, PAYPAL_API_URL } = process.env;

/**
 * Fetches an access token from the PayPal API.
 * @returns {Promise<string>} The access token if the request is successful.
 * @throws {Error} If the request is not successful.
 */
async function getPayPalAccessToken() {
  const auth = Buffer.from(PAYPAL_CLIENT_ID + ':' + PAYPAL_APP_SECRET).toString('base64');
  const url = `${PAYPAL_API_URL}/v1/oauth2/token`;

  const headers = {
    Accept: 'application/json',
    'Accept-Language': 'en_US',
    Authorization: `Basic ${auth}`,
  };

  const body = 'grant_type=client_credentials';
  const response = await fetch(url, {
    method: 'POST',
    headers,
    body,
  });

  if (!response.ok) throw new Error('Failed to get access token');

  const paypalData = await response.json();
  return paypalData.access_token;
}

/**
 * Checks if a PayPal transaction is new by comparing the transaction ID with existing orders in the database.
 * @param {Mongoose.Model} orderModel - The Mongoose model for the orders.
 * @param {string} paypalTransactionId - The PayPal transaction ID.
 * @returns {Promise<boolean>} Returns true if it is a new transaction, false otherwise.
 */
async function checkIfNewTransaction(orderModel, paypalTransactionId) {
  try {
    const orders = await orderModel.find({
      'paymentResult.id': paypalTransactionId,
    });
    return orders.length === 0;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

/**
 * Verifies a PayPal payment by making a request to the PayPal API.
 * @param {string} paypalTransactionId - The PayPal transaction ID.
 * @returns {Promise<Object>} Object with 'verified' and 'value'.
 */
async function verifyPayPalPayment(paypalTransactionId) {
  const accessToken = await getPayPalAccessToken();
  const paypalResponse = await fetch(
    `${PAYPAL_API_URL}/v2/checkout/orders/${paypalTransactionId}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!paypalResponse.ok) throw new Error('Failed to verify payment');

  const paypalData = await paypalResponse.json();
  return {
    verified: paypalData.status === 'COMPLETED',
    value: paypalData.purchase_units[0].amount.value,
  };
}

module.exports = {
  checkIfNewTransaction,
  verifyPayPalPayment,
};
