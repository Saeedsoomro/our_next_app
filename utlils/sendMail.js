import axios from "axios";

const sendEmail = async (name, email, desc) => {
  return axios({
    method: "post",
    url: "/api/contact",
    data: {
      email: email,
      name: name,
      message: desc,
    },
  });
};

export default sendEmail;
