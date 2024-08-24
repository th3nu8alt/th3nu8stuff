const tool = new Tool("test")
Game.on("initialSpawn",p=>{
  p.addTool(tool)
})

tool.on("activated",p=>{
    let brick = new Brick(p.position,new Vector3(8,8,1),"#000000")
    Game.newBrick(brick)
    brick.setPosition(new Vector3(Math.round(brick.position.x/8)*8, Math.round(brick.position.y/8)*8, Math.round(brick.position.z/8)*8))
}) 
