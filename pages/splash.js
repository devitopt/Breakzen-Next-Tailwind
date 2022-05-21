import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import firebase from "./api/firebase";
import { useCollection } from "react-firebase-hooks/firestore";

export default function Splash() {
  const [email, setEmail] = useState("");
  const [bModal, setModal] = useState(false);
  const [msg, setMsg] = useState("");
  const [emails, emailsLoading, emailsError] = useCollection(
    firebase.firestore().collection("emails"),
    {}
  );

  const validateEmail = (emailAdress) => {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
      return true;
    } else {
      return false;
    }
  };

  const unDoubleEmail = (emailAddress) => {
    const found = emails.docs.find((doc) => doc.data().email == emailAddress);
    return found ? false : true;
  };

  const addEmail = async () => {
    if (validateEmail(email)) {
      if (unDoubleEmail(email)) {
        const db = firebase.firestore();
        await db
          .collection("emails")
          .doc()
          .set({
            email: email,
          })
          .then(() => {
            setMsg("Thank you for joining us!");
            setModal(true);
          });
      } else {
        setMsg("Sorry, the email address is already registered.");
        setModal(true);
      }
    } else {
      setMsg("Sorry, you entered invalid email address.");
      setModal(true);
    }
  };

  return (
    <div className="bg-back">
      <Head>
        <title> BREAKZEN </title>
      </Head>

      <div className="w-full h-full">
        <div className="absolute w-full h-full flex items-center bg-splash">
          <div className="absolute flex w-full md:h-full h-5/6">
            <Image src="/images/splash.png" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div
          container
          className="absolute p-4 md:p-10 right-0 w-1/2 h-full bg-white flex items-center"
        >
          <div contentWrapper>
            <div className="md:pl-24 pb-4 md:pb-8">
              <Image
                src="/images/breakzen elevate.png"
                width="300"
                height="90"
              />
            </div>
            <p className="text-xs md:text-lg text-blue-700 font-bold mb-2">
              The New Generation in Hiring Professionals
            </p>
            <p className="text-base md:text-4xl font-black mb-4 md:mb-6 leading-tight">
              LAUNCHING SOON
            </p>
            <p className="text-xs md:text-base text-gray-400">
              Relief | Grow | Center yourself
            </p>
            <div className="w-2/3 h-px bg-gray-300 my-4 md:my-8" />
            <p className="text-base md:text-xl font-black leading-none mb-2">
              Sign up for early access
            </p>
            <p className="text-xs text-base text-gray-400">
              We do not spam. Will not share the email to anyone
            </p>
            <div className="flex flex-col md:flex-row my-4 md:my-8">
              <div className="relative flex">
                <input
                  className="border rounded-sm text-xs md:text-base w-full md:w-72 h-8 md:h-10 pl-6 md:pl-12"
                  placeholder="Enter your email address here..."
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <div className="absolute left-2 md:left-4 top-1 md:top-2">
                  <Image src="/images/envelope.png" width="15" height="11" />
                </div>
              </div>
              <a
                className="md:w-32 h-8 md:h-10 mt-2 md:mt-0 bg-blue-500 text-xs md:text-base text-white md:font-bold flex justify-center cursor-pointer"
                onClick={addEmail}
              >
                <div className="flex flex-col justify-center">Notify me</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {bModal && (
        <div className="absolute top-0 w-full h-full p-4 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl p-4 flex flex-col items-center">
            <div className="pb-2">{msg}</div>
            <button onClick={() => setModal(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}
