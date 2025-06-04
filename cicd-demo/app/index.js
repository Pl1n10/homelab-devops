const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_, res) => res.send('CICD Demo OK 🚀'));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
# trigger
