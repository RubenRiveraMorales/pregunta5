var btnCarga = document.getElementById("Cargar");

var lista = document.getElementById("lista");

btnCarga.addEventListener("click", function(){
    axios.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
    .then(function(res){
        let dato = res.data;

        for(let i=0; i<dato.length; i++){

            let li= document.createElement("li");
            li.innerHTML=dato[i].name + "vive en " + dato[i].city + "<br>";
            lista.appendChild(li);
        }
    })
})