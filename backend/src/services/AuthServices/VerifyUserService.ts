import User from "../../classes/User";


const VerifyUserService = async (username : string, password: string): Promise<User> => {
  const user: User  = await User.findOne({
    where: {
      username,
      password
    },
    attributes: ["id", "username", "password"] ,
  });

  return user;
};

export default VerifyUserService;
