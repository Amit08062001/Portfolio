function Footer() {
    return (
      <footer className="py-2 sm:py-8 md:py-8 lg:py-8 border-t border-slate-800 mt-20">
        <div className="container text-center">
          <h3 className="text-xl font-bold mb-2">
            Amit Kumar
          </h3>
  
          <p className="text-slate-400">
            Frontend Developer | React.js Developer
          </p>
  
          <p className="text-slate-500 mt-1 lg:mt-4 text-sm">
            © {new Date().getFullYear()} Amit Kumar. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  
  export default Footer;