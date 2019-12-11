let n = [-1,-2,-3,-4,-5, 1,2,3,48,7,0,9,7,6,5,4,3,1]
let n2 = n.filter(x => x > 0).sort((a, b) => a - b)
n2 = new Set(n2)
let c = 1
for (let i of n2){
  if(c != i ){
    console.log(c)
    break
  }
  c += 1
}
