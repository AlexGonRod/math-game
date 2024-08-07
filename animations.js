export const createAnimations = (game)  => {

    game.anims.create({
        key: 'money',
        frames: game.anims.generateFrameNumbers(
            'coin',
            {
                start: 0,
                end: 11
            }
        ),
        frameRate: 12,
        repeat: -1
    })

    game.anims.create({
        key: 'walk',
        frames: game.anims.generateFrameNumbers(
            'player',
            { start: 1, end: 4 }
        ),
        frameRate: 12,
        repeat: -1
    })

    game.anims.create({
        key: 'idle',
        frames: game.anims.generateFrameNumbers(
            'player',
            { start: 5, end: 8 }
        ),
        frameRate: 5,
        repeat: -1
    })
}
