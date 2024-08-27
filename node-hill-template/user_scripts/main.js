//Join messages
Game.on("playerJoin", (player) => {
    player.message("\\c5Welcome to \\c7Parkour Towers 2\\c5!")
    player.message("Towers are ranked from: [#4fe647]Easy\\c0, [#fff94d]Intermediate\\c0, [#ffa747]Hard\\c0, [#f00d00]Very Hard\\c0, [#ff3bfc]Challenging\\c0, to [#4a4a4a]Insane\\c0.")
    player.message("Good luck!")
})

//Pain bricks
world.bricks.filter(brick => brick.name === "hurt").forEach(brick => {
    brick.touching(debouncePlayer((player) => {
        player.setHealth(player.health - 10)
    }), 100)
})

//Teleporters
world.bricks.filter(brick => brick.name?.startsWith("portal_")).forEach(brick => { 
    brick.touching(debouncePlayer((player) => {
        let spawn = world.bricks.find(b => b.name === `tower_${brick.name.split('_')[1]}_spawn`)
        player.setPosition(new Vector3(spawn.center.x, spawn.center.y, spawn.center.z + 1))
    }), 1000)
})