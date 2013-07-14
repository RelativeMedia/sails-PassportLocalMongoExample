#sails-PassportLocalMongoExample
This is a working example of how to get authentication working on sailsjs 0.9.

This uses the following npm libraries:

- passport
- pasport-local
- mongodb
- bcrypt
- sails-mongo

##Setup & Install
You need to have sailsjs 0.9 installed locally and linked via NPM..


###Installing sailsjs 0.9
cd to a directory where you want to store the sails clone.. I use `~/Web/Frameworks`..

`git clone http://github.com/balderdashy/sails.git -b development sails; cd $_; npm link;`

###Clone the repository, and cd into its folder:
I store all my web projects in `~/Web/Sites/`..

`git clone https://github.com/RelativeMedia/sails-PassportLocalMongoExample.git sails-auth-example; cd $_;`

###Run NPM Link, to link the sails module defined to your local version..

`npm link sails`

###Run NPM Install:

`npm install`

###Install mongodb, and start it with `mongod`
I wont outline this step as it can vary from system to system. For me (on osx 10.8) it was just using brew to install

**Note:** if you want to use disk based db, change the `default: 'mongo'` to `default: 'sails-disk'` in the  `/config/adapters.js` file.

run `sails lift` in the app's directory


##Getting it Working
With the server running.

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
