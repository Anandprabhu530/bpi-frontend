# BPI - (Basic Payment Interface)

I developed this project in order to mimic and understand the behavior of UPI system. Through out the project, I understood a how payments are generally processed in UPI with NPCI.

This repository consists of code related to the frontend of the application.

Backend code can be found [here](https://github.com/Anandprabhu530/bpi-gcp-backend.git)

Firebase Functions code can be found [here](https://github.com/Anandprabhu530/bpi-firebase-functions)

## Installation:

```bash
git clone https://github.com/Anandprabhu530/bpi-frontend
cd [your project directory]
npm install
npm run dev
```

## Project Overview

Frontend calls the firebase functions via httpsCallable to initiate a transaction.

Firebase functions verifies the authenticity of transactions and transfers data related to transactions to the Pub/Sub.

The Pub/Sub message is consumed by cloud run and then transaction is processed. The status of the transaction will be updated in firestore.

The frontend constanly pools firestore and checks the status of payments with the paymentId. This is then reflected in frontend according to state of the transaction.
