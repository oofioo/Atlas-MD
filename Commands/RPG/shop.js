const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const config = require('../../config');
const { player } = require("../../Database/rpgschema.js");
const eco = require('discord-mongoose-economy')
const ty = eco.connect(config.mongodb);
const fs = require("fs");


module.exports = {
    name: "shop",
    desc: "To view the list of items available in the shop",
    alias: ["store"],
    category: "RPG",
    usage: "shop",
    react: "🛍",
    start: async (Miku, m, { text, prefix, botName}) => {
        Miku.sendMessage(m.from, { text: `🛍️ 💎 ${global.botName} STORE 💎 🛍️

        👋 Hi there! 🤗 Welcome to the ${global.botName} Store.💼 Here's what you can purchase using Gold 💰:
        
#1
💡 Item: Wooden-Axe
💰 Cost: 250 Gold
💻 Usage: ${prefix}buy woodenaxe
💬 Description: Chop down those trees for some juicy loot! 🌳
        
#2
💡 Item: Stone-Pickaxe
💰 Cost: 500 Gold
💻 Usage: ${prefix}buy stonepickaxe
💬 Description: Mine to your heart's content with this pickaxe! 💎
        
#3
💡 Item: Iron-Pickaxe
💰 Cost: 2000 Gold
💻 Usage: ${prefix}buy ironpickaxe
💬 Description: Mine like a pro with this top-notch pickaxe! 🔨
        
#4
💡 Item: Diamond-Pickaxe
💰 Cost: 5000 Gold
💻 Usage: ${prefix}buy diamondpickaxe
💬 Description: The ultimate mining experience awaits!\nUsing this axe you can get a *🍎GoldenApple🍎*(very rare) 💎💰

#5
💡 Item: 100k GOLD
💰 Cost: 1 GOLDEN APPLE
💻 Usage: ${prefix}buy gold
💬 Description: Only few can get hands on a *🍎GoldenApple🍎*(very rare)

#6
💡 Item: 100 GOLD
💰 Cost: 1 STONE
💻 Usage: ${prefix}buy stone
💬 Description: Sell your stone here! 🪨

#7
💡 Item: 100 GOLD
💰 Cost: 1 WOOD
💻 Usage: ${prefix}buy wood
💬 Description: Sell your wood here! 🪵

#8
💡 Item: 500 GOLD
💰 Cost: 1 IRON
💻 Usage: ${prefix}buy iron
💬 Description: Sell your iron here! 🛡️

#9
💡 Item: 800 GOLD
💰 Cost: 1 DIAMOND
💻 Usage: ${prefix}buy diamond
💬 Description: Only lucky can get hands on a *💎diamond💎*(rare) Add 100 to sell 100` }, { quoted: m });
    }
}