let datoDePersonajes =""
let personajesTexto=""
let card =""
const recorrerPersonajes =async() =>{
try {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
    datoDePersonajes=await fetch(`https://rickandmortyapi.com/api/character`,requestOptions)
    personajesTexto=await datoDePersonajes.json()
    console.log("datos ", personajesTexto)
    let arregloDePersonajes = personajesTexto.results
    console.log("arreglo", arregloDePersonajes)
    let app = document.getElementById("app")



    arregloDePersonajes.map(personaje => {
        console.log("datos de personaje",personaje)
        const {image,name,status,species,origin,location}=personaje
        card =  card + ` 
        <div class=" md:flex justify-center w-full sm:w-full  md:w-full lg:w-1/2 xl:w-1/2 ">
                <div class="bg-gray-600  md:flex my-8 rounded-xl">
                    <img class="rounded-l-lg" src="${image}">
                    <div class="pr-60 pl-4 ">
                        <h2 class="text-3xl font-bold text-white mt-5 ">${name}</h2>
                        <p class="text-white"> <span class="text-green-500 text-7xl ">.</span>${status}-${species}</p><br>
                        <p class="text-gray-400">Last Known location</p>
                        <h2 class="text-white">${location.name}</h2><br>
                        <p class="text-gray-400">First seen in:</p>
                        <h2 class="text-white">${origin.name}</h2>
                    </div>
                </div>
            </div>
        `
    })

    app.innerHTML=card

    

} catch (error) {
    console.log("error ", error)
}
    
}
recorrerPersonajes() 