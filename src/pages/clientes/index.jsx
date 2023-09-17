import React from "react";

const ClienteScreen = () => {

    const [formulario, setFormulario] = React.useState({});
    const [responseApi, setResponseApi] = React.useState(null);
    React.useEffect(() => {
        console.log("[FORMULARIO]", formulario)

        if(Object.keys(formulario).length > 0 &&  Object.keys(formulario).includes("correo")){

            if(formulario.correo != ""){
                validateClient(formulario.correo)
            }
            console.log ("Se ah llenado el correo")
        }
        
    }, [formulario]);

    const validateClient =(correo)=>{
        const payload = {
            correo:correo
        }
        fetch("http://localhost:4000/api/v1/clientes/check",{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body:JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {
            setResponseApi(data.message)
        })
        .catch(error =>console.log("Se presento Un error En la consulta a al API", error))


    }
    const handleChange = (e) => {
        const {value, name}= e.target;
        setFormulario({...formulario, [name]:value});

    }
    return (
        <>
        <div className="container">
            <div className="row" >
                <div className="col-lg-6">
                    <div className="mb-3">
                        <label>Nombres</label>
                        <input type="text" className="form-control" name="nombre" onBlur={(e) => handleChange(e)} />
                    </div>                    
                </div>
                <div className="col-lg-6">
                    <div className="mb-3">
                        <label>Apellidos</label>
                        <input type="text" className="form-control" name="apellido" onBlur={(e) => handleChange(e)} />
                    </div>
                </div>                
            </div>
            <div className="row">
                <div className="col-lg-12" >
                    <div className="mb-3">
                         <label>Correo Electronico</label>
                        <input type="text" className="form-control" name="correo" onBlur={(e) => handleChange(e)} />
                    </div>
                </div>
            </div>
            {responseApi &&
            <div className="alert alert-danger text-center">
            {responseApi}
            </div>
            }
        </div>                   
         


        </>

    )
}

export default ClienteScreen;