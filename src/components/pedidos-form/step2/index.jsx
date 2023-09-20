import React from "react";

const PedidosFormStep2 =(props)=>{

    const {productoSeleccionado, setProductoSeleccionado}= props;

    const productos =[
        {
            id: 1,
            nombre: "Zapatillas Hombre",
            Imagen: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.estilobike.co%2Fproducto%2Ftenis-zapatillas-montana-hombre-bicicleta-mtb%2F&psig=AOvVaw32lW9vLtrjnply_gWg5IRS&ust=1695261380232000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCICM7_SKuIEDFQAAAAAdAAAAABAG",
            Categoria: "Hombre",
            precio: 85.000

        },
        {
            id: 2,
            nombre: "Zapatillas Mujer",
            Imagen: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lavanguardia.com%2Fcomprar%2Fmoda-belleza%2F20220831%2F8494016%2Fzapatillas-ponerte-forma-despues-vacaciones-nike-adidas-puma-reebok-affi-a2s.html&psig=AOvVaw29Mf5Y_s5nrSHEkSkifM9t&ust=1695261445201000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLiA8ZOLuIEDFQAAAAAdAAAAABAK",
            Categoria: "Mujer",
            precio: 85.000

        },
        {
            id: 3,
            nombre: "Zapatillas Deportiva Hombre",
            Imagen: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dafiti.com.co%2FZapatilla-Tennis-Deportiva-Hombre-Color-Negro-932755.html&psig=AOvVaw18dAfkCCs-LbWqMn_RZ6YV&ust=1695261484001000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCND1uKaLuIEDFQAAAAAdAAAAABAH",
            Categoria: "Hombre",
            precio: 85.000

        }
    ]
    const handdleAddProducts = ((productData)=>{
        setProductoSeleccionado([...productoSeleccionado, productData])
        alert("Procducto Agregado Exitosamente")
    })

    return(
        <>
            <div className="row">
                <div className="col">
                    <div className="row" >
                        {productos && productos.length > 0 && productos.map((data,index)=>{
                            return(
                            <div className="col-lg-3" key={index}>
                                    <div className="card" >
                                        <div className="card-body" >
                                            <div className="card-tittle">{data.nombre} </div>
                                            <img src="{data.imagen}" alt="..." className="img-fluid"/>
                                            <p><b>Precio: </b>{data.precio}</p>                                 
                                            <button type="button" onClick={()=>handdleAddProducts(data)} className="btn btn-info">Agregar</button>
                                        </div>                             
                                    </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>           
        </>    
    )
}

export default PedidosFormStep2;