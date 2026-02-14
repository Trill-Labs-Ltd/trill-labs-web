import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="bg-slate-50">
      <SEO 
        title="About Us" 
        description="Learn about Trill Labs Ltd, a UK-based software studio, and our values." 
      />

      {/* About Header */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-base font-semibold text-blue-400 tracking-wide uppercase">About Us</h2>
          <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Trill Labs Ltd
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-blue-100/70">
            A UK-based software studio dedicated to building intelligent, scalable digital products.
          </p>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="mt-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Who We Are
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Trill Labs is a software studio focused on creating high-quality, AI-powered applications. We combine engineering excellence with a user-centric approach to solve real-world problems.
              </p>
              
            </div>
            
            <div className="mt-10 lg:mt-0">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Our Values
              </h3>
              <dl className="mt-6 space-y-6">
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">Engineering Excellence</dt>
                  <dd className="mt-2 text-base text-gray-500">
                    We don't cut corners. We build software that is reliable, maintainable, and performant.
                  </dd>
                </div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">Data-Driven</dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Our decisions are backed by data and user feedback, ensuring we build what people actually need.
                  </dd>
                </div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">Privacy-First</dt>
                  <dd className="mt-2 text-base text-gray-500">
                    We respect user data and privacy. Security is built-in from day one, not an afterthought.
                  </dd>
                </div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">Long-Term Thinking</dt>
                  <dd className="mt-2 text-base text-gray-500">
                    We build products designed to last and evolve, focusing on sustainable growth and value.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Technology & Cloud Infrastructure */}
        <div className="mt-20 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 sm:p-12 ring-1 ring-blue-100/50">
          <div className="lg:text-center mb-10">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Our Technology</h2>
            <h3 className="mt-2 text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Powered by AWS & Cloud-Native Architecture
            </h3>
            <p className="mt-4 max-w-3xl text-lg text-gray-500 lg:mx-auto">
              We leverage Amazon Web Services and modern cloud technologies to build infrastructure that scales with demand, stays resilient under load, and keeps costs efficient. So we can focus on shipping great products.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="h-10 w-10 rounded-lg bg-yellow-100 flex items-center justify-center">
                  <span className="text-yellow-600 font-bold text-sm">AWS</span>
                </div>
                <h4 className="ml-3 text-lg font-bold text-gray-900">Compute & Serverless</h4>
              </div>
              <p className="text-gray-500">
                AWS Lambda, ECS, and EC2 for flexible compute. From serverless functions to containerised microservices, we pick the right tool for each workload.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">DB</span>
                </div>
                <h4 className="ml-3 text-lg font-bold text-gray-900">Data & Storage</h4>
              </div>
              <p className="text-gray-500">
                Supabase for real-time data and auth, alongside S3 for scalable storage. We design schemas for performance and use managed services to reduce operational overhead.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">CI</span>
                </div>
                <h4 className="ml-3 text-lg font-bold text-gray-900">CI/CD & DevOps</h4>
              </div>
              <p className="text-gray-500">
                Automated pipelines with GitHub Actions, AWS CodePipeline, and Infrastructure as Code via CloudFormation and Terraform for repeatable deployments.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-sm">AI</span>
                </div>
                <h4 className="ml-3 text-lg font-bold text-gray-900">AI & Machine Learning</h4>
              </div>
              <p className="text-gray-500">
                We integrate with the latest OpenAI GPT models and Claude to power intelligent features across our products. From recommendations to natural language understanding.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="h-10 w-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-600 font-bold text-sm">API</span>
                </div>
                <h4 className="ml-3 text-lg font-bold text-gray-900">APIs & Integrations</h4>
              </div>
              <p className="text-gray-500">
                Our apps integrate with best-in-class tools: Mixpanel for analytics, Sentry for observability, and RevenueCat for payments. So we can ship reliably, understand usage, and run subscriptions without reinventing the wheel.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
