import express from 'express';
import { env } from './config/env';

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
    res.json({ status: 'ok', environment: env.NODE_ENV });
});

export default app;