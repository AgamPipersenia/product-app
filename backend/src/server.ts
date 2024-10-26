
// // src/server.ts
// import app from './app';

// // Start the server
// const port = process.env.PORT || 5000;

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

import app from './app';
import { loadCSVData } from './config/loadCSV';

const port = process.env.PORT || 5000;

// Start the server and load CSV data
app.listen(port, async () => {
  console.log(`Server running on port ${port}`);

  try {
    await loadCSVData(); // Load CSV data on server start
  } catch (error) {
    console.error('Error loading CSV data on startup:', error);
  }
});