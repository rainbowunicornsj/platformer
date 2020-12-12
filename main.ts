namespace SpriteKind {
    export const door = SpriteKind.create()
    export const OP = SpriteKind.create()
}
function create_level () {
    for (let value of scene.getTilesByType(8)) {
        scene.setTile(8, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        portal = sprites.create(img`
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e 9 9 9 9 9 e e 9 9 9 9 9 e e 
            e e 9 9 9 9 9 e e 9 9 9 9 9 e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e 9 9 9 9 9 e e 9 9 9 9 9 e e 
            e e 9 9 9 9 9 e e 9 9 9 9 9 e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e 7 e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            `, SpriteKind.door)
        scene.place(value, portal)
    }
    for (let value of scene.getTilesByType(2)) {
        scene.setTile(4, img`
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            `, true)
        scene.setTile(2, img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `, true)
    }
    for (let value of scene.getTilesByType(5)) {
        scene.setTile(5, img`
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `, true)
    }
    for (let value of scene.getTilesByType(15)) {
        scene.setTile(15, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        ice_cream = sprites.create(img`
            . . . . . 3 3 b 3 3 d d 3 3 . . 
            . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
            . . . 3 d 1 1 1 d 1 1 1 d 3 1 3 
            . . 3 d d 1 1 1 d d 1 1 1 3 3 3 
            . 3 1 1 d 1 1 1 1 d d 1 1 b . . 
            . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 . 
            . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
            . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
            . 4 4 d 1 1 1 1 1 1 d d d b b . 
            . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
            4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
            4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
            4 5 5 d 5 5 d b b b d d 3 . . . 
            4 5 5 5 d d d d 4 4 b 3 . . . . 
            . 4 5 5 5 4 4 4 . . . . . . . . 
            . . 4 4 4 . . . . . . . . . . . 
            `, SpriteKind.Food)
        scene.place(value, ice_cream)
    }
    for (let value of scene.getTilesByType(3)) {
        scene.setTile(3, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        chest = sprites.create(img`
            a a a a a a a a a a a a a a a a 
            a 9 9 9 9 a 9 9 9 9 a 9 9 9 9 a 
            a 9 9 9 a 9 9 9 9 9 9 a 9 9 9 a 
            a 9 9 a 9 9 9 9 9 9 9 9 a 9 9 a 
            a 9 a 9 9 9 9 9 9 9 9 9 9 a 9 a 
            a a 9 9 9 2 3 3 3 3 3 2 9 9 a a 
            a 9 9 9 9 3 3 3 3 3 3 3 9 9 9 a 
            a 9 9 9 9 3 3 6 6 6 3 3 9 9 9 a 
            a 9 9 9 9 3 3 6 6 6 3 3 9 9 9 a 
            a 9 9 9 9 3 3 6 6 6 3 3 9 9 9 a 
            a a 9 9 9 2 3 3 3 3 3 2 9 9 a a 
            a 9 a 9 9 9 9 9 7 9 9 9 9 a 9 a 
            a 9 9 a 9 9 9 9 7 9 9 9 a 9 9 a 
            a 9 9 9 a 9 9 9 7 9 9 a 9 9 9 a 
            a 9 9 9 9 a 9 9 7 9 a 9 9 9 9 a 
            a a a a a a a a a a a a a a a a 
            `, SpriteKind.OP)
        scene.place(value, chest)
    }
}
function chooselevel () {
    if (level == 0) {
        scene.setTileMap(list[level])
        create_level()
    } else if (level == 1) {
        delete_old_level()
        scene.setTileMap(list[level])
        create_level()
    } else {
        delete_old_level()
        scene.setTileMap(list[level])
        create_level()
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.OP, function (sprite, otherSprite) {
    music.baDing.play()
    chest.destroy()
    Abby.setVelocity(0, 150)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Abby.isHittingTile(CollisionDirection.Bottom)) {
        Abby.vy = -200
    }
})
function delete_old_level () {
    for (let value of sprites.allOfKind(SpriteKind.door)) {
        value.destroy()
    }
}
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(Abby, 100, 0)
    dodge = false
    Abby.setImage(img`
        . f f f . f f f f f . . . . 
        f f f f f c c c c f f . . . 
        f f f f b c c c c c c f . . 
        f f f c 3 c c c c c c f . . 
        . f 3 3 c c c c c c c c f . 
        . f f f c c c c c 4 c c f . 
        . f f f f c c c 4 4 e f f . 
        . f f 4 4 f b f 4 4 e f f . 
        . . f 4 d 4 1 f d d f f . . 
        . . f f f 4 d d d d f . . . 
        . . . f e e 4 4 4 e f . . . 
        . . . 4 d d e 3 3 3 f . . . 
        . . . e d d e 3 3 3 f . . . 
        . . . f e e f 6 6 6 f . . . 
        . . . . f f f f f f . . . . 
        . . . . . f f f . . . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (dodge == false) {
        Abby.destroy()
        game.over(false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.door, function (sprite, otherSprite) {
    if (sprites.allOfKind(SpriteKind.Food).length == 0) {
        if (level == 2) {
            game.over(true)
        } else {
            level += 1
            Abby.setPosition(30, 80)
            chooselevel()
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(Abby, 0, 0)
    dodge = true
    Abby.setImage(img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f f . . . . 
        f f f f f c c c c f f . . . 
        f f f f b c c c c c c f . . 
        f f f c 3 c c c c c c f . . 
        . f 3 3 c c c c c c c c f . 
        . f f f c c c c c 4 c c f . 
        . f f f f c c c 4 4 c f f . 
        . f f 4 4 f b f 4 4 f f f . 
        . f f 4 d 4 1 f d d c f . . 
        . . f f f 4 d d d d f . . . 
        . . 4 d d e 4 4 4 e f . . . 
        . . e d d e 3 3 3 3 f . . . 
        . . f e e f 6 6 6 6 f f . . 
        . . f f f f f f f f f f . . 
        . . . f f . . . f f f . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
})
let projectile: Sprite = null
let dodge = false
let chest: Sprite = null
let ice_cream: Sprite = null
let portal: Sprite = null
let level = 0
let list: Image[] = []
let Abby: Sprite = null
Abby = sprites.create(img`
    . f f f . f f f f f . . . . 
    f f f f f c c c c f f . . . 
    f f f f b c c c c c c f . . 
    f f f c 3 c c c c c c f . . 
    . f 3 3 c c c c c c c c f . 
    . f f f c c c c c 4 c c f . 
    . f f f f c c c 4 4 e f f . 
    . f f 4 4 f b f 4 4 e f f . 
    . . f 4 d 4 1 f d d f f . . 
    . . f f f 4 d d d d f . . . 
    . . . f e e 4 4 4 e f . . . 
    . . . 4 d d e 3 3 3 f . . . 
    . . . e d d e 3 3 3 f . . . 
    . . . f e e f 6 6 6 f . . . 
    . . . . f f f f f f . . . . 
    . . . . . f f f . . . . . . 
    `, SpriteKind.Player)
Abby.ay = 350
Abby.setPosition(30, 80)
controller.moveSprite(Abby, 100, 0)
scene.cameraFollowSprite(Abby)
scene.setBackgroundColor(9)
list = [img`
    ..........................
    ..........................
    .................3...f....
    ..............f..........f
    ......................3..8
    ..................55555555
    ............f..55555555555
    .............5555555555555
    .....f.....555555555555555
    ........355555555555555555
    .......5555555555555555555
    ..3..555555555555555555555
    22222222222222222222222222
    44444444444444444444444444
    `, img`
    .......8f..........f......
    .......55555...3..........
    .............55555........
    ..................f.......
    .................555......
    .....................555..
    ..........f...............
    ....................f.....
    ..................55555...
    ....3..55555.3............
    ................5555......
    ..5555....3.555...........
    22222222222222222222222222
    44444444444444444444444444
    `, img`
    ....................f.....
    ..8......3................
    ..55f..555555..f.555555...
    ...55...f..........3......
    ........555555...5555555..
    ..555..........3f.........
    .........3..555555........
    ........555.........f.....
    ...................555555.
    ........f.................
    .......555................
    ................f.........
    22222222222222222222222222
    44444444444444444444444444
    `]
level = 0
chooselevel()
info.startCountdown(100)
info.setScore(0)
game.onUpdateInterval(3000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . b . . . 2 2 2 
        . . . . . . . . b . b b b 4 5 2 
        . . . . . . . f f f . . . 2 2 2 
        . . . . . f f f f f f f . . . . 
        . . . . f f f f f f f f f . . . 
        . . . f f f f f f f f f f f . . 
        . . . f f 1 f 1 f 1 f 1 f f . . 
        . . . f f f 1 f f f 1 f f f . . 
        . . . f f 1 f 1 f 1 f 1 f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f 1 1 1 f f f f . . 
        . . . f f f 1 f f f 1 f f f . . 
        . . . . f f f f f f f f f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-100, 100), 100)
})
