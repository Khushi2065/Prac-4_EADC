const express = require('express'); 
const path = require('path'); 
const port= process.env.port || 3000 
const app = express()

app.use(express.static(path.join(__dirname+'/public')))
const _dirname = path.dirname(__filename);
// Serve static files from current folder
app.use(express.static(_dirname));
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});