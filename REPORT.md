# OAuth Comparative Analysis

## Facebook OAuth

### Research Conducted By: Afnan Damra - Bahaa Zghayar - Bashar Nofal - Motasem Khaled - Ruba Banat

### Overall Score and Comments
#### Score (Out of 10): 10
#### General Comments
Back-end application to sign users in with facebook. It'll check if the user already exists or will add it to the database

#### Pros
* As facebook is a widely used application, it was easy to find a lot of information about how to use it as a developer.
* Having two enviroments (development and live).

#### Cons
* Having two enviroments (development and live), and the development enviroment will only allow test users to test the application.
* Bad documentation.

### Ratings and Reviews
#### Documentation
It's not easy to read, and it has many options and they are not very well organized, most of the information we got wasn't from the documentation.

#### Systems Requirements
- Dependencies: `express dotenv morgan base-64 bcrypt cors superagent mongoose jsonwebtoken fs`
- Heroku: https://fb-oauth-abbmr.herokuapp.com/
- MongoDB: mongodb+srv://afnandamra:dJZZ4UYeu7eT4sJP@authapi.vdwa0.mongodb.net/oauth?retryWrites=true&w=majority

#### Ramp-Up Projections
It would take less time for a team to launch a product than one developer. 
(about 4 months to get to this level)

#### Community Support and Adoption levels
How popular is this framework? What big companies are running on it? How is it "seen" in the general JS community?  Is there an active community of developers supporting and growing it?
Both facebook and Express are very popular in the tech feild and has many supporting and growing communities.


### Links and Resources
* [framework](https://expressjs.com/)
* [docs](https://developers.facebook.com/docs/facebook-login/web)
* [examples/tutorials](https://developers.facebook.com/docs/facebook-login/web)

### Code Demos
* [live/running application](https://fb-oauth-abbmr.herokuapp.com/)
* [code repository](https://github.com/afnandamra/OAuth)

### Operating Instructions
If someone were to download your repo (above), what steps do they need to take to run the application
* `npm start`
* Endpoint: `/`
  * Has a login button that connects the user with facebook, then after redirecting will change to 'Connected with facebook!!'.
* Endpoint: `/bad`
  * Returns an error.

