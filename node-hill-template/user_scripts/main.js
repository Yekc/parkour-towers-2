Game.on("playerJoin", (player) => {
    //Join messages
    player.message("\\c5Welcome to \\c7Parkour Towers 2\\c5!")
    player.message("Towers are ranked from: [#4fe647]Easy\\c0, [#fff94d]Intermediate\\c0, [#ffa747]Hard\\c0, [#f00d00]Very Hard\\c0, [#ff3bfc]Challenging\\c0, to [#4a4a4a]Insane\\c0.")
    player.message("Good luck!")
})

//Pain bricks
world.bricks.filter(brick => brick.name?.startsWith("hurt")).forEach(brick => { 
    brick.touching(debouncePlayer((player) => {
        player.health -= 10
    }), 100)
})

//Teleporters
world.bricks.filter(brick => brick.name?.startsWith("spawn_tower_")).forEach(brick => { 
    brick.touching(debouncePlayer((player) => {
        player.health -= 10
    }), 100)
})