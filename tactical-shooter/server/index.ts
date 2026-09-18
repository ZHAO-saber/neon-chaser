/**
 * Colyseus 服务器入口
 * 监听 2567 端口，托管 GameRoom
 */
import Colyseus from 'colyseus';
import { createServer } from 'http';
import express from 'express';
import { GameRoom } from './GameRoom';

const { Server } = Colyseus as any;

const app = express();
app.use(express.json());

// CORS 允许前端连接
app.use((_req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const httpServer = createServer(app);
const gameServer = new Server({ server: httpServer });

gameServer.define('game', GameRoom);

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 2567;

httpServer.listen(PORT, () => {
  console.log(`[Colyseus] Tactical Shooter server running on port ${PORT}`);
});
