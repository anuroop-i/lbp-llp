import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, MapPinned, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoOnly from '@/assets/logoOnly.png'
import logoText2 from '@/assets/logoText2.png'

const Footer = () => {//

  const solutionsMenu = [
              {solution : "P&C Insurance Solutions",      id : 'platform'},
              {solution : "Quality Assurance", id : 'qa'},
              {solution : "Policy Rating Solutions", id : 'rating'},
              {solution : "UI and UX Design", id : 'ui-ux'},
              {solution : "Enterprise API Solutions", id : 'api'},
              {solution : "Legacy System Modernization", id : 'legacy'},
              {solution : "System Integration", id : 'integration'},
              {solution : "Digital Consulting", id : 'consulting'},
              ]


  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex items-center">
                 <div className="w-10 h-10 rounded flex items-center justify-center">
                      <img className="" src={logoOnly} alt="Logo" />
                </div> 

              </div>
              <div className="flex flex-col">
                <img src={logoText2} className="max-h-11  mt-1" alt="Left Brain Path" />
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed max-w-sm">
              Specialized experts in property and casualty insurance solutions, enabling faster, more reliable, and scalable digital transformation for carriers worldwide.
            </p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/leftbrainpathllp/" className="w-10 h-10 rounded bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://maps.app.goo.gl/qRiiEhscE18UMovb8" className="w-10 h-10 rounded bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <MapPinned size={18} />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6">Solutions</h4>
            <ul className="space-y-3">
              {solutionsMenu.map((item, index) => (
                <li key={index}>
                  <Link
                    to= {`/solutions#${item.id}`}
                    className="text-background/60 hover:text-background text-sm transition-colors"
                  >
                    {item.solution}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Solutions", href: "/solutions" },

                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-background/60 hover:text-background text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="">
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-background/60 text-sm">
                  3<sup>rd</sup> & 4<sup>th</sup> floors, Plot #13, Shilpi Layout, Vittal Rao Nagar, Image Hospital Road, Gafoornagar, Madhapur, Hyderabad, Telangana, 500081
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <a href="tel:+1234567890" className="text-background/60 hover:text-background text-sm transition-colors">
                  040 – 45130116
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <a href="mailto:info@nexustech.com" className="text-background/60 hover:text-background text-sm transition-colors">
                  solutions@leftbrainpath.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} LeftBrain Path. All rights reserved.
          </p>
          {/* <div className="flex gap-6">
            <Link to="#" className="text-background/50 hover:text-background text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-background/50 hover:text-background text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-background/50 hover:text-background text-sm transition-colors">
              Cookie Policy
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
