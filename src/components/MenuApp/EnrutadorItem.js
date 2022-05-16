import React from 'react';
import {useHistory} from 'react-router-dom'


const CompanyItem = ({company, listCompanies}) => {
    // console.log(props)
    // console.log(company)

    const history = useHistory();
    

    return (
        <div className="col-md-12 m-4 p-2 d-flex justify-content-between ">
            <button className=' btn btn-secondary' onClick={() => history.push(`/productoForm/`)}>Ingresar producto</button> 
            
            <button className=' btn btn-secondary' onClick={() => history.push(`/productoList/`)}>Listar Productos</button> 

            <button className=' btn btn-secondary' onClick={() => history.push(`/CompanyList/`)}>Iniciar sesion</button> 


        </div>
        
    )
};

export default CompanyItem;