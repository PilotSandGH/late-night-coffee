let mySprite = sprites.create(assets.image`Player`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.setBackgroundImage(img`
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855555888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855555888888888888
    8888888888888888888888888888888885555588888888888888888888888888888888888888888888888888555558888888888888888888888888888888888888888888888888855555888888888888
    8888888855555888888888888888888885555588888888888888888888888888888888888888888888888888555558888888888888888888888888888888888888888888888888855555888888888888
    8888888855555888888888888888888885555588888888888888888888888888888888888888888888888888555558888888888888888888888888888888888888888888888888855555888888888888
    8888888855555888888888888888888885555588888888888888888888888888888888888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888
    8888888855555888888888888888888885555588888888888888888888888888888888888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888
    8888888855555888888888888888888888888888888888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888555558888888888888888888888888888888888888888888888888888555558888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888555558888888888888888888888888888888888888888888888888888555558888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888555558888888888888888888888888888888888888888888888888888555558888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555558888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555558888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888555558888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888555558888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888555558888888888888888888555558888888888888888888888888888888888888855555888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888555558888888888888888888888888888888888888855555888888888888888888888888888888888888888888888888888555558888888888888888
    8888888888888888888888888888888888888888555558888888888888888888888888888888888888855555888888888888888888888888888888888888888888888888888555558888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888855555888888888888888888888888855555888888888888888888888555558888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888855555888888888888888888888888855555888888888888888888888555558888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855555888888888888888888888555558888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855555888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855555888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8855555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8855555888888888888888888888888888888888888888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8855555888888888888888888888888888888888888888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8855555888888888888888888888888888888888888888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8855555888888888888888888888888888888888888888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888555558888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888855555888888888888888888888888888888888888888888
    8888888888888888888888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888855555888888888888888888888888888888888888888888
    8888888888888888888888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888855555888888888888888888888888888888888888888888
    8888888888888888888888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888855555888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888555558888888888888888888888855555888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888555558888888888888888888888888888888888888888888888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885555588888888888888888
    8888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885555588888888888888888
    8888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885555588888888888888888
    8888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885555588888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855555888888888888888888888888885555588888888888888888
    8888888888888888888888888888888888888888888888888888888888888555558888888888888888888888888888888888888888855555888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888555558888888888888888888888888888888888888888855555888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888555558888888888888888888888888888888888888888855555888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888555558888888888888888888888888888888888888888855555888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888855555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888855555888888888888888888888888855555888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888855555888888888888888888888888855555888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888855555888888888888888888888888855555888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888855555888888888888888888888888855555888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855555888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555558888888888888
    8888885555588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885555588888888888888888555558888888888888
    8888885555588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885555588888888888888888555558888888888888
    8888885555588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885555588888888888888888555558888888888888
    8888885555588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885555588888888888888888555558888888888888
    8888885555588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885555588888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888885555588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888885555588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888885555588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888885555588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888885555588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855555888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855555888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855555888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855555888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855555888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888555558888888888888888888888888888888888888855555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888555558888888888888888888888888888888888888855555888888888888888888888888888888888888888888888885555588888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888855555888888888888888888888888888888888888888888888885555588888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888855555888888888888888888888888888888888888888888888885555588888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888855555888888888888888888888888888888888888888888888885555588888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885555588888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888855555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888855555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888855555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555558888888888
    8888888888888888888888888888888888888855555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555558888888888
    8888888888888888888888888888888888888855555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555558888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555558888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555558888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    `)
tiles.setTilemap(tilemap`level1`)
forever(function () {
    scene.cameraFollowSprite(mySprite)
})
