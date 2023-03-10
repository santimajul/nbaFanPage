import { useEffect, useState } from "react"

let initialForm = {
    id: null,
    name: '',
    ppp: '',
    app: '',
    rpp: ''
}
export default function CrudForm({updateData,createData,dataToEdit,setDataToEdit}){

    const [form,setForm] = useState(initialForm);

    useEffect(() => {
        if (dataToEdit) {
          setForm(dataToEdit);
        } else {
          setForm(initialForm);
        }
    }, [dataToEdit]);

    const handleChange = e =>{

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e =>{
        e.preventDefault();

        if(!form.name || !form.ppp || !form.app || !form.rpp){
            alert('Faltan datos!!');
            return;
        };

        if(form.id === null){
            createData(form);
        }else{
            updateData(form);
        };

        handleReset();
    };

    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
      };

    return(
        <>
        <h1 className="accion">{form.id === null? 'Agregar:' : 'Editar'}</h1>
        <div className="container">
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <input type='text' className='text-input' name="name" placeholder="name" onChange={handleChange} value={form.name}/>
                    <input type='text' className='text-input' name="ppp" placeholder="ppp" onChange={handleChange} value={form.ppp}/>
                    <input type='text' className='text-input' name="app" placeholder="app" onChange={handleChange} value={form.app}/>
                    <input type='text' className='text-input' name="rpp" placeholder="rpp" onChange={handleChange} value={form.rpp}/>
                    <input type="submit" value="Enviar" className="btn btn-light form-btn"/>
                </form>
            </div>
        </div>
        </>
    )
}