let i=0;
function checkPal(string){
function pa(string){
    if(i>=(Math.floor(string.length/2))){
        return true

    }
    let char1=string[i].toLowerCase();
    let char2=string[string.length-1-i].toLowerCase()
    if(char1!==char2){
        return false
    }
    else{
        i++;
        return pa(string)
    }
}
return pa(string)
}


let a="mALAYALAM";
console.log(checkPal(a))