#sails-PassportLocalMongoExample

##Getting It Running

Clone the repository, and cd into its folder:

`git clone https://github.com/RelativeMedia/sails-PassportLocalMongoExample.git sails-auth-example; cd $_;`

Run NPM Install:

`npm install`

install mongodb, and start it with `mongod`

**Note:** if you want to use disk based db, change the `default: 'mongo'` to `default: 'sails-disk'` in the  `/config/adapters.js` file.

run `sails lift` in the app's directory

Create a User by POSTing to `/user` with the following:

- username
- password

You should get a json response of "Login Successful"

then try to access via GET `/user`. You should get a JSON response of "Not Authorized"

Now POST to `/login` with the following fields:

- username
- password

then again try to access via GET '/user'. You should get a JSON response of the users in the database (in this example, only one.)

You will notice that the password is not returned.


##Todos
- Enable CSRF
- Enable Logout
