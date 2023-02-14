var fgroup_no = document.getElementById('inp');
// var fgroup_no = group_no.slice(-3,-2);
document.getElementById('enter').onclick=function(){
    if(fgroup_no === 1){
        document.getElementById('h1').innerHTML = fgroup_no;
        document.getElementById('h1').style.color = "yellow";
    }
    if (fgroup_no === 2){
        document.getElementById('h1').innerHTML = fgroup_no;
        document.getElementById('h1').style.color = "red";
    } 
    if (fgroup_no === 3){
        document.getElementById('h1').innerHTML = fgroup_no;
        document.getElementById('h1').style.color = "black";
    }
}
