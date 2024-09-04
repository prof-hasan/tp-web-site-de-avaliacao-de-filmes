import api from "../../api";

const useSignIn = () => {


  const createUser = async (userData) => {
    try {
      const { data } = await api.post("/createUser", userData);
      return data;
    }catch(err){
        console.error(err)
    }
  };

  return {
    createUser,

  };


};
export default useSignIn;
