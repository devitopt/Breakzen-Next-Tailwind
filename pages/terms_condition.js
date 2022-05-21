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
      <p className="text-4xl md:text-5xl mb-12">TERMS AND CONDITIONS</p>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">Welcome to Breakzen!</p>
        <p className="text-md md:text-lg mb-4">
          Breakzen is owned and operated by Breakzen LLC.
        </p>
        <p className="text-md md:text-lg mb-4">These are the terms and conditions for:</p>
        <div className="mb-4">
          <li className="pl-4 text-md md:text-lg">
            Breakzen App (Android and iOS version - Available on Google
            Play and App store)
          </li>
          <li className="pl-4 text-md md:text-lg">https://breakzen.com</li>
        </div>
        <p className="text-md md:text-lg mb-4">(Hereinafter referred to as “Breakzen”)</p>
        <p className="text-md md:text-lg mb-4">
          By registering and using the platform, you agree to be bound by these
          Terms and Conditions ("Terms") and our Privacy Policy. If you do not
          accept all these Terms, then you may not use our platform and
          services. In these terms, "we", "us", "our" and "Breakzen" refers to
          Breakzen and "you" and “your" refers to you, the user of Breakzen.
        </p>
        <p className="text-md md:text-lg mb-4">
          The following terms and conditions apply to the platform and services
          offered by Breakzen. This includes the mobile and tablet versions as
          well as any other version of Breakzen accessible via desktop, mobile,
          tablet, social media, or other devices.
        </p>
        <p className="text-md md:text-lg mb-4">
          PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE ACCESSING,
          USING OR OBTAINING ANY MATERIALS, INFORMATION OR SERVICES.
        </p>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">1. ELIGIBLITY</p>
        <p className="text-md md:text-lg mb-4">
          You may use the platform only in compliance with these terms and all
          applicable local, state, national, and international laws, rules, and
          regulations.
        </p>
        <p className="text-md md:text-lg mb-4">
          The use of the platform is available for all ages. In the case of
          minors, it is the responsibility of parents and legal guardians to
          determine whether use of the platform or any of the content and
          functionality available on the platform is appropriate for their child
          or minor ward. Breakzen reserves the right to make the necessary
          checks during the registration process.
        </p>
        <p className="text-md md:text-lg mb-4">
          You represent and warrant that all registration information you submit
          is accurate and truthful; and that your use of the platform does not
          violate any applicable law or regulation. Breakzen may, in its sole
          discretion, refuse to offer the platform and services to any user and
          change its eligibility criteria at any time. This provision is void
          where prohibited by law and the right to access the service and the
          platform is revoked in such jurisdictions.
        </p>
        <p className="text-md md:text-lg mb-4">
          By using the platform, you represent and warrant that you have the
          full right, power and authority to enter into these terms and to fully
          perform all of your obligations hereunder. You further represent and
          warrant that you are under no legal disability or contractual
          restriction that prevents you from entering into these terms.
        </p>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">2. PROFESSIONALS</p>
        <p className="text-xl md:text-2xl mb-4">2.1. User Registration and Verification</p>
        <p className="text-md md:text-lg mb-4">
          If you wish to become a professional user, you must read this
          agreement and indicate your acceptance during the registration process
          in order to be able to publish your services and your profile as a
          professional. Professional users can be licensed trainers, healers,
          therapists and nutritionists.
        </p>
        <p className="text-md md:text-lg mb-4">
          Professionals who register with Breakzen must have a professional
          license to offer their services through their profile.
        </p>
        <p className="text-md md:text-lg mb-4">
          Professionals must submit to a user verification process. If during
          the verification process the user does not provide and accredit the
          professional license, the user will not be admitted to the platform.
          Once the user and their respective professional license have been
          verified, they will be able to publish and offer their services
          through their profile and be contacted and hired by other users.
        </p>
        <p className="text-md md:text-lg mb-4">
          Professionals may submit to a background check process for a one-time
          fee ($11.99) through the platform, which must be paid during the
          registration process. The background check process is optional and
          once completed it will be visible and credited in the Professional's
          profile.
        </p>
        <p className="text-md md:text-lg mb-4">
          In consideration of your use of the Platform as a Professional, you
          represent that you are of legal age to form a binding contract under
          the laws of the United States or any applicable jurisdiction. You also
          agree to (a) provide true, accurate, current and complete information
          about yourself and your profile as a Professional as requested on the
          registration form available on Breakzen and (b) maintain and promptly
          update your registration data to keep it true, accurate, current and
          complete. If we have reasonable grounds to suspect that such
          information is untrue, inaccurate, not current or incomplete, Breakzen
          reserves the right to suspend or terminate your account, delete your
          user profile and refuse any and all current or future use of the
          platform at any time without notice.
        </p>
        <p className="text-md md:text-lg mb-4">
          Professionals may share personal and business information through the
          platform and the communication channels established on the platform.
          Any information that Professionals share through the platform is the
          sole responsibility of the Professionals themselves. Professionals are
          free to share information, but are responsible for the use of such
          information, its publication and disclosure. Breakzen is not
          responsible for the information posted and shared through the
          platform.
        </p>
        <p className="text-xl md:text-2xl mb-4">2.2. Account</p>
        <p className="text-md md:text-lg mb-4">
          If you register on Breakzen, you will be required to choose a
          password, and you may be asked for additional information regarding
          your account. You are responsible for maintaining the confidentiality
          of your password and account information, and are fully responsible
          for all activities that occur under your password or account. You
          agree to (a) immediately notify Breakzen of any unauthorized use of
          your password or account or any other breach of security, and (b)
          ensure that you log out from your account at the end of each session.
          You may never use another User’s account without prior authorization
          from Breakzen. Breakzen will not be liable for any loss or damage
          arising from your failure to comply with this agreement.
        </p>
        <p className="text-md md:text-lg mb-4">
          By providing Breakzen with your email address and phone number you
          consent to our use of your email address to send you notices about the
          service and products. We may also use your email address and phone
          number to send you notifications, push notifications and other
          messages, such as changes to service features, news, and special
          content. If you do not wish to receive these emails, you may opt-out
          of receiving them by sending us your withdrawal request via the
          contact information or by using the "unsubscribe" option in the emails
          or mobile notifications. Opting out may prevent you from receiving
          emails about updates, news or special content.
        </p>
        <p className="text-md md:text-lg mb-4">
          Users may cancel their accounts at any time and for any reason by
          following the instructions on the platform or by sending us their
          request through our contact information. That termination will only
          result in the deletion of the account and the deletion of all the
          personal data granted to Breakzen.
        </p>
        <p className="text-md md:text-lg mb-4">
          Breakzen reserves the right to terminate your account or your access
          immediately, with or without notice to you, and without liability to
          you, if Breakzen believes that you have breached any of these terms,
          furnished Breakzen with false or misleading information, or interfered
          with use of the platform or the service by others.
        </p>
        <p className="text-xl md:text-2xl mb-4">2.3. Subscriptions</p>
        <p className="text-md md:text-lg mb-4">
          Professional users must purchase a paid subscription in order to
          publish their profile and services through the platform.
        </p>
        <p className="text-md md:text-lg mb-4">
          Breakzen offers the following monthly and annual subscriptions:
        </p>
        <div className="mb-4">
          <li className="pl-4 text-md md:text-lg">
            General Access: $19.99/month or $219.99/year
          </li>
          <li className="pl-4 text-md md:text-lg">
            Pro Access: $39.99/month or $439.99/year
          </li>
        </div>
        <p className="text-md md:text-lg mb-4">
          Please check the price and features of subscriptions before purchasing
          a subscription. When a user purchases a subscription, Breakzen will
          send a confirmation email. This confirmation email will occur
          automatically so that the user has confirmation of payment and
          initiation of the subscription. If the user does not receive the
          email, it may have been sent to their spam folder.
        </p>
        <p className="text-md md:text-lg mb-4">
          Breakzen may change or discontinue the availability of subscriptions
          at any time at its sole discretion. If a purchase is cancelled, the
          payment made for the subscription will be refunded in full. This does
          not affect your statutory rights.
        </p>
        <p className="text-md md:text-lg mb-4">
          Subscriptions may include automatic recurring payments. You authorize
          Breakzen to renew your subscription and charge you periodically and
          progressively on each billing date. The billing date will be every 30
          days and will be determined by the date on which you register,
          purchase the subscription and make your first payment. On the
          corresponding billing date, the value of the fee will be automatically
          charged according to the subscription that the user has chosen during
          registration. Your subscription will continue until you cancel it or
          we terminate it. Users may cancel their subscription at any time. You
          must cancel your subscription before it renews to avoid the next
          billing period. We will bill the recurring subscription fee in the
          form of payment you provide to us during registration or subscription
          purchase. If you cancel your subscription, you may continue to use the
          platform and features included in the subscription until the next
          billing date.
        </p>
        <p className="text-md md:text-lg mb-4">
          Subscriptions will automatically renew for an additional period unless
          cancelled prior to the next billing period. If you wish to reactivate
          your subscription, you must purchase a new subscription.
        </p>
        <p className="text-xl md:text-2xl mb-4">2.4. Payments</p>
        <p className="text-md md:text-lg mb-4">
          Subscriptions and background checks will be paid through Stripe
          (payment processor available on Breakzen). Subscriptions will be
          activated once the payment and registration process is completed.
          Payment will be charged to the credit/debit card immediately upon
          purchase of the subscription. Once the transaction has been processed,
          we will send you an electronic receipt of the transaction to the email
          address you provide.
        </p>
        <p className="text-md md:text-lg mb-4">
          If you find any inconsistency in your billing, please contact us
          through our contact information or you can make the claim through the
          customer service of the corresponding payment platform.
        </p>
        <p className="text-md md:text-lg mb-4">
          If your card is declined, you will receive an error message. No
          payment will be charged to your card and no order will be processed.
          There may be a pending transaction on your account until your card
          issuing bank withdraws the authorization. This usually takes 2 to 5
          business days. Your card may be declined for various reasons such as
          insufficient funds, AVS (Address Verification System) mismatch or you
          have entered an incorrect security code.
        </p>
        <p className="text-md md:text-lg mb-4">
          If your payment is declined, you must provide an alternative payment
          method or provide another card where payment can be charged and
          processed.
        </p>
        <p className="text-md md:text-lg mb-4">
          Your payment data will be treated and kept securely and with the sole
          purpose of processing the purchase of subscriptions and background
          checks. Breakzen reserves the right to contract any payment platform
          available in the market, which treats your data with the sole purpose
          of processing the purchase of subscriptions and background checks.
        </p>
        <p className="text-xl md:text-2xl mb-4">2.5. Profiles</p>
        <p className="text-md md:text-lg mb-4">
          Your profile must include complete and accurate information about your
          services, their features, specifications, pricing and any special
          specifications or requirements that apply to the services. You are
          responsible for keeping your profile information and content (such as
          photos) current and accurate at all times.
        </p>
        <p className="text-xl md:text-2xl mb-4">2.6. Independence of the Professionals</p>
        <p className="text-md md:text-lg mb-4">
          Breakzen does not direct, represent or control the services offered by
          the Professionals through the platform. The Professional accepts that
          he/she has full discretion to decide whether to offer the services
          through his/her profile and at what time he/she publishes and offers
          these services. The Professional may determine the price of the
          services it offers and publishes through the platform.
        </p>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">3. CLIENTS</p>
        <p className="text-xl md:text-2xl mb-4">3.1. Registration</p>
        <p className="text-md md:text-lg mb-4">
          If you wish to become a Client user, you must read this agreement and
          indicate your acceptance during the registration process in order to
          search and contact Professionals through the profiles published on our
          platform. The registration and use of the platform for Client users is
          completely free of charge.
        </p>
        <p className="text-md md:text-lg mb-4">
          In consideration of your use of the platform as a Client user, you
          represent that you are of legal age to form a binding contract under
          any applicable jurisdiction. You also agree to (a) provide true,
          accurate, current and complete information about yourself as requested
          in the registration form available on Breakzen and (b) maintain and
          promptly update your registration data to keep it true, accurate,
          current and complete. If we have reasonable grounds to suspect that
          such data is false, inaccurate, not updated or incomplete, Breakzen
          reserves the right to suspend or cancel your account and reject any
          current or future use of the platform at any time and without prior
          notice, if Breakzen considers that you have violated any provision of
          these terms and conditions.
        </p>
        <p className="text-md md:text-lg mb-4">
          Users may share personal and commercial information through the
          platform with other users. Any information that users share through
          the platform is the sole responsibility of the users themselves. Users
          are free to share information, but they are responsible for the use of
          said information, its publication and disclosure. Breakzen is not
          responsible for the information you provide and share through the
          platform. The information you provide and share through the platform
          is the sole and exclusive responsibility of the users.
        </p>
        <p className="text-xl md:text-2xl mb-4">3.2. Account</p>
        <p className="text-md md:text-lg mb-4">
          If you register on Breakzen, you will be required to choose a
          password, and you may be asked for additional information regarding
          your account. You are responsible for maintaining the confidentiality
          of your password and account information, and are fully responsible
          for all activities that occur under your password or account. You
          agree to (a) immediately notify Breakzen of any unauthorized use of
          your password or account or any other breach of security, and (b)
          ensure that you log out from your account at the end of each session.
          You may never use another user’s account without prior authorization
          from Breakzen. Breakzen will not be liable for any loss or damage
          arising from your failure to comply with this agreement.
        </p>
        <p className="text-md md:text-lg mb-4">
          By providing Breakzen with your email address and phone number you
          consent to our use of your email address to send you notices about the
          service and products. We may also use your email address and phone
          number to send you notifications, push notifications and other
          messages, such as changes to service features, news, and special
          content. If you do not wish to receive these emails, you may opt-out
          of receiving them by sending us your withdrawal request via the
          contact information or by using the "unsubscribe" option in the emails
          or mobile notifications. Opting out may prevent you from receiving
          emails about updates, news or special content.
        </p>
        <p className="text-md md:text-lg mb-4">
          Users may cancel their accounts at any time and for any reason by
          following the instructions on the platform or by sending us their
          request through our contact information. That termination will only
          result in the deletion of the account and the deletion of all the
          personal data granted to Breakzen.
        </p>
        <p className="text-md md:text-lg mb-4">
          Breakzen reserves the right to terminate your account or your access
          immediately, with or without notice to you, and without liability to
          you, if Breakzen believes that you have breached any of these terms,
          furnished Breakzen with false or misleading information, or interfered
          with use of the platform or the service by others.
        </p>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">4. OWNERSHIP AND LICENSES</p>
        <p className="text-md md:text-lg mb-4">
          The ownership rights of the platform and the methods used on the
          platform belong exclusively to Breakzen LLC. Any physical or virtual
          exposure of the methods used on the platform may result in violations
          of the intellectual property rights of Breakzen LLC.
        </p>
        <p className="text-md md:text-lg mb-4">
          Breakzen gives you a personal, worldwide, royalty-free, non-assignable
          and non-exclusive license to use the software (platform) provided to
          you by Breakzen as part of the services. This license is for the sole
          purpose of enabling you to use and enjoy the benefit of the services
          as provided by Breakzen, in the manner permitted by these terms. You
          may not copy, modify, distribute, sell, or lease any part of our
          services or included software, nor may you reverse engineer or attempt
          to extract the source code of that software, unless laws prohibit
          those restrictions, or you have our written permission.
        </p>
        <p className="text-md md:text-lg mb-4">
          This service prohibits sending of messages, that: (1) Any kind of
          messages that are catalogued as SPAM. (2) Are harassing, abusive,
          defamatory, obscene, in bad faith, unethical or otherwise illegal
          content (3) distribute trojans, viruses or other malicious computer
          software (4) Are intending to commit fraud, impersonating other
          persons, phishing, scams, or related crime (5) distribute intellectual
          property without ownership or a license to distribute such property
          (6) Breach, in any way, the terms of service, privacy policy or rules
          of this web site or the recipients.
        </p>
        <p className="text-md md:text-lg mb-4">
          The user agrees not to use the platform and the services negligently,
          for fraudulent purposes or in an unlawful manner. Likewise, the user
          agrees not to partake in any conduct or action that could damage the
          image, interests, or rights of the Breakzen platform or third parties.
        </p>
        <p className="text-md md:text-lg mb-4">
          Breakzen reserves the right to terminate your access immediately, with
          or without notice, and without liability to you, if Breakzen believes
          that you have violated any of these terms or interfered with the use
          of the platform or service by others.
        </p>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">5. ADVERTISING</p>
        <p className="text-md md:text-lg mb-4">
          Through the platform Breakzen may make available to users, commercial
          and advertising information, own or third parties in accordance with
          good business practices. In these cases, Breakzen does not endorse,
          guarantee or commit its responsibility for the services and / or
          products marketed by these third parties, since the platform serves as
          a channel of communication and advertising, but not as a tool for the
          provision of services. Consequently, it is the full responsibility of
          the users to access the sites that refer advertising, assuming the
          obligation to verify and know the terms of the services offered by
          third parties.
        </p>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">6. DISCLAIMER</p>
        <p className="text-md md:text-lg mb-4">
          The services or contents published and offered on the platform by the
          Professionals are not offered or provided by Breakzen. Breakzen's
          services are limited to providing the platform where the Professionals
          can publish their profile and services and can be found by other users
          interested in hiring their services.
        </p>
        <p className="text-md md:text-lg mb-4">
          The services offered by the Professionals through the platform and the
          content of their profiles are the sole and exclusive responsibility of
          the Professionals themselves. Although Breakzen performs the
          verification process and in some cases the background check process of
          the Professional users, Breakzen is not responsible for the quality,
          accuracy, security or legality of the services or content published
          and offered by the Professionals on the platform.
        </p>
        <p className="text-md md:text-lg mb-4">
          Breakzen does not offer any declaration or guarantee on the services
          or contents published by the Professionals through the platform. The
          use of the services or contents available in the platform is done at
          your own risk and responsibility.
        </p>
        <p className="text-md md:text-lg mb-4">
          Breakzen is not responsible for damages to the physical or moral
          integrity of persons, such as injuries, death or any other moral
          damage such as threats, insults and slander that may fall on a
          physical person as a consequence of the communications established in
          the platform. Communications and relationships established between
          users as a result of any connection within the platform are the sole
          and exclusive responsibility of the users.
        </p>
        <p className="text-md md:text-lg mb-4">
          In the case that one or several users or any third party initiates any
          type of claim or legal action against another or other users, each and
          every one of the users involved in said claims or actions exempt
          Breakzen from any responsibility.
        </p>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">7. USER CONTENT </p>
        <p className="text-md md:text-lg mb-4">
          Some features of the platform allow users to upload and provide
          content and information through the platform. You retain any rights
          you may have in the content and information you share through the
          platform. By providing content through the platform, you authorize
          Breakzen to display and publish your content on the platform. Breakzen
          is not responsible for the accuracy, safety or legality of the content
          and information that the user provides and shares through the
          platform. You are solely and exclusively responsible for your content
          and information. Breakzen nor its directors, agents, employees and
          partners shall have any liability for the information or content
          provided by users through the platform.
        </p>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">
          8. REPRESENTATIONS AND WARRANTIES FOR USER CONTENT
        </p>
        <p className="text-md md:text-lg mb-4">
          Breakzen disclaims all liability in relation to the content that users
          provide and post through the platform. You are solely responsible for
          your content and the consequences of providing content through the
          platform. By providing content through the platform, you affirm,
          represent and warrant that:
        </p>
        <div className="mb-4">
          <li className="pl-4 text-md md:text-lg">
            You are the creator and owner of the content you post and
            provide through the platform, or have the necessary licenses,
            rights, consents and permissions to authorize Breakzen to post and
            display your content on the platform.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Your content, and your use of your content as contemplated
            by these Terms, does not and will not: (i) infringe, violate or
            misappropriate any third party right, including any copyright,
            trademark, patent, trade secret, moral right, right of privacy,
            right of publicity or any other intellectual property or proprietary
            right; (ii) libel, defame, slander or invade the privacy, publicity
            or other proprietary rights of any other person; or (iii) cause
            Breakzen to violate any law or regulation.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Your content must not contain information or content about
            politics or religion.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Your content must relate solely to the services published on
            the platform. No other content is allowed.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Your content may not be considered by a reasonable person to
            be objectionable, profane, indecent, pornographic, harassing,
            threatening, embarrassing, hateful or otherwise inappropriate.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Your content does not and will not contain hateful content,
            threat of physical harm or harassment
          </li>
        </div>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">9. USER CONTENT DISCLAIMER</p>
        <p className="text-md md:text-lg mb-4">
          We have no obligation to edit or monitor any content that you or other
          users provide through the platform, and we will not be in any way
          responsible for any content that users share and provide through the
          platform. However, Breakzen may, at any time and without notice,
          filter, remove, edit or block any user content that, in our judgment,
          violates these terms or is otherwise objectionable. You understand
          that, by using the platform, you will be exposed to content from a
          variety of sources and acknowledge that content that users share
          through the platform may be inaccurate, offensive, indecent or
          objectionable. You agree to waive, and do waive, any legal or
          equitable rights or remedies you have or may have against Breakzen
          with respect to the content that you and users provide through the
          platform.
        </p>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">10. COPYRIGHT</p>
        <p className="text-md md:text-lg mb-4">
          All content included on this platform, such as text, graphics, logos,
          images, videos, audio clips, data compilations and software, is the
          property of Breakzen and its user content providers and is protected
          by international copyright laws. The compilation of all content on
          this site is the exclusive property of Breakzen and the user content
          providers and is protected by international copyright laws. All
          software used on this platform is the property of Breakzen or its
          software suppliers and is protected by international copyright laws.
          Users may publish and share content through the platform. By posting
          your content through Breakzen, you agree and consent that your content
          may be publicly displayed on the platform and may be shared by other
          users of the platform. By posting and sharing your content and that of
          other users, you also agree not to modify or remove, directly or
          indirectly, any copyright, trade name, service mark, trademark or any
          other property appearing in the content available on Breakzen. Any
          alteration or use of content outside the guidelines of these terms
          violates intellectual property rights and may be subject to claims or
          lawsuits. By accessing our platform, you do not have any right or
          title to the content available or other intellectual property.
        </p>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">
          11. COPYRIGHT INFRINGEMENT (Digital Millennium Copyright Act)
        </p>
        <p className="text-md md:text-lg mb-4">
          Breakzen will respond to all inquiries, complaints and claims
          regarding alleged infringement for failure to comply with or violation
          of the provisions contained in the Digital Millennium Copyright Act.
          Breakzen respects the intellectual property of others, and expects
          users to do the same. If you believe, in good faith, that any material
          provided on or in connection with the Breakzen website infringes your
          copyright or other intellectual property right, please send us your
          copyright infringement request pursuant to Section 512 of the Digital
          Millennium Copyright Act, via our contact information, with the
          following information:
        </p>
        <div className="mb-4">
          <li className="pl-4 text-md md:text-lg">
            Identification of the intellectual property right that is
            allegedly infringed. All relevant registration numbers or a
            statement regarding ownership of the work should be included.
          </li>
          <li className="pl-4 text-md md:text-lg">
            A statement that specifically identifies the location of the
            infringing material, in sufficient detail so that Breakzen can find
            it on the "Breakzen" website. Note that providing a top-level URL is
            not sufficient.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Your name, address, telephone number and email address.
          </li>
          <li className="pl-4 text-md md:text-lg">
            A statement by you that you have a good faith belief that
            the use of the allegedly infringing material is not authorized by
            the copyright owner, or its agents, or by law.
          </li>
          <li className="pl-4 text-md md:text-lg">
            A statement by you, made under penalty of perjury, that the
            information in your notification is accurate, and that you are the
            copyright owner or authorized to act on its behalf.
          </li>
          <li className="pl-4 text-md md:text-lg">
            An electronic or physical signature of the copyright owner
            or of the person authorized to act on the copyright owner's behalf.
          </li>
        </div>
        <p className="text-md md:text-lg mb-4">
          Upon receipt of a request for copyright infringement under the
          Copyright Act, Breakzen will contact the allegedly infringing user so
          that the user may respond to the request in accordance with the terms
          contained in the Digital Millennium Copyright Act.
        </p>
        <p className="text-md md:text-lg mb-4">
          Responses to copyright infringement requests must contain the
          following:
        </p>
        <div className="mb-4">
          <li className="pl-4 text-md md:text-lg">
            The physical or electronic signature of the user;
          </li>
          <li className="pl-4 text-md md:text-lg">
            The identification of the content that has been removed or
            the place where the content was posted;
          </li>
          <li className="pl-4 text-md md:text-lg">
            A statement, under oath, indicating a good faith belief that
            the content or material was removed due to an error.
          </li>
          <li className="pl-4 text-md md:text-lg">
            The name, address and telephone number of the user; and
          </li>
          <li className="pl-4 text-md md:text-lg">
            A statement that the user consents to the jurisdiction of
            the court in which the user is located.
          </li>
        </div>
        <p className="text-md md:text-lg mb-4">
          In the event that the alleged infringing user fails to respond to the
          copyright infringement request and the alleged copyright owner is able
          to satisfactorily prove ownership of such copyright in the content and
          requests removal of such content from the website, Breakzen will
          remove the content from the website immediately.
        </p>
        <p className="text-md md:text-lg mb-4">
          All copyright infringement requests and responses may be submitted
          through our contact information.
        </p>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">12. BREAKZEN RESPONSIBILITIES</p>
        <p className="text-md md:text-lg mb-4">
          Breakzen provides and maintains the platform "as is", "as available"
          and does not promise that the use of the platform will be
          uninterrupted or totally free of errors.
        </p>
        <p className="text-md md:text-lg mb-4">
          We cannot offer any other warranties, conditions, or other terms,
          express or implied, statutory or otherwise, and all such terms are
          hereby excluded to the fullest extent permitted by law.
        </p>
        <p className="text-md md:text-lg mb-4">
          You shall be responsible for any breach of these terms by you and if
          you use the platform in violation of these terms you shall be liable
          and shall reimburse Breakzen for any loss or damage caused as a
          result.
        </p>
        <p className="text-md md:text-lg mb-4">
          Breakzen shall not be liable in any amount for the breach of any
          obligation under this agreement if such breach is caused by the
          occurrence of any unforeseen event beyond its reasonable control,
          including without limitation Internet outages, communications outages,
          fires, floods, wars or acts of God.
        </p>
        <p className="text-md md:text-lg mb-4">
          Subject to the foregoing, to the maximum extent permitted by law,
          Breakzen excludes liability for any loss or damage of any kind
          whatsoever, including without limitation any direct, indirect or
          consequential loss, whether or not arising from any problem you notify
          Breakzen and Breakzen shall have no liability to pay any money by way
          of compensation, including without limitation all liability in
          connection with:
        </p>
        <div className="mb-4">
          <li className="pl-4 text-md md:text-lg">
            Any incorrect or inaccurate information on Breakzen'
            platform.
          </li>
          <li className="pl-4 text-md md:text-lg">
            The infringement by any person of any intellectual property
            rights of any third party caused by the use of the platform or any
            product purchased through the platform.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Any loss or damage resulting from your use or inability to
            use the platform or resulting from unauthorized access to or
            alteration of your transmissions or data in circumstances beyond our
            control.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Any loss of profit, wastage, corruption or destruction of
            data or any other loss not directly resulting from something we have
            done wrong.
          </li>
          <li className="pl-4 text-md md:text-lg">
            All representations, warranties, conditions and other terms
            that would otherwise be effective are set forth in this notice.
          </li>
        </div>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">13. PROHIBITED ACTIVITIES</p>
        <p className="text-md md:text-lg mb-4">
          The content and information available on the platform (including, but
          not limited to, data, information, text, music, sound, photos,
          graphics, video, maps, icons, or other material), as well as the
          infrastructure used to provide such content and information, are owned
          by or licensed to Breakzen by third parties. For all content other
          than your content, you agree not to modify, copy, distribute,
          transmit, display, perform, reproduce, publish, license, create
          derivative works from, transfer, or sell or resell any information or
          services obtained from or through the platform. In addition, the
          following activities are prohibited:
        </p>
        <div className="mb-4">
          <li className="pl-4 text-md md:text-lg">
            Access, monitor, reproduce, distribute, transmit,
            disseminate, display, sell, license, copy or otherwise exploit any
            content of the site, including, without limitation, using any robot,
            spider, scraper or other automated means or any manual process for
            any purpose that is not in accordance with this agreement or without
            our express written permission.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Take any action that imposes, or may impose, in our sole
            discretion, an unreasonable or disproportionately large load on our
            infrastructure.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Deep-link to any part of the application for any purpose
            without our express written permission.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Attempt to modify, translate, adapt, edit, decompile,
            disassemble or reverse engineer any software used by Breakzen.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Evade, disable or otherwise interfere with security-related
            features of the platform or features that prevent or restrict use or
            copying of any content.
          </li>
        </div>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">14. INDEMNIFICATION</p>
        <p className="text-md md:text-lg mb-4">
          You agree to defend and indemnify Breakzen and any of their directors,
          employees and agents from and against any claims, causes of action,
          demands, recoveries, losses, damages, fines, penalties or other costs
          or expenses of any kind or nature including but not limited to
          reasonable legal and accounting fees, brought by third parties as a
          result of:
        </p>
        <div className="mb-4">
          <li className="pl-4 text-md md:text-lg">
            Your breach of this Agreement or the documents referenced
            herein.
          </li>
          <li className="pl-4 text-md md:text-lg">
            Your violation of any law or the rights of a third party.
          </li>
          <li className="pl-4 text-md md:text-lg">Your use of the platform.</li>
        </div>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">15. ELECTRONIC COMMUNICATIONS</p>
        <p className="text-md md:text-lg mb-4">
          No responsibility will be accepted by Breakzen for failed, partial or
          garbled computer transmissions, for any computer, telephone, cable,
          network, electronic or internet hardware or software malfunctions,
          failures, connections, availability, for the acts or omissions of any
          service provider, internet accessibility or availability or for
          traffic congestion or unauthorized human act, including any errors or
          mistakes.
        </p>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">16. CHANGES AND TERMINATION</p>
        <p className="text-md md:text-lg mb-4">
          We may change the platform and these Terms at any time, in our sole
          discretion and without notice to you. You are responsible for
          remaining knowledgeable about these Terms. Your continued use of the
          platform constitutes your acceptance of any changes to these Terms and
          any changes will supersede all previous versions of the Terms. Unless
          otherwise specified herein, all changes to these Terms apply to all
          users take effect. Furthermore, we may terminate this agreement with
          you under these Terms at any time by notifying you in writing
          (including by email) or without any warning.
        </p>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">17. PERSONAL DATA</p>
        <p className="text-md md:text-lg mb-4">
          Any personal information you submit in connection with the use of the
          platform will be used in accordance with our Privacy Policy. Please
          refer to our Privacy Policy.
        </p>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">18. INTEGRATION CLAUSE</p>
        <p className="text-md md:text-lg mb-4">
          This Agreement together with the Privacy Policy and any other legal
          notices published by Breakzen, shall constitute the entire agreement
          between you and Breakzen concerning and governs your use of the
          platform.
        </p>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">19. DISPUTES</p>
        <p className="text-md md:text-lg mb-4">
          You agree that any dispute, claim or controversy arising out of or
          relating to the breach, termination, enforcement, interpretation or
          validity of these terms and conditions or the use of the platform
          shall be resolved by binding arbitration between you and Breakzen,
          provided that each party retains the right to bring an individual
          action in a court of competent jurisdiction.
        </p>
        <p className="text-md md:text-lg mb-4">
          In the event a dispute arises in connection with your use of the
          platform or breach of these terms and conditions, the parties agree to
          submit their dispute to arbitration resolution before a reputable
          arbitration organization, as mutually agreed by the parties and in
          accordance with applicable commercial arbitration rules.
        </p>
        <p className="text-md md:text-lg mb-4">
          You agree to initiate a formal dispute proceeding by sending us a
          communication through our contact information. Breakzen may choose to
          send you a written offer after receiving your initial communication.
          If we offer and send you a settlement offer and you do not accept the
          offer, or we are unable to resolve your dispute satisfactorily and you
          wish to continue with the dispute process, you must initiate the
          dispute resolution process before an accredited arbitration
          organization and file a separate Demand for Arbitration. Any award
          rendered by the arbitration tribunal shall be final and conclusive on
          the parties.{" "}
        </p>
        <p className="text-md md:text-lg mb-4">
          To the fullest extent permitted by law, you agree that you will not
          file, join or participate in any class action lawsuit in connection
          with any claim, dispute or controversy that may arise in connection
          with your use of the platform.
        </p>
        <p className="text-md md:text-lg mb-4">
          The arbitration courts and the courts of the State of New Jersey
          (United States) shall have jurisdiction to hear any claim or dispute
          regarding the use of the platform.
        </p>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">20. FINAL PROVISIONS</p>
        <p className="text-md md:text-lg mb-4">
          These terms and conditions are governed by the laws of the United
          States. Use of our platform is unauthorized in any jurisdiction that
          does not give effect to all provisions of these Terms.
        </p>
        <p className="text-md md:text-lg mb-4">
          Our compliance with these Terms is subject to existing laws and legal
          process, and nothing contained in these Terms limits our right to
          comply with law enforcement or other governmental or legal requests or
          requirements relating to your use of our platform or information
          provided to or collected by us with respect to such use.
        </p>
        <p className="text-md md:text-lg mb-4">
          If any part of these Terms is held invalid, illegal or unenforceable,
          the validity, legality and enforceability of the remaining provisions
          shall not be affected or impaired in any way. Our failure to enforce
          or delay in enforcing any provision of these Terms at any time does
          not waive our right to enforce the same or any other provision in the
          future.
        </p>
        <p className="text-md md:text-lg mb-4">
          Any rights not expressly granted herein are reserved.
        </p>
      </div>
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-6">21. CONTACT INFORMATION</p>
        <p className="text-md md:text-lg mb-4">
          If you have any questions or concerns about these Terms, please
          contact us using our contact information below:
        </p>
        <p className="text-md md:text-lg mb-4">Breakzen LLC.</p>
        <p className="text-md md:text-lg mb-4">Support@breakzen.com</p>
      </div>
    </div>
  );
}

export default function Terms_Condition() {
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
