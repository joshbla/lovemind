import type { Metadata } from "next";
import { PolicyDocument, PolicyHeading, PolicyLink } from "@/components/phase3/policies/policy-layout";

export const metadata: Metadata = {
  title: { absolute: "Lovemind | Privacy Policy" },
};

const blocks = [
  {
    "type": "copy",
    "text": "Protecting your private information is our priority. This Statement of Privacy applies to lovemind.net, and Lovemind lnc and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to Lovemind Inc include lovemind.net and Lovemind. The Lovemind website is a E-Commerce site. By using the Lovemind website, you consent to the data practices described in this statement."
  },
  {
    "type": "heading",
    "text": "Collection of your Personal Information"
  },
  {
    "type": "copy",
    "text": "In order to better provide you with products and services offered, Lovemind may collect personally identifiable information, such as your:"
  },
  {
    "type": "copy",
    "text": "- First and Last Name"
  },
  {
    "type": "copy",
    "text": "- Mailing Address"
  },
  {
    "type": "copy",
    "text": "- E-mail Address"
  },
  {
    "type": "copy",
    "text": "- Phone Number"
  },
  {
    "type": "copy",
    "text": "If you purchase Lovemind's products and services, we collect billing and credit card information. This information is used to complete the purchase transaction."
  },
  {
    "type": "copy",
    "text": "Lovemind may also collect anonymous demographic information, which is not unique to you, such as your:"
  },
  {
    "type": "copy",
    "text": "- Age"
  },
  {
    "type": "copy",
    "text": "Please keep in mind that if you directly disclose personally identifiable information or personally sensitive data through Lovemind's public message boards, this information may be collected and used by others."
  },
  {
    "type": "copy",
    "text": "We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal information to us when you elect to use certain products or services. These may include: (a) registering for an account; (b) entering a sweepstakes or contest sponsored by us or one of our partners; (c) signing up for special offers from selected third parties; (d) sending us an email message; (e) submitting your credit card or other payment information when ordering and purchasing products and services. To wit, we will use your information for, but not limited to, communicating with you in relation to services and/or products you have requested from us. We also may gather additional personal or non-personal information in the future."
  },
  {
    "type": "heading",
    "text": "Use of your Personal Information"
  },
  {
    "type": "copy",
    "text": "Lovemind collects and uses your personal information to operate and deliver the services you have requested."
  },
  {
    "type": "copy",
    "text": "Lovemind may also use your personally identifiable information to inform you of other products or services available from Lovemind and its affiliates."
  },
  {
    "type": "heading",
    "text": "Sharing Information with Third Parties"
  },
  {
    "type": "copy",
    "text": "Lovemind does not sell, rent or lease its customer lists to third parties."
  },
  {
    "type": "copy",
    "text": "Lovemind may, from time to time, contact you on behalf of external business partners about a particular offering that may be of interest to you. In those cases, your unique personally identifiable information (e-mail, name, address, telephone number) is transferred to the third party. Lovemind may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to Lovemind, and they are required to maintain the confidentiality of your information."
  },
  {
    "type": "copy",
    "text": "Lovemind may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on Lovemind or the site; (b) protect and defend the rights or property of Lovemind; and or (c) act under exigent circumstances to protect the personal safety of users of Lovemind, or the public."
  },
  {
    "type": "heading",
    "text": "Opt-Out of Disclosure of Personal Information to Third Parties"
  },
  {
    "type": "copy",
    "text": "In connection with any personal information we may disclose to a third part}- for a business purpose, you have the right to know:"
  },
  {
    "type": "copy",
    "text": "- The categories of personal information that we disclosed about you for a business purpose."
  },
  {
    "type": "copy",
    "text": "You have the right under the California Consumer Privacy Act of 2018 (CCPA) and certain other privacy and data protection laws, as applicable, to opt out of the disclosure of your personal information. If you exercise your right to opt-out of the disclosure of your personal information, we will refrain from disclosing your personal information, unless you subsequently provide express authorization for the disclosure of your personal information. To opt-out of the disclosure of your personal information, contact this email contact@lovemind.net"
  },
  {
    "type": "heading",
    "text": "Automatically Collected Information"
  },
  {
    "type": "copy",
    "text": "Information about your computer hardware and software may be automatically collected by Lovemind. This information can include: your IP address, browser type, domain names, access times and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the Lovemind website."
  },
  {
    "type": "heading",
    "text": "Links"
  },
  {
    "type": "copy",
    "text": "This website contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information."
  },
  {
    "type": "heading",
    "text": "Security of your Personal Information"
  },
  {
    "type": "copy",
    "text": "Lovemind secures your personal information from unauthorized access, use, or disclosure. Lovemind uses the following methods for this purpose:"
  },
  {
    "type": "copy",
    "text": "- SSL Protocol"
  },
  {
    "type": "copy",
    "text": "When personal information (such as a credit card number) is transmitted to other websites, it is protected through the use of encryption, such as the Secure Sockets Layer (SSL) protocol."
  },
  {
    "type": "copy",
    "text": "We strive to take appropriate security measures to protect against unauthorized access to or alteration of your personal information. Unfortunately, no data transmission over the Internet or any wireless network can be guaranteed to be 100% secure. As a result, while we strive to protect your personal information, you acknowledge that: (a) there are security and privacy limitations inherent to the Internet which are beyond our control; and (b) security-, integrity; and privacy of any and all information and data exchanged between you and us through this Site cannot be guaranteed."
  },
  {
    "type": "heading",
    "text": "Right to Deletion"
  },
  {
    "type": "copy",
    "text": "Subject to certain exceptions set out below, on receipt of a verifiable request from you, we will:"
  },
  {
    "type": "copy",
    "text": "- Delete your personal information from our records; and"
  },
  {
    "type": "copy",
    "text": "- Direct any service providers to delete your personal information from their records."
  },
  {
    "type": "copy",
    "text": "Please note that we may not be able to comply with requests to delete your personal information if it is necessary to:"
  },
  {
    "type": "copy",
    "text": "- Complete the transaction for which the personal information was collected, fulfill the terms of a written warranty- or product recalls conducted in accordance with federal law, provide a good or service requested by you, or reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform a contract between you and us;"
  },
  {
    "type": "copy",
    "text": "- Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity; or prosecute those responsible for that activity;"
  },
  {
    "type": "copy",
    "text": "- Debug to identify- and repair errors that impair existing intended functionality-;"
  },
  {
    "type": "copy",
    "text": "- Exercise free speech, ensure the right of another consumer to exercise his or her right of free speech, or exercise another right provided for by law;"
  },
  {
    "type": "copy",
    "text": "- Comply with the California Electronic Communications Privacy Act;"
  },
  {
    "type": "copy",
    "text": "- Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when our deletion of the information is likely to render impossible or seriously impair the achievement of such research, provided we have obtained your informed consent;"
  },
  {
    "type": "copy",
    "text": "- Enable solely internal uses that are reasonably aligned with your expectations based on your relationship with us;"
  },
  {
    "type": "copy",
    "text": "- Comply with an existing legal obligation; or"
  },
  {
    "type": "copy",
    "text": "- Otherwise use your personal information, internally, in a lawful manner that is compatible with the context in which you provided die information."
  },
  {
    "type": "heading",
    "text": "Children Under Thirteen"
  },
  {
    "type": "copy",
    "text": "Lovemind does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission to use this website."
  },
  {
    "type": "heading",
    "text": "Disconnecting your Lovemind Account from Third Party Websites"
  },
  {
    "type": "copy",
    "text": "You will be able to connect your Lovemind account to third-party accounts. BY CONNECTING YOUR LOVEMIND ACCOUNT TO YOUR THIRD PARTY ACCOUNT, YOU ACKNOWLEDGE AND AGREE THAT YOU ARE CONSENTING TO THE CONTINUOUS RELEASE OF INFORMATION ABOUT YOU TO OTHERS (IN ACCORDANCE WITH YOUR PRIVACY SETTINGS ON THOSE THIRD PARTY SITES). IF YOU DO NOT WANT INFORMATION ABOUT YOU, INCLUDING PERSONALLY IDENTIFYING INFORMATION, TO BE SHARED IN THIS MANNER, DO NOT USE THIS FEATURE. You may disconnect your account from a third-party account at any time. Users may learn how to disconnect their accounts from third-party- websites by visiting their \"My Account\" page. Users may also contact us via email."
  },
  {
    "type": "heading",
    "text": "Opt-Out & Unsubscribe from Third Party Communications"
  },
  {
    "type": "copy",
    "text": "Wre respect your privacy and give you an opportunity- to opt-out of receiving announcements of certain information. Users may opt-out of receiving any or all communications from third-party- partners of Lovemind by contacting us here:"
  },
  {
    "type": "copy",
    "text": "- Email: contact@lovemind.net"
  },
  {
    "type": "heading",
    "text": "E-mail Communications"
  },
  {
    "type": "copy",
    "text": "From time to time, Lovemind may contact you via email for die purpose of providing announcements, promotional offers, alerts, confirmations, surveys, and or other general communication."
  },
  {
    "type": "copy",
    "text": "If you would like to stop receiving marketing or promotional communications via email from Lovemind, you may opt-out of such communications by replying STOP or clicking on the UNSUBSCRIBE button."
  },
  {
    "type": "heading",
    "text": "External Data Storage Sites"
  },
  {
    "type": "copy",
    "text": "We may store your data on servers provided by third-party hosting vendors with whom we have contracted."
  },
  {
    "type": "heading",
    "text": "Changes to this Statement"
  },
  {
    "type": "copy",
    "text": "Lovemind reserves the right to change this Privacy Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account, by placing a prominent notice on our website, and or by updating any privacy information. Your continued use of the website and or Sen-ices available after such modifications will constitute your: (a) acknowledgment of the modified Privacy Policy; and (b) agreement to abide and be bound by that Policy."
  },
  {
    "type": "heading",
    "text": "Contact Information"
  },
  {
    "type": "copy",
    "text": "Lovemind welcomes your questions or comments regarding this Statement of Privacy. If you believe that Lovemind has not adhered to this Statement, please contact Lovemind at:"
  },
  {
    "type": "copy",
    "text": "Lovemind Inc"
  },
  {
    "type": "copy",
    "text": "Email Address:"
  },
  {
    "type": "copy",
    "text": "contact@lovemind.net"
  },
  {
    "type": "copy",
    "text": "Effective as of January 20, 2020"
  },
  {
    "type": "copy",
    "text": "Do Not Sell My Personal Information"
  }
] as const;

function PrivacyCopy({ text }: { text: string }) {
  const email = "contact@lovemind.net";
  const index = text.indexOf(email);

  if (index === -1) {
    return <p className={text.startsWith("- ") ? "pl-4" : text === "Do Not Sell My Personal Information" ? "underline" : undefined}>{text}</p>;
  }

  return (
    <p>
      {text.slice(0, index)}
      <PolicyLink href="mailto:contact@lovemind.net?subject=Privacy%20Policy%20Support">{email}</PolicyLink>
      {text.slice(index + email.length)}
    </p>
  );
}

export default function PrivacyPage() {
  return (
    <PolicyDocument title="Privacy Policy">
      {blocks.map((block, index) => block.type === "heading" ? (
        <PolicyHeading key={index}>{block.text}</PolicyHeading>
      ) : (
        <PrivacyCopy key={index} text={block.text} />
      ))}
    </PolicyDocument>
  );
}
