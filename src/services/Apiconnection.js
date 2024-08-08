import axios from "axios";

export const commanapi=async(httpRequest,url,reqdata,reqheader)=>{
    const reqconfiq={
    method:httpRequest,
    url,
    data:reqdata,
    headers:reqheader?reqheader:{"Content-Type":"application/json"}
    }

    return await axios(reqconfiq).then((res)=>{return res}).catch((ere)=>{return ere})
    
}