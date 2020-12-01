DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
use burgers_db;

create table burger(
   id int not null AUTO_INCREMENT,
   burger_name varchar(100) not null,
   devoured boolean default false,
   primary key (id)
)

