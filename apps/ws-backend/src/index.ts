import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

// Log when the server itself starts
console.log("🚀 WebSocket server is running on ws://localhost:8080");

wss.on('connection', function connection(ws) {
    console.log('🔗 Client connected');

    ws.on('message', function message(data) {
        console.log("📩 Received message:", data.toString());
        ws.send('pong');
    });
});
