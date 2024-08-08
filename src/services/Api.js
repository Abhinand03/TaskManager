import {commanapi} from "./Apiconnection"

const base_url="http://localhost:5000"

//add task
export const addtask=async(data,headers)=>{
    return  await commanapi("POST",`${base_url}/addtask`,data,headers)
}


//veiw all task
export const gettask=async(id,headers)=>{
    return await commanapi("GET",`${base_url}/gettask/${id}`,"",headers)
}


//update a task
export const updatetask=async(data)=>{
    return await commanapi("PUT",`${base_url}/update`,data,"")
}

//delete atask
export const delteTask =async(id)=>{
    return await commanapi("DELETE",`${base_url}/delt/${id}`,{},"")
}

//user registration
export const register=async(data)=>{
    return await commanapi("POST",`${base_url}/reg`,data,"")
}

//user login
export const login=async(data)=>{
    return await commanapi('POST',`${base_url}/log`,data,"")
}