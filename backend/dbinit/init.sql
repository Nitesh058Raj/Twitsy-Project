CREATE DATABASE IF NOT EXISTS tweetdb;

USE tweetdb;
DROP TABLE IF EXISTS new;

CREATE TABLE Users (
    user_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) DEFAULT NULL,
    email VARCHAR(255) DEFAULT NULL,
    password VARCHAR(255) DEFAULT NULL,
    image VARCHAR(255) DEFAULT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT UNIQ_EMAIL UNIQUE (email),
    PRIMARY KEY (user_id)
);

CREATE TABLE Tweets (
    tweet_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    user_id BIGINT UNSIGNED NOT NULL,
    content TEXT DEFAULT NULL,
    tweet_img VARCHAR(255) DEFAULT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (tweet_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
); 

