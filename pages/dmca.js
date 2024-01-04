import Layout from "@/layout/layout";
import React from "react";

const DMCA = () => {
  return (
    <Layout>
      <div className="p-4 dark:text-white privecy">
        <h1 className="text-5xl font-semibold border-b-2 border-dotted border-dark dark:border-white mb-3 text-center">
          DMCA - Disaster Scans
        </h1>
        <section>
          <p className="md:text-left text-center mt-3">
            The Digital Millennium Copyright Act (“DMCA”) is designed to protect
            content creators from having their work stolen and published by
            other people on the internet.
          </p>
          <p className="md:text-left text-center mt-3">
            The law specifically targets websites where owners do not know who
            contributed each item of content or that the website is a platform
            for uploading and publishing content.
          </p>
          <p className="md:text-left text-center mt-3">
            We have the policy to respond to any infringement notice and take
            appropriate action.
          </p>
          <p className="md:text-left text-center mt-3">
            This Digital Millennium Copyright Act policy applies to the
            <a
              href="/home"
              target="_blank"
              className="text-slate-500 hover:text-yellow-400"
            >
              &ldquo;https://disasterscans.com&ldquo;
            </a>{" "}
            website (“Website” or “Service”) and any of its related products and
            services (collectively, “Services”) and outlines how this Website
            operator (“Operator”, “we”, “us” or “our”) addresses copyright
            infringement notifications and how you (“you” or “your”) may submit
            a copyright infringement complaint.
          </p>
          <p className="md:text-left text-center mt-3">
            Protection of intellectual property is of utmost importance to us
            and we ask our users and their authorized agents to do the same. It
            is our policy to expeditiously respond to clear notifications of
            alleged copyright infringement that comply with the United States
            Digital Millennium Copyright Act (“DMCA”) of 1998, the text of which
            can be found at the U.S. Copyright Office website.
          </p>
        </section>
        <section>
          <h2 className="text-3xl font-semibold border-b-2 border-dotted border-dark dark:border-white my-3 md:text-left text-center">
            What to consider before submitting a copyright complaint
          </h2>
          <p className="md:text-left text-center my-3">
            Please note that if you are unsure whether the material you are
            reporting is in fact infringing, you may wish to contact an attorney
            before filing a notification with us.
          </p>
          <p className="md:text-left text-center my-3">
            The DMCA requires you to provide your personal information in the
            copyright infringement notification. If you are concerned about the
            privacy of your personal information.
          </p>
        </section>
        <section>
          <h2 className="text-3xl font-semibold border-b-2 border-dotted border-dark dark:border-white my-3 md:text-left text-center">
            Notifications of infringement
          </h2>
          <p className="md:text-left text-center my-3">
            If you are a copyright owner or an agent thereof, and you believe
            that any material available on our Services infringes your
            copyrights, then you may submit a written copyright infringement
            notification (“Notification”) using the contact details below
            pursuant to the DMCA. All such Notifications must comply with the
            DMCA requirements.
          </p>
          <p className="md:text-left text-center my-3">
            Filing a DMCA complaint is the start of a pre-defined legal process.
            Your complaint will be reviewed for accuracy, validity, and
            completeness. If your complaint has satisfied these requirements,
            our response may include the removal or restriction of access to
            allegedly infringing material.
          </p>
          <p className="md:text-left text-center my-3">
            If we remove or restrict access to materials or terminate an account
            in response to a Notification of alleged infringement, we will make
            a good faith effort to contact the affected user with information
            concerning the removal or restriction of access.
          </p>
          <p className="md:text-left text-center my-3">
            Not with standing anything to the contrary contained in any portion
            of this Policy, the Operator reserves the right to take no action
            upon receipt of a DMCA copyright infringement notification if it
            fails to comply with all the requirements of the DMCA for such
            notifications.
          </p>
          <p className="md:text-left text-center my-3">
            The process described in this Policy does not limit our ability to
            pursue any other remedies we may have to address suspected
            infringement.
          </p>
        </section>
        <section>
          <h2 className="text-3xl font-semibold border-b-2 border-dotted border-dark dark:border-white my-3 md:text-left text-center">
            Changes and amendments
          </h2>
          <p className="md:text-left text-center my-3">
            We reserve the right to modify this Policy or its terms related to
            the Website and Services at any time at our discretion. When we do,
            we will post a notification on the main page of the Website, send
            you an email to notify you. We may also provide notice to you in
            other ways at our discretion, such as through the contact
            information you have provided.
          </p>
          <p className="md:text-left text-center my-3">
            An updated version of this Policy will be effective immediately upon
            the posting of the revised Policy unless otherwise specified. Your
            continued use of the Website and Services after the effective date
            of the revised Policy (or such other act specified at that time)
            will constitute your consent to those changes.
          </p>
        </section>
        <section>
          <h2 className="text-3xl font-semibold border-b-2 border-dotted border-dark dark:border-white my-3 md:text-left text-center">
            Reporting copyright infringement
          </h2>
          <p className="md:text-left text-center my-3">
            If you would like to notify us of the infringing material or
            activity, we encourage you to contact us via email address given
            below.
          </p>
          <p className="md:text-left text-center my-3">
            <span className="font-semibold">Email: </span>
            <a
              href="mailto:martialscans@gmail.com"
              className="text-slate-500 hover:text-yellow-400 cursor-pointer"
            >
              dmca@disasterscans.com
            </a>
          </p>
          <p className="md:text-left text-center my-3">
            <span className="font-semibold">Note: </span>
            <span>Please allow 1-2 business days for an email response.</span>
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default DMCA;
