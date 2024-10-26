// src/config/loadCSV.ts
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import pool from './db'; // Assuming db.ts exports a pool

const csvFilePath = path.join(__dirname, '../../db/dataset.csv');

export async function loadCSVData() {
  try {
    const products: any[] = []; // Define type if you have a Product interface

    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on('data', (row: any) => {
        products.push(row);
      })
      .on('end', async () => {
        for (const product of products) {
          await pool.query(
            'INSERT INTO products (name, description, price, quantity) VALUES ($1, $2, $3, $4) ON CONFLICT DO NOTHING',
            [product.name, product.description, product.price, product.quantity]
          );
        }
        console.log('CSV data loaded into database.');
      });
  } catch (error) {
    console.error('Error loading CSV data:', error);
  }
}
