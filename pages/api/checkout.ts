// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const stripe = require('stripe')('sk_test_oikE9rMloKhxnhwajSXi7dYT0097HJOPwi')

export default async function handler(req, res) {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'myr',
          product_data: {
            name: 'Weed',
          },
          unit_amount: 42000,
        },
        quantity: 10,
      },
    ],
    mode: 'payment',
    payment_method_types: ['card', 'fpx'],
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
  });

  res.redirect(session.url);
}
