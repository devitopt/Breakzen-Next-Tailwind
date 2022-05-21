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
      <p className="text-4xl md:text-5xl mb-12">PRIVACY POLICY</p>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">Welcome to Breakzen!</p>
        <p className="text-md md:text-lg mb-4">
          Breakzen is owned and operated by Breakzen LLC.
        </p>
        <p className="text-md md:text-lg mb-4">
          Breakzen values your privacy and the protection of your personal data.
          This privacy policy describes what information we collect from you,
          how we collect it, how we use it, how we obtain your consent, how long
          we keep it in our databases and, if necessary, with whom we share it.
        </p>
        <p className="text-md md:text-lg mb-4">
          By registering and using the platform, you accept the practices
          described in this Privacy Policy. Your use of the platform is also
          subject to our Terms and Conditions.
        </p>
        <p className="text-md md:text-lg mb-4">
          This Privacy Policy may change from time to time. Your continued use
          of the platform after we make changes to this privacy policy is
          considered acceptance of those changes, so please check this policy
          periodically for updates. This Privacy Policy has been developed and
          is maintained in accordance with all applicable federal and
          international laws and regulations and specifically with the
          California Online Privacy Protection Act (CalOPPA – U.S regulation),
          New Jersey data protection laws and the General Data Protection
          Regulation (GDPR - European regulation).
        </p>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">1. GENERAL INFORMATION</p>
        <p className="text-md md:text-lg mb-4">
          The personal data of the users that are collected and processed
          through:
        </p>
        <div className="mb-4">
          <li className="pl-4 text-md md:text-lg">
            Breakzen App (Android and iOS version - Available on Google Play and
            App store)
          </li>
          <li className="pl-4 text-md md:text-lg">https://breakzen.com</li>
        </div>
        <p className="text-md md:text-lg mb-4">
          Will be under responsibility and in charge of:
        </p>
        <div className="mb-4">
          <li className="pl-4 text-md md:text-lg">Breakzen LLC.</li>
          <li className="pl-4 text-md md:text-lg">support@breakzen.com</li>
        </div>
        <p className="text-md md:text-lg mb-4">
          (Hereinafter referred to as “Breakzen”).
        </p>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">
          2. TYPES OF INFORMATION GATHERED
        </p>
        <p className="text-md md:text-lg mb-4">
          The information we collect from our users helps us to effectively
          provide our platform and to personalize and continually improve the
          user experience on the platform. These are the types of information we
          collect:
        </p>
        <p className="text-md md:text-lg mb-4">
          Information You Give Us. You provide information when you provide,
          share, search, read, listen and view content through the platform,
          register as a user, use the platform's functionalities, purchase a
          subscription, complete the background check process and/or communicate
          with us through our contact information or our contact forms. As a
          result of those actions, you may provide us with the following
          information:
        </p>
        <div className="mb-4">
          <li className="pl-4 text-md md:text-lg">First and last name</li>
          <li className="pl-4 text-md md:text-lg">Date of birth</li>
          <li className="pl-4 text-md md:text-lg">Email address</li>
          <li className="pl-4 text-md md:text-lg">
            Phone number (includes WhatsApp number)
          </li>
          <li className="pl-4 text-md md:text-lg">Location</li>
          <li className="pl-4 text-md md:text-lg">
            User content (photos, videos, profile content)
          </li>
          <li className="pl-4 text-md md:text-lg">Validation ID</li>
          <li className="pl-4 text-md md:text-lg">IP address</li>
          <li className="pl-4 text-md md:text-lg">
            Any additional information relating to you that you provide to us
            directly through our platform or indirectly through our platform or
            online presence such as ‘cookies’.
          </li>
        </div>
        <p className="text-md md:text-lg mb-4">
          Breakzen will not collect any personally identifiable information
          about you unless you provide it.
        </p>
        <p className="text-md md:text-lg mb-4">
          Information Collected Automatically: By accessing, registering, and
          using the platform and website you automatically provide us with the
          following information:
        </p>
        <div className="mb-4">
          <li className="pl-4 text-md md:text-lg">
            The device and usage information you use to access the website
          </li>
          <li className="pl-4 text-md md:text-lg">Your IP address </li>
          <li className="pl-4 text-md md:text-lg">
            Browser and device characteristics
          </li>
          <li className="pl-4 text-md md:text-lg">Operating system</li>
          <li className="pl-4 text-md md:text-lg">Referring URLs</li>
          <li className="pl-4 text-md md:text-lg">Your location</li>
          <li className="pl-4 text-md md:text-lg">
            What parts of the website you use and how often.
          </li>
        </div>
        <p className="text-md md:text-lg mb-4">
          If you access the platform and website through a mobile phone, we will
          collect the following information:
        </p>
        <div className="mb-4">
          <li className="pl-4 text-md md:text-lg">Mobile device ID </li>
          <li className="pl-4 text-md md:text-lg">Model and manufacturer </li>
          <li className="pl-4 text-md md:text-lg">Operating system </li>
          <li className="pl-4 text-md md:text-lg">Version information </li>
          <li className="pl-4 text-md md:text-lg">IP address</li>
        </div>
        <p className="text-md md:text-lg mb-4">
          Payment information: Your credit/debit card data or payment
          information will be processed by Stripe (payment processor available
          in Breakzen), which will process and store your data securely and with
          the sole purpose of processing the purchase of subscriptions and
          background checks. Breakzen reserves the right to hire any payment
          processor available in the market, which will treat your data with the
          sole purpose of processing the purchase of subscriptions and
          background checks.
        </p>
        <p className="text-md md:text-lg mb-4">
          See Stripe's privacy policy here:
        </p>
        <div className="mb-4">
          <li className="pl-4 text-md md:text-lg">
            https://stripe.com/gb/privacy
          </li>
        </div>
        <p className="text-md md:text-lg mb-4">
          GOOGLE Analytics. We use Google Analytics provided by Google, Inc.,
          USA (“Google”). These tool and technologies collect and analyze
          certain types of information, including IP addresses, device, and
          software identifiers, referring and exit URLs, feature use metrics and
          statistics, media access control address (MAC Address), mobile unique
          device identifiers, and other similar information via the use of
          cookies. The information generated by Google Analytics (including your
          IP address) may be transmitted to and stored by Google on servers in
          the United States. We use the GOOGLE Analytics collection of data to
          enhance the platform and improve our service.
        </p>
        <p className="text-md md:text-lg mb-4">
          Please consult Google's privacy policy here:
        </p>
        <div className="mb-4">
          <li className="pl-4 text-md md:text-lg">
            https://policies.google.com/privacy
          </li>
        </div>
        <p className="text-md md:text-lg mb-4">
          Facebook Pixel: Our platform uses Facebook pixels that enable us, our
          advertisers and service providers:
        </p>
        <div className="mb-4">
          <li className="pl-4 text-md md:text-lg">
            Collect statistics on our platforms and social networks (for
            example, number of users who visited a page).
          </li>
          <li className="pl-4 text-md md:text-lg">
            Collect information about how you interact with our platforms and
            social networks (e.g., whether you opened or followed links
            contained within).
          </li>
          <li className="pl-4 text-md md:text-lg">
            Personalize online services and marketing communications.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Match ads to users and optimize advertising campaigns.
          </li>
        </div>
        <p className="text-md md:text-lg mb-4">
          The information collected through the Facebook pixel will be collected
          and stored by Facebook and will be treated in accordance with its
          privacy policy. The information we collect through the Facebook pixel
          does not personally identify the user and will never be used for
          purposes other than those contained in this privacy policy and
          Facebook's privacy policy.
        </p>
        <p className="text-md md:text-lg mb-4">
          Please consult Facebook's privacy policy here:
        </p>
        <div className="mb-4">
          <li className="pl-4 text-md md:text-lg">
            https://www.facebook.com/privacy/explanation
          </li>
        </div>
        <p className="text-md md:text-lg mb-4">
          Social Media: On our platform you will find links and functions linked
          to different social networks, where you can share your information.
          The user will also be able to share information from their social
          networks through the platform or when logging in through their social
          network accounts.
        </p>
        <p className="text-md md:text-lg mb-4">
          It is advisable to consult the privacy policy and data protection of
          each social media used on our platform.
        </p>
        <div className="mb-4">
          <li className="pl-4 text-md md:text-lg">
            Facebook: https://www.facebook.com/privacy/explanation
          </li>
          <li className="pl-4 text-md md:text-lg">
            Instagram: http://instagram.com/about/legal/privacy/
          </li>
        </div>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">
          3. HOW LONG WE KEEP YOUR DATA
        </p>
        <p className="text-md md:text-lg mb-4">
          Personal data provided by users through the platform will be retained
          for the time necessary to provide the platform and the functionalities
          available on the platform. Breakzen may be allowed to retain personal
          data for a longer period whenever the user has given consent to such
          processing, as long as such consent is not withdrawn. Furthermore,
          Breakzen may be obliged to retain personal data for a longer period
          whenever required to do so for the performance of a legal obligation
          or upon order of an authority. Once the retention period expires,
          personal data shall be deleted. Therefore, the right to access, the
          right to erasure, the right to rectification and the right to data
          portability cannot be enforced after expiration of the retention
          period.
        </p>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">
          4. HOW WE USE YOUR INFORMATION.{" "}
        </p>
        <p className="text-md md:text-lg mb-4">
          In general, we use the information we collect primarily to provide,
          maintain, protect, and improve our current platform and services. We
          use personal information collected through our site as described below
          and described elsewhere in this Policy to:
        </p>
        <div className="mb-4">
          <li className="pl-4 text-md md:text-lg">
            Identify you as a user in our system.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Provide the platform (Available on Google Play and App store)
          </li>
          <li className="pl-4 text-md md:text-lg">User registration.</li>
          <li className="pl-4 text-md md:text-lg">User verification.</li>
          <li className="pl-4 text-md md:text-lg">
            Complete the background check process.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Publish the profile of the Professionals.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Publish and share user content.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Provide functionalities within the platform.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Facilitate the connection and communication between users.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Understand and enhance your experience using our platform.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Respond to your comments or questions through our support team.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Send you related information, including confirmations, invoices,
            technical notices, updates, security alerts and support and
            administrative messages.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Communicate with you about upcoming events, offers and news about
            content and services offered by Breakzen and our selected partners.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Marketing purposes of Breakzen.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Link or combine your information with other information we get from
            third parties to help understand your needs and provide you with
            better service.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Protect, investigate, and deter against fraudulent, unauthorized or
            illegal activity.
          </li>
        </div>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">
          5. HOW DO YOU GET MY CONSENT?
        </p>
        <p className="text-md md:text-lg mb-4">
          By registering as a user, contributing and sharing content through the
          platform, purchasing a subscription, completing the background check
          process, using the functionalities available on the platform, using
          the communication channels available on the platform, communicating
          with us through the contact forms or our contact information,
          accepting the use of cookies by our website and providing personal
          information to us to communicate with you, you consent to our
          collection, storage and use of your information on the terms contained
          in this privacy policy. You may withdraw your consent by sending us
          your request via the contact information or the contact page.
        </p>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">6. HOW WE SHARE INFORMATION</p>
        <p className="text-md md:text-lg mb-4">
          The personal information of our users is an important and fundamental
          part of our business. Under no circumstances will we sell or share
          information with third parties that has not been previously authorized
          by the user or owner of the personal data. We share user information
          only and exclusively as described below.
        </p>
        <p className="text-md md:text-lg mb-4">
          Third-Party Service Providers. We use the services of third parties to
          perform certain functions on the website. For example, creation and
          hosting of the website and platform, processing payments (Stripe),
          sending emails, analyzing data (Google Analytics), providing marketing
          services, and providing search results.
        </p>
        <p className="text-md md:text-lg mb-4">
          These third-party services and tools may have access to personal
          information needed to perform their functions but may not use that
          information for other purposes. Information shared with these
          third-party services will be treated and stored in accordance with
          their respective privacy policies and our privacy policy.
        </p>
        <p className="text-md md:text-lg mb-4">
          Business Transfers. In the event that Breakzen creates, merges with,
          or is acquired by another entity, your information will most likely be
          transferred. Breakzen will email you or place a prominent notice on
          our Platform before your information becomes subject to another
          privacy policy.
        </p>
        <p className="text-md md:text-lg mb-4">
          Protection of Breakzen and others. We release personal information
          when we believe release is appropriate to comply with the law, enforce
          or apply our Terms and conditions and other agreements, or protect the
          rights, property, or safety of Breakzen, our users or others. This
          includes exchanging information with other companies and organizations
          for fraud protection and credit risk reduction.
        </p>
        <p className="text-md md:text-lg mb-4">
          With Your Consent. Other than as set out above, you will receive
          notice when personally identifiable information about you might go to
          third parties, and you will have an opportunity to choose not to share
          the information.
        </p>
        <p className="text-md md:text-lg mb-4">
          Anonymous Information. Breakzen uses the anonymous browsing
          information collected automatically by our servers primarily to help
          us administer and improve the Platform. We may also use aggregated
          anonymous information to provide information about the Platform to
          potential business partners and other unaffiliated entities. This
          information is not personally identifiable.
        </p>
        <p className="text-md md:text-lg mb-4">
          Email Address. The email address that you supply to us for purposes of
          receiving our email communications will never be rented or sold to a
          third party.
        </p>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">
          7. PROTECTING YOUR INFORMATION
        </p>
        <p className="text-md md:text-lg mb-4">
          Breakzen will make all reasonable efforts to protect the personal
          information of users it obtains, and the personal information will be
          protected by dedicated data security personnel. In order to prevent
          users' personal information from being illegally accessed, copied,
          modified, transmitted, lost, destroyed, processed or used in
          unexpected and unauthorized situations, Breakzen has and will continue
          to take the following measures to protect your personal information:
          1) The user's personal information is encrypted and stored by adopting
          encryption technology, and is isolated by isolation technology. 2)
          When using personal information, such as personal information display
          and personal information association calculations, we will use a
          variety of data desensitization technologies including content
          replacement, encryption desensitization, etc. to enhance the security
          of personal information in use. 3) Establish a strict data use and
          access system, adopt strict data access authority control and multiple
          identity authentication technologies to protect personal information,
          and prevent data from being used in violation of regulations.
        </p>
        <p className="text-md md:text-lg mb-4">
          Other security measures taken to protect personal information 1)
          Manage and regulate the storage and use of personal information by
          establishing a data classification and grading system, data security
          management specifications, and data security development
          specifications. 2) Data security personnel are responsible for
          security emergency response to promote and protect personal
          information security. 3. Notification of personal information security
          incidents 1) In the event of a security incident caused by personal
          information, Breakzen will report the first incident to the
          corresponding competent authority, and immediately carry out
          troubleshooting and emergency measures.
        </p>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">8. RIGHTS</p>
        <p className="text-md md:text-lg mb-4">
          Users who provide information through our platform, as data subjects
          and data owners, have the right to access, rectify, download, or
          delete their information, as well as to restrict and object to certain
          processing of their information. While some of these rights apply
          generally, others apply only in certain limited circumstances. We
          describe these rights below:
        </p>
        <div className="mb-4">
          <li className="pl-4 text-md md:text-lg">
            Access and portability: to access and know what information is
            stored in our servers, you can send us your request through our
            contact information.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Rectify, Restrict, Limit and Delete: You can also rectify,
            restrict, limit, or delete much of your information.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Right to be informed: Users of our platform will be informed, upon
            request, about what data we collect, how it is used, how long it is
            retained and whether it is shared with third parties.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Object: When we process your information based on our legitimate
            interests as explained above, or in the public interest, you may
            object to this processing in certain circumstances. In such cases,
            we will stop processing your information unless we have compelling
            legitimate reasons to continue processing it or where it is
            necessary for legal reasons.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Revoke consent: Where you have previously given your consent, such
            as to allow us to process and store your personal information, you
            have the right to revoke your consent to the processing and storage
            of your information at any time. For example, you may withdraw your
            consent by updating your settings. In certain cases, we may continue
            to process your information after you have withdrawn your consent if
            we have a legal basis for doing so or if your withdrawal of consent
            was limited to certain processing activities.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Complaint: If you wish to file a complaint about our use of your
            information (and without prejudice to any other rights you may
            have), you have the right to do so with your local supervisory
            authority. Users can exercise all these rights by contacting us
            through the contact information or the contact page.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Rights related to automated decision-making, including profiling:
            platform users may request that we provide a copy of the automated
            processing activities we conduct if they believe that data is being
            unlawfully processed.
          </li>
        </div>
        <p className="text-md md:text-lg mb-4">
          Users or owners of the personal information they provide through the
          website and services may exercise these rights over their personal
          information at any time and without any limitation by sending us their
          request through our contact information.
        </p>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">
          9. CHILDREN’S ONLINE PRIVACY PROTECTION
        </p>
        <p className="text-md md:text-lg mb-4">
          We comply with the requirements of the California Online Privacy
          Protection Act (CalOPPA – U.S regulation), New Jersey data protection
          laws and the General Data Protection Regulation (GDPR - European
          regulation), regarding the protection of the personal data of minors.
          We do not collect any information from anyone under the age of 13. Our
          platform is intended for people who are at least 13 years of age or
          older. If you become aware that a minor has provided us with personal
          information, please contact us. If we become aware that a minor under
          the age of 13 has provided us with personal information without proper
          authorization from his/her parents or legal guardians, we will take
          steps to delete that information, terminate that person's account, and
          restrict access to that person.
        </p>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">
          10. EDITING AND DELETING INFORMATION
        </p>
        <p className="text-md md:text-lg mb-4">
          If you believe that any information, we are holding on you is
          incorrect or incomplete, please write to or email us as soon as
          possible. We will promptly correct any information found to be
          incorrect. You can change, modify, rectify and delete your Information
          at any time, please contact us through the contact information. To
          opt-out of Breakzen email, follow the instructions included in the
          email. Your request should be processed within 48 hours.
        </p>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">11. THIRD PARTIES</p>
        <p className="text-md md:text-lg mb-4">
          Except as otherwise expressly included in this Privacy Policy, this
          document addresses only the use and disclosure of information Breakzen
          collects from you. If you disclose your information to others, whether
          other users or suppliers on Breakzen, different rules may apply to
          their use or disclosure of the information you disclose to them.
          Breakzen does not control the privacy policies of third parties, and
          you are subject to the privacy policies of those third parties where
          applicable. Breakzen is not responsible for the privacy or security
          practices of other platforms on the Internet, even those linked to or
          from the Breakzen site. Breakzen encourages you to ask questions
          before you disclose your personal information to others.
        </p>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">12. CONTACT US </p>
        <p className="text-md md:text-lg mb-4">
          If you have questions or concerns about these Privacy Policy and the
          handling and security of your data, please contact us through our
          contact page or via the contact information below:
        </p>
        <p className="text-md md:text-lg mb-4">Breakzen LLC.</p>
        <p className="text-md md:text-lg mb-4">support@breakzen.com</p>
      </div>
    </div>
  );
}

export default function Terms_Privacy() {
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
