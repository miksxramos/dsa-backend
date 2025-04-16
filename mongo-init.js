db = db.getSiblingDB('auth_db');

db.createUser({
  user: "app_user",
  pwd: "app_password",
  roles: [
    { role: "readWrite", db: "auth_db" },
    { role: "dbAdmin", db: "auth_db" }
  ]
});

db.createCollection('users');