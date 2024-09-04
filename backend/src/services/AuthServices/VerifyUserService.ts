import UserClients from "../../classes/UserClients";


const VerifyUserService = async (username : string, password: string): Promise<UserClients> => {
  const user: UserClients  = await UserClients.findOne({
    where: {
      username,
      password
    },
    attributes: ["id", "username", "password"] ,
  });

  return user;
};

export default VerifyUserService;
