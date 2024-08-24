const tool = new Tool("test")
Game.on("initialSpawn",p=>{
  p.addTool(tool)
})

tool.on("activated",p=>{
    let brick = new Brick(p.position,new Vector3(4,4,4),"#000000")
    Game.newBrick(brick)
    brick.setPosition(new Vector3(Math.round(brick.position.x/4)*4, Math.round(brick.position.y/4)*4, Math.round(brick.position.z/4)*4))
}) 
