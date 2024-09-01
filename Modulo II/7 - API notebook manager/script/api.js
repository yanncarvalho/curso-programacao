import {baseURL} from "./constraint.js";
import {buildError, buildSuccess} from "./util.js";

export default{
    getNoteBookById, deleteNoteBook, getNoteBookList, updateNoteBook, createNoteBook
}

function msgErrorByStatus(status){
    if(status === 400){
        return "Invalid id supplied";
    }

    if(status === 404){
        return "notebook not found";
    }

    return "something wrong happened"

}


async function getNoteBookById(id){
    const response = await fetch(baseURL+"/"+id);


    if(!response.ok){
        const msg = msgErrorByStatus(response.status);
        return buildError(msg);
    }


    const data = await response.json();

    if(Object.keys(data).length === 0){
        const msg = msgErrorByStatus(-1);
        return buildError(msg)
    }
    return buildSuccess(data)

}

async function deleteNoteBook(id){
    const response =  await fetch(`${baseURL}/${id}`, { method:"DELETE" },);
    if(!response.ok || response.status !== 202){
        const msg = msgErrorByStatus(response.status);
        return buildError(msg)
    }
    return buildSuccess("delete successfully!")
}

async function getNoteBookList(currPage, intervalPage){
    const response = await fetch(`${baseURL}?page=${currPage}&pageSize=${intervalPage}`);

    if(!response.ok){
        const msg = msgErrorByStatus(response.status);
        return buildError(msg)
    }

    const data = await response.json();

    return buildSuccess(data?._embedded?.noteBookList ?? []);

 }

 
 async function updateNoteBook(id, sendData)  {
    const response = await fetch(`${baseURL}/${id}`,{
    method:"PATCH",
    headers: new Headers({'content-type': 'application/json'}),
    body: JSON.stringify(sendData),
   });

   if(!response.ok){
       const msg = msgErrorByStatus(response.status);
       return buildError(msg)
   }

   const data = await response.json();
   if(!data){
     const msg = msgErrorByStatus(-1);
     return buildError(msg)
   }

   return buildSuccess("update successfully!")
   
}


async function createNoteBook(sendData)  {
    
    const response = await fetch(baseURL, {
        method: "POST",
        headers: new Headers({"content-type" : "application/json"}),
        body: JSON.stringify(sendData)
    });

  
    if(!response.ok){
        const msg = msgErrorByStatus(response.status);
        return buildError(msg)
    }
 
    const data = await response.json();
    if(!data){
      const msg = msgErrorByStatus(-1);
      return buildError(msg)
    }
 
    return buildSuccess(data)

   
}


