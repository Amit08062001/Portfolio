function Footer() {
    return (
      <footer className="border-t border-slate-800 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold gradient-text">
            Amit Kumar
          </h2>
  
          <p className="text-slate-500 mt-4">
            Frontend Developer | React Developer
          </p>
  
          <p className="text-slate-600 mt-6">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </footer>
    );
  }
  
  export default Footer;