function NewBrick(size,pos,trans,color) {
  let brick = new Brick(pos,size,color)
  brick.visibility = trans
  
  Game.newBrick(brick)
}

const tool = new Tool("Straight")
Game.on("initialSpawn",p=>{
  p.addTool(tool)
})

tool.on("equipped",p=>{
  NewBrick(new Vector3(1,1,1),p.position,1,"#000000")
})
