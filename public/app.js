
const URL = `https://www.facebook.com/v10.0/dialog/oauth?client_id=499316858094104&redirect_uri=https://fb-oauth-abbmr.herokuapp.com/fb_oauth&state="{st=state123abc,ds=123456789}"`;

const aEl = document.getElementById('oauth');
aEl.setAttribute('href', URL);