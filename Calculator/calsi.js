function num(val){
    document.querySelector("#a").value+=val;

}

function ac(){
    document.querySelector("#a").value="";
}

function result(){
    let val =document.querySelector("#a").value
    let result=eval(val)
    document.querySelector("#a").value=result
}

