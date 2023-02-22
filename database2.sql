CREATE TABLE role(
        id_role int primary key auto_increment,
        name_role varchar(50) not null
)ENGINE=InnoDB;

CREATE TABLE users(
        id_users int primary key auto_increment,
        username_users varchar(50) not null,
        displayname_users varchar(50) not null,
        email_users varchar(50) not null,
        password_users varchar(100) not null,
        profilepic_users varchar(100) not null,
        banner_users varchar(100) not null,
        id_role int not null
)ENGINE=InnoDB;

CREATE TABLE draw(
        id_draw int primary key auto_increment,
        img_draw varchar(100) not null,
        id_users int not null
)ENGINE=InnoDB;

CREATE TABLE comment(
        id_comment int primary key auto_increment,
        contenu_comment varchar(250) not null,
        id_users int not null
)ENGINE=InnoDB;

CREATE TABLE post(
        id_post int primary key auto_increment,
        contenu_post varchar(250) not null,
        img_post varchar(100) not null,
        id_users int not null,
        id_draw int not null,
        id_comment int not null
)ENGINE=InnoDB;

ALTER TABLE users
ADD CONSTRAINT fk_assign_role
FOREIGN KEY (id_role) REFERENCES role(id_role);

ALTER TABLE draw
ADD CONSTRAINT fk_add_users
FOREIGN KEY (id_users) REFERENCES users(id_users);

ALTER TABLE comment
ADD CONSTRAINT fk_add_users
FOREIGN KEY (id_users) REFERENCES users(id_users);

ALTER TABLE post
ADD CONSTRAINT fk_add_users
FOREIGN KEY (id_users) REFERENCES users(id_users);
ALTER TABLE post
ADD CONSTRAINT fk_add_draw
FOREIGN KEY (id_draw) REFERENCES draw(id_draw);
ALTER TABLE post
ADD CONSTRAINT fk_add_comment
FOREIGN KEY (id_comment) REFERENCES comment(id_comment);

