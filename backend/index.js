import express from 'express';

import goalsRoutes from './routes/goalsRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';

const app = express();
const PORT = 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

//New way to process POST requests. bodyParser is deprecated:
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Own errorHandler will be used instead of Express' default
app.use(errorHandler);

//Home page
app.get('/', (req, res) => {
    res.status(200).json({message: "Welcome!"});
})

//Requests pointing to /api/goals
app.use('/api/goals', goalsRoutes);