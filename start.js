const nh = require('node-hill-s')

nh.startServer({
    hostKey: "n9u6qenFm1gSbR0gE0znnaTW2CtC6TKML485PpahtVia4HgCPbIX99eLeTEiqOS8", // Your host key here (can be found under the settings of the set.)

    gameId: 92, // Your game id here

    port: 42480, // Your port id here (default is 42480)

    local: false, // Whether or not your server is local

    mapDirectory: './maps/', // The path to your maps folder.

    map: 'Test.brk', // The file name of your .brk

    scripts: './user_scripts', // Your .js files path

    // Add npm / built-in node.js modules here
    modules: [
        //"discord.js"
    ]
})

// For more help: https://brickhill.gitlab.io/open-source/node-hill/interfaces/gamesettings.html
