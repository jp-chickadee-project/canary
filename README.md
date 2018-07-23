 
notes for me:

start MySQL:
sudo /etc/init.d/mysql start
mysql -u root -p


## setting up the database for development
make sure this project isn't currently running
mysql -u root -p
create database jpcp_dev;
mysql -u root -p jpcp_dev < src/migration/chickadees.sql (NOT TRACKED)
npm run migrate:up


mysql -u root -p jpcp_dev < src/migration/initial-create.sql

mysql -u root -p jpcp_dev < src/migration/test-seed.sql
