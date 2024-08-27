const nh = require("node-hill-s")

nh.startServer({
    hostKey: "yglj3B6kbAOaHHJuULtRii1f5bvwdhttoxi03gszTZYaLV9nvwwUObD5diIT9rDE", //MAIN
    //hostKey: "", //TESTING

    gameId: 69, //MAIN
    //gameId: , //TESTING

    port: 42481,

    local: false,

    mapDirectory: "./maps/",

    map: "map.brk",

    scripts: "./user_scripts",

    modules: [
        "fs"
    ]
})

// For more help: https://brickhill.gitlab.io/open-source/node-hill/interfaces/gamesettings.html
