CREATE TABLE Users (
    id   INTEGER     NOT NULL,
    login VARCHAR(32) NOT NULL,
    password VARCHAR(32) NOT NULL,
    primary key (id)
);

#DOWN

DROP TABLE Users;
