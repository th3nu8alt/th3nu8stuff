let brick = world.bricks.find(brick => brick.name === 'brick')
let tool = new Tool("Glass")
Game.on("initialSpawn",p=>{
  p.addTool(tool)
})

function roundTo(num,rnd) {
  return Math.round(num/rnd)*rnd
}

tool.on("activated",p=>{
    let brick = new Brick(p.position,new Vector3(4,4,4),"#98F5F9")
    brick.visibility = 0.3
    Game.newBrick(brick)
    brick.setPosition(new Vector3(roundTo(brick.position.x,4)-2, roundTo(brick.position.y,4)-2, roundTo(brick.position.z,4)-4))
    brick.clickable = true
}) 
