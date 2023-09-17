import React, {useState, useEffect} from "react";

const CategoriaScreen =()=>{

    /* useStates-> manejo de estados locales a nivel de componente */
    const [contador, setContador] = useState(0)
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [productos, setProductos] =useState([])
    const [categorias, setCategorias] =useState({})
    const [persona, setPersona] =useState("")
    const [isLogged, setIsLogged] =useState(false)


    /* useEffect -> reemplaza el ciclo de vida de los componentes basados en clases */
    React.useEffect(()=>{
        console.log("Me ejecuto cada que tengo un cambio")
    }) /* sin argumentos se va a disparar cada que el componente sufra un cambio */

    React.useEffect(()=>{
        console.log("Me ejecuto un sola vez cuando se monta el DOM")
        
    },[])    
     
    React.useEffect(()=>{
        console.log("Me ejecuto un sola vez cuando se monta el DOM y cada que mis dependencias [contador] sufren un cambio")     
    },[contador,nombre,apellido])

     

    React.useEffect(()=>{
        return()=>{    
            
            console.log ("Me ejecuto cada que se destruye el DOM")
        }        
    },[])
    /* Hooks-> para componentes funcionales, permite tener caracteristicas limitadas a los componentes */
    /* State -> para componentes basados en clases */
    const incrementarContador =()=>{
        setContador(contador + 1)
    }
    const handleChangeName =(e) =>{
        const {value, name}=e.target;
        setNombre (value);
    }
    const handleChangeApellido =(e) =>{
        const {value, name}=e.target;
        setApellido (value);
    }
    return(
        <>
        contador:{contador} <br />
        Valor de Nombre:{nombre} <br />
        Valor de Apellido: {apellido} <br />

        
        <label>Nombre</label>
        <input type="text" onBlur={(e)=>handleChangeName(e)}></input><br />
        <label>Apellido</label>
        <input type="text" onBlur={(e)=>handleChangeApellido(e)}></input><br />
        <button type="button" onClick={()=>incrementarContador}>incrementear</button>


        </>
    
    )
}

export default CategoriaScreen;