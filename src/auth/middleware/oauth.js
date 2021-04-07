'use strict';

require('dotenv').config();
const App_ID = process.env.App_ID;
const App_SECRET = process.env.App_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
// const webServerUrl = `https://www.facebook.com/v10.0/dialog/oauth?client_id=${App_ID}&redirect_uri=${REDIRECT_URI}&state=${stateParam}`;
const remoteAPI = 'https://www.facebook.com/connect/login_success.html';

module.exports = async (req, res, next) => {
  try {
    console.log('__REQ.Query__', req.query);
    
    next();
  } catch (e) {
    next(e.message);
  }
};
// try {
//   // the code will come from the popup
//   const code = req.query.code;
//   console.log('1. CODE:', code);
//   const remoteToken = await exchangeCodeForToken(code);
//   console.log('2. ACCESS TOKEN', remoteToken);
//   const remoteUser = await getRemoteUserInfo(remoteToken);
//   console.log('3. GITHUB USER', remoteUser);
//   const [user, token] = await getUser(remoteUser);
//   console.log('4. LOCAL USER', user, token);
//   req.user = user;
//   req.token = token;
//   next();
// } catch (error) {
//   next(error.message);
// }

// async function exchangeCodeForToken(code) {
//   const tokenResponse = await superagent.post(tokenServerUrl).send({
//     code: code,
//     client_id: App_ID,
//     client_secret: App_SECRET,
//     redirect_uri: REDIRECT_URI,
//     grant_type: 'authorization_code',
//   });
//   const accessToken = tokenResponse.body.access_token;
//   return accessToken;
// }

// async function getRemoteUserInfo(token) {
//   const userResponse = await superagent
//     .get(remoteAPI)
//     .set('Authorization', `token ${token}`)
//     .set('user-agent', 'express-app');
//   const user = userResponse.body;
//   return user;
// }

// async function getUser(remoteUser) {
//   const userRecord = {
//     username: remoteUser.login,
//     password: 'oauthpassword', // this can be anything (it will be hashed)
//   };
//   const user = new User(userRecord);
//   const userDoc = user.save();
//   const token = User.generateToken(userDoc);
//   return [user, token];
// }
