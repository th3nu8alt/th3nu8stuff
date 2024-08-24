const tool = new Tool("test")
Game.on("initialSpawn",p=>{
  p.addTool(tool)
  p.setJumpPower(3.9)
})

function roundTo(num,rnd) {
  return Math.round(num/rnd)*rnd
}


tool.on("activated",p=>{
    let brick = new Brick(p.position,new Vector3(1,1,1),"#000000")
    Game.newBrick(brick)
    brick.setPosition(new Vector3(roundTo(brick.position.x,8)-4, roundTo(brick.position.y,8)-4, roundTo(brick.position.z,8)))
    if (brick.touching(brick)) {
        
   }
   else{
    brick.destroy()
   }
}) 
