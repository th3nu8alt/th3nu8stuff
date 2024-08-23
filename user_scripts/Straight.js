function NewBrick(XSize, YSize, ZSize, XPos, YPos, ZPos, Tras, Color) {
    let brick = new Brick(new Vector3(XPos, YPos, ZPos), new Vector3(XSize, YSize, ZPos), "#000000")
    brick.visibility = (Tras)

    Game.newBrick(brick) // "Parent" the brick to the game so players will download it.

}

let tool = new Tool("Balloon")
tool.model = 124
tool.equipped((p) => {
  p.NewBrick(1,1,1,position x,position y,position z,1)
})
