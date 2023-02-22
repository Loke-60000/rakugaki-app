CREATE TABLE Role(
        id_role   Int  Auto_increment  not null ,
        name_role varchar (50) not null
	,CONSTRAINT Role_PK PRIMARY KEY (id_role)
)ENGINE=InnoDB;

CREATE TABLE users(
        id_users          Int primary key  Auto_increment  not null ,
        username_users    varchar (50) not null ,
        displayname_users varchar (50) not null ,
        email_users       varchar (50) not null ,
        password_users    varchar (100) not null ,
        profilepic_users  varchar (100) not null ,
        banner_users      varchar (100) not null ,
        id_role           Int not null
	,CONSTRAINT users_PK PRIMARY KEY (id_users)

	,CONSTRAINT users_Role_FK FOREIGN KEY (id_role) REFERENCES Role(id_role)
)ENGINE=InnoDB;

CREATE TABLE drawing(
        id_draw  Int primary key Auto_increment  not null ,
        img_draw varchar (100) not null ,
        id_users Int
	,CONSTRAINT drawing_PK PRIMARY KEY (id_draw)

	,CONSTRAINT drawing_users_FK FOREIGN KEY (id_users) REFERENCES users(id_users)
)ENGINE=InnoDB;

CREATE TABLE comment(
        id_comment      Int primary key  Auto_increment  not null ,
        content_comment varchar (250) not null ,
        id_users        Int
	,CONSTRAINT comment_PK PRIMARY KEY (id_comment)

	,CONSTRAINT comment_users_FK FOREIGN KEY (id_users) REFERENCES users(id_users)
)ENGINE=InnoDB;

CREATE TABLE post(
        id_post      Int primary key  Auto_increment  not null ,
        content_post varchar (250) not null ,
        img_post     varchar (100) ,
        id_users     Int ,
        id_draw      Int ,
        id_comment   Int
	,CONSTRAINT post_PK PRIMARY KEY (id_post)

	,CONSTRAINT post_users_FK FOREIGN KEY (id_users) REFERENCES users(id_users)
	,CONSTRAINT post_drawing0_FK FOREIGN KEY (id_draw) REFERENCES drawing(id_draw)
	,CONSTRAINT post_comment1_FK FOREIGN KEY (id_comment) REFERENCES comment(id_comment)
)ENGINE=InnoDB;
