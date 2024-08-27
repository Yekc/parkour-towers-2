//Join messages
Game.on("playerJoin", (player) => {
    player.message("\\c5Welcome to \\c7Parkour Towers 2\\c5!")
    player.message("Towers are ranked from: [#4fe647]Easy\\c0, [#fff94d]Intermediate\\c0, [#ffa747]Hard\\c0, [#f00d00]Very Hard\\c0, [#ff3bfc]Challenging\\c0, to [#4a4a4a]Insane\\c0.")
    player.message("Type \\c7/spawn \\c0to go back to spawn.")
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
        player.centerPrint("Good luck! Type \\c7/spawn \\c0to go back to spawn.", 3)
    }), 1000)
})

//Brick rotations
world.bricks.filter(brick => brick.name?.startsWith("ROTATED_")).forEach(brick => {
    let split = brick.name.split('_')
    brick.setRotation(new Vector3(parseInt(split[1]), parseInt(split[2]), parseInt(split[3])))
})

//Commands
Game.command("spawn", (player, a) => {
    let spawn = world.bricks.find(b => b.name === "spawn")
    player.setPosition(new Vector3(spawn.center.x, spawn.center.y, spawn.center.z + 1))
    player.message("\\c5You were teleported back to the lobby!")
})