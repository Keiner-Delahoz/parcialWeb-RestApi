CREATE TABLE avion (
   id INT(10) PRIMARY KEY AUTO_INCREMENT,
   numPlaca VARCHAR(20) NOT NULL,
   color VARCHAR(20) NOT NULL,
   marca VARCHAR(20) NOT NULL,
   modelo VARCHAR(20) NOT NULL,
   capacidadMax INT(20) NOT NULL,
   numeroMotores INT(10) NOT NULL,
   maximaPresion INT(20) NOT NULL
);


INSERT INTO avion VALUES (1,'AAA123','azul','abcd','12as12',20,6,2000);