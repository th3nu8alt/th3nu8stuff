const tool = new Tool("test")
Game.on("initialSpawn",p=>{
  p.addTool(tool)
  p.setJumpPower(4)
})

function roundTo(num,rnd) {
  return Math.round(num/rnd)*rnd
}


tool.on("activated",p=>{
    let brick = new Brick(p.position,new Vector3(4,4,4),"#000000")
    Game.newBrick(brick)
    brick.setPosition(new Vector3(roundTo(brick.position.x,4)-2, roundTo(brick.position.y,4)-2, roundTo(brick.position.z,4)-4))
}) 
