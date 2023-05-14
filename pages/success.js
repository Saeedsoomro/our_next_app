import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Store } from "@/utlils/store";
import Link from "next/link";
const Success = () => {
  const [response, setResponse] = useState();
  const [adminEmail, setAdminEmail] = useState();
  const { state, dispatch } = useContext(Store);
  const { userInfo, serviceInfo } = state.order;
  const {
    query: { session_id },
  } = useRouter();

  const getAdminEmail = async () => {
    const res = await axios({
      method: "get",
      url: "/api/getEmail",
    });
    if (res.status == 200) {
      setAdminEmail(res.data);
    }
  };

  const sendEmail = async (senderEmail, recieverEmail, name) => {
    try {
      const req = await axios({
        method: "post",
        url: "/api/sendEmail",
        data: {
          senderEmail: senderEmail,
          recieverEmail: recieverEmail,
          name: name,
          message: "nome",
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (session_id) {
      getAdminEmail();
      fetchPayment(session_id);
    }
  }, [session_id, adminEmail]);

  const fetchPayment = async (session_id) => {
    const res = await axios.get(`/api/checkout_sessions/${session_id}`);
    if (res.status == 200) {
      setResponse(res.data);
      if (adminEmail) {
        sendEmail(adminEmail, "ali4304518@cloud.neduet.edu.pk", userInfo.name);
        sendEmail("ali4304518@cloud.neduet.edu.pk", adminEmail, userInfo.name);
      }
    }
  };

  return (
    <>
      {!response ? (
        <div className="text-2xl text-center mt-20">loading...</div>
      ) : response.error ? (
        <div></div>
      ) : (
        <div className="py-4 px-8 rounded-md bg-gray-100 max-w-lg mx-auto">
          <h1 className="text-4xl text-black my-2">
            Thank you, {userInfo.name}
          </h1>
          <p className="my-2">You Shall recieve Confirmation message Soon</p>
          <div className="h-40 border my-10"></div>
          <Link href="/" className="underline hover:text-gray">
            Continue Browing
          </Link>
        </div>
      )}
    </>
  );
};

export default Success;
