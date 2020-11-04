create database lembretes;
create table users(
	user_ID int not null auto_increment unique,
    user_name varchar(64), 
    user_mail varchar(360) not null,
    user_pass varchar(64),
    primary key (user_ID)
);
create table lembretes(
	lmbrt_nome varchar(255) not null,
    data_criar date not null,
    data_final date,
    lmbrt_body varchar(1024),
    user_ID int not null,
    foreign key (user_ID) references users(user_ID)
);