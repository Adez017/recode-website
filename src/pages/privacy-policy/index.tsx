import Layout from "@theme/Layout";
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <Layout
      title="Privacy Policy"
      description="Privacy Policy of recode hive for Learners, and users"
    >
      <div className="mx-auto mt-8 mb-16 max-w-5xl px-4">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-green-100 p-3 dark:bg-green-900/30">
            <svg
              className="h-8 w-8 text-green-600 dark:text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h1 className="mb-3 text-4xl font-bold text-gray-900 dark:text-white">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            <strong>Last Updated:</strong> 25th May 2025
          </p>
        </div>

        {/* Introduction Card */}
        <div className="mb-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 p-6 shadow-sm dark:border-gray-600 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-800">
          <p className="text-base leading-7 text-gray-700 dark:text-gray-300">
            Welcome to{" "}
            <a
              href="https://github.com/sanjay-kv"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-green-600 underline decoration-green-300 hover:text-green-700 dark:text-green-400 dark:decoration-green-600 dark:hover:text-green-300"
            >
              RecodeHive
            </a>
            , an educational and technology-focused platform operated by{" "}
            <a
              href="https://github.com/sanjay-kv"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-green-600 underline decoration-green-300 hover:text-green-700 dark:text-green-400 dark:decoration-green-600 dark:hover:text-green-300"
            >
              Sanjay Viswanthan
            </a>
            . We are committed to protecting your privacy and ensuring the
            security of your personal information. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when
            you visit our website.
          </p>
          <div className="mt-4 rounded-lg bg-white/60 p-4 dark:bg-gray-900/60">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              By accessing or using our website, you consent to the terms of
              this Privacy Policy. If you do not agree with the terms of this
              Privacy Policy, please do not use our website.
            </p>
          </div>
        </div>

        {/* Information We Collect Section */}
        <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-600 dark:bg-gray-800">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-blue-100 p-2 dark:bg-blue-900/30">
              <svg
                className="h-6 w-6 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Information We Collect
            </h3>
          </div>
          <p className="leading-7 text-gray-700 dark:text-gray-300">
            We collect personal information that you voluntarily provide to us
            when you interact with the website, such as your name, email
            address, and any other information you choose to share. We may also
            collect technical information about your device and usage patterns
            to improve our website&apos;s functionality and user experience.
          </p>
        </div>

        {/* What personal data we collect Section */}
        <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-600 dark:bg-gray-800">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-purple-100 p-2 dark:bg-purple-900/30">
              <svg
                className="h-6 w-6 text-purple-600 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              What personal data we collect and why we collect it
            </h3>
          </div>
          <div className="space-y-4">
            <div className="rounded-lg border-l-4 border-green-500 bg-gray-50 p-4 dark:bg-gray-700/50">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white">
                  1
                </span>
                <div>
                  <strong className="text-gray-900 dark:text-white">
                    Comments & Personalization:
                  </strong>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    When visitors leave comments on the site we collect the data
                    shown in the comments form, and also the visitors IP address
                    and browser user agent string to help spam detection. To
                    customize your experience on our website and provide content
                    and resources tailored to your interests and preferences.
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-lg border-l-4 border-blue-500 bg-gray-50 p-4 dark:bg-gray-700/50">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                  2
                </span>
                <div>
                  <strong className="text-gray-900 dark:text-white">
                    Media & Communication:
                  </strong>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    If you upload images to the website, you should avoid
                    uploading images with embedded location data (EXIF GPS)
                    included. Visitors to the website can download and extract
                    any location data from images on the website. To respond to
                    your inquiries, provide customer support, and send you
                    updates and notifications about our services, events, and
                    educational materials.
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-lg border-l-4 border-purple-500 bg-gray-50 p-4 dark:bg-gray-700/50">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-white">
                  3
                </span>
                <div>
                  <strong className="text-gray-900 dark:text-white">
                    Cookies & Analytics:
                  </strong>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    If you leave a comment on our site you may opt-in to save
                    your name, email address and website in cookies. We use
                    third party app giscuss for this purpose to directly
                    authorise with Github. If you have an account and you log in
                    to this site, we will set a temporary cookie to determine if
                    your browser accepts cookies. This cookie contains no
                    personal data and is discarded when you close your browser.
                    These are for your convenience so that you do not have to
                    fill in your details again when you leave another comment.
                    These cookies will last for one year. To analyze trends,
                    track user interactions, and gather demographic information
                    to improve our website&apos;s performance and user
                    experience.
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-lg border-l-4 border-red-500 bg-gray-50 p-4 dark:bg-gray-700/50">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">
                  4
                </span>
                <div>
                  <strong className="text-gray-900 dark:text-white">
                    Security:
                  </strong>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    To protect our website from security threats, fraud, or
                    other malicious activities.
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-lg border-l-4 border-yellow-500 bg-gray-50 p-4 dark:bg-gray-700/50">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500 text-sm font-bold text-white">
                  5
                </span>
                <div>
                  <strong className="text-gray-900 dark:text-white">
                    Legal Compliance:
                  </strong>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    To comply with applicable laws, regulations, or legal
                    processes.
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-lg border-l-4 border-indigo-500 bg-gray-50 p-4 dark:bg-gray-700/50">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-sm font-bold text-white">
                  6
                </span>
                <div>
                  <strong className="text-gray-900 dark:text-white">
                    Contact forms & Marketing:
                  </strong>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    If you contact us we will use your name and email address to
                    reply to your query and we won't share that information with
                    third party. To promote our services, events, and
                    educational materials through targeted advertising and
                    promotional campaigns. If you are subscribing to our blog
                    you will get emails from substack. You will get emails about
                    a new article, freebies, e-book and much more. If you want
                    you can unsubscribe to the emails and it is really easy. You
                    can read About the General Data Protection.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Grid for Shorter Sections */}
        <div className="mb-8 grid gap-6 md:grid-cols-2">
          {/* How long we retain your data */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-600 dark:bg-gray-800">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-orange-100 p-2 dark:bg-orange-900/30">
                <svg
                  className="h-6 w-6 text-orange-600 dark:text-orange-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                How long we retain your data
              </h3>
            </div>
            <p className="text-sm leading-6 text-gray-700 dark:text-gray-300">
              If you leave a comment, the comment and its metadata are retained
              indefinitely. This is so we can recognize and approve any
              follow-up comments automatically instead of holding them in a
              moderation queue.
            </p>
          </div>

          {/* Data Retention */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-600 dark:bg-gray-800">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-teal-100 p-2 dark:bg-teal-900/30">
                <svg
                  className="h-6 w-6 text-teal-600 dark:text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Data Retention
              </h3>
            </div>
            <p className="text-sm leading-6 text-gray-700 dark:text-gray-300">
              We will retain your personal information for as long as necessary
              to fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required or permitted by law. For users
              that register on our website (if any), we also store the personal
              information they provide in their user profile. All users can see,
              edit, or delete their personal information at any time (except
              they cannot change their username). Website administrators can
              also see and edit that information.
            </p>
          </div>
        </div>

        {/* Your Rights Section */}
        <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-600 dark:bg-gray-800">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-pink-100 p-2 dark:bg-pink-900/30">
              <svg
                className="h-6 w-6 text-pink-600 dark:text-pink-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Your Rights
            </h3>
          </div>
          <p className="leading-7 text-gray-700 dark:text-gray-300">
            We are using CloudFlare SSL on our website and everything which you
            send to us is with us and the data won't be shared with any third
            party. You have the right to access, update, correct, or delete your
            personal information at any time. You can also object to the
            processing of your personal information or request that we restrict
            certain processing activities. To exercise these rights, please
            contact us using the information provided below.
          </p>
        </div>

        {/* Third-Party Links Section */}
        <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-600 dark:bg-gray-800">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-cyan-100 p-2 dark:bg-cyan-900/30">
              <svg
                className="h-6 w-6 text-cyan-600 dark:text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Third-Party Links
            </h3>
          </div>
          <p className="leading-7 text-gray-700 dark:text-gray-300">
            Our website may contain links to third-party websites or resources
            that are not owned or controlled by us. We are not responsible for
            the privacy practices or content of these third-party websites. We
            encourage you to review the privacy policies of these websites
            before providing any personal information.
          </p>
        </div>

        {/* Children's Privacy Section */}
        <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-600 dark:bg-gray-800">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-yellow-100 p-2 dark:bg-yellow-900/30">
              <svg
                className="h-6 w-6 text-yellow-600 dark:text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Children&apos;s Privacy
            </h3>
          </div>
          <p className="leading-7 text-gray-700 dark:text-gray-300">
            If there is data breach we will contact the subscribers that there
            was a data breach and we will write an email to them whose data is
            lost. Our website is not directed to children under the age of 13.
            We do not knowingly collect personal information from children under
            13. If you are a parent or guardian and believe that your child has
            provided us with personal information, please contact us, and we
            will take appropriate steps to remove such information from our
            records.
          </p>
        </div>

        {/* What third parties we receive data from Section */}
        <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-600 dark:bg-gray-800">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-indigo-100 p-2 dark:bg-indigo-900/30">
              <svg
                className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              What third parties we receive data from
            </h3>
          </div>
          <p className="leading-7 text-gray-700 dark:text-gray-300">
            We recieve data from Google AdSense and Google Analytics about the
            user behaviour. We reserve the right to update or modify this
            Privacy Policy at any time. We will notify you of any changes by
            posting the new Privacy Policy on this page. Your continued use of
            our website after any modifications indicates your acceptance of the
            updated Privacy Policy.
          </p>
        </div>

        {/* Contact Us Section - Highlighted */}
        <div className="rounded-2xl border-2 border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 p-8 shadow-lg dark:border-green-600 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-800">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-green-100 p-2 dark:bg-green-900/50">
              <svg
                className="h-6 w-6 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Contact Us
            </h3>
          </div>
          <p className="mb-4 leading-7 text-gray-700 dark:text-gray-300">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at{" "}
            <a
              href="mailto:sanjay@recodehive.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-green-600 underline decoration-green-300 hover:text-green-700 dark:text-green-400 dark:decoration-green-600 dark:hover:text-green-300"
            >
              sanjay@recodehive.com
            </a>
            . Thank you for visiting recodehive!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
