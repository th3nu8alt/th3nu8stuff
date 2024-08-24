function NewBrick(XSize, YSize, ZSize, XPos, YPos, ZPos, Tras, Color) {
    let brick = new Brick(new Vector3(XPos, YPos, ZPos), new Vector3(XSize, YSize, ZPos), "#000000")
    brick.visibility = (Tras)

    Game.newBrick(brick) // "Parent" the brick to the game so players will download it.

}
const tool = new Tool("Straight")
Game.on("initialSpawn",p=>{
  p.addTool(tool)
})
Game.on("Equipped",p=>{
    p.NewBrick(1,1,1,player.position.x,player.position.y,player.position.z, 0.5)
})
