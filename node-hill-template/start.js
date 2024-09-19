const nh = require("node-hill-s")

nh.startServer({
    hostKey: "KWtPXIc8mwYHnddL9JjcI5mKp36vkzqNcCaeVqka2gxBRG9HKl84bjF1lfJ8hcSa", //MAIN
    //hostKey: "", //TESTING

    gameId: 69, //MAIN
    //gameId: , //TESTING

    port: 42481,

    local: false,

    mapDirectory: "./maps/",

    map: "test.brk",

    scripts: "./user_scripts",

    modules: [
        "fs"
    ]
})

// For more help: https://brickhill.gitlab.io/open-source/node-hill/interfaces/gamesettings.html
