import React from 'react';
import { useEffect, useState } from "react";
import Cards from './cards';
import CrudForm from "./crudForm";
import CrudTable from './crudTable';
import Highlights from './highlights';
import News from './news';
import { httpHelper } from "./httpHelper";
import Loader from './Loader';
import Message from './Message';
import Navbar from './navbar';
import Footer from './footer';

export default function CrudApi(){
    let [db,setDb] = useState(null);
    let [dataToEdit, setDataToEdit] = useState(null);
    let [loader,setLoader] = useState(false);
    let [error,setError] = useState(null);

    let news = [
      {
        id: 0,
        url:'https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1244x304:1246x302)/origin-imgresizer.eurosport.com/2022/11/05/3484397-71035108-2560-1440.jpg',
        title: 'Kyrie did something'
      },
      {
        id: 1,
        url: 'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkzNDI4NTMzNDIxMjg2OTc5/anthony-davis-10-30-22.jpg',
        title: 'AD id injured'
      },
      {
        id: 2,
        url:'https://i.guim.co.uk/img/media/c0b2e63817d1efa70045451d436b8a55ba3b6612/0_127_5916_3550/master/5916.jpg?width=1200&quality=85&auto=format&fit=max&s=8fca5c6d2a4de0a9afa62a2df0b4dbec',
        title:'Warriors are serious candidates'
      },
      {
        id: 3,
        url: 'https://s.yimg.com/os/creatr-uploaded-images/2022-10/ff606bf0-5441-11ed-bfbf-ca6aa28d3ba7',
        title: 'DAME TIME! Lillard scores 60'
      },
      {
        id: 4,
        url: 'https://aroyalpain.com/wp-content/uploads/getty-images/2017/07/1087021644.jpeg',
        title:'Sacramento is out of play-off zone'
      },
      {
        id: 5,
        url: 'https://imagenes.elpais.com/resizer/R7IgU15Kql2nub6K8Yvkelxjpgo=/1960x1470/filters:focal(1880x1275:1890x1285)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/2U66PJGCLS2W3L5XVY73ALDBD4.jpg',
        title: 'Jokic made a triple-double'
      },
    ]

    let api = httpHelper();

    let url = 'http://localhost:5000/players'

    useEffect(() => {
        setLoader(true);
          api.get(url)
          .then((res) => {
            //console.log(res);
            if (!res.err) {
              setDb(res);
              setError(null);
            } else {             
              setDb(null);
              setError(res);
            }
            setLoader(false);
          });  
      }, [url]);

      const createData = (data)=>{
        data.id = Date.now();

        let options = {
            body: data,
            headers: { "content-type": "application/json" },
          };

          api.post(url,options)
          .then(res => {
            if(!res.err){
                setDb([...db,res]);
            }else{
                setError(res)
            }}
            )
      };

      const updateData = (data)=>{

        let endpoint = `${url}/${data.id}`;

        let options = {
            body: data,
            headers: { "content-type": "application/json" },
          };

          api.put(endpoint,options)
          .then(res => {
            if(!res.err){
                let newData = db.map(el => el.id === data.id ? data : el)
                setDb(newData)
            }else{
                setError(res)
            }}
            )
      };

      const deleteData = (id) => {
        let isDelete = window.confirm(
          `¿Estás seguro de eliminar el registro con el id '${id}'?`
        );
    
        if (isDelete) {
          let endpoint = `${url}/${id}`;
          let options = {
            headers: { "content-type": "application/json" },
          };
    
          api.del(endpoint, options).then((res) => {
            //console.log(res);
            if (!res.err) {
              let newData = db.filter((el) => el.id !== id);
              setDb(newData);
            } else {
              setError(res);
            }
          });
        } else {
          return;
        }
      };

    return(
        <>
        <Navbar />
        { loader && <Loader />}
        { error && <Message message={error}/>}
        <section id='stats'>
        <CrudForm dataToEdit={dataToEdit} updateData={updateData} createData={createData} setDataToEdit={setDataToEdit}/>
        {db && (<CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>)}    
        </section>   
        <section id='highlights'>
          <div className='container-fluid'>
            <div className='row flex-wrap'>
              <div className='col-lg-8 col-12'>
                <Highlights />
              </div>
              <div className='col-lg-4 col-12'>
                <Cards /> 
              </div>
            </div>
          </div>
        </section>
        <section className='noticiero pt-4' id='news'>
          <div className='container-fluid'>
            <div className='d-flex justify-content-center align-items center my-3'>
              <h1>News</h1>
            </div>
            <div className='d-flex flex-row flex-wrap'>
              {news.map( el =><News key={el.id} url={el.url} title={el.title}/>)}
            </div>
          </div>
        </section>
        <section>
          <Footer />
        </section>
        </>
    )
}