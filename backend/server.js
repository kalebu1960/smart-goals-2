import express from 'express';
import cors from 'cors';
import jsonServer from 'json-server';

const app = express();
const jsonServerRouter = jsonServer.router('db.json');
const jsonServerMiddlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3001;

// CORS configuration for production
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://your-app.vercel.app',
    /\.vercel\.app$/
  ],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// API routes
app.use('/api', jsonServerMiddlewares, jsonServerRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
});