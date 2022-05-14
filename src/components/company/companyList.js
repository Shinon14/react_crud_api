import React, { useEffect } from "react";
import * as CompanyServer from './CompanyServer';

// componentes:
import CompanyItem from "./CompanyItem";

// 

const CompanyList = () => {
    
    const [companies, setCompanies] = React.useState([]);

    const listCompanies = async() => {
        try {
            const res = await CompanyServer.listCompanies();
            const data = await res.json();
            setCompanies(data.companies);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        listCompanies();
    }, []);

    return (
        <div className="row">
            {companies.map((company) => (
                <CompanyItem key={company.id} company={company} listCompanies={listCompanies}/>
            ))}
        </div>
    )
};
export default CompanyList;