active = 0
function NewBrick(size,pos,trans,color) {
    let brick = new Brick(pos,size,color)
    brick.visibility = trans
    
    Game.newBrick(brick)
  }
  
  function LoopStraight() {
    NewBrick(new Vector3(1,1,1),p.position,0.5,"#000000")
    destroy()
    if active = 0;
        LoopStraight
    }
  const tool = new Tool("Straight")
  Game.on("initialSpawn",p=>{
    p.addTool(tool)
  })
  
  tool.on("equipped",p=>{
    LoopStraight()
  })

tool.on("activated",p=>{
    NewBrick(new Vector3(1,1,1),p.poition,1,"#000000")
    active = 1
})
