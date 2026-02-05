import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const port = process.env.PORT || 3000;
const app = express();

// Fix __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(__filename);

// Serve static files from current folder
app.use(express.static(_dirname));

  
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});