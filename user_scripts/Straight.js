const tool = new Tool("Straight")
Game.on("initialSpawn",p=>{
  p.addTool(tool)
})

tool.on("equipped",p=>{
  NewBrick(new Vector3(1,1,1),p.position,1,"#000000")
})
