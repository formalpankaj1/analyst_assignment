import axios from "axios"

export const getAllUsersInapi = async ()=>{
    try{
        const response = await axios({
            url: 'https://jsonplaceholder.typicode.com/users',
            method: "GET",
            Headers: {
                'Content-Type':'application/json'
            },
        });

        // console.log(response);
        if(response.status >=200 && response.status <=300){
            return response.data;            
        }else{
            throw new Error(response.data.message);
        }


    }catch(err){
        console.log(err);
        return {error : err.response.data.message ||  err.message};
    }
};
