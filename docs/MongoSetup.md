

# In Development 
## Create Database
> use microstack
switched to db microstack

## Create User
> db.createUser({"user": "mongouser", "pwd": "mongouser", "roles": ["readWrite", "dbAdmin"]);

## In config/development/dev.env add following environment variable
MONGO_URL=mongodb://mongouser:mongouser@localhost:27017/microstack


# In Cloud Development
## Database update role
login to the mongo node

> use microstack
> db.updateUser("mongouser", { "roles": ["readWrite", "dbAdmin"] });


