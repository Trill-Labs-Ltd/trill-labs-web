import Link from 'next/link';

const Home = () => {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-indigo-500/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="relative pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Building Intelligent,</span>{' '}
                  <span className="block text-blue-400 xl:inline">Scalable Digital Products.</span>
                </h1>
                <p className="mt-3 text-base text-blue-100/70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Trill Labs Ltd is a UK-based software studio building AI-powered applications and scalable software products.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow-lg">
                    <Link
                      href="/products#limba"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 md:py-4 md:text-lg md:px-10 transition-colors"
                    >
                      Explore Limba
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="https://www.getlimba.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center px-8 py-3 border border-blue-400/30 text-base font-medium rounded-md text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 md:py-4 md:text-lg md:px-10 transition-colors"
                    >
                      Get Limba
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-14 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-200 font-semibold tracking-wide uppercase">Our Mission</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Engineering Excellence & Privacy First
            </p>
            <p className="mt-4 max-w-2xl text-xl text-blue-100/80 lg:mx-auto">
              We are dedicated to building software that respects user privacy while delivering powerful, AI-driven experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Product: Limba */}
      <div className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 rounded-3xl overflow-hidden shadow-2xl">
            <div className="lg:grid lg:grid-cols-2">
              {/* Text Content */}
              <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1.5 rounded-full w-fit mb-6 ring-1 ring-blue-400/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                  Featured Product
                </div>
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl tracking-tight">
                  Limba
                </h2>
                <p className="mt-4 text-lg text-blue-100/70 max-w-lg">
                  AI-powered mobility and wellness app delivering personalised stretch recommendations and routines tailored to your body.
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="h-3.5 w-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    </div>
                    <span className="text-sm text-blue-100/60">Personalised AI-driven stretch routines</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="h-3.5 w-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    </div>
                    <span className="text-sm text-blue-100/60">Progress tracking & flexibility insights</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="h-3.5 w-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    </div>
                    <span className="text-sm text-blue-100/60">Privacy-first, built on secure cloud infrastructure</span>
                  </div>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://www.getlimba.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/25"
                  >
                    Get Limba
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                  </a>
                  <Link
                    href="/products#limba"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-blue-300 border border-blue-400/30 hover:bg-blue-500/10 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              {/* Logo Visual */}
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-violet-600/20"></div>
                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl"></div>
                <div className="relative h-full min-h-[400px] flex items-center justify-center p-12">
                  <div className="bg-white rounded-2xl p-10 shadow-2xl">
                    <img 
                      src="/images/logo/LIMBA@3x.png" 
                      alt="Limba logo" 
                      className="max-h-20 w-auto drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
              {/* Mobile logo */}
              <div className="lg:hidden px-8 pb-8">
                <div className="bg-white rounded-2xl p-8 flex items-center justify-center shadow-2xl">
                  <img 
                    src="/images/logo/LIMBA@2x.png" 
                    alt="Limba logo" 
                    className="max-h-12 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Build */}
      <div className="py-16 bg-slate-50 bg-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Our Portfolio</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">What We Build</p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              From wellness tech to marketing automation and AI-powered trading, we build cloud-native products that solve real problems.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-white rounded-xl px-6 pb-8 shadow-sm ring-1 ring-gray-100 hover:shadow-md transition-shadow">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-md">
                    <span className="text-white text-sm font-bold px-1">WT</span>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900 tracking-tight">Wellness Tech</h3>
                  <p className="mt-3 text-base text-gray-500">
                    AI-powered health and wellness applications. Starting with Limba, our personalised flexibility and stretch platform.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flow-root bg-white rounded-xl px-6 pb-8 shadow-sm ring-1 ring-gray-100 hover:shadow-md transition-shadow">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-2 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg shadow-md">
                    <span className="text-white text-sm font-bold px-1">TP</span>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900 tracking-tight">AI Trading Platform</h3>
                  <p className="mt-3 text-base text-gray-500">
                    Algorithmic trading powered by AI. From market analysis to automated execution on cloud-native infrastructure.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flow-root bg-white rounded-xl px-6 pb-8 shadow-sm ring-1 ring-gray-100 hover:shadow-md transition-shadow">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-2 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg shadow-md">
                    <span className="text-white text-sm font-bold px-1">MA</span>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900 tracking-tight">Marketing Automation</h3>
                  <p className="mt-3 text-base text-gray-500">
                    End-to-end automation software for campaigns, lead scoring, and customer retention. Helping businesses grow smarter.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flow-root bg-white rounded-xl px-6 pb-8 shadow-sm ring-1 ring-gray-100 hover:shadow-md transition-shadow">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-2 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg shadow-md">
                    <span className="text-white text-sm font-bold px-1">AI</span>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900 tracking-tight">Developer AI & Tooling</h3>
                  <p className="mt-3 text-base text-gray-500">
                    AI-powered code assistants, CLIs, and SDKs that help engineers ship faster and build better software.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flow-root bg-white rounded-xl px-6 pb-8 shadow-sm ring-1 ring-gray-100 hover:shadow-md transition-shadow">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-2 bg-gradient-to-br from-rose-500 to-pink-600 rounded-lg shadow-md">
                    <span className="text-white text-sm font-bold px-1">SS</span>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900 tracking-tight">SaaS Products</h3>
                  <p className="mt-3 text-base text-gray-500">
                    Scalable, cloud-hosted subscription services for niche verticals — built on AWS with multi-tenancy and enterprise security.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flow-root bg-white rounded-xl px-6 pb-8 shadow-sm ring-1 ring-gray-100 hover:shadow-md transition-shadow">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg shadow-md">
                    <span className="text-white text-sm font-bold px-1">CL</span>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900 tracking-tight">Cloud-Native Architecture</h3>
                  <p className="mt-3 text-base text-gray-500">
                    Every product is built on AWS — Lambda, ECS, DynamoDB, SageMaker — with Infrastructure as Code and automated CI/CD pipelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md transition-all"
            >
              View All Products & Roadmap
            </Link>
          </div>
        </div>
      </div>

      {/* Credibility Block */}
      <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-400 tracking-wide uppercase">Trusted & Secure</h2>
            <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Built on Trust.
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-400">
              Registered UK Company. Privacy-First Approach. Engineering-Led. Powered by AWS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
