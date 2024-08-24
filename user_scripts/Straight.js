function NewBrick(XSize, YSize, ZSize, XPos, YPos, ZPos, Tras, Color) {
    let brick = new Brick(new Vector3(XPos, YPos, ZPos), new Vector3(XSize, YSize, ZPos), "#000000")
    brick.visibility = (Tras)

    Game.newBrick(brick) // "Parent" the brick to the game so players will download it.

}
const tool = new Tool("Straight")
tool.model = 655
Game.on("initialSpawn",p=>{
  p.addTool(tool)
})
tool.on("activated",p=>{
  Game.newBrick(new Brick(p.position,new Vector3(1,1,1),"#000000"))
})
