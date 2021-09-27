/* Copyright (C) Janith sadanuwan 2021 .
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

kingbot-Janithsadanuwan
*/

const fs = require("fs");
const path = require("path");
const events = require("./events");
const Kingbot = require('Kingbot-public-2');
const chalk = require('chalk');
const axios = require('axios');
const config = require('./config');
const Heroku = require('heroku-client');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const {Message, StringSession, Image, Video} = require('./Kingbot');
const { DataTypes } = require('sequelize');
const { GreetingsDB, getMessage } = require("./plugins/sql/greetings");
const got = require('got');

const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});

let baseURI = '/apps/' + config.HEROKU.APP_NAME;

const KingbotiDB = config.DATABASE.define('Kingbot', {
    info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

fs.readdirSync('./plugins/sql/').forEach(plugin => {
    if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/sql/' + plugin);
    }
});

const plugindb = require('./plugins/sql/plugin');

String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
    });
};

if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

async function kingBot () {
    await config.DATABASE.sync();
    var StrSes_Db = await KingbotDB.findAll({
        where: {
          info: 'StringSession'
        }
    });
    

const KingbotCon = new WAConnection();
const Session = new StringSession();
KingbotCon.version = [2, 2126, 14]
setInterval(async () => { 
    var getGMTh = new Date().getHours()
    var getGMTm = new Date().getMinutes()
        await axios.get('https://gist.github.com/janith12345sa/49ee90f859f27f99af516d4ffc0ad2bf').then(async (ann) => {
            const { infoen, infosi} = ann.data.announcements          
            if (infoen !== '' && config.LANG == 'EN' || config.LANG == 'ES') {
                while (getGMTh == 08 && getGMTm == 00) { 
                    return kingbotCon.sendMessage(kingbotCon.user.jid, '[ ```🔔kingbot Announcements🔔``` ]\n\n' + infoen.replace('{user}', kingbotCon.user.name).replace('{wa_version}', kingbotCon.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', kingbotCon.user.phone.os_version).replace('{device_model}', kingbotCon.user.phone.device_model).replace('{device_brand}', kingbotCon.user.phone.device_manufacturer), MessageType.text) 
                }
            }
            else if (infosi !== '' && config.LANG == 'SI') {
                while (getGMTh == 08 && getGMTm == 00) { 
                    return kingbotCon.sendMessage(kingbotCon.user.jid, '[ ```🔔king bot නිවේදන🔔``` ]\n\n' + infosi.replace('{user}', kingbotCon.user.name).replace('{wa_version}', kingbotCon.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', klingbotCon.user.phone.os_version).replace('{device_model}', kingbotCon.user.phone.device_model).replace('{device_brand}', kingbotCon.user.phone.device_manufacturer), MessageType.text) 
                }
            }
        })
}, 50000);

setInterval(async () => { 
    var getGMTh = new Date().getHours()
    var getGMTm = new Date().getMinutes()
        await axios.get('https://gist.github.com/janith12345sa/49ee90f859f27f99af516d4ffc0ad2bf').then(async (ann) => {
            const { infoen, infosi} = ann.data.announcements          
            if (infoen !== '' && config.LANG == 'EN' || config.LANG == 'ES') {
                while (getGMTh == 18 && getGMTm == 00) { 
                    return kingbotCon.sendMessage(kingbotCon.user.jid, '[ ```🔔kingbot Announcements🔔``` ]\n\n' + infoen.replace('{user}', kingbotCon.user.name).replace('{wa_version}', kingbotCon.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', kngbotCon.user.phone.os_version).replace('{device_model}', kingbotCon.user.phone.device_model).replace('{device_brand}', kingbotCon.user.phone.device_manufacturer), MessageType.text) 
                }
            }
            else if (infosi !== '' && config.LANG == 'SI') {
                while (getGMTh == 08 && getGMTm == 00) { 
                    return kingbotCon.sendMessage(kingbotCon.user.jid, '[ ```🔔king bot නිවේදන🔔``` ]\n\n' + infosi.replace('{user}', kingbotCon.user.name).replace('{wa_version}', kingbotCon.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', klingbotCon.user.phone.os_version).replace('{device_model}', kingbotCon.user.phone.device_model).replace('{device_brand}', kingbotCon.user.phone.device_manufacturer), MessageType.text) 
                }
            }
        })
}, 50000);

setInterval(async () => { 
    if (config.AUTO_BIO == 'true') {
        var tz_bio = await Kingbot.timezone(KingbotCon.user.jid)
        var date = await Kingbot.datebio(config.LANG)
        const biography = '📅 ' + date + '\n⌚ ' + tz_bio + '    🎖️ ' + config.CAP
        await KingbotCon.setStatus(biography)
    }
}, 7890);

/*
// -------------- verify system--------------
if (/\[(\W*)\]/.test(config.HANDLERS)) {
    HANDLER = config.HANDLERS.match(/\[(\W*)\]/)[1][0];
} else {
    HANDLER = '.';
}
    setInterval(async () => { 
        var getGMTh = new Date().getHours()
        var getGMTm = new Date().getMinutes()
        await axios.get('https://gist.github.com/janith12345sa/49ee90f859f27f99af516d4ffc0ad2bf').then(async (ann) => {
            const { verify} = ann.data.announcements          
            if (verify !== '' && config.LANG == 'EN') {
                while (getGMTh == 20 && getGMTm == 55) { 
                    return KingbotCon.sendMessage(KingbotCon.user.jid, HANDLER + verify.replace('{user}', KingbotCon.user.name).replace('{wa_version}', KingbotCon.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', KingbotCon.user.phone.os_version).replace('{device_model}', KingbotCon.user.phone.device_model).replace('{device_brand}', KingbotCon.user.phone.device_manufacturer), MessageType.text) 
                }
            }
            else if (verify !== '' && config.LANG == 'SI') {
                while (getGMTh == 20 && getGMTm == 55) { 
                    return KingbotCon.sendMessage(KingbotCon.user.jid, HANDLER + verify.replace('{user}', KingbotCon.user.name).replace('{wa_version}', KingbotCon.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', KingbotCon.user.phone.os_version).replace('{device_model}', KingbotCon.user.phone.device_model).replace('{device_brand}', KingbotCon.user.phone.device_manufacturer), MessageType.text) 
                }
            }
        })
    }, 50000);

    setInterval(async () => { 
        var getGMTh = new Date().getHours()
        var getGMTm = new Date().getMinutes()
        await axios.get('https://gist.github.com/janith12345sa/49ee90f859f27f99af516d4ffc0ad2bf/').then(async (ann) => {
            const { verify} = ann.data.announcements          
            if (verify !== '' && config.LANG == 'EN') {
                while (getGMTh == 04 && getGMTm == 55) { 
                    return KingbotCon.sendMessage(KingbotCon.user.jid, HANDLER + verify.replace('{user}', KingbotCon.user.name).replace('{wa_version}', KingbotCon.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', KingbotCon.user.phone.os_version).replace('{device_model}', KingbotCon.user.phone.device_model).replace('{device_brand}', KingbotCon.user.phone.device_manufacturer), MessageType.text) 
                }
            }
            else if (verify !== '' && config.LANG == 'SI') {
                while (getGMTh == 04 && getGMTm == 55) { 
                    return KingbotCon.sendMessage(KingbotCon.user.jid, HANDLER + verify.replace('{user}', KingbotCon.user.name).replace('{wa_version}', KingbotCon.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', KingbotCon.user.phone.os_version).replace('{device_model}', KingbotCon.user.phone.device_model).replace('{device_brand}', KingbotCon.user.phone.device_manufacturer), MessageType.text) 
                }
            }
        })
    }, 50000);

    setInterval(async () => { 
        var getGMTh = new Date().getHours()
        var getGMTm = new Date().getMinutes()
        await axios.get('https://gist.github.com/janith12345sa/49ee90f859f27f99af516d4ffc0ad2bf').then(async (ann) => {
            const { verify} = ann.data.announcements          
            if (verify !== '' && config.LANG == 'EN') {
                while (getGMTh == 12 && getGMTm == 55) { 
                    return KingbotCon.sendMessage(KingbotCon.user.jid, HANDLER + verify.replace('{user}', KingbotCon.user.name).replace('{wa_version}', KingbotCon.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', KingbotCon.user.phone.os_version).replace('{device_model}', KingbotCon.user.phone.device_model).replace('{device_brand}', KingbotCon.user.phone.device_manufacturer), MessageType.text) 
                }
            }
            else if (verify !== '' && config.LANG == 'SI') {
                while (getGMTh == 12 && getGMTm == 55) { 
                    return KingbotCon.sendMessage(KingbotCon.user.jid, HANDLER + verify.replace('{user}', KingbotCon.user.name).replace('{wa_version}', KingbotCon.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', KingbotCon.user.phone.os_version).replace('{device_model}', KingbotCon.user.phone.device_model).replace('{device_brand}', KingbotCon.user.phone.device_manufacturer), MessageType.text) 
                }
            }
        })
    }, 50000);

// --------------End of verify system coding--------------
*/

// ======================king_bot_Logger=======================
KingbotCon.logger.level = config.DEBUG ? 'debug' : 'warn';
var nodb;

    if (StrSes_Db.length < 1) {
        nodb = true;
        KingbotCon.loadAuthInfo(Session.deCrypt(config.SESSION)); 
    } else {
        KingbotCon.loadAuthInfo(Session.deCrypt(StrSes_Db[0].dataValues.value));
    }

if (config.LANG == 'EN' || config.LANG == 'ES') {
    KingbotCon.on ('credentials-updated', async () => {
        console.log(
            chalk.blueBright.italic('✅ Login details updated!')
        );

        const authInfo = KingbotCon.base64EncodedAuthInfo();
        if (StrSes_Db.length < 1) {
            await KingbotDB.create({ info: "StringSession", value: Session.createStringSession(authInfo) });
        } else {
            await StrSes_Db[0].update({ value: Session.createStringSession(authInfo) });
        }
    })}
else if (config.LANG == 'SI') {
    KingbotCon.on ('credentials-updated', async () => {
        console.log(
            chalk.blueBright.italic('✅ පිවිසුම් තොරතුරු update කරන ලදි!')
        );

        const authInfo = KingbotCon.base64EncodedAuthInfo();
        if (StrSes_Db.length < 1) {
            await KingbotDB.create({ info: "StringSession", value: Session.createStringSession(authInfo) });
        } else {
            await StrSes_Db[0].update({ value: Session.createStringSession(authInfo) });
        }
    })
}

if (config.LANG == 'EN' || config.LANG == 'ES') {
    KingbotCon.on('connecting', async () => {
        console.log(`${chalk.green.bold('Queen')}${chalk.blue.bold('Amdi')}
    ${chalk.white.bold('Version:')} ${chalk.red.bold(config.VERSION)}

    ${chalk.blue.italic('ℹ️ Conecting to WhatsApp... Please wait...')}`);
        });
}
else if (config.LANG == 'SI') {
    KingbotCon.on('connecting', async () => {
        console.log(`${chalk.green.bold('Queen')}${chalk.blue.bold('Amdi')}
    ${chalk.white.bold('Version:')} ${chalk.red.bold(config.VERSION)}

    ${chalk.blue.italic('ℹ️ WhatsApp වෙත සම්බන්ධ වෙමින් පවතී... කරුණාකර රැඳී සිටින්න.')}`);
        });
}

if (config.LANG == 'EN' || config.LANG == 'ES') {
    KingbotCon.on('open', async () => {
        console.log(
            chalk.green.bold('✅ Successfully logged-in!')
        );

        console.log(
            chalk.blueBright.italic('⬇️ Installing external plugins...')
        );

        var plugins = await plugindb.PluginDB.findAll();
        plugins.map(async (plugin) => {
            if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
                console.log(plugin.dataValues.name);
                var response = await got(plugin.dataValues.url);
                if (response.statusCode == 200) {
                    fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
                    require('./plugins/' + plugin.dataValues.name + '.js');
                }     
            }
        });

        console.log(
            chalk.blueBright.italic('⬇️  Installing plugins...')
        );

        console.log(
            chalk.green.bold('✅ Plugins installed! Your bot successfully enabled.')
        );

        fs.readdirSync('./plugins').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                require('./plugins/' + plugin);
            }
        });

        console.log(
            chalk.green.bold('🛡️  Sheild Activated!')
        );
        await new Promise(r => setTimeout(r, 1100));

if (config.WORKTYPE == 'public') {
    if (KingbotCon.user.jid === '@s.whatsapp.net') {

        await KingbotCon.sendMessage(KingbotCon.user.jid, '```🛡️ Blacklist Detected!``` \n```User:```  \n```Reason:``` ', MessageType.text)

        await new Promise(r => setTimeout(r, 1800));

        console.log('🛡️ Blacklist Detected 🛡️')
        await heroku.get(baseURI + '/formation').then(async (formation) => {
        forID = formation[0].id;
        await heroku.patch(baseURI + '/formation/' + forID, {
            body: {
                quantity: 0
            }
        });
        })
    }
    else {
        await KingbotCon.sendMessage(KingbotCon.user.jid, '*kingbot started in Public Mode😈*\n\n_Please do not try any commands here. This is your log number._\n_You can try commands anywhere else :)_\n\n_Type_ *.panel* _to get your full command list._\n\n_Your bot in Public Mode. To change, use_ ```.setvar WORK_TYPE=private``` _command._\n\n*You can check our website for new features : https://www.amdaniwasa.com/*\n\n*Comment here to request new features:*\nhttps://amdaniwasa.com/index-en.html#comments\n\n*Updates:* https://gist.github.com/BlackAmda/890b6b31fcb8d376d6a68afcb7359324\n\n *Thank you for using  💌*', MessageType.text);
    }
}
else if (config.WORKTYPE == 'private') {
    if (KingbotCon.user.jid === '@s.whatsapp.net') {

        await KingbotCon.sendMessage(KingbotCon.user.jid, '```🛡️ Blacklist Detected!``` \n```User:```  \n```Reason:``` ', MessageType.text)
   
        await new Promise(r => setTimeout(r, 1800));

        console.log('🛡️ Blacklist Detected 🛡️')
        await heroku.get(baseURI + '/formation').then(async (formation) => {
            forID = formation[0].id;
            await heroku.patch(baseURI + '/formation/' + forID, {
                body: {
                    quantity: 0
                }
            });
        })
    }
    else {
        await KingbotCon.sendMessage(KingbotCon.user.jid, '*kingbot started in Private Mode😈*\n\n_Please do not try any commands here. This is your log number._\n_You can try commands anywhere else :)_\n\n_Type_ *.panel* _to get your full command list._\n\n_Your bot in Private Mode. To change, use_ ```.setvar WORK_TYPE=public``` _command._\n\n*You can check our website for new features : https://www.amdaniwasa.com/*\n\n*Comment here to request new features:*\nhttps://amdaniwasa.com/index-en.html#comments\n\n*Updates:* https://gist.github.com/BlackAmda/890b6b31fcb8d376d6a68afcb7359324\n\n *Thank you for using  💌*', MessageType.text);
    }
}
    else {
        return console.log('Wrong WORK_TYPE key! Please use “private” or “public”')
    }
    });
}
else if (config.LANG == 'SI') {
    KingbotCon.on('open', async () => {
        console.log(
            chalk.green.bold('✅ පුරනය වීම සාර්ථකයි!')
        );

        console.log(
            chalk.blueBright.italic('⬇️ බාහිර plugins ස්ථාපනය කිරීම...')
        );

        var plugins = await plugindb.PluginDB.findAll();
        plugins.map(async (plugin) => {
            if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
                console.log(plugin.dataValues.name);
                var response = await got(plugin.dataValues.url);
                if (response.statusCode == 200) {
                    fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
                    require('./plugins/' + plugin.dataValues.name + '.js');
                }     
            }
        });

        console.log(
            chalk.blueBright.italic('⬇️  Plugins ස්ථාපනය කිරීම...')
        );

        console.log(
            chalk.green.bold('✅ Plugins ස්ථාපනය කර ඇත! Bot දැන් ඔබට භාවිතා කළ හැකිය.')
        );

        fs.readdirSync('./plugins').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                require('./plugins/' + plugin);
            }
        });

        console.log(
            chalk.green.bold('🛡️  Sheild Activated!.')
        );
        await new Promise(r => setTimeout(r, 1100));

        if (config.WORKTYPE == 'public') {

                if (KingbotCon.user.jid === '@s.whatsapp.net') {

                    await KingbotCon.sendMessage(KingbotCon.user.jid, '```🛡️ Blacklist අනාවරණය විය!``` \n```පරිශීලක:``` \n```හේතුව:``` ', MessageType.text)

                    await new Promise(r => setTimeout(r, 1700));

                    console.log('🛡️ Blacklist Detected 🛡️')

                    await heroku.get(baseURI + '/formation').then(async (formation) => {
                        forID = formation[0].id;
                        await heroku.patch(baseURI + '/formation/' + forID, {
                            body: {
                                quantity: 0
                            }
                        });
                    })
                }
                else {
                    await KingbotCon.sendMessage(KingbotCon.user.jid, '*Queen ඇම්ඩි public ආකාරයට ක්‍රියාකිරිම ආරම්භ විය.😈*\n\n_කරුණාකර මෙහි command උත්සාහ නොකරන්න. මෙය ඔබගේ ලොග් අංකයයි._\n_ඔබට ඕනෑම චැට් එකක විධාන උත්සාහ කළ හැකිය :)_\n\n_ඔබේ command list එක ලබාගැනීමට_ *.panel* _command එක භාවිතා කරන්න._\n\n_ඔබේ bot public ක්‍රියාත්මක වේ. වෙනස් කිරීමට_ ```.setvar WORK_TYPE=private``` _විධානය භාවිතා කරන්න._\n\n*නව විශේෂාංග සඳහා ඔබට අපගේ වෙබ් අඩවිය පරීක්‍ෂා කළ හැකිය : https://bit.ly/3EWHv8v*\n\n* සඳහා එකතු කළ හැකි නව අදහස් මෙහි comment කරන්න:*\nhttps://bit.ly/3EWHv8vn\n*Updates:* https://gist.github.com/BlackAmda/890b6b31fcb8d376d6a68afcb7359324\n\n *Queen ඇම්ඩි භාවිතා කිරීම ගැන ස්තූතියි❤️*', MessageType.text);
                }
            }
        
        else if (config.WORKTYPE == 'private') {

                if (KingbotCon.user.jid === '@s.whatsapp.net') {

                    await KingbotCon.sendMessage(KingbotCon.user.jid, '```🛡️ Blacklist Detected!``` \n ```පරිශීලක:``` \n```හේතුව:``` ', MessageType.text)

                    await new Promise(r => setTimeout(r, 1800));

                    console.log('🛡️ Blacklist Detected 🛡️')
                    await heroku.get(baseURI + '/formation').then(async (formation) => {
                        forID = formation[0].id;
                        await heroku.patch(baseURI + '/formation/' + forID, {
                            body: {
                                quantity: 0
                            }
                        });
                    })
                }
                else {

                await KingbotCon.sendMessage(KingbotCon.user.jid, '*Queen ඇම්ඩි private ආකාරයට ක්‍රියාකිරිම ආරම්භ විය.😈*\n\n_කරුණාකර මෙහි command උත්සාහ නොකරන්න. මෙය ඔබගේ ලොග් අංකයයි._\n_ඔබට ඕනෑම චැට් එකක විධාන උත්සාහ කළ හැකිය :)_\n\n_ඔබේ command list එක ලබාගැනීමට_ *.panel* _command එක භාවිතා කරන්න._\n\n_ඔබේ bot private ක්‍රියාත්මක වේ. වෙනස් කිරීමට_ ```.setvar WORK_TYPE=public``` _විධානය භාවිතා කරන්න._\n\n*නව විශේෂාංග සඳහා ඔබට අපගේ වෙබ් අඩවිය පරීක්‍ෂා කළ හැකිය : https://www.amdaniwasa.com/*\n\n* සඳහා එකතු කළ හැකි නව අදහස් මෙහි comment කරන්න:*\nhttps://amdaniwasa.com/index-si.html#comments\n\n*Updates:* https://gist.github.com/BlackAmda/890b6b31fcb8d376d6a68afcb7359324\n\n *Queen ඇම්ඩි භාවිතා කිරීම ගැන ස්තූතියි ❤️*', MessageType.text);
                }
            }
        
        else {
            return console.log('වැරදි WORK_TYPE එකකි! “private” හෝ “public” භාවිතා කරන්න.')
        }
    });
}
// ==============================================================

    KingbotCon.on('message-new', async msg => {
        if (msg.key && msg.key.remoteJid == 'status@broadcast') return;

        if (config.NO_ONLINE) {
            await KingbotCon.updatePresence(msg.key.remoteJid, Presence.unavailable);
        }

        if (msg.messageStubType === 32 || msg.messageStubType === 28) {
            // ===========WELCOME_LOGO=========BYE_LOGO=========================
            var blogo = await axios.get(config.BYE_LOGO, {responseType: 'arraybuffer'})
            var gb = await getMessage(msg.key.remoteJid, 'goodbye')
            
            if (gb !== false) {
                await KingbotCon.sendMessage(msg.key.remoteJid, Buffer.from (blogo.data), MessageType.image, {mimetype: Mimetype.png, caption: gb.message});
            }
            return;
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {

            var wlogo = await axios.get(config.WELCOME_LOGO, {responseType: 'arraybuffer'})
            var gb = await getMessage(msg.key.remoteJid)
            
            if (gb !== false) {
                await KingbotCon.sendMessage(msg.key.remoteJid, Buffer.from (wlogo.data), MessageType.image, {mimetype: Mimetype.png, caption: gb.message});
            }
            return;
        }
        // ====================================================================

        // ==================== Blocked Chats ====================
        if (config.BLOCKCHAT !== false) {     
            var abc = config.BLOCKCHAT.split(',');                            
            if(msg.key.remoteJid.includes('-') ? abc.includes(msg.key.remoteJid.split('@')[0]) : abc.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.AMDANIWASA == '393475528094-1415817281') {     
            var sup = config.AMDANIWASA.split(',');                            
            if(msg.key.remoteJid.includes('-') ? sup.includes(msg.key.remoteJid.split('@')[0]) : sup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.SUPPORT1 == '94757405652-1631633729') {     
            var tsup = config.SUPPORT1.split(',');                            
            if(msg.key.remoteJid.includes('-') ? tsup.includes(msg.key.remoteJid.split('@')[0]) : tsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.SUPPORT2 == '94757405652-1631905677') {     
            var nsup = config.SUPPORT2.split(',');                            
            if(msg.key.remoteJid.includes('-') ? nsup.includes(msg.key.remoteJid.split('@')[0]) : nsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.NAGRP == '972542559113-1376904403') {     
            var msup = config.NAGRP.split(',');                            
            if(msg.key.remoteJid.includes('-') ? msup.includes(msg.key.remoteJid.split('@')[0]) : msup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.RRBSEW == '94785435462-1625490851') {     
            var asup = config.RRBSEW.split(',');                            
            if(msg.key.remoteJid.includes('-') ? asup.includes(msg.key.remoteJid.split('@')[0]) : asup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.RRDSEW == '94776785357-1626432386') {     
            var bsup = config.RRDSEW.split(',');                            
            if(msg.key.remoteJid.includes('-') ? bsup.includes(msg.key.remoteJid.split('@')[0]) : bsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.SEWSUPPORT == '94785435462-1627812354') {     
            var csup = config.SEWSUPPORT.split(',');                            
            if(msg.key.remoteJid.includes('-') ? csup.includes(msg.key.remoteJid.split('@')[0]) : csup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.SEWSUPPORT2 == '94785435462-1628835469') {     
            var dsup = config.SEWSUPPORT2.split(',');                            
            if(msg.key.remoteJid.includes('-') ? dsup.includes(msg.key.remoteJid.split('@')[0]) : dsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.SEWSUPPORT3 == '94785435462-1628835633') {     
            var esup = config.SEWSUPPORT3.split(',');                            
            if(msg.key.remoteJid.includes('-') ? esup.includes(msg.key.remoteJid.split('@')[0]) : esup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        // ==================== End Blocked Chats ====================
        
        events.commands.map(
            async (command) =>  {
                if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) {
                    var text_msg = msg.message.imageMessage.caption;
                } else if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) {
                    var text_msg = msg.message.videoMessage.caption;
                } else if (msg.message) {
                    var text_msg = msg.message.extendedTextMessage === null ? msg.message.conversation : msg.message.extendedTextMessage.text;
                } else {
                    var text_msg = undefined;
                }

                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                    && msg.message && msg.message.imageMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg)))) || 
                    (command.pattern !== undefined && command.pattern.test(text_msg)) || 
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    // Video
                    (command.on !== undefined && (command.on === 'video')
                    && msg.message && msg.message.videoMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg))))) {

                    let sendMsg = false;
                    var chat = KingbotCon.chats.get(msg.key.remoteJid)
                        
                    // =========================SUDO & OWN=================================
                    if ((config.SUDO !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.SUDO || config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.SUDO)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }

                    if ((config.OWN !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.OWN.includes(',') ? config.OWN.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.OWN || config.OWN.includes(',') ? config.OWN.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.OWN)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }

                    if ((config.OWN2 !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.OWN2.includes(',') ? config.OWN2.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.OWN2 || config.OWN2.includes(',') ? config.OWN2.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.OWN2)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }

                    if ((config.OWN3 !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.OWN3.includes(',') ? config.OWN3.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.OWN3 || config.OWN3.includes(',') ? config.OWN3.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.OWN3)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }

                    if ((config.OWN4 !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.OWN4.includes(',') ? config.OWN4.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.OWN4 || config.OWN4.includes(',') ? config.OWN4.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.OWN4)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                    if ((config.OWN5 !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.OWN5.includes(',') ? config.OWN5.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.OWN5 || config.OWN5.includes(',') ? config.OWN5.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.OWN5)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                    if ((config.OWN6 !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.OWN6.includes(',') ? config.OWN6.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.OWN6 || config.OWN6.includes(',') ? config.OWN6.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.OWN6)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                    // ====================================================================

                    if (sendMsg) {
                        if (config.SEND_READ && command.on === undefined) {
                            await KingbotCon.chatRead(msg.key.remoteJid);
                        }
                        
                        var match = text_msg.match(command.pattern);
                        
                        if (command.on !== undefined && (command.on === 'image' || command.on === 'photo' )
                        && msg.message.imageMessage !== null) {
                            whats = new Image(KingbotCon, msg);
                        } else if (command.on !== undefined && (command.on === 'video' )
                        && msg.message.videoMessage !== null) {
                            whats = new Video(KingbotCon, msg);
                        } else {
                            whats = new Message(KingbotCon, msg);
                        }
                        if (msg.key.fromMe) {
                            var vers = KingbotCon.user.phone.wa_version.split('.')[2]
                                if (command.deleteCommand && vers < 12) { 
                                    await whats.delete() 
                                 }
                        }

                        try {
                            await command.function(whats, match);
                        } catch (error) {
                            if (config.LANG == 'SI') {
                                await KingbotCon.sendMessage(KingbotCon.user.jid, '*-- දෝෂ වාර්තාව [] --*' + 
                                    '\n\n* Bot දෝෂයක් සිදුවී ඇත!*'+
                                    '\n\n_මෙම දෝෂ logs ඔබගේ අංකය හෝ ප්‍රති පාර්ශ්වයේ අංකය අඩංගු විය හැකිය. කරුණාකර එය සමග සැලකිලිමත් වන්න!_' +
                                    '\n\n_උදව් සඳහා ඔබට අපගේ whatsapp support කණ්ඩායමට ලිවිය හැකිය_' +
                                    '\n_Support Group Entrance:_ https://chat.whatsapp.com/JUdpgeHNTaQ31cA1FoN59G' +
                                    '\n\n_මෙම පණිවිඩය ඔබගේ අංකයට ගොස් තිබිය යුතුය (සුරකින ලද පණිවිඩ)._\n\n' +
                                    '*සිදු වූ දෝෂය:* ```' + error + '```\n\n'
                                    , MessageType.text, {detectLinks: false}
                                );
                                if (error.message.includes('URL')) {
                                    return await KingbotCon.sendMessage(KingbotCon.user.jid, '*⚜️ දෝෂ විශ්ලේෂණය [] ⚜️*' + 
                                        '\n==== ```දෝෂ නිරාකරණය කර ඇත!``` ====' +
                                        '\n\n*ප්‍රධාන දෝෂය:* _මාධ්‍යන් සකසා ගත නොහැකි වීම._' +
                                        '\n\n\n*හේතුව:* _LOG අංකය තුළ මාධ්‍ය මෙවලම් (xmedia, sticker..) භාවිතය._' +
                                        '\n\n\n*විසඳුම:* _LOG අංකය හැර ඕනෑම චැට් එකකදී ඔබට විධානයන් භාවිතා කළ හැකිය._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('split')) {
                                    return await KingbotCon.sendMessage(KingbotCon.user.jid, '*⚜️ දෝෂ විශ්ලේෂණය [] ⚜️*' + 
                                        '\n==== ```දෝෂ නිරාකරණය කර ඇත!``` ====' +
                                        '\n\n*ප්‍රධාන දෝෂය:* _Split සොයා ගත නොහැක_' +
                                        '\n\n*හේතුව:* _කණ්ඩායම් admin භාවිතා කළ හැකි විධානයන් සමහර විට split ක්‍රියාවලිය නොදකි._ ' +
                                        '\n\n*විසඳුම:* _Restart කිරීම ප්‍රමාණවත් වේ._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('Ookla')) {
                                    return await KingbotCon.sendMessage(KingbotCon.user.jid, '*⚜️ දෝෂ විශ්ලේෂණය [] ⚜️*' + 
                                        '\n==== ```දෝෂ නිරාකරණය කර ඇත!``` ====' +
                                        '\n\n*ප්‍රධාන දෝෂය:* _Ookla Server KingbotConection_' +
                                        '\n\n*හේතුව:* _සේවාදායකයට වේගවත්ම දත්ත සම්ප්‍රේෂණය කළ නොහැක._' +
                                        '\n\n*විසඳුම:* _ඔබ එය තවත් වරක් භාවිතා කළහොත් ගැටළුව විසඳනු ඇත._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('params')) {
                                    return await KingbotCon.sendMessage(KingbotCon.user.jid, '*⚜️ දෝෂ විශ්ලේෂණය [] ⚜️*' + 
                                        '\n==== ```දෝෂ නිරාකරණය කර ඇත!``` ====' +
                                        '\n\n*ප්‍රධාන දෝෂය:* _Audio Params වැරදි වීම._' +
                                        '\n\n*හේතුව:* _හෝඩියේ පිටත TTS විධානය භාවිතා කිරීම._' +
                                        '\n\n*විසඳුම:* _ඔබ අකුරු රාමුව තුළ ඇති විධානය භාවිතා කළහොත් ගැටළුව විසඳනු ඇත._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unlink')) {
                                    return await KingbotCon.sendMessage(KingbotCon.user.jid, '*⚜️ දෝෂ විශ්ලේෂණය [] ⚜️*' + 
                                        '\n========== ```දෝෂ නිරාකරණය කර ඇත``` ==========' +
                                        '\n\n*ප්‍රධාන දෝෂය:* _එවැනි folders නැත_' +
                                        '\n\n*හේතුව:* _Pluginයේ වැරදි කේතීකරණය._' +
                                        '\n\n*විසඳුම:* _කරුණාකර ඔබේ plugin කේත පරීක්‍ෂා කරන්න._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('404')) {
                                    return await KingbotCon.sendMessage(KingbotCon.user.jid, '*⚜️ දෝෂ විශ්ලේෂණය [] ⚜️*' + 
                                        '\n==== ```දෝෂ නිරාකරණය කර ඇත!``` ====' +
                                        '\n\n*ප්‍රධාන දෝෂය:* _Error 404 HTTPS_' +
                                        '\n\n*හේතුව:* _Heroku plugins යටතේ ඇති විධානයන් භාවිතා කිරීම හේතුවෙන් සේවාදායකයා සමඟ සන්නිවේදනය කිරීමට නොහැකි වීම._' +
                                        '\n\n*විසඳුම:* _ටික වේලාවක් බලා නැවත උත්සාහ කරන්න. ඔබ තවමත් දෝෂයක් ලබා ගන්නේ නම්, වෙබ් අඩවියේ ගනුදෙනුව සිදු කරන්න._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('reply.delete')) {
                                    return await KingbotCon.sendMessage(KingbotCon.user.jid, '*⚜️ දෝෂ විශ්ලේෂණය [] ⚜️*' + 
                                        '\n==== ```දෝෂ නිරාකරණය කර ඇත!``` ====' +
                                        '\n\n*ප්‍රධාන දෝෂය:* _Reply.delete function නොමැති වීම සහ දෙවරක් පිළිතුරු දීම_' +
                                        '\n\n*හේතුව:* _IMG හෝ Wiki විධානයන් භාවිතා කිරීම. (Official වට්ස්ඇප් භාවිතය.)_' +
                                        '\n\n*විසඳුම:* _මෙම දෝෂය සඳහා විසඳුමක් නොමැත. එය fatal error නොවේ._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('load.delete')) {
                                    return await KingbotCon.sendMessage(KingbotCon.user.jid, '*⚜️ දෝෂ විශ්ලේෂණය [] ⚜️*' + 
                                        '\n==== ```දෝෂ නිරාකරණය කර ඇත!``` ====' +
                                        '\n\n*ප්‍රධාන දෝෂය:* _Reply Delete Function_' +
                                        '\n\n*හේතුව:* _IMG හෝ Wiki විධානයන් භාවිතා කිරීම. (Official වට්ස්ඇප් භාවිතය.)_' +
                                        '\n\n*විසඳුම:* _මෙම දෝෂය සඳහා විසඳුමක් නොමැත. එය fatal error නොවේ._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('400')) {
                                    return await KingbotCon.sendMessage(KingbotCon.user.jid, '*⚜️ දෝෂ විශ්ලේෂණය [] ⚜️*' + 
                                        '\n==== ```දෝෂ නිරාකරණය කර ඇත!``` ====' +
                                        '\n\n*ප්‍රධාන දෝෂය:* _Bailyes Action Error_ ' +
                                        '\n\n*හේතුව:* _නිශ්චිත හේතුව නොදනී. විකල්ප එකකට වඩා මෙම දෝෂය ඇති වීමට හේතු විය හැක._' +
                                        '\n\n*විසඳුම:* _ඔබ එය නැවත භාවිතා කළහොත් එය වැඩිදියුණු විය හැකිය. දෝෂය දිගටම පැවතුනහොත්, ඔබට restart කිරීමට උත්සාහ කළ හැකිය._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('decode')) {
                                    return await KingbotCon.sendMessage(KingbotCon.user.jid, '*⚜️ දෝෂ විශ්ලේෂණය [] ⚜️*' + 
                                        '\n==== ```දෝෂ නිරාකරණය කර ඇත!``` ====' +
                                        '\n\n*ප්‍රධාන දෝෂය:* _Text හෝ මාධ්‍ය විකේතනය කළ නොහැක_' +
                                        '\n\n*හේතුව:* _වැරදි ලෙස භාවිතා කිරීම._' +
                                        '\n\n*විසඳුම:* _Panel විස්තරයේ ලියා ඇති පරිදි කරුණාකර විධානයන් භාවිතා කරන්න._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('500')) {
                                    return await KingbotCon.sendMessage(KingbotCon.user.jid, '*⚜️ දෝෂ විශ්ලේෂණය [] ⚜️*' + 
                                        '\n==== ```දෝෂ නිරාකරණය කර ඇත!``` ====' +
                                        '\n\n*ප්‍රධාන දෝෂය:* _Media downloading error_' +
                                        '\n\n*හේතුව:* _වෙබ් අඩවිය අතර සම්බන්ධතාවය විසන්ධි විය._' +
                                        '\n\n*විසඳුම:* _මිනිත්තු කිහිපයක් රැඳී සිටින්න. Developers විසින් මෙම දෝෂය නිවැරදි කරනු ඇත._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('503')) {
                                    return await KingbotCon.sendMessage(KingbotCon.user.jid, '*⚜️ දෝෂ විශ්ලේෂණය [] ⚜️*' + 
                                        '\n==== ```දෝෂ නිරාකරණය කර ඇත!``` ====' +
                                        '\n\n*ප්‍රධාන දෝෂය:* _Media downloading error_' +
                                        '\n\n*හේතුව:* _වෙබ් අඩවිය අතර සම්බන්ධතාවය විසන්ධි විය._' +
                                        '\n\n*විසඳුම:* _මිනිත්තු කිහිපයක් රැඳී සිටින්න. Developers විසින් මෙම දෝෂය නිවැරදි කරනු ඇත._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unescaped')) {
                                    return await KingbotCon.sendMessage(KingbotCon.user.jid, '*⚜️ දෝෂ විශ්ලේෂණය [] ⚜️*' + 
                                        '\n==== ```දෝෂ නිරාකරණය කර ඇත!``` ====' +
                                        '\n\n*ප්‍රධාන දෝෂය:* _වචන භාවිතය_' +
                                        '\n\n*හේතුව:* _English හෝඩියේ පිටත TTP, ATTP වැනි විධානයන් භාවිතා කිරීම._' +
                                        '\n\n*විසඳුම:* _ඔබ English හෝඩියේ විධානය භාවිතා කළහොත් ගැටළුව විසඳනු ඇත._'
                                        , MessageType.text
                                    );
                                }
                                else {
                                    return await KingbotCon.sendMessage(KingbotCon.user.jid, '*🙇🏻 කණගාටුයි, මට මෙම දෝෂය කියවිය නොහැක! 🙇🏻*' +
                                        '\n_වැඩිදුර උදව් සඳහා ඔබට අපගේ support කණ්ඩායම් වෙත ලිවිය හැකිය._'
                                        , MessageType.text
                                    );
                                }
                            } else {
                                await KingbotCon.sendMessage(KingbotCon.user.jid, '*-- ERROR REPORT [] --*' + 
                                    '\n\n* an error has occurred!*'+
                                    '\n\n_This error log may include your number or the number of an opponent. Please be careful with it!_' +
                                    '\n\n_Aslo you can join our support group:_' +
                                    '\n_Support Group Entrance:_ https://chat.whatsapp.com/JUdpgeHNTaQ31cA1FoN59G' +
                                    '\n\n_This message should have gone to your number (saved messages)._\n\n' +
                                    '*Error:* ```' + error + '```\n\n'
                                    , MessageType.text, {detectLinks: false}
                                );
                                if (error.message.includes('URL')) {
                                    return await KingbotCon.sendMessage(KingbotCon.user.jid, '*⚜️ ERROR ANALYSIS [] ⚜️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Only Absolutely URLs Supported_' +
                                        '\n\n*Reason:* _The usage of media tools (xmedia, sticker..) in the LOG number._' +
                                        '\n\n*Solution:* _You can use commands in any chat, except the LOG number._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('split')) {
                                    return await KingbotCon.sendMessage(KingbotCon.user.jid, '*⚜️ ERROR ANALYSIS [] ⚜️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Split of Undefined_' +
                                        '\n\n*Reason:* _Commands that can be used by group admins occasionally dont see the split function._ ' +
                                        '\n\n*Solution:* _Restarting will be enough._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('Ookla')) {
                                    return await KingbotCon.sendMessage(KingbotCon.user.jid, '*⚜️ ERROR ANALYSIS [] ⚜️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Ookla Server KingbotConection_' +
                                        '\n\n*Reason:* _Speedtest data cannot be transmitted to the server._' +
                                        '\n\n*Solution:* _If you use it one more time the problem will be solved._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('params')) {
                                    return await KingbotCon.sendMessage(KingbotCon.user.jid, '*⚜️ ERROR ANALYSIS [] ⚜️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Requested Audio Params_' +
                                        '\n\n*Reason:* _Using the TTS command outside the Latin alphabet._' +
                                        '\n\n*Solution:* _The problem will be solved if you use the command in Latin letters frame._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unlink')) {
                                    return await KingbotCon.sendMessage(KingbotCon.user.jid, '*⚜️ ERROR ANALYSIS [] ⚜️*' + 
                                        '\n========== ```Error Resolved``` ==========' +
                                        '\n\n*Main Error:* _No Such File or Directory_' +
                                        '\n\n*Reason:* _Incorrect coding of the plugin._' +
                                        '\n\n*Solution:* _Please check the your plugin codes._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('404')) {
                                    return await KingbotCon.sendMessage(KingbotCon.user.jid, '*⚜️ ERROR ANALYSIS [] ⚜️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Error 404 HTTPS_' +
                                        '\n\n*Reason:* _Failure to communicate with the server as a result of using the commands under the Heroku plugin._' +
                                        '\n\n*Solution:* _Wait a while and try again. If you still get the error, perform the transaction on the website.._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('reply.delete')) {
                                    return await KingbotCon.sendMessage(KingbotCon.user.jid, '*⚜️ ERROR ANALYSIS [] ⚜️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Reply Delete Function. And Double replying_' +
                                        '\n\n*Reason:* _Using IMG or Wiki commands. (May be using official Whatsapp)_' +
                                        '\n\n*Solution:* _There is no solution for this error. It is not a fatal error._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('load.delete')) {
                                    return await KingbotCon.sendMessage(KingbotCon.user.jid, '*⚜️ ERROR ANALYSIS [] ⚜️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Reply Delete Function_' +
                                        '\n\n*Reason:* _Using IMG or Wiki commands._' +
                                        '\n\n*Solution:* _There is no solution for this error. It is not a fatal error._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('400')) {
                                    return await KingbotCon.sendMessage(KingbotCon.user.jid, '*⚜️ ERROR ANALYSIS [] ⚜️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Bailyes Action Error_ ' +
                                        '\n\n*Reason:* _The exact reason is unknown. More than one option may have triggered this error._' +
                                        '\n\n*Solution:* _If you use it again, it may improve. If the error continues, you can try to restart._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('decode')) {
                                    return await KingbotCon.sendMessage(KingbotCon.user.jid, '*⚜️ ERROR ANALYSIS [] ⚜️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Cannot Decode Text or Media_' +
                                        '\n\n*Reason:* _Incorrect use of the plug._' +
                                        '\n\n*Solution:* _Please use the commands as written in the plugin description._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('500')) {
                                    return await KingbotCon.sendMessage(KingbotCon.user.jid, '*⚜️ ERROR ANALYSIS [] ⚜️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Media downloading error_' +
                                        '\n\n*Reason:* _KingbotConection between site disKingbotConected._' +
                                        '\n\n*Solution:* _Wait for few minutes. This error will fixed By Developers._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('503')) {
                                    return await KingbotCon.sendMessage(KingbotCon.user.jid, '*⚜️ ERROR ANALYSIS [] ⚜️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Media downloading error_' +
                                        '\n\n*Reason:* _KingbotConection between site disKingbotConected._' +
                                        '\n\n*Solution:* _Wait for few minutes. This error will fixed By Developers._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unescaped')) {
                                    return await KingbotCon.sendMessage(KingbotCon.user.jid, '*⚜️ ERROR ANALYSIS [] ⚜️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Word Character Usage_' +
                                        '\n\n*Reason:* _Using commands such as TTP, ATTP outside the Latin alphabet._' +
                                        '\n\n*Solution:* _The problem will be solved if you use the command in Latin alphabet.._'
                                        , MessageType.text
                                    );
                                }
                                else {
                                    return await KingbotCon.sendMessage(KingbotCon.user.jid, '*🙇🏻 Sorry, I Couldnt Read This Error! 🙇🏻*' +
                                        '\n_You can write to our support groups for more help._'
                                        , MessageType.text
                                    );
                                } 
                            }
                        }
                    }
                }
            }
        )
    });

    try {
        await KingbotCon.connect();
    } catch {
        if (!nodb) {
            console.log(chalk.red.bold('Refreshing your old version string...'))
            KingbotCon.loadAuthInfo(Session.deCrypt(config.SESSION)); 
            try {
                await KingbotCon.connect();
            } catch {
                return;
            }
        }
    }
}


Kingbot();
