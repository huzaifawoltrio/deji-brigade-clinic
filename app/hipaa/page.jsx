import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lock, FileText, ShieldCheck } from "lucide-react";

export default function Hipaa() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <ShieldCheck className="w-20 h-20 text-primary-500 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-4 text-gray-900">
              Notice of Privacy Practices
            </h1>
            <p className="text-lg text-gray-600">
              THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE
              USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION.
              PLEASE REVIEW IT CAREFULLY.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Effective Date: October 7, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900">
                Our Commitment to Your Privacy
              </h2>
              <p>
                Brigade Clinic is dedicated to maintaining the privacy of your
                protected health information (PHI). We are required by law to
                provide you with this notice of our legal duties and privacy
                practices. We will follow the terms of this notice and may
                change our practices in the future. Any changes will be
                effective for all PHI that we maintain.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900">
                How We May Use and Disclose Your PHI
              </h2>
              <p>
                The following categories describe different ways that we use and
                disclose your PHI. Not every use or disclosure in a category
                will be listed. However, all of the ways we are permitted to use
                and disclose information will fall within one of the categories.
              </p>
              <ul>
                <li>
                  <strong>For Treatment:</strong> We may use your PHI to provide
                  you with medical treatment or services. We may disclose your
                  PHI to doctors, nurses, technicians, or other personnel who
                  are involved in taking care of you.
                </li>
                <li>
                  <strong>For Payment:</strong> We may use and disclose your PHI
                  so that the treatment and services you receive may be billed
                  to and payment may be collected from you, an insurance
                  company, or a third party.
                </li>
                <li>
                  <strong>For Health Care Operations:</strong> We may use and
                  disclose your PHI for our health care operations. These uses
                  are necessary to run our clinic and make sure that all of our
                  patients receive quality care.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900">
                Your Health Information Rights
              </h2>
              <p>You have the following rights regarding your PHI:</p>
              <ul>
                <li>
                  <strong>Right to Inspect and Copy:</strong> You have the right
                  to inspect and copy your PHI. To do so, you must submit your
                  request in writing to our Privacy Officer.
                </li>
                <li>
                  <strong>Right to Amend:</strong> If you feel that PHI we have
                  about you is incorrect or incomplete, you may ask us to amend
                  the information. You have the right to request an amendment
                  for as long as the information is kept by or for the clinic.
                </li>
                <li>
                  <strong>Right to an Accounting of Disclosures:</strong> You
                  have the right to request an "accounting of disclosures." This
                  is a list of the disclosures we made of your PHI for purposes
                  other than treatment, payment, or health care operations.
                </li>
                <li>
                  <strong>Right to Request Restrictions:</strong> You have the
                  right to request a restriction or limitation on the PHI we use
                  or disclose about you for treatment, payment, or health care
                  operations.
                </li>
                <li>
                  <strong>Right to Request Confidential Communications:</strong>{" "}
                  You have the right to request that we communicate with you
                  about medical matters in a certain way or at a certain
                  location.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900">Complaints</h2>
              <p>
                If you believe your privacy rights have been violated, you may
                file a complaint with Brigade Clinic or with the Secretary of
                the Department of Health and Human Services. To file a complaint
                with us, please contact our Privacy Officer at the address and
                number below. All complaints must be submitted in writing. You
                will not be penalized for filing a complaint.
              </p>
            </section>

            <section className="bg-gray-50 p-6 rounded-lg border">
              <h2 className="text-3xl font-bold text-gray-900">
                Contact Information
              </h2>
              <p>
                If you have any questions about this notice, please contact our
                Privacy Officer:
              </p>
              <p>
                <strong>Privacy Officer</strong>
                <br />
                Brigade Clinic
                <br />
                1285 Marks Church Road, STE D, Augusta GA 30909
                <br />
                Phone: 706-471-8845
                <br />
                Email: intake@brigadephysicians.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
