import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';

// =================================================//
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ================================================//

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = 9000;

// ==============================================================//
// make frontend folder to static :
app.use(express.static(path.join(__dirname, '/../frontend/build')));

// also make the index.html as starting file:
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../frontend/build/index.html'));
});

// ===============================================================//
app.listen(PORT, () => {
    console.log(`server is running at: http://localhost:${PORT}`)
})


