

export default function CrudTableRow({el,setDataToEdit,deleteData}){

    let {id,name,ppp,app,rpp} = el;

    return(
        <>
        <tr>
            <td>{name}</td>
            <td>{ppp}</td>
            <td>{app}</td>
            <td>{rpp}</td>
            <td>
                <button type="button" className="btn btn-light table-btn mx-2" onClick={()=>setDataToEdit(el)}>Editar</button>
                <button type="button" className="btn btn-light table-btn mx-2" onClick={()=>deleteData(id)}>Eliminar</button>
            </td>
        </tr>
        </>
    )
}