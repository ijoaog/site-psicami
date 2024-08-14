const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'src/public')));

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
