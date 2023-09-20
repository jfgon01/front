import React from "react";

const PedidosFormStep3 =(props)=>{
 const {productoSeleccionado , clienteSeleccionado} = props;
    return(
        <>
            <div className="row">
                <div className="col">
                <h3>resumen</h3>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p><b>Ciente Seleccionado: </b> {clienteSeleccionado && clienteSeleccionado } </p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <h3>Productos Seleccionados</h3>
                <div className="row">
                    <div className="col">
                        <div className="row" >
                            {productoSeleccionado && productoSeleccionado.length > 0 && productoSeleccionado.map((data,index)=>{
                                return(
                                <div className="col-lg-3" key={index}>
                                    <div className="card" >
                                        <div className="card-body" >
                                            <div className="card-tittle">{data.nombre} </div>
                                            <img src="{data.imagen}" alt="..." className="img-fluid"/>
                                            <p><b>Precio: </b>{data.precio}</p>                                 
                                        </div>                             
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>        

                </div>
            </div>
                    
        </>    
    )
}


   
export default PedidosFormStep3;