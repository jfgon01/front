import React from "react";

const PedidosFormStep1 =(props)=>{

    const {clienteSeleccionado, setClienteSeleccionado}= props;

    return(
        <>
            <div className="row">
                <div className="col">
                    <label>Seleccionar Cliente</label>
                    <select className='form-control'value={clienteSeleccionado} onChange={(e)=>setClienteSeleccionado(e.target.value)}>
                        <option value="">Seleccionar</option>
                        <option value="Daniel">Daniel</option>
                        <option value="Pedro">Pedro</option>
                        <option value="Pablo">Pablo</option>
                        <option value="Alejandro">Alejandro</option>
                    </select>
                </div>
            </div>           
        </>    
    )
}

export default PedidosFormStep1;