const { Network, Alchemy } = require('alchemy-sdk');

import * as dotenv from "dotenv";

dotenv.config()
// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: process.env.ALCHEMY_API_KEY, // Replace with your Alchemy API Key.
  network: Network.ARB_MAINNET, // Replace with your network.
};

const alchemy = new Alchemy(settings);