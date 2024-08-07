export const creations = ({ game, config }) => {
    game.coin = game.add.sprite(100, 50, 'coin')
        .setOrigin(0, 0)
        .setScale(1.5)

    game.floor = game.physics.add.staticGroup()
    game.floor
        .create(0, config.height - 32, 'floor')
        .setScale(1.02)
        .setOrigin(0, 0)
        .refreshBody()
    game.floor
        .create(130, config.height - 32, 'floor')
        .setScale(1.02)
        .setOrigin(0, 0)
        .refreshBody()
    game.floor
        .create(80, 150, 'floor_sky')
        .setScale(1.02)
        .setOrigin(0, 0)
        .refreshBody()

    game.mario = game.physics.add.sprite(50, 200, 'player')
        .setOrigin(2, 3)
        .setScale(0.5)
        .setCollideWorldBounds(true)
        .setGravityY(300)


    game.physics.world.setBounds(0, 0, 260, config.height)
    game.physics.add.collider(game.mario, game.floor)
}
