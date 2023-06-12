import React from 'react';
import { useEffect, useState } from 'react';
import '../assets/css/formSearch.css'
import Switch from "react-switch";
import SliderProp from './SliderProp';
import propiedades from '../exports/Propiedades';




function FormSearch() {

    const [properties, setProperties] = useState([]);

    const [propertiesFiltered, setPropertiesFiltered] = useState([]);
    const [propertiesFilteredSale, setPropertiesFilteredSale] = useState([]);
    const [propertiesFilteredRent, setPropertiesFilteredRent] = useState([]);
    
   
    const [modeSale, setModeSale] = useState(true);
    const [filteredId, setFilteredId] = useState(false);
    const [id, setId] = useState("");
    const [filteredLocation, setFilteredLocation] = useState(false);
    const [location, setLocation] = useState("");
    const [filteredType, setFilteredType] = useState(false);
    const [type, setType] = useState("");
    const [priceMin, setPriceMin] = useState("");
    const [filteredPriceMin, setFilteredPriceMin] = useState(false);
    const [priceMax, setPriceMax] = useState("");
    const [filteredPriceMax, setFilteredPriceMax] = useState(false);
    const [filteredPesos, setFilteredPesos] = useState(false);
    const [bedroomMin, setBedroomMin] = useState("");
    const [filteredBedroomMin, setFilteredBedroomMin] = useState(false);
    const [bedroomMax, setBedroomMax] = useState("");
    const [filteredBedroomMax, setFilteredBedroomMax] = useState(false);
    const [filteredNoGarage, setFilteredNoGarage] = useState(false);
    const filters = [{
        campo:'sale',
        valor:true,
        filtro:modeSale},{
        campo:'id',
        valor:id,
        filtro:filteredId},{
        campo:'location',
        valor:location,
        filtro:filteredLocation},{ 
        campo:'type',
        valor:type,
        filtro:filteredType},{ 
        campo:'priceMin',
        valor:priceMin,
        filtro:filteredPriceMin},{ 
        campo:'priceMax',
        valor:priceMax,
        filtro:filteredPriceMax},{ 
        campo:'money',
        valor:false,
        filtro:filteredPesos},{ 
        campo:'bedroomMin',
        valor:bedroomMin,
        filtro:filteredBedroomMin},{ 
        campo:'bedroomMax',
        valor:bedroomMax,
        filtro:filteredBedroomMax},{ 
        campo:'garage',
        valor:true,
        filtro:filteredNoGarage}]
    
    useEffect(() => {
        setProperties(propiedades);
        var resultadoBusqueda = propiedades.filter((elemento) => {
            if (elemento.mode.includes("Venta")
            ) {
                return elemento;

            }
        })
        setPropertiesFiltered(resultadoBusqueda);
        setPropertiesFilteredSale(resultadoBusqueda);
        //Recupero las propiedades de la base de datos
        // // recupero el Id de usuario de la sesión para buscar el resto de datos del usuario
        // let userId = sessionStorage.getItem('userId')
        // // Verifico si aún no se ha solicitado los datos de usuario y los solicito        
        // if (user.length === 0) {
        // 	fetch('https://jsonplaceholder.typicode.com/users')
        // 		.then(response => response.json())
        // 		.then(usuario => {
        // 			console.log(usuario)
        //       //setUser(usuario.data)
        // 		})
        // 		.catch((err) => {
        // 			console.log(err)
        // 		})

    }, [])

  


const handleChangeSwitchMoney = () => {
    if (filteredPesos) {
       
        setPropertiesFiltered(filterDollar);
        resetFilters();
        
        } else {
       
        setPropertiesFiltered(filterPesos);
        resetFilters();
 
        }
    }
//filtro por Moneda
const filterDollar = () => {

    var resultadoBusqueda = properties.filter((elemento) => {
        
            return elemento.money==="U$S";
    })
  
    setFilteredPesos(false);
    
    return resultadoBusqueda;
}

const filterPesos = () => {
    console.log('busco Pesos')
    var resultadoBusqueda = properties.filter((elemento) => {
       
            return elemento.money==="$";

        })
  
    setFilteredPesos(true);
    console.log(resultadoBusqueda)
    return resultadoBusqueda;
}

const handleChangeSwitchGarage = () => {
    if (filteredNoGarage) {
       
        setPropertiesFiltered(filterGarage);
        
        
        } else {
       
        setPropertiesFiltered(filterNoGarage);
       
 
        }
    }
//filtro por cochera
const filterGarage = () => {

    var resultadoBusqueda = properties.filter((elemento) => {
        
            return elemento.garage===true;
    })
  
    setFilteredNoGarage(false);
    
    return resultadoBusqueda;
}

const filterNoGarage = () => {
    console.log('busco Sin garage')
    var resultadoBusqueda = properties.filter((elemento) => {
       
            return elemento.garage===false;

        })
  
    setFilteredNoGarage(true);
    console.log(resultadoBusqueda)
    return resultadoBusqueda;
}

//Filtro por Alquiler
    const filterRent = () => {

        var resultadoBusqueda = properties.filter((elemento) => {
            if (elemento.mode.includes("Alquiler")
            ) {
                return elemento;

            }
        })
        
        setModeSale(false);
        setPropertiesFilteredRent(resultadoBusqueda);
        return resultadoBusqueda;
    }


//filtro por Venta
const filterSale = () => {

        var resultadoBusqueda = properties.filter((elemento) => {
            if (elemento.mode.includes("Venta")
            ) {
                return elemento;

            }
        })
      
        setModeSale(true);
        setPropertiesFilteredSale(resultadoBusqueda);
        return resultadoBusqueda;
    }

// Filtro por Id
const filterId = (terminoBusqueda,propertiesToFilter) =>{
    var resultadoBusqueda = propertiesToFilter.filter((elemento) => {
        if (elemento.id.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        ) {
            return elemento;
        }
        
    })
    setFilteredId(true);
    return resultadoBusqueda;
}

//Filtro por Ubicación
const filterLocation = (terminoBusqueda,propertiesToFilter) =>{
    var resultadoBusqueda = propertiesToFilter.filter((elemento) => {
        if (elemento.location.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            || (elemento.departament.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()))
        ) {
            return elemento;

        }
    })
    setFilteredLocation(true);
    
    return resultadoBusqueda;
}

// Filtro por Tipo
const filterType = (terminoBusqueda,propertiesToFilter) =>{
var resultadoBusqueda = propertiesToFilter.filter((elemento) => {
    if (elemento.type.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    ) {
       
        return elemento;

    }
})
setFilteredType(true);
console.log(filters)
return resultadoBusqueda;
}

//Filtro por Precio Minimo
const filterPriceMin =(terminoBusqueda,propertiesToFilter) =>{
    var resultadoBusqueda = propertiesToFilter.filter((elemento) => {
                return elemento.price >= terminoBusqueda;
    
    })
    setFilteredPriceMin(true);
    
    return resultadoBusqueda;
    }

//Filtro por Precio Máximo
const filterPriceMax =(terminoBusqueda,propertiesToFilter) =>{
    if(modeSale){
        propertiesToFilter=propertiesFilteredSale
    } else {
        propertiesToFilter=propertiesFilteredRent
    }
    var resultadoBusqueda = propertiesToFilter.filter((elemento) => {
                return elemento.price <= terminoBusqueda;
    
    })
    setFilteredPriceMax(true);
    return resultadoBusqueda;
    }
//Filtro por Habitaciones Minimas
const filterBedroomMin =(terminoBusqueda,propertiesToFilter) =>{
    var resultadoBusqueda = propertiesToFilter.filter((elemento) => {
                return elemento.bedroom >= terminoBusqueda;
    
    })
    setFilteredBedroomMin(true);
    
    return resultadoBusqueda;
    }
//Filtro por habitaciones Máximas
const filterBedroomMax =(terminoBusqueda,propertiesToFilter) =>{
    if(modeSale){
        propertiesToFilter=propertiesFilteredSale
    } else {
        propertiesToFilter=propertiesFilteredRent
    }
    var resultadoBusqueda = propertiesToFilter.filter((elemento) => {
                return elemento.bedroom <= terminoBusqueda;
    
    })
    setFilteredBedroomMax(true);
    
    return resultadoBusqueda;
    }

//Aplica filtro por venta y reseta todos los filtros
const buttonSale=()=>{
    setModeSale(true);
    resetFilters();
    setPropertiesFiltered(filterSale());
}

//Aplica filtro por alquiler y reseta todos los filtros
const buttonRent=()=>{
    setModeSale(false);
    resetFilters();
    setPropertiesFiltered(filterRent());
   
}

// Manejo de los eventos en el formulario
const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    console.log(name)
    console.log(value)   
        switch (name){
            case 'sale':
                setModeSale(true);
                setPropertiesFiltered(filterSale(value,properties))
                break;
            case 'id':
                if(value!=""){
                    setFilteredId(true);
                    setId(value);
                    setPropertiesFiltered(filterId(value,propertiesFiltered))
                } else {
                    
                    setId(value);
                    setFilteredId(false);
                    //Aplico otros filtros si existen y envío el filtro que acabo de eliminar
                    applyFilters(1);
                }
                break;
            case 'location':
                if(value!=""){
                    setFilteredLocation(true);
                    setLocation(value);
                    console.log(filters)
                    setPropertiesFiltered(filterLocation(value,propertiesFiltered))
                } else {
                    
                    setLocation(value);
                    setFilteredLocation(false);
                    //Aplico otros filtros si existen y envío el filtro que acabo de eliminar
                    applyFilters(2);
                }
            break;
            case 'type':
                if(value!=""){
                    setFilteredType(true);
                    setType(value);
                    setPropertiesFiltered(filterType(value,propertiesFiltered))
                } else {
                    
                    setType(value);
                    setFilteredType(false);
                    //Aplico otros filtros si existen y envío el filtro que acabo de eliminar
                    applyFilters(3);
                }
            break;
            case 'priceMin':
                if(value!=""){
                    setFilteredPriceMin(true);
                    setPriceMin(value);
                    setPropertiesFiltered(filterPriceMin(value,propertiesFiltered))
                } else {
                    
                    setPriceMin(value);
                    setFilteredPriceMin(false);
                    //Aplico otros filtros si existen y envío el filtro que acabo de eliminar
                    applyFilters(4);
                }
            break;
            case 'priceMax':
                if(value!=""){
                    setFilteredPriceMax(true);
                    setPriceMax(value);
                    setPropertiesFiltered(filterPriceMax(value,propertiesFiltered))
                } else {
                    
                    setPriceMax(value);
                    setFilteredPriceMax(false);
                    //Aplico otros filtros si existen y envío el filtro que acabo de eliminar
                    applyFilters(5);
                }
            break;
            case 'bedroomMin':
                if(value!=""){
                    setFilteredBedroomMin(true);
                    setBedroomMin(value);
                    setPropertiesFiltered(filterBedroomMin(value,propertiesFiltered))
                } else {
                    
                    setBedroomMin(value);
                    setFilteredBedroomMin(false);
                    //Aplico otros filtros si existen y envío el filtro que acabo de eliminar
                    applyFilters(7);
                }
            break;
            case 'bedroomMax':
                if(value!=""){
                    setFilteredBedroomMax(true);
                    setBedroomMax(value);
                    setPropertiesFiltered(filterBedroomMax(value,propertiesFiltered))
                } else {
                    
                    setBedroomMax(value);
                    setFilteredBedroomMax(false);
                    //Aplico otros filtros si existen y envío el filtro que acabo de eliminar
                    applyFilters(8);
                }
            break;
        }
        
     

        
    }

//Reset filterpriceMins

const resetFilters= ()=>{
    setFilteredId(false);
    setId("");
    setFilteredLocation(false);
    setLocation("");
    setFilteredType(false);
    setType("");
    setFilteredPriceMin(false);
    setPriceMin("");
    setFilteredPriceMax(false);
    setPriceMax("");
    setFilteredPesos(false);
    setFilteredBedroomMin(false);
    setBedroomMin("");
    setFilteredBedroomMax(false);
    setBedroomMax("");
    setFilteredPesos(true);
}

//Verifica y aplica filtros existentes

const applyFilters= (filtroAEliminar)=>{
console.log(filters)
var baseDeBusqueda = properties;
for (let i= 0; i<10 ; i++){
   
    if(i==filtroAEliminar){
        continue;
    }
        if(filters[i].filtro){
            console.log(filters[i])
            baseDeBusqueda = filter(filters[i].valor, filters[i].campo,baseDeBusqueda);
            console.log(baseDeBusqueda) 
        }
    
}

    console.log(baseDeBusqueda)         
    setPropertiesFiltered(baseDeBusqueda);  
}
    
  

const filter = (terminoBusqueda, name, baseDeBusqueda) => {
        console.log(terminoBusqueda)
        console.log(name)
        switch (name) {
            case "sale":
                if(terminoBusqueda){
                    return filterSale();
                } else {
                    return filterRent();
                }
                break;
            case "id":
                setId(terminoBusqueda);
                
                if (terminoBusqueda != "") {
                   
                    return filterId(terminoBusqueda,baseDeBusqueda)
                } else {
                       
                    //Eliminar filtro
                    setFilteredId(false);
                    
                }
                break;
            case "location":
                setLocation(terminoBusqueda);
                
                if (terminoBusqueda != "") {
                   
                    return filterLocation(terminoBusqueda,baseDeBusqueda)
                } else {
                       
                    //Eliminar filtro
                    setFilteredLocation(false);
                    
                }
                break;
            case "type":
                setType(terminoBusqueda);
                
                if (terminoBusqueda != "") {
                   
                    return filterType(terminoBusqueda,baseDeBusqueda)
                } else {
                       
                    //Eliminar filtro
                    setFilteredType(false);
                    
                }
                break;
            case "priceMin":
                setPriceMin(terminoBusqueda);
                    
                if (terminoBusqueda != "") {
                       
                    return filterPriceMin(terminoBusqueda,baseDeBusqueda)
                } else {
                           
                    //Eliminar filtro
                    setFilteredPriceMin(false);                
                    }
                break;    
            case "priceMax":
                setPriceMax(terminoBusqueda);
                        
                if (terminoBusqueda != "") {
                           
                    return filterPriceMax(terminoBusqueda,baseDeBusqueda)
                } else {
                             
                        //Eliminar filtro
                    setFilteredPriceMax(false);                
                        }
                break;
            case "money":
                if(terminoBusqueda){
                    return filterDollar();
                } else {
                    return filterPesos();
                }
            break;
            case "bedroomMin":
                setBedroomMin(terminoBusqueda);
                    
                if (terminoBusqueda != "") {
                        return filterBedroomMin(terminoBusqueda,baseDeBusqueda)
                } else {
                               
                        //Eliminar filtro
                    setFilteredBedroomMin(false);                
                    }
            break;
            case "bedroomMax":
                setBedroomMax(terminoBusqueda);
                    
                if (terminoBusqueda != "") {
                        return filterBedroomMax(terminoBusqueda,baseDeBusqueda)
                } else {
                               
                        //Eliminar filtro
                    setFilteredBedroomMax(false);                
                    }
            break;
            case "garage":
                if(terminoBusqueda){
                    return filterGarage();
                } else {
                    return filterNoGarage();
                }
            break;                
        }
    }


    return (
        <React.Fragment>

            <div className='form-container'>
                <div className="modalidad">
                    <button className={`${modeSale ? "" : "active"} btn`} onClick={buttonRent}>Alquiler
                    </button>
                    <button className={`${modeSale ? "active" : ""} btn`} onClick={buttonSale}>Venta
                    </button>
                </div>
                <div>
                    <label>ID</label>
                    <input
                        name="id"
                        className={`${filteredId ? "active" : ""} form-control `}
                        value={id}
                        placeholder="ID"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Localidad</label>
                    <input
                        name="location"
                        className={`${filteredLocation ? "active" : ""} form-control `}
                        value={location}
                        placeholder="Localidad"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Tipo</label>
                    <select
                        name="type"
                        className={`${filteredType ? "active" : ""} form-control `}
                        value={type}
                        placeholder="Tipo"
                        onChange={handleChange}
                    >   <option></option>
                        <option>Casa</option>
                        <option>Departamento</option>
                        <option>Oficina</option>
                        <option>Lote</option>
                        <option>Lote Comercial</option>
                        <option>Finca</option>
                        <option>Loteo</option>
                        <option>Duplex</option>
                        <option>Triplex</option>
                        <option>Edificio</option>
                        <option>Cochera</option>
                        <option>Cabaña</option>
                    </select>
                </div>
                <div>
                    <label>Rango de Precio</label>
                    <input 
                        name="priceMin"
                        className={`${filteredPriceMin ? "active" : ""} form-control `}
                        value={priceMin}
                        placeholder="Min"
                    onChange={handleChange}
                    />
                    <input 
                        name="priceMax"
                        className={`${filteredPriceMax ? "active" : ""} form-control `}
                        value={priceMax}
                        placeholder="Max"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Pesos</label>
                    <Switch
                        checked={!filteredPesos}
                        onChange={handleChangeSwitchMoney}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <label>Dolares</label>
                </div>

                <div>
                    <label>Dormitorios</label>
                    <input 
                        name="bedroomMin"
                        className={`${filteredBedroomMin ? "active" : ""} form-control `}
                        value={bedroomMin}
                        placeholder="Min"
                        onChange={handleChange}
                    />
                    <input 
                        name="bedroomMax"
                        className={`${filteredBedroomMax ? "active" : ""} form-control `}
                        value={bedroomMax}
                        placeholder="Max"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Cochera</label>
                    <Switch
                        checked={!filteredNoGarage}
                        onChange={handleChangeSwitchGarage}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </div>
            </div>
            {(propertiesFiltered.length != 0) && <SliderProp propiedades={propertiesFiltered} />}
        </React.Fragment >
    )
}

export default FormSearch;