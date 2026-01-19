import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | OwnerClone',
  description: 'OwnerClone privacy policy. Learn how we collect, use, and protect your information.',
}

export default function Privacy() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-300">
            Last Updated: January 16, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto prose prose-lg">
          
          <p className="lead">
            OwnerClone ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website ownerclone.com or use our services.
          </p>

          <h2>Information We Collect</h2>

          <h3>Information You Provide to Us</h3>
          <p>
            We collect information that you voluntarily provide to us when you register for an account, express interest in obtaining information about us or our products and services, participate in activities on our website, or otherwise contact us. The information we collect may include:
          </p>
          <ul>
            <li>Name and contact information (email address, phone number, mailing address)</li>
            <li>Restaurant business information (restaurant name, location, type of establishment)</li>
            <li>Account credentials (username, password)</li>
            <li>Payment information (processed securely through third-party payment processors)</li>
            <li>Communications you send to us (emails, support requests, feedback)</li>
          </ul>

          <h3>Information Automatically Collected</h3>
          <p>
            When you visit our website, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies installed on your device. Additionally, as you browse the site, we collect information about the individual web pages you view, what websites or search terms referred you to the site, and information about how you interact with the site. This information may include:
          </p>
          <ul>
            <li>Log and usage data (IP address, browser type, pages visited, time spent on pages)</li>
            <li>Device information (computer or mobile device, operating system)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h3>Information from Third-Party Sources</h3>
          <p>
            With your consent, we may receive information from third-party services such as your point-of-sale (POS) system to provide our restaurant management services. This may include sales data, inventory information, and employee scheduling data necessary to deliver our services.
          </p>

          <h2>How We Use Your Information</h2>

          <p>We use the information we collect or receive to:</p>
          <ul>
            <li>Provide, operate, and maintain our services</li>
            <li>Process your transactions and manage your account</li>
            <li>Send you administrative information, such as updates, security alerts, and support messages</li>
            <li>Respond to your comments, questions, and provide customer service</li>
            <li>Analyze usage and improve our website and services</li>
            <li>Send you marketing and promotional communications (with your consent)</li>
            <li>Detect, prevent, and address technical issues and fraudulent activity</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>How We Share Your Information</h2>

          <p>We may share your information in the following circumstances:</p>

          <h3>Service Providers</h3>
          <p>
            We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance. These service providers are authorized to use your information only as necessary to provide these services to us.
          </p>

          <h3>Business Transfers</h3>
          <p>
            If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction. We will notify you via email and/or a prominent notice on our website of any change in ownership or uses of your personal information.
          </p>

          <h3>Legal Requirements</h3>
          <p>
            We may disclose your information if required to do so by law or in response to valid requests by public authorities (such as a court or government agency), or to protect the rights, property, or safety of OwnerClone, our users, or others.
          </p>

          <h3>With Your Consent</h3>
          <p>
            We may share your information with third parties when you have given us explicit consent to do so.
          </p>

          <h2>Data Security</h2>

          <p>
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
          </p>
          <ul>
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments and updates</li>
            <li>Access controls and authentication requirements</li>
            <li>Employee training on data protection and security</li>
          </ul>
          <p>
            However, no method of transmission over the internet or electronic storage is completely secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
          </p>

          <h2>Your Data Protection Rights</h2>

          <p>Depending on your location, you may have the following rights regarding your personal information:</p>
          <ul>
            <li><strong>Access:</strong> You can request copies of your personal information</li>
            <li><strong>Correction:</strong> You can request that we correct any information you believe is inaccurate or incomplete</li>
            <li><strong>Deletion:</strong> You can request that we delete your personal information, under certain conditions</li>
            <li><strong>Restriction:</strong> You can request that we restrict the processing of your personal information, under certain conditions</li>
            <li><strong>Objection:</strong> You can object to our processing of your personal information, under certain conditions</li>
            <li><strong>Data Portability:</strong> You can request that we transfer the data we have collected to another organization, or directly to you, under certain conditions</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at info@ownerclone.com. We will respond to your request within 30 days.
          </p>

          <h2>Cookies and Tracking Technologies</h2>

          <p>
            We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that are sent to your browser from a website and stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
          </p>

          <h2>Third-Party Links</h2>

          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read the privacy policies of any third-party sites you visit.
          </p>

          <h2>Children's Privacy</h2>

          <p>
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
          </p>

          <h2>Data Retention</h2>

          <p>
            We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
          </p>

          <h2>Changes to This Privacy Policy</h2>

          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>

          <h2>Contact Us</h2>

          <p>
            If you have any questions about this Privacy Policy or our privacy practices, please contact us:
          </p>
          <ul>
            <li>Email: info@ownerclone.com</li>
            <li>Website: <Link href="/contact">ownerclone.com/contact</Link></li>
            <li>Mailing Address: OwnerClone, Atlanta, GA</li>
          </ul>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Your Privacy Matters to Us</h3>
            <p className="text-gray-700 mb-4">
              We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy or our practices with regards to your personal information, please contact us at info@ownerclone.com.
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Contact Us
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}
