import React from 'react';

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
      <p className="text-gray-400 mb-12">Last updated: March 17, 2026</p>

      <div className="space-y-8 text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
          <p>
            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and AnswerRank AI ("we," "us," or "our"), concerning your access to and use of the AnswerRank AI platform as well as any other media form, media channel, mobile website, or mobile application related, linked, or otherwise connected thereto.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the platform is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the platform (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">3. User Representations</h2>
          <p className="mb-4">By using the platform, you represent and warrant that:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>All registration information you submit will be true, accurate, current, and complete.</li>
            <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
            <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
            <li>You will not access the platform through automated or non-human means, whether through a bot, script, or otherwise, except as permitted through our official API.</li>
            <li>You will not use the platform for any illegal or unauthorized purpose.</li>
            <li>Your use of the platform will not violate any applicable law or regulation.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">4. Limitations of Liability</h2>
          <p>
            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the platform, even if we have been advised of the possibility of such damages.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">5. Modifications and Interruptions</h2>
          <p>
            We reserve the right to change, modify, or remove the contents of the platform at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our platform. We also reserve the right to modify or discontinue all or part of the platform without notice at any time.
          </p>
        </section>
      </div>
    </div>
  );
}
