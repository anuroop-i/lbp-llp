import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { 
  ArrowRight,
  Shield,
  Cloud,
  RefreshCcw,
  Zap,
  CheckCircle2,
  Building2,
  ArrowRightLeft,
  Users,
  Award,
  Rocket,
  Globe,
  ChevronRight,
  Cog,
  MonitorSmartphone
} from "lucide-react";
import corporateBuilding from "@/assets/corporate-building.jpg";
import teamImage from "@/assets/team-collaboration.jpg";
import codeScreen from "../assets/codeScreen.jpg"
import codeScreen2 from "../assets/codeScreen2.jpg"
import accelerate from '../assets/accelerate.jpg'
import accelerate2 from '../assets/accelerate2.jpg'
import hero from '../assets/hero.jpg'


import shakeHand from '../assets/shakeHand.jpg'

 
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const solutions = [
  {
    icon: Shield,
    title: "P&C Insurance Solutions",
    description: "Deliver end-to-end InsuranceSuite implementation, customization, and optimization for P&C carriers.",
    link: "/solutions#platform"
  },
    {
    icon: Zap,
    title: "Quality Assurance",
    description: "Ensure system reliability and performance through comprehensive automated testing and monitoring.",
    link: "/solutions#qa"
  },
    {
    icon: Cog,
    title: "Policy Rating Solutions",
    description: "Simplify bureau rules and integrate proprietary rate development for accurate, compliant, scalable rating solutions.",
    link: "/solutions#rating"
  },
  {
    icon: MonitorSmartphone,
    title: "UI and UX Design",
    description: "Design modern, accessible, user-focused interfaces that streamline workflows and enhance customer and agent experiences.",
    link: "/solutions"
  },

];

const stats = [
  { value: "25+", label: "Years of Industry Experience", icon: Building2 },
  { value: "3+", label: "Years as an Organization", icon: Users },
  { value: "30+", label: "Passionate Employees", icon: Award },
  { value: "10+", label: "Clients Served", icon: Globe },

];


// const trustedBy = [
//   "Fortune 500 Insurer", "Global Reinsurer", "Regional Carrier", "InsurTech Leader", "Mutual Insurance"
// ];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium my-5">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Insurance Technology Experts
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-foreground leading-[1.1] mb-6">
                Accelerate Insurance workflows with{" "}
                <span className="text-gradient">Intelligent Technology</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                {/* Specialized experts in property and casualty insurance solutions, enabling faster, more reliable, and scalable business operations for P&C insurers. */}
           
                At LeftBrain Path, we drive digital transformations for P&C insurers through modern core systems, seamless integrations, and end-to-end quality assurance. We streamline operations, enhance customer experiences, and deliver secure, scalable solutions that keep insurers ahead in a rapidly evolving market.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/solutions">
                    Explore Solutions
                    <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/contact">Talk to an Expert</Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="pt-8 border-t border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Certified P&C Insurance Technology Professionals</p>
                {/* <div className="flex flex-wrap gap-6">
                  {trustedBy.slice(0, 3).map((company, i) => (
                    <span key={i} className="text-sm font-medium text-muted-foreground">{company}</span>
                  ))}
                </div> */}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img 
                  src={hero} 
                  alt="Modern corporate office" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
              </div>
              
              {/* Floating stat card */}
              <motion.div 
                className="absolute -bottom-6 -left-5 bg-card rounded-lg p-6 shadow-lg border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center">
                    <Rocket className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">10x</div>
                    <div className="text-sm text-muted-foreground">Your Effeiciency</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-primary-foreground/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">What We Do</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Comprehensive Technology Solutions
              </h2>
            </div>
            <Button variant="outline" asChild>
              <Link to="/solutions">
                View All Solutions
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="group flex flex-col justify-between card-corporate p-6 hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <solution.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{solution.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{solution.description}</p>
                <Link 
                  to={solution.link}
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Learn more
                  <ChevronRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Why Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Reliable Insurance Technology Partner
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Leveraging our extensive insurance knowledge, experience and a modern tech stack , we help insurers streamline operations and enhance customer engagement.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Industry-leading Guidewire expertise with certified professionals",
                  "Insurance platforms are tailoured to be carrier specific",
                  "End-to-end services from strategy to ongoing support",
                  "Agile methodology enabling faster, incremental value delivery"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="text-accent mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Button variant="default" size="lg" asChild>
                <Link to="/about">
                  About Our Company
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={shakeHand} 
                  alt="Team collaboration" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-dark text-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Insurance Operations?
              </h2>
              <p className="text-background/70 text-lg mb-8">
                Let's discuss how our expertise can help you achieve your Insurance goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gold" size="xl" asChild>
                  <Link to="/contact">
                    Schedule a Consultation
                    <ArrowRight size={20} />
                  </Link>
                </Button>
                {/* Button for JOIN OUT TEAM */}
                {/* <Button variant="heroOutline" size="xl" className="border-background/30 text-background hover:bg-background/10" asChild>
                  <Link to="/careers">Join Our Team</Link>
                </Button> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
