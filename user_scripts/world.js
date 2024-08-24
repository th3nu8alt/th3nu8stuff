let x = -1024
let y = -1024
let z = -48
let count = 0;
function NewBrick(XSize, YSize, ZSize, XPos, YPos, ZPos, Tras) {
    let brick = new Brick(new Vector3(XPos, YPos, ZPos), new Vector3(XSize, YSize, ZPos), "#4D9818")
    brick.visibility = (Tras)

    Game.newBrick(brick) // "Parent" the brick to the game so players will download it.

}
Game.on("InitialSpawn",p=>{
    do {
        count += 1;
        NewBrick(4,4,4,x*4,y*4,z*4,1)
        x == x + 1
        if(x == 1024){
            x == -1024
            y == y + 1
        }
        if(y == 1024){
            x == -1024
            y == -1024
            z == z + 1
        }
    }   while (count < 201326592);
})
