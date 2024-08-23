function NewBrick(XSize, YSize, ZSize, XPos, YPos, ZPos, Tras, Color) {
    let brick = new Brick(new Vector3(XPos, YPos, ZPos), new Vector3(XSize, YSize, ZPos), Color)
    brick.visibility = (Tras)

    Game.newBrick(brick) // "Parent" the brick to the game so players will download it.

}
console.log(NewBrick(1,1,1,1,1,1,1,#000000));
