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
      <p className="text-4xl md:text-5xl mb-12">COOKIE POLICY</p>
        <div className="mb-8">
          <p className="text-2xl md:text-3xl mb-6">Welcome to Breakzen!</p>
          <p className="text-md md:text-lg mb-4">
            Breakzen is owned and operated by Breakzen LLC.
          </p>
          <p className="text-md md:text-lg mb-4">
            This Cookie Policy explains how and why cookies and other similar
            technologies may be stored on and accessed from your device when you
            use and visit:
          </p>
          <div className="mb-4">
            <li className="pl-4 text-md md:text-lg">https://breakzen.com</li>
          </div>
          <p className="text-md md:text-lg mb-4">
            (Hereinafter referred to as “Breakzen”).{' '}
          </p>
          <p className="text-md md:text-lg mb-4">
            The information collected through cookies will be under
            responsibility and in charge of:
          </p>
          <div className="mb-4">
            <li className="pl-4 text-md md:text-lg">Breakzen LLC.</li>
            <li className="pl-4 text-md md:text-lg">support@breakzen.com</li>
          </div>
          <p className="text-md md:text-lg mb-4">
            This Cookie Policy should be read together with our Privacy Policy
            and our Terms and Conditions.
          </p>
          <p className="text-md md:text-lg mb-4">
            By using the website, you accept the use of cookies by Breakzen, in
            the terms contained in this policy.
          </p>
        </div>
        <div className="mb-8">
          <p className="text-2xl md:text-3xl mb-6">1. WHAT ARE COOKIES?</p>
          <p className="text-md md:text-lg mb-4">
            Cookies" are small text files that are stored on your computer or
            mobile device when you visit a website. They allow the website to
            recognize your device and remember if you have been to the website
            before.
          </p>
          <p className="text-md md:text-lg mb-4">
            Cookies are a very common web technology; most websites use cookies
            and have done so for years. Cookies are widely used to make the
            website work more efficiently.
          </p>
          <p className="text-md md:text-lg mb-4">
            Cookies are used to measure which parts of the website users visit
            and to personalize their experience. Cookies also provide
            information that helps us monitor and improve the performance of the
            website.
          </p>
        </div>
        <div className="mb-8">
          <p className="text-2xl md:text-3xl mb-6">
            2. REFUSING OR WITHDRAWING CONSENT TO THE USE OF COOKIES
          </p>
          <p className="text-md md:text-lg mb-4">
            If you do not want Cookies to be dropped on your device, you can
            adjust the setting of your Internet browser to reject the setting of
            all or some Cookies and to alert you when a Cookie is placed on your
            device. For further information about how to do so, please refer to
            your browser ‘help’, ‘tool’, or ‘edit’ section. Please note that if
            you use your browser settings to block all Cookies, including
            strictly necessary Cookies, you may not be able to access or use all
            or parts of the functionalities of Breakzen.
          </p>
          <p className="text-md md:text-lg mb-4">
            If you want to remove previously stored Cookies, you can manually
            delete the Cookies at any time. However, this will not prevent
            Breakzen from placing further Cookies on your device unless and
            until you adjust your Internet browser setting as described above.
          </p>
          <p className="text-md md:text-lg mb-4">
            We provide the links for the management and blocking of cookies
            depending on the browser you use:
          </p>
          <div className="mb-4">
            <li className="pl-4 text-md md:text-lg">
              Microsoft Edge:
              https://support.microsoft.com/en-us/office/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09?ui=en-us&rs=en-us&ad=us
            </li>
            <li className="pl-4 text-md md:text-lg">
              Firefox:
              https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox
            </li>
            <li className="pl-4 text-md md:text-lg">
              Chrome:
              https://support.google.com/chrome/answer/95647?hl=en
            </li>
            <li className="pl-4 text-md md:text-lg">
              Safari:
              https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac
            </li>
          </div>
        </div>
        <div className="mb-8">
          <p className="text-2xl md:text-3xl mb-6">3. FIRST-PARTY COOKIES</p>
          <p className="text-md md:text-lg mb-4">
            We use Cookies to enhance the performance of our website and
            personalize your online Breakzen experience.  Cookies help us to
            collect information on how people use our website, and which pages
            they visit. They enable us to monitor the number of visitors and to
            analyze website usage patterns and trends. We collect this
            information anonymously, so it does not identify anyone as an
            individual and no personal information is stored in our Cookies. We
            always use Cookie data in a responsible way.
          </p>
        </div>
        <div className="mb-8">
          <p className="text-2xl md:text-3xl mb-6">4. THIRD-PARTY COOKIES</p>
          <p className="text-md md:text-lg mb-4">
            Third-party cookies may come from partners or third-party companies
            that provide functional web services or tools for our website and
            the optimal functioning and operation of our services. We use third
            party cookies responsibly and for the sole purpose of providing
            optimal functioning of the platform and services. You may opt out of
            these cookies by following the cookie removal information contained
            in this document or the technical information of the browser from
            which you access our website and services.
          </p>
        </div>
        <div className="mb-8">
          <p className="text-2xl md:text-3xl mb-6">5. PERSISTENT COOKIES</p>
          <p className="text-md md:text-lg mb-4">
            We use persistent cookies to enhance your experience of using the
            website. This includes recording your acceptance of our Cookie
            Policy to eliminate the pop-up message that first appears when you
            visit the website. Persistent Cookies remain on your device until
            they are manually or automatically deleted.
          </p>
        </div>
        <div className="mb-8">
          <p className="text-2xl md:text-3xl mb-6">6. SESSION COOKIES</p>
          <p className="text-md md:text-lg mb-4">
            Session cookies are used to log in to the website with your
            respective credentials and password. Session cookies are also used
            to keep users logged in. Session cookies are temporary and are
            deleted from the device or browser when the session is closed, and
            the browser is closed. We use session cookies to keep the session
            open when using our services and to identify you on our system each
            time you log on to the Platform.
          </p>
        </div>
        <div className="mb-8">
          <p className="text-2xl md:text-3xl mb-6">7. SOCIAL COOKIES</p>
          <p className="text-md md:text-lg mb-4">
            These cookies allow you to share our website and click “Like” on
            social networks like Facebook, Twitter, Google, and YouTube, etc.
            They also allow you interact with each distinct platform’s contents.
            The way these cookies are used, and the information gathered is
            governed by the privacy policy of each social platform.
          </p>
        </div>
        <div className="mb-8">
          <p className="text-2xl md:text-3xl mb-6">8. PURPOSES OF OUR COOKIES</p>
          <p className="text-md md:text-lg mb-4">
            Our Cookies are used for the following purposes:
          </p>
          <p className="text-md md:text-lg mb-4">
            Strictly Necessary: These Cookies are essential for the website to
            perform its basic functions.
          </p>
          <p className="text-md md:text-lg mb-4">
            Security: We use these Cookies to help identify and prevent
            potential security risks.
          </p>
          <p className="text-md md:text-lg mb-4">
            Analytics and Performance: Performance Cookies collect information
            on how users interact with our website, including what pages are
            visited most, as well as other analytical data. We use these details
            to improve how our website function and to understand how users
            interact with them.
          </p>
          <p className="text-md md:text-lg mb-4">
            Advertising: These cookies are used to display relevant advertising
            to visitors who use our services or visit the website we host or
            provide, as well as to understand and report on the efficacy of ads
            served on our website. They track details such as the number of
            unique visitors, the number of times particular ads have been
            displayed, and the number of clicks the ads have received. They are
            also used to build user profiles, including showing you ads based on
            products you’ve viewed on our website. These are set by Breakzen and
            trusted third party networks and are generally persistent in
            nature. 
          </p>
        </div>
        <div className="mb-8">
          <p className="text-2xl md:text-3xl mb-6">9. CONTACT US</p>
          <p className="text-md md:text-lg mb-4">
            If you have questions or concerns about this Cookie Policy and the
            handling and security of your data, please contact us via the
            contact information below:
          </p>
          <p className="text-md md:text-lg mb-4">Breakzen LLC. </p>
          <p className="text-md md:text-lg mb-4">support@breakzen.com</p>
        </div>
    </div>
  );
}

export default function Terms_Cookie() {
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
