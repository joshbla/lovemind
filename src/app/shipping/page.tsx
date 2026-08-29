import type { Metadata } from "next";
import { PolicyDocument, PolicyHeading, PolicyLink } from "@/components/phase3/policies/policy-layout";

export const metadata: Metadata = {
  title: { absolute: "Lovemind | Fulfillment and Shipping" },
};

export default function ShippingPage() {
  return (
    <PolicyDocument title="Fulfillment and Shipping Policy">
      <p className="text-[19px]">Lovemind&apos;s Shipping Policy</p>

      <div>
        <PolicyHeading>Domestic Shipping Policy</PolicyHeading>
        <p>Shipment processing time</p>
        <p>All orders are processed within 7 days.</p>
      </div>

      <p>Shipments do not occur on weekends or holidays. If Lovemind is experiencing a high volume of orders, expect delays of multiple days. Any such delays will be communicated to the customer according to the contact information that has been submitted in conjunction with the order.</p>

      <PolicyHeading>Shipping rates and delivery estimates:</PolicyHeading>

      <div><p>FedEx Standard</p><p>3-5 business days</p><p>Free</p></div>
      <div><p>FedEx Two Days</p><p>2 business days</p><p>$12.95</p></div>
      <div><p>FedEx Overnight *</p><p>1-2 business days</p><p>$19.95</p></div>

      <p>*FedEx may be unexpectedly limited in its shipping locations and delivery delays may occur.</p>

      <div>
        <PolicyHeading>Shipment to P.O. boxes or APO/FPO addresses</PolicyHeading>
        <p>We currently ship to P.O. boxes or APO/FPO addresses.</p>
      </div>

      <div>
        <PolicyHeading>Shipment confirmation and order tracking</PolicyHeading>
        <p>Customers will receive a shipment confirmation and tracking number the day their order is processed.</p>
      </div>

      <div>
        <PolicyHeading>Customs, duties, and taxes</PolicyHeading>
        <p>Lovemind is not responsible for any customs and taxes applied to your order. All fees imposed during or after shipping are the responsibility of the customer (tariffs, taxes, etc.).</p>
      </div>

      <div>
        <PolicyHeading>Damages</PolicyHeading>
        <p>Lovemind is not liable for any products damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier or our support team directly to file a claim. Please save all packaging material and damaged goods before filing a claim.</p>
      </div>

      <div>
        <PolicyHeading>International Shipping Policy</PolicyHeading>
        <p>We do not currently ship products outside of the United States.</p>
      </div>

      <div>
        <PolicyHeading>Returns Policy</PolicyHeading>
        <p>Lovemind offers returns on all shipped items. To start the process, email <PolicyLink href="mailto:contact@lovemind.net?subject=Return%20Support">contact@lovemind.net</PolicyLink>. You will be responsible for the cost of shipping a return. Returns should be sent to the address below. Returns process within a month of arrival to the return address. Customers can expect to see a full refund within the aforementioned month.</p>
      </div>

      <p>For more information, email support at <PolicyLink href="mailto:contact@lovemind.net?subject=Fulfillment%20and%20Shipping%20Support">contact@lovemind.net</PolicyLink></p>
    </PolicyDocument>
  );
}
