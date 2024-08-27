import api from "../../api";

const useAuth = () => {


  const handleLogin = async (userData) => {
    // setLoading(true);
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
