import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function TopMenu() {
  return (
    <div
      TopMenu
      className="flex flex-row justify-between mb-12 md:mb-32 mt-4 md:mt-12"
    >
      <div LogoSect className="flex flex-row items-center">
        <Link href="/landing">
          <a>
            <div className="flex">
              <Image src="/images/logo.png" width="34" height="32" />
            </div>
          </a>
        </Link>
        <Link href="/landing">
          <a>
            <p className="font-bold text-md md:text-lg pl-4">BREAKZEN</p>
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
        <Link href="/aboutus">
          <button className="border rounded-full text-black md:text-white font-bold px-4 py-1">
            About Us
          </button>
        </Link>
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

function BottomBar() {
  return (
    <div className="flex flex-col items-center pt-8 pb-6 md:pb-12">
      <div className="flex flex-col md:flex-row md:w-1/2 h-32 items-center justify-between mb-6 md:mb-0">
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
  );
}

function Description() {
  return (
    <div>
      <p className="text-4xl md:text-5xl mb-12">REFUND POLICY</p>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">Welcome to Breakzen!</p>
        <p className="text-md md:text-lg mb-4">
          Breakzen is owned and operated by Breakzen LLC.
        </p>
        <p className="text-md md:text-lg mb-4">
          This Refund Policy applies to all services purchased through:
        </p>
        <div className="mb-4">
          <li className="pl-4 text-md md:text-lg">
            Breakzen App (Android and iOS version – Available on Google Play and
            App store)
          </li>
          <li className="pl-4 text-md md:text-lg">https://breakzen.com</li>
        </div>
        <p className="text-md md:text-lg mb-4">
          Our Refund Policy forms part of our Terms and Conditions and Privacy
          Policy and should be read in conjunction with those documents. We
          reserve the right to modify this refund policy at any time without
          notice. Please refer to this refund policy before making any purchase
          of a service or subscription.
        </p>
        <p className="text-md md:text-lg mb-4">
          By purchasing a subscription, you represent and agree to be bound by
          the terms and conditions described below. Our refund policy does not
          affect your statutory rights.
        </p>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">
          1. REFUNDS AND CANCELLATIONS
        </p>
        <p className="text-md md:text-lg mb-4">
          Users may cancel the subscription and request a refund of the first
          payment corresponding to the subscription fee chosen by the user,
          during the first 14 days from the start of the subscription. If the
          user requests a refund after 14 days from the start of the
          subscription, we cannot offer a refund. To request a refund and
          cancellation of the subscription, please send us your refund request
          within 14 days of the start of your subscription through our contact
          information.
        </p>
        <p className="text-md md:text-lg mb-4">
          Subscriptions will automatically renew for an additional period unless
          cancelled before the next billing period. The user may cancel the
          subscription at any time and access to the paid features will continue
          to be available until the next billing date, when it will be
          permanently suspended. Subscriptions can be cancelled through the
          platform or by sending us your cancellation request through our
          contact information.
        </p>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">2. BACKGROUND CHECK</p>
        <p className="text-md md:text-lg mb-4">
          The fee for the background check process for Professional users is
          non-refundable.
        </p>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">3. REFUND PROCESSING</p>
        <p className="text-md md:text-lg mb-4">
          Once your refund request has been received, please allow 3 to 5
          business days for your refund request to be processed. If your refund
          request has been accepted, your refund will be issued, and you will
          receive a confirmation email. The refund will be issued via the
          original payment method.
        </p>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">4. CONTACT US</p>
        <p className="text-md md:text-lg mb-4">
          If you have questions about this Refund Policy, please contact us
          through our contact page or via the contact information below:
        </p>
        <p className="text-md md:text-lg mb-4">Breakzen LLC.</p>
        <p className="text-md md:text-lg mb-4">support@breakzen.com</p>
      </div>
    </div>
  );
}

export default function Terms_Refund() {
  return (
    <div className="bg-white">
      <Head>
        <title>BREAKZEN</title>
      </Head>

      <div className="relative md:mb-44">
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
        <div
          MainPage
          className="md:absolute w-full top-0 pl-4 md:pl-20 pr-4 md:pr-12"
        >
          <TopMenu />
          <Description />
          <BottomBar />
        </div>
      </div>
    </div>
  );
}
