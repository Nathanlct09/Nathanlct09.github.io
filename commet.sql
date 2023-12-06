DROP DATABASE IF EXISTS commet;
CREATE DATABASE commet;

USE commet;

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` int(11) NOT NULL,
  `bday` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
    PRIMARY KEY(`id`)
);

DROP TABLE IF EXISTS `comment`;

CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `id_user` int NOT NULL,
    PRIMARY KEY(`id`)
);

INSERT INTO comment (title, description, category, url, id_user)
VALUE ('pull bleu','très beau je conseil', 'Fashion & Beauty', 'dfg/fgh/:iuh', 1);
INSERT INTO comment (title, description, category, url, id_user)
VALUE ('Figaro','good', 'News', 'dfg/fgh/:thj', 2);
INSERT INTO comment (title, description, category, url, id_user)
VALUE ('disney','ouhou', 'Entertainment', 'dfg/fgh/:irh', 1);
INSERT INTO comment (title, description, category, url, id_user)
VALUE ('boxe','good', 'Sport', 'dfg/fgh/:dfd', 2);
INSERT INTO comment (title, description, category, url, id_user)
VALUE ('ordi','très beau je conseil', 'Technology', 'dfg/fgh/:plm', 1);
INSERT INTO comment (title, description, category, url, id_user)
VALUE ('poire','good', 'Health & Welleness', 'dfg/fgh/:thj', 2);
INSERT INTO comment (title, description, category, url, id_user)
VALUE ('Bali','ouhou', 'Travel', 'dfg/fgh/:irh', 1);
INSERT INTO comment (title, description, category, url, id_user)
VALUE ('Picasso','good', 'Art & Culture', 'dfg/fgh/:dfd', 2);
INSERT INTO comment (title, description, category, url, id_user)
VALUE ('Arbre','good', 'Nature', 'dfg/fgh/:dfd', 2);

INSERT INTO user (name, email, password, phone, bday, country)
VALUE ('Gerard','GG@gg', 'erncj', 0756875654, '1/11/98', 'France');
INSERT INTO user (name, email, password, phone, bday, country)
VALUE ('Amandine','AA@aa', 'htgrf', 0656875654, '1/11/97', 'Allemagne');