const { Server } = require('socket.io');
const ChatController = require('./controllers/sockets/ChatController');
const NotificationController = require('./controllers/sockets/NotificationController');

const cors = {
  origin: '*',
};

module.exports.createConnection = (httpServer) => {
  const io = new Server(httpServer, { cors });
  NotificationController.connect('/notifications', io);
  ChatController.connect('/chat', io);
};

module.exports.getChatController = () => {
  return ChatController;
};

module.exports.getNotificationController = () => {
  return NotificationController;
};