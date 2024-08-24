const tool = new Tool("test")
Game.on("initialSpawn",p=>{
  p.addTool(tool)
})

tool.on("activated",p=>{
    NewBrick(new Vector3(1,1,1),p.poition,1,"#000000")
    setPosition(new Vector3(Math.round(x/8)*8, Math.round(y/8)*8, Math.round(z/8)*8))
})
