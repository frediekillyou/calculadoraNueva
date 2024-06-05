function agregar(value){
    document.getElementById("pantalla").value+=value;

}
function calcular(){
    try{
        const res = eval(document.getElementById("pantalla").value);
        document.getElementById("pantalla").value=res;
    }catch(error){
        document.getElementById("pantalla").value=res;
    }
}