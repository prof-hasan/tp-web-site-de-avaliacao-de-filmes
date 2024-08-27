import api from "../../api";

const useAuth = () => {


  const handleLogin = async (userData) => {
    try {
      const { data } = await api.post("/auth", userData);
      return data;
    }catch(err){
        console.error(err)
    }
  };

  return {
    handleLogin,

  };


};
export default useAuth;
