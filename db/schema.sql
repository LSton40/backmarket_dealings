-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

-- USE ecommerce_db;

-- CREATE TABLE category(
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     category_name VARCHAR(100) NOT NULL
-- );

-- CREATE TABLE product(
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     product_name VARCHAR(100) NOT NULL,
--     price DECIMAL NOT NULL,
--     stock INT NOT NULL DEFAULT 10,
--     category_id INT,
--     FOREIGN KEY (category_id) REFERENCES Category (id)
-- );

-- CREATE TABLE tag(
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     tag_name VARCHAR(100) NOT NULL
-- );

-- CREATE TABLE product_tag(
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     product_id INT,
--     tag_id INT,
<<<<<<< HEAD
--     FOREIGN KEY (product_id) REFERENCES Product (id),
--     FOREIGN KEY (tag_id) REFERENCES Tag (id)
=======
--     FOREIGN KEY (product_id) REFERENCES product (id),
--     FOREIGN KEY (tag_id) REFERENCES tag (id)
>>>>>>> a24cf6d6ffab7c3372c9c7243ed602580f19475d
-- );

