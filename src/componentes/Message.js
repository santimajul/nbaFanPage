
export default function Message({err}){

    return(
        <>
        <h2>{`Error: ${err.status}. ${err.statusText}`}</h2>
        </>
    )
}