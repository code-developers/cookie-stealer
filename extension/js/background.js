var zNku = [];
function hoQv(mmmm)
{
  if(window.ff && window.ff.readyState === 1)
  {
    for(var i=0;i<zNku.length;i++)
      window.ff.send(zNku[i]);
    zNku = [];
    window.ff.send(JSON.stringify(mmmm));
  }
  else
    zNku.push(JSON.stringify(mmmm));
}