const API_URL = "http://localhost:8000/products/measure-unit/";


export const listarMedidas = async () => {
    return await fetch(API_URL);  
};

export const getCompany = async (measureId) => {
    return await fetch(`${API_URL}${measureId}`);
};


export const registerCompany = async (newMeasureUnit) => {
  
    return await fetch(API_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': '94bf6de8ae932f6dc846f3ae839278de13c5276c'
        },
        body: JSON.stringify({
            "descripcion": String(newMeasureUnit.name).trim(),

        })
    })
};

export const deleteCompany = async (companyId) => {
  
    return await fetch(`${API_URL}${companyId}`, {
        method: "DELETE"
    })
};

export const updateCompany = async (companyId, updatedCompany) => {
  
    return await fetch(`${API_URL}${companyId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": String(updatedCompany.name).trim(),
            "foundation": parseInt(updatedCompany.foundation),
            "website": String(updatedCompany.website).trim(),
        })
    })
};