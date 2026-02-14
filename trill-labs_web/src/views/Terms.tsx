const Terms = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Terms & Conditions</h1>
        <div className="mt-6 prose prose-blue prose-lg text-gray-500">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h3>1. Introduction</h3>
          <p>
            Welcome to Trill Labs Ltd ("Company", "we", "our", "us"). These Terms & Conditions ("Terms") govern your use of our website and services, including Limba (collectively, the "Service").
          </p>

          <h3>2. Acceptance of Terms</h3>
          <p>
            By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
          </p>

          <h3>3. Intellectual Property</h3>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of Trill Labs Ltd and its licensors. The Service is protected by copyright, trademark, and other laws of both the United Kingdom and foreign countries.
          </p>

          <h3>4. Links to Other Web Sites</h3>
          <p>
            Our Service may contain links to third-party web sites or services that are not owned or controlled by Trill Labs Ltd. Trill Labs Ltd has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.
          </p>

          <h3>5. Limitation of Liability</h3>
          <p>
            In no event shall Trill Labs Ltd, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>

          <h3>6. Governing Law</h3>
          <p>
            These Terms shall be governed and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.
          </p>

          <h3>7. Changes</h3>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect.
          </p>

          <h3>8. Contact Us</h3>
          <p>
            If you have any questions about these Terms, please contact us:
          </p>
          <ul>
            <li>By email: hello@trilllabs.co.uk</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Terms;
