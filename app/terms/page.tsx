import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | OwnerClone',
  description: 'OwnerClone terms of service. Read our terms and conditions for using our restaurant management platform.',
}

export default function Terms() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-300">
            Last Updated: January 16, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto prose prose-lg">
          
          <p className="lead">
            Please read these Terms of Service ("Terms") carefully before using the OwnerClone website and services. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access our services.
          </p>

          <h2>1. Acceptance of Terms</h2>

          <p>
            By accessing and using OwnerClone ("Service"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms, please do not use our Service. These Terms apply to all visitors, users, and others who access or use the Service.
          </p>

          <h2>2. Description of Service</h2>

          <p>
            OwnerClone provides restaurant management software that integrates with point-of-sale systems to offer analytics, cost tracking, labor management, inventory control, and related services ("Services"). We reserve the right to modify, suspend, or discontinue any aspect of the Services at any time, with or without notice.
          </p>

          <h2>3. Account Registration and Security</h2>

          <p>
            To use certain features of our Service, you must register for an account. When you register, you agree to provide accurate, current, and complete information about yourself. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </p>

          <p>
            You agree to notify us immediately of any unauthorized use of your account or any other breach of security. We cannot and will not be liable for any loss or damage arising from your failure to comply with this security obligation.
          </p>

          <h2>4. Subscription and Payments</h2>

          <p>
            Our Service operates on a subscription basis. By subscribing, you agree to pay the fees associated with your chosen subscription plan. Subscription fees are billed in advance on a monthly or annual basis, as selected by you during registration.
          </p>

          <p>
            All fees are exclusive of applicable taxes, which you are responsible for paying. We reserve the right to modify our subscription fees upon reasonable notice. Price changes will apply to subsequent subscription periods and will not affect the current billing period.
          </p>

          <p>
            You may cancel your subscription at any time. If you cancel before the end of your current billing period, you will retain access to the Service until the end of that period, but no refunds will be provided for partial periods.
          </p>

          <h2>5. Use of Services and Restrictions</h2>

          <p>
            You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:
          </p>

          <ul>
            <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
            <li>To transmit any harmful or malicious code, viruses, or any other computer code designed to interrupt, destroy, or limit the functionality of any computer software or hardware</li>
            <li>To impersonate or attempt to impersonate OwnerClone, an OwnerClone employee, another user, or any other person or entity</li>
            <li>To interfere with or disrupt the Service or servers or networks connected to the Service</li>
            <li>To attempt to gain unauthorized access to any portion of the Service, other accounts, computer systems, or networks connected to the Service</li>
            <li>To use any automated system to access the Service in a manner that sends more requests than a human can reasonably produce in the same period</li>
            <li>To sublicense, resell, or otherwise commercialize the Service without our express written permission</li>
          </ul>

          <h2>6. Intellectual Property Rights</h2>

          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of OwnerClone and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
          </p>

          <p>
            Subject to your compliance with these Terms, OwnerClone grants you a limited, non-exclusive, non-transferable, non-sublicensable license to access and use the Service for your internal business purposes.
          </p>

          <h2>7. Your Data and Content</h2>

          <p>
            You retain all rights to the data and content you submit to the Service ("Your Data"). By using our Service, you grant OwnerClone a worldwide, non-exclusive, royalty-free license to use, store, process, and display Your Data solely for the purpose of providing the Service to you.
          </p>

          <p>
            You represent and warrant that you own or have the necessary rights and permissions to provide Your Data and that Your Data does not infringe or violate any third-party rights. You are solely responsible for the accuracy, quality, integrity, legality, and reliability of Your Data.
          </p>

          <p>
            We implement reasonable measures to protect Your Data, but we cannot guarantee absolute security. You acknowledge that you provide Your Data at your own risk.
          </p>

          <h2>8. Third-Party Integrations</h2>

          <p>
            Our Service may integrate with third-party services, including but not limited to point-of-sale systems. Your use of these third-party services is subject to their respective terms and conditions and privacy policies. We are not responsible for any third-party services and do not endorse or warrant any products or services provided by third parties.
          </p>

          <h2>9. Disclaimer of Warranties</h2>

          <p>
            THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. OWNERCLONE DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>

          <p>
            We do not warrant that the Service will be uninterrupted, secure, or error-free, or that any defects will be corrected. We do not warrant or make any representations regarding the accuracy, reliability, or completeness of the content or results obtained from using the Service.
          </p>

          <h2>10. Limitation of Liability</h2>

          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL OWNERCLONE, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE.
          </p>

          <p>
            IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR USE OF THE SERVICE EXCEED THE AMOUNT YOU PAID US IN THE TWELVE MONTHS PRECEDING THE EVENT GIVING RISE TO THE LIABILITY.
          </p>

          <h2>11. Indemnification</h2>

          <p>
            You agree to indemnify, defend, and hold harmless OwnerClone and its affiliates, officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising out of or relating to your use of the Service, your violation of these Terms, or your violation of any rights of another party.
          </p>

          <h2>12. Termination</h2>

          <p>
            We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Service will immediately cease.
          </p>

          <p>
            You may terminate your account at any time by contacting us or using the account cancellation feature in the Service. All provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
          </p>

          <h2>13. Modifications to Terms</h2>

          <p>
            We reserve the right to modify or replace these Terms at any time at our sole discretion. If we make material changes, we will provide notice through the Service or by email. Your continued use of the Service after such modifications constitutes your acceptance of the modified Terms.
          </p>

          <h2>14. Governing Law and Dispute Resolution</h2>

          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of Georgia, United States, without regard to its conflict of law provisions. Any dispute arising out of or relating to these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
          </p>

          <p>
            You and OwnerClone agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.
          </p>

          <h2>15. General Provisions</h2>

          <p>
            These Terms constitute the entire agreement between you and OwnerClone regarding the Service and supersede all prior agreements. If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
          </p>

          <p>
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. You may not assign or transfer these Terms, but we may assign our rights and obligations without restriction.
          </p>

          <h2>16. Contact Information</h2>

          <p>
            If you have any questions about these Terms, please contact us:
          </p>
          <ul>
            <li>Email: info@ownerclone.com</li>
            <li>Website: <Link href="/contact">ownerclone.com/contact</Link></li>
            <li>Mailing Address: OwnerClone, Atlanta, GA</li>
          </ul>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Questions About Our Terms?</h3>
            <p className="text-gray-700 mb-4">
              We want you to fully understand our terms of service. If you have any questions or concerns, please don't hesitate to reach out to our team.
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
