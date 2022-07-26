const functions = require("firebase-functions");
const express =require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51KlUtEKO5Or3MaAb7ucspgLQyUiJ5e4vlea4cjON1jhRpxjX3TqVVuWJB0FXMZtx2EbBxntmx8n6rJviPwDoF3jj00HzX6g5HN")


const app =express();

app.use(cors({origin: true}));
app.use(express.json());

app.get( "/", (request, response)=>
response.status(200).send("hello world"));

app.post("/payments/create", async(request,response) => {
    const total=request.query.total;
    console.log("Payment Request Recieved! Your Total is >>>",total);
    
    const paymentIntent = await stripe.paymentIntents.create({ 
        amount:total,
        currency:"usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

exports.api = functions.https.onRequest(app);
