import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

const pingDelay = process.env.PING_DELAY;
const adminId = process.env.TELEGRAM_ADMIN_ID;
const botUrl = process.env.UNI_BOT_URL;
const config = { headers: { Authorization: `Bearer ${adminId}` } };

export const ping = async () => {
  let pingPong = 'ping ';

  try {
    const botResponse = await axios.get(`${botUrl}/ping`, config);

    if (botResponse && botResponse.data) {
      pingPong = pingPong + botResponse.data;
    }
  } catch (e) {
    console.error('ERROR ping (bot):', e.config.url);
  }

  console.log(pingPong);

  setTimeout(() => ping(), +pingDelay);
};
