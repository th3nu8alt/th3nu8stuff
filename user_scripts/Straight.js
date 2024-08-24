const tool = new Tool("test")
Game.on("initialSpawn",p=>{
  p.addTool(tool)
  player.setJumPower(8)
})

function roundTo(num,rnd) {
  return Math.round(num/rnd)*rnd
}


tool.on("activated",p=>{
    let brick = new Brick(p.position,new Vector3(1,1,1),"#000000")
    Game.newBrick(brick)
    brick.setPosition(new Vector3(roundTo(brick.position.x,8)-4, roundTo(brick.position.y,8)-4, roundTo(brick.position.z,8)))
}) 
