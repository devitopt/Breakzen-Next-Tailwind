import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import firebase from "./api/firebase";
import { useCollection } from "react-firebase-hooks/firestore";

function AppButton(props) {
  return (
    <div className="flex flex-row items-center bg-gray-700 px-4 py-2 rounded-xl">
      {props.button == "apple" ? (
        <svg
          id="_Group_2"
          data-name=" Group 2"
          xmlns="http://www.w3.org/2000/svg"
          width="27.007"
          height="33.196"
          viewBox="0 0 27.007 33.196"
        >
          <g id="_Group_3" data-name=" Group 3">
            <path
              id="_Path_"
              data-name=" Path "
              d="M32.529,23.619A7.542,7.542,0,0,1,36.12,17.29,7.721,7.721,0,0,0,30.036,14c-2.559-.268-5.041,1.532-6.346,1.532-1.329,0-3.337-1.506-5.5-1.46a8.1,8.1,0,0,0-6.819,4.157c-2.948,5.105-.748,12.607,2.075,16.733,1.413,2.02,3.064,4.276,5.226,4.2,2.114-.088,2.9-1.349,5.456-1.349,2.529,0,3.27,1.349,5.474,1.3,2.27-.037,3.7-2.029,5.063-4.069a16.706,16.706,0,0,0,2.314-4.713A7.289,7.289,0,0,1,32.529,23.619Z"
              transform="translate(-9.972 -5.965)"
              fill="#fff"
            />
            <path
              id="_Path_2"
              data-name=" Path 2"
              d="M23.74,14.042a7.425,7.425,0,0,0,1.7-5.322,7.558,7.558,0,0,0-4.89,2.53,7.072,7.072,0,0,0-1.744,5.123A6.248,6.248,0,0,0,23.74,14.042Z"
              transform="translate(-5.347 -8.72)"
              fill="#fff"
            />
          </g>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24.064"
          height="27.2"
          viewBox="0 0 24.064 27.2"
        >
          <path
            id="Union_3"
            data-name="Union 3"
            d="M.484,26.781h0A2.115,2.115,0,0,1,0,25.293V1.907A2.124,2.124,0,0,1,.483.421h0Q.516.385.551.352L.559.344h0A1.724,1.724,0,0,1,2.651.352L17.777,9.077h0l.094.054h0l5.1,2.945c1.455.836,1.455,2.209,0,3.05l-5.1,2.938-.039.021L2.652,26.844a2.384,2.384,0,0,1-1.171.357A1.328,1.328,0,0,1,.484,26.781Z"
            fill="#fff"
          />
        </svg>
      )}
      <div className="pl-4">
        <p className="text-white text-xs">{props.download}</p>
        <p className="font-bold text-white text-lg -mt-1">{props.from}</p>
      </div>
    </div>
  );
}

function TopMenu() {
  return (
    <div
      TopMenu
      className="flex flex-row justify-between mb-12 md:mb-32 mt-4 md:mt-12"
    >
      <div LogoSect className="flex flex-row items-center">
        <Link href="/landing">
          <a>
            <Image src="/images/logo.png" width="34" height="32" />
          </a>
        </Link>
        <Link href="/landing">
          <a>
            <p className="font-bold text-lg pl-4">BREAKZEN</p>
          </a>
        </Link>
      </div>
      <div LinkSect className="flex flex-row items-center">
        <div className="hidden md:flex items-center w-20 justify-between mr-12">
          <Link href="http://www.facebook.com/breakzenapp">
            <a>
              <Image src="/images/linkitem1.png" width="13" height="22" />
            </a>
          </Link>
          <Link href="http://www.instagram.com/breakzenapp">
            <a>
              <Image src="/images/linkitem2.png" width="27" height="26" />
            </a>
          </Link>
        </div>
        <button className="border rounded-full text-blac md:text-white font-bold px-aboutUs py-1">
          About Us
        </button>
      </div>
    </div>
  );
}

function Introduction() {
  return (
    <div Introduction className="flex flex-row justify-between mb-8">
      <div LeftBar className="flex flex-col w-full md:w-3/4">
        <div Title className="flex flex-row text-2xl md:text-5xl mb-6 md:mb-8">
          <p className="font-bold pr-4">Breakzen</p>
          <p>Mobile App</p>
        </div>
        <div description className="text-gray-600 mb-6 md:mb-12 md:text-lg">
          Breakzen is an online health and wellness platform specifically
          created to connect clients with licensed professionals. When joining
          Breakzen, our users can interact with each other by creating and
          participating in social groups, chatting online, and listing jobs to
          find the best professional that adapts to their specific needs. If
          you’re looking for a personal trainer, massage therapist, holistic
          healer or nutritionist, this platform has everything you’re looking
          for, as we will connect you with the best qualified and licensed
          professionals. If you are a professional in the health and wellness
          field and are looking to expand your business by connecting with other
          professionals and, most importantly, meeting new potential clients,
          then Breakzen is your place.
        </div>
      </div>
    </div>
  );
}

function FAG(props) {
  return (
    <div className="flex flex-col">
      <p className="text-fore font-bold text-lg mb-4">{props.question}</p>
      <p className="mb-4 md:text-lg">{props.answer}</p>
    </div>
  );
}

function FAGs() {
  return (
    <div className="flex flex-col mb-8 md:mb-48">
      <p className="font-bold text-xl mb-8">FAQs</p>
      <FAG
        question="Is there a membership?"
        answer="If you’re a client, then Breakzen is 100% free of charge for you. If you are a professional looking to meet new clients,
we offer 2 different memberships for you to choose the one that best suits you. 
"
      />
      <FAG
        question="Can I rest assured the professionals are licensed and trustworthy?"
        answer=" Absolutely! All out trainers, therapists, healers and nutritionist go through a background check process and need to verify 
their accounts before joining. If you want to check for yourself, you can always access the professional’s profile and read 
other clients’ reviews. 
"
      />
      <FAG
        question="What benefits do I obtain with the membership? "
        answer="Once you sign up as professional and choose your membership, you will have access to the latest marketing services such 
as 24/7 advertisement, interaction with clients, photos and videos and clients’ reviews, among many other benefits. "
      />
      <FAG
        question="How do I hire a professional?"
        answer="The process is easy and fast. You select the area/field you require, your location, your availability and your budget.
That’s it! You’re ready to check some profiles, connect with professionals and hire the one that best suits you. 
If you are looking for a specific service, you can always list a job and receive offers. 
"
      />
      <FAG
        question="Can I interact with other users? "
        answer="Of course! We are a community, and as such, we offer you the opportunity to participate in social groups and chat online. 
"
      />
    </div>
  );
}

function ComingSoon(props) {
  const setEmail = props.setEmail;
  return (
    <div className="flex flex-col">
      <p className="text-xl md:text-4xl text-center mb-2 md:mb-6">
        Search. Connect. Feel better.
      </p>
      <p className="text-xl md:text-4xl font-black text-center text-blue-400 mb-4 md:mb-12">
        COMING SOON
      </p>
      <div Newsletter className="flex flex-col justify-center md:flex-row mb-8">
        <div className="flex flex-col md:flex-row">
          <input
            className="px-4 py-2 w-full md:w-72 border border-gray-300 rounded-full mr-12 mb-4 md:mb-0"
            placeholder="Name@company.com"
            value={props.email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button
            className="px-6 py-2 rounded-full font-bold text-white bg-blue-400"
            onClick={props.onClick}
          >
            Newsletter
          </button>
        </div>
      </div>
      <div AppStore className="flex flex-row justify-center">
        <div className="flex">
          <AppButton
            button="apple"
            download="Download on the"
            from="App Store"
          />
          <div className="w-6" />
          <AppButton button="play" download="GET IT ON" from="Google Play" />
        </div>
      </div>
    </div>
  );
}

function Svg_Instogram() {
  return (
    <svg
      id="Instagram"
      xmlns="http://www.w3.org/2000/svg"
      width="30.078"
      height="30.079"
      viewBox="0 0 30.078 30.079"
    >
      <path
        id="Path_28705"
        data-name="Path 28705"
        d="M21.936,0H8.141A8.151,8.151,0,0,0,0,8.142V21.937a8.151,8.151,0,0,0,8.142,8.142H21.936a8.151,8.151,0,0,0,8.142-8.142V8.142A8.151,8.151,0,0,0,21.936,0Zm-6.9,23.264a8.224,8.224,0,1,1,8.224-8.224A8.234,8.234,0,0,1,15.038,23.264ZM23.459,8.754a2.43,2.43,0,1,1,2.43-2.43A2.433,2.433,0,0,1,23.459,8.754Zm0,0"
        transform="translate(0.001 0)"
        fill="#7dbdef"
      />
      <path
        id="Path_28706"
        data-name="Path 28706"
        d="M152.481,146.02a6.461,6.461,0,1,0,6.461,6.461A6.468,6.468,0,0,0,152.481,146.02Zm0,0"
        transform="translate(-137.442 -137.442)"
        fill="#7dbdef"
      />
      <path
        id="Path_28707"
        data-name="Path 28707"
        d="M388.659,96.3a.667.667,0,1,0,.667.667A.668.668,0,0,0,388.659,96.3Zm0,0"
        transform="translate(-365.199 -90.643)"
        fill="#7dbdef"
      />
    </svg>
  );
}

function Svg_Facebook() {
  return (
    <svg
      id="FB"
      xmlns="http://www.w3.org/2000/svg"
      width="16.283"
      height="29.606"
      viewBox="0 0 16.283 29.606"
    >
      <path
        id="Icon_feather-facebook"
        data-name="Icon feather-facebook"
        d="M26.783,3H22.342a7.4,7.4,0,0,0-7.4,7.4v4.441H10.5v5.921h4.441V32.606h5.921V20.763H25.3l1.48-5.921H20.862V10.4a1.48,1.48,0,0,1,1.48-1.48h4.441Z"
        transform="translate(-10.5 -3)"
        fill="#7dbdef"
      />
    </svg>
  );
}

export default function AboutUs() {
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
    <div className="bg-white realtive">
      <Head>
        <title>BREAKZEN</title>
      </Head>

      {/* <div className="absolute">
        <div className="hidden md:flex flex-row justify-between">
          <div className=""></div>
          <div className="w-96">
            <Image
              src="/images/landing/circle1.png"
              width="568"
              height="1292"
            />
          </div>
        </div>
        <div className="h-32" />
        <div className="hidden md:flex w-full mt-24">
          <Image src="/images/landing/circle3.png" width="1964" height="1472" />
        </div>
      </div> */}
      <div className="relative">
        <div className="w-full hidden md:flex flex-row justify-between">
          <div></div>
          <div className="w-96">
            <Image
              src="/images/landing/circle1.png"
              width="1136"
              height="2584"
            />
          </div>
        </div>
        <div MainPage className="absolute top-0 pl-4 md:pl-20 pr-aboutUs md:pr-12">
          <TopMenu />
          <Introduction />
          <div className="md:pr-24">
            <FAGs />
          </div>
          <ComingSoon
            email={email}
            setEmail={(email) => setEmail(email)}
            onClick={addEmail}
          />
          <div className="flex flex-col items-center pt-8 pb-6 md:pt-32 md:pb-12">
            <div className="flex flex-col md:flex-row md:w-1/2 h-32 md:h-16 items-center justify-between mb-6">
              <Link href="/terms_cookie">
                <a>Cookies Policy</a>
              </Link>
              <Link href="/terms_privacy">
                <a>Privacy Policy</a>
              </Link>
              <Link href="/terms_refund">
                <a>Refund Policy</a>
              </Link>
              <Link href="/terms_condition">
                <a>Terms and Policy</a>
              </Link>
            </div>
            <div className="flex w-24 justify-between">
              <Link href="http://www.facebook.com/breakzenapp">
                <a>
                  <div>
                    <Svg_Facebook />
                  </div>
                </a>
              </Link>
              <Link href="http://www.instagram.com/breakzenapp">
                <a>
                  <div>
                    <Svg_Instogram />
                  </div>
                </a>
              </Link>
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
