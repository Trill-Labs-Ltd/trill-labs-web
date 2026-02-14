import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</Link>
            <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">Terms</Link>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-500">
              &copy; 2025 Trill Labs Ltd. Registered in England & Wales. All rights reserved.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-8 flex justify-center md:justify-start">
          <p className="text-base text-gray-500">
            hello@trilllabs.co.uk
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
