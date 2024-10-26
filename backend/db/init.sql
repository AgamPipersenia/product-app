-- init.sql
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  quantity INTEGER NOT NULL
);

-- Optionally, insert some initial data
COPY products (id, name, description, price, quantity)
FROM 'dataset.csv' DELIMITER ',' CSV HEADER;
