
const URL = `https://www.facebook.com/v10.0/dialog/oauth?client_id=499316858094104&redirect_uri=http://localhost:4000/fb_oauth&state="{st=state123abc,ds=123456789}"`;

const aEl = document.getElementById('oauth');
aEl.setAttribute('href', URL);