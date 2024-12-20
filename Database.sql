CREATE TABLE BeeFood;

CREATE TABLE roles (
	name VARCHAR(20) PRIMARY KEY
);

CREATE TABLE users (
	email VARCHAR(255) PRIMARY KEY,
	password VARCHAR(100) NOT NULL,
	address VARCHAR(255) NOT NULL,
	phone VARCHAR(15) NOT NULL,
	fullname VARCHAR(200) NOT NULL,
	accessFailedCount INT DEFAULT 5, --Số lần nhập sai
	lockoutEnd BIGINT DEFAULT 0, --Thời gian khóa tài khoản
	photo TEXT DEFAULT 'user.jpg',
	status BOOLEAN DEFAULT TRUE --Enable, Disable
);

CREATE TABLE authorities (
	id BIGSERIAL PRIMARY KEY,
	users VARCHAR(255) REFERENCES users(email) ON DELETE CASCADE ON UPDATE CASCADE,
	roles VARCHAR(20) REFERENCES roles(name) ON DELETE CASCADE ON UPDATE CASCADE
);

-----------------------------------------------------------------------------------------

CREATE TABLE categories (
 	name VARCHAR(15) PRIMARY KEY
);

CREATE TABLE foods (
	id BIGSERIAL PRIMARY KEY,
	name VARCHAR(200) NOT NULL UNIQUE,
	price DECIMAL(10,0) DEFAULT 0 NOT NULL,
	quantity INT DEFAULT 1 NOT NULL,
	photo TEXT NOT NULL,
	date DATE DEFAULT CURRENT_DATE,
	description TEXT NOT NULL,
	status BOOLEAN NOT NULL, --Enable, Disable
	categories VARCHAR(15) REFERENCES categories(name)
);

-----------------------------------------------------------------------------------------

CREATE TABLE reviews (
	id BIGSERIAL PRIMARY KEY,
	comment TEXT,
	stars SMALLINT DEFAULT 0,
	users VARCHAR(255) REFERENCES users(email) ON DELETE CASCADE ON UPDATE CASCADE,
	foods BIGINT REFERENCES foods(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE discounts (
	id BIGSERIAL PRIMARY KEY,
	discount INT DEFAULT 0,
	expiryDate TIMESTAMP NOT NULL
);

CREATE TABLE foodDiscounts (
	foods BIGINT REFERENCES foods(id) ON DELETE CASCADE ON UPDATE CASCADE,
	discounts BIGINT REFERENCES discounts(id) ON DELETE CASCADE ON UPDATE CASCADE,
	PRIMARY KEY(foods, discounts)
);

-----------------------------------------------------------------------------------------

CREATE TABLE carts (
	id BIGSERIAL PRIMARY KEY,
	name VARCHAR(200) NOT NULL,
	price DECIMAL(10, 0) NOT NULL,
	quantity INT DEFAULT 1 NOT NULL,
	total DECIMAL (10,0) NOT NULL,
	photo TEXT NOT NULL,
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	users VARCHAR(255) REFERENCES users(email) ON DELETE CASCADE ON UPDATE CASCADE,
	foods BIGINT REFERENCES foods(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE payments (
	id BIGSERIAL PRIMARY KEY,
	fullname VARCHAR(200) NOT NULL,
	email VARCHAR(255) NOT NULL,
	phone VARCHAR(15) NOT NULL,
	address VARCHAR(255) NOT NULL,
	amount DECIMAL(10,0) NOT NULL,
	method VARCHAR(10) NOT NULL, --Cash, Credit
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	users VARCHAR(255) REFERENCES users(email) ON DELETE CASCADE ON UPDATE CASCADE
);

-----------------------------------------------------------------------------------------

CREATE TABLE orders (
	id BIGSERIAL PRIMARY KEY,
	total DECIMAL(10,0) NOT NULL,
	status VARCHAR(20) DEFAULT 'Pending', --Pending, Completed, Canceled
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	users VARCHAR(255) REFERENCES users(email) ON DELETE CASCADE ON UPDATE CASCADE,
	payments BIGINT REFERENCES payments(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE orderDetails (
	id BIGSERIAL PRIMARY KEY,
	quantity INT NOT NULL,
	price DECIMAL(10,0) NOT NULL,
	orders BIGINT REFERENCES orders(id) ON DELETE CASCADE ON UPDATE CASCADE,
	foods BIGINT REFERENCES foods(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-----------------------------------------------------------------------------------------

VACUUM ANALYZE;

DROP TABLE IF EXISTS orderDetails CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS payments CASCADE;
DROP TABLE IF EXISTS carts CASCADE;
DROP TABLE IF EXISTS foodDiscounts CASCADE;
DROP TABLE IF EXISTS discounts CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;
DROP TABLE IF EXISTS foods CASCADE;
DROP TABLE IF EXISTS authorities CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS roles CASCADE;
DROP TABLE IF EXISTS categories CASCADE;


