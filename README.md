# LAB: OAuth

Authentication Server Phase 4: Facebook login OAuth 2

**Author:** Afnan Damra - Bahaa Zghayar - Bashar Nofal - Motasem Khaled - Ruba Banat
**Version:** 3.0.0

**Links:**

- [Repo Link](https://github.com/afnandamra/OAuth)
- [Deployed Site](https://fb-oauth-abbmr.herokuapp.com/)

## Setup

### Install

- Clone the repository from GitHub
- Run the command `npm i express dotenv morgan base-64 bcrypt cors superagent mongoose jsonwebtoken fs` to install dependencies
- create .env file with these variables: 
    ```
        PORT=4000
        MONGODB_URI=mongodb+srv://afnandamra:dJZZ4UYeu7eT4sJP@authapi.vdwa0.mongodb.net/oauth?retryWrites=true&w=majority
        SECRET=supersecret
        App_ID=499316858094104
        App_SECRET=9fca554469e5c6af5643b8076ca779dd
        REDIRECT_URI=https://fb-oauth-abbmr.herokuapp.com/fb_oauth
    ```
- Facebook Test Account : 
    ```
        email: kgmlhgegec_1617802312@tfbnw.net
        Password: 12345asdf
    ```


## Resources

[Starter code](https://github.com/afnandamra/amman-javascript-401d7/tree/main/class-08/lab/starter-code)