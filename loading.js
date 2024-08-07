export const loadAsets = (game) => {
    game.load.spritesheet(
        'coin',
        'assets/sprites/coin.png',
        {
            frameHeight: 16,
            frameWidth: 16
        }
    )
    game.load.spritesheet(
        'player',
        'assets/sprites/character_all.png',
        {
            frameWidth: 70,
            frameHeight: 70
        }
    )
    game.load.image(
        'floor',
        'assets/sprites/floortile.png'
    )
    game.load.image(
        'floor_sky',
        'assets/sprites/floorsky.png'
    )
}
