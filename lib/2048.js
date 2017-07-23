;(function(exports){

function init(){
  var game
  game=
    {width:4
    ,height:4
    ,rows:[]
    ,score:0
    ,autoplay_fail_count:0
    ,last_move_effect:true
    ,autoplaying:false
    }
  game.rows=empty_board(game)
  game = randomly_add_tile(game)
  return game
}

function copy(game){
  var ret=Object.assign({},game)
  ret.rows=empty_board(game)
  iter_cells(ret,(c,i,j,k) => at_k(game,k))
  return ret}

function empty_board(game){
  var rows=[]
  for(i=0; i<game.height; i++){
    rows.push(row=[])
    for(j=0; j<game.width; j++){row.push(0)}}
  return rows
}

function randomly_add_tile(game){
  var empty=0,cp
  cp=copy(game)
  iter_cells(cp,c => {if(c==0) empty++})
  if(!empty) return cp
  var chosen = Math.floor(Math.random()*empty)
  var seen = 0
  iter_cells(cp,(c,i,j,k) => {
    if(c != 0) return cp
    if(seen++==chosen) return Math.random() > 0.9 ? 4 : 2
  })
  return cp
}

function iter_cells(game,f){
  game.rows.forEach((r,i) => r.forEach((c,j) => {
    var ret = f(c,i,j,i*game.width+j)
    if(typeof ret == "number") game.rows[i][j] = ret}))}

function at_ij(game,i,j,c){
  if(i<0 || j<0 || i>=game.height || j>=game.width) return
  if(c!=undefined) game.rows[i][j]=c
  return game.rows[i][j]}

function at_k(game,k,c){
  if(k < 0 || k > game.width*game.height) return
  if(c!=undefined) game.rows[Math.floor(k/game.width)][k%game.width]=c
  return game.rows[Math.floor(k/game.width)][k%game.width]}

function is_lost(game){
  return !legal_moves.some(m => move_only(game,m).last_move_effect)}

function move_only(game,mov){
  var x,y,cp
  cp=copy(game)
  switch(mov){
  case "up": x=0;y=-1;break
  case "down": x=0;y=1;break
  case "left": x=-1;y=0;break
  case "right": x=1;y=0;break
  default: throw new Error('unknown move: '+mov)}
  var moved,transposed,flipped
  if(y != 0){
    ;[x,y] = [y,x]
    transpose(cp)
    transposed=true
  }
  if(x==1){
    x=-1
    flip_x(cp)
    flipped=true
  }
  moved = move_left(cp)
  if(flipped) flip_x(cp)
  if(transposed) transpose(cp)
  cp.last_move_effect=moved
  return cp}

function move(game,mov){
  var cp=move_only(game,mov)
  if(cp.last_move_effect) cp=randomly_add_tile(cp)
  return cp
}

function move_left(game){
  var moved=false
  moved = move_left_many(game)
  moved = merge_left_once(game) || moved
  moved = move_left_many(game) || moved
  return moved}

function move_left_many(game){
  var moved=false, count=0
  while(move_left_once(game)) moved=true;
  return moved}

function move_left_once(game){
  var moved=false
  iter_cells(game,(c,i,j,k) => {
    if(c==0) return
    var left=at_ij(game,i,j-1)
    if(left==0){
      at_ij(game,i,j-1,c)
      at_k(game,k,0)
      moved=true
    }
  })
  return moved
}

function merge_left_once(game){
  var merged=false
  iter_cells(game,(c,i,j,k) => {
    if(c==0)return
    var left=at_ij(game,i,j-1)
    if(left==c){
      at_ij(game,i,j-1,c*2)
      at_k(game,k,0)
      merged=true
      game.score+=c*2
    }
  })
  return merged
}

function transpose(game){
  var next=copy(game)
  next.width=game.height
  next.height=game.width
  next.rows=empty_board(next)
  iter_cells(next,(c,i,j,k) => at_ij(game,j,i))
  Object.assign(game,next)
}

function flip_x(game){
  var next=copy(game)
  iter_cells(next,(c,i,j,k) => at_ij(game,i,game.width-1-j))
  Object.assign(game,next)
}

var legal_moves=['up','down','left','right']
var ai_player=ai_player3

function measure_game(game){
  var ret={}
  ret.max=2
  ret.badness=0
  ret.space=game.width*game.height
  ret.score=0
  iter_cells(game,(c,i,j,k) => {
    if(c>ret.max) ret.max=c
    if(c) ret.space--
    ret.score += c*c*c*c*c*c
    ret.badness += f(c - at_ij(game,i-1,j) || 0)
                      +  f(c - at_ij(game,i,j-1) || 0)
                      +  f(c - at_ij(game,i+1,j) || 0)
                      +  f(c - at_ij(game,i,j+1) || 0)})
  function f(n){var abs=Math.abs(n);return abs*abs*abs}
  return ret}

function ai_player3(game){
  var metrics,depth,results
  depth=3
  results=[]
  return go(game,0)[0]
  function go(game,level){var ret,best,best_move
    if(level==depth){
      return _ai_player3(game)}
    best_move=legal_moves[Math.floor(Math.random()*4)]
    best=[best_move,Infinity]
    legal_moves.forEach(m=> {
      var cp,ret
      cp=move_only(game,m)
      if(!cp.last_move_effect)return
      ret = go(cp,level+1)
      console.log(game.score,level,m,ret)
      if(ret[1]<best[1]){
        best=[m,ret[1]]}})
    return best}}

function _ai_player3(game){
  var best,best_move,best_game
  best=Infinity
  best_move=legal_moves[Math.floor(Math.random()*4)]
  legal_moves.forEach(m => {
    var cp,badness,metrics
    cp = move_only(game,m)
    if(!cp.last_move_effect) return
    metrics=measure_game(cp)
    badness = 2048 / metrics.space / metrics.score
    if(badness < best){
      best = badness
      best_game=cp
      best_move = m}})
  return [best_move,best]}

function ai_player2(game){
  return _ai_player2(game)[0]}

function _ai_player2(game){
  var best,best_move,best_game
  best=Infinity
  best_move=legal_moves[Math.floor(Math.random()*4)]
  legal_moves.forEach(m => {
    var cp = copy(game),badness,metrics
    var moved = move_only(cp,m)
    if(!moved) return
    metrics=measure_game(cp)
    badness = metrics.badness / metrics.space / metrics.space / metrics.score
    if(badness < best){
      best = badness
      best_game=cp
      best_move = m}})
  return [best_move,best]}

function ai_player1(game){
  function find_max(game){
    var max,max_move
    max=game.score
    max_move=legal_moves[Math.floor(Math.random()*4)]
    var cp
    legal_moves.forEach(m => {
      cp=copy(game)
      move(cp,m)
      if(cp.score > max){
        max = cp.score
        max_move = m}})
    return [max,max_move]}
  return find_max(game)[1]}

exports.ai_player=ai_player
exports.move=move
exports.create_game=init

})(window);
