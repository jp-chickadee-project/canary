# Awesome Project Build with TypeORM
        
Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command

https://github.com/typeorm/typeorm


start MySQL:
sudo /etc/init.d/mysql start
mysql -u root -p

mysql dbname < chickadees.sql
OR
mysql -u root -p jpcp_dev < chickadees.sql
OR
mysql -u root -p jpcp_dev < src/migration/initial-create.sql
mysql -u root -p jpcp_dev < src/migration/chickadees.sql (NOT TRACKED)
