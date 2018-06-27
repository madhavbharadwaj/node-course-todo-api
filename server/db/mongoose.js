var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');
//mongoose.connect("mongodb://madhavcreative:44creative88@ds147390.mlab.com:47390/todoapp");
mongoose.connect("mongodb://nodetodo:nodetodo1@ds119161.mlab.com:19161/todoapp");

module.exports = {mongoose};
