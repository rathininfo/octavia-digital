export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 pt-20 pb-10 px-6 md:px-12">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-foreground">Octavia</h2>
          <p className="text-paragraph mt-4 text-sm leading-relaxed">
            Empowering artists worldwide with seamless music distribution to
            150+ platforms. Keep 100% of your royalties.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-foreground font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-paragraph hover:text-accent transition text-sm">About Us</a></li>
            <li><a href="#" className="text-paragraph hover:text-accent transition text-sm">Careers</a></li>
            <li><a href="#" className="text-paragraph hover:text-accent transition text-sm">Contact</a></li>
            <li><a href="#" className="text-paragraph hover:text-accent transition text-sm">Blog</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-foreground font-semibold text-lg mb-4">Support</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-paragraph hover:text-accent transition text-sm">Help Center</a></li>
            <li><a href="#" className="text-paragraph hover:text-accent transition text-sm">Pricing</a></li>
            <li><a href="#" className="text-paragraph hover:text-accent transition text-sm">Guides</a></li>
            <li><a href="#" className="text-paragraph hover:text-accent transition text-sm">Status</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-foreground font-semibold text-lg mb-4">Legal</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-paragraph hover:text-accent transition text-sm">Terms of Service</a></li>
            <li><a href="#" className="text-paragraph hover:text-accent transition text-sm">Privacy Policy</a></li>
            <li><a href="#" className="text-paragraph hover:text-accent transition text-sm">Copyright Policy</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-center md:text-left">

        <p className="text-muted text-sm">
          © {new Date().getFullYear()} Octavia Digital. All rights reserved.
        </p>

        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <a href="#" className="text-muted hover:text-accent transition">Twitter</a>
          <a href="#" className="text-muted hover:text-accent transition">Instagram</a>
          <a href="#" className="text-muted hover:text-accent transition">Facebook</a>
        </div>

      </div>

    </footer>
  );
}
