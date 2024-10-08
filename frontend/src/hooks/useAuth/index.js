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

  const getUsers = async (userData) => {
    try {
      const { data } = await api.get("/getUsers", userData);
      return data.data;
    }catch(err){
        console.error(err)
    }
  };

  const editUsers = async (userData) => {
    try {
      const { data } = await api.put("/editUsers", userData);
      console.log(data);
    }catch(err){
        console.error(err)
    }
  };

  return {
    handleLogin,
    getUsers,
    editUsers
  };


};
export default useAuth;
