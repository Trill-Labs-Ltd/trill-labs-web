import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Privacy = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="Privacy Policy" 
        description="Privacy Policy for Trill Labs Ltd. How we collect, use, and protect your information." 
      />

      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-sm font-semibold text-blue-400 tracking-wide uppercase">Legal</p>
          <h1 className="mt-2 text-4xl font-extrabold text-white sm:text-5xl tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-blue-100/70">
            How we collect, use, and protect your information at Trill Labs Ltd.
          </p>
          <p className="mt-4 text-sm text-blue-200/60">
            Last updated: 1 December 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200/50 overflow-hidden">
            <div className="p-8 sm:p-12 lg:p-16 space-y-12">

              <section>
                <h2 className="text-xl font-bold text-gray-900 tracking-tight border-b border-gray-100 pb-2">
                  1. Introduction
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Trill Labs Ltd ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services, including our products.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 tracking-tight border-b border-gray-100 pb-2">
                  2. Information We Collect
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  We may collect personal information that you voluntarily provide when you express an interest in our products or services, when you participate in activities on the website (such as joining a waitlist or contacting us), or when you otherwise get in touch with us.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 tracking-tight border-b border-gray-100 pb-2">
                  3. How We Use Your Information
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  We use personal information collected via our website for the following purposes:
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    To provide and maintain our services
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    To notify you about changes to our services
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    To provide customer support
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    To gather analysis or information so that we can improve our services
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    To monitor usage of our services
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    To detect, prevent, and address technical issues
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 tracking-tight border-b border-gray-100 pb-2">
                  4. Cookies and Tracking Technologies
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  We may use cookies and similar tracking technologies to track activity on our services and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 tracking-tight border-b border-gray-100 pb-2">
                  5. GDPR and Your Rights
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  If you are in the European Economic Area (EEA), our legal basis for collecting and using your personal information depends on the data we collect and the context in which we collect it.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Trill Labs Ltd may process your personal data because:
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    We need to perform a contract with you
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    You have given us permission to do so
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    The processing is in our legitimate interests and not overridden by your rights
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    We need to comply with the law
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 tracking-tight border-b border-gray-100 pb-2">
                  6. Contact Us
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  If you have any questions about this Privacy Policy or your data, please contact us:
                </p>
                <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-gray-700 font-medium">Trill Labs Ltd</p>
                  <a href="mailto:hello@trilllabs.co.uk" className="text-blue-600 hover:text-blue-700 font-medium">
                    hello@trilllabs.co.uk
                  </a>
                </div>
              </section>

            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              to="/"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
