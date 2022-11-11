const listaClientes = () => 
fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json()); //llamada al back

export const clientServices = {
  listaClientes
};

//se encarga de mandar los archivos al servidor 