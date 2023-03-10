import React from 'react';
import CrudTableRow from "./crudTableRow";


export default function CrudTable({data,setDataToEdit,deleteData}){

    return(
        <div className='container'>
        <table className="table table-dark table-striped">
        <thead>
                <tr>
                    <th>Nombre</th>
                    <th>PPP</th>
                    <th>APP</th>
                    <th>RPP</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
            {data.length > 0 ? (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          ) : (
            <tr>
              <td colSpan="5">Sin datos</td>
            </tr>
          )}
            </tbody>

        </table>
        </div>
    )
}