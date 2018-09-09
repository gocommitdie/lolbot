var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
client.on('message', message => {

if the message includes the string "this is so sad", 	bot.sendMessage({
                    to: channelID,
                    message: 'alexa play despacito'.


});
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !expand
            case 'expand':
                bot.sendMessage({
                    to: channelID,
                    message: 'dong'
                });
            break;
            // Just add any case commands if you want to..
if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !expand
            case 'mcschoolface':
                bot.sendMessage({
                    to: channelID,
                 if (fromID === me && text.includes("!say") ) {
    bot.sendMessage({ to: channel, message: txt.replace('!mcschoolface ','') });
}
                });
            break;
         }
     }
});

client.login(process.env.BOT_TOKEN);
