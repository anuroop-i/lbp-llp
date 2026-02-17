import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { 
  Shield, 
  Cloud,
  ArrowRightLeft, 
  Boxes, 
  Zap, 
  GitBranch, 
  ArrowRight,
  CheckCircle2,
  Headset,
  Cog,
  MonitorSmartphone
} from "lucide-react";

const solutions = [
  {
    id: "platform",
    icon: Shield,
    title: "P&C Insurance Solutions",
    subtitle: "End-to-End Insurance Software Implementation",
    description: "Certified experts implement, customize, and optimize Insurance Applications for P&C carriers.",
    features: [
      "PolicyCenter, BillingCenter & ClaimCenter implementation",
      "Guidewire Cloud migration and optimization",
      "Custom integrations and extensions",
      "Upgrade and version migration support",
      "Performance tuning and optimization"
    ]
  },
    {
    id: "qa",
    icon: Zap,
    title: "Quality Assurance",
    subtitle: "Ensure Reliability at Scale",
    description: "Comprehensive QA practices with cutting-edge automation frameworks ensuring reliability and faster releases.",
    features: [
      "Test strategy and planning",
      "Automated testing frameworks",
      "Performance and load testing",
      "Regression test suites",
      "Continuous testing integration"
    ]
  },
  {
    id: "rating",
    icon: Cog,
    title: "Policy Rating Solutions",
    subtitle: "Compliant and Accurate Rating Development",
    description: "Simplify bureau rules and integrate proprietary rate development to deliver accurate, compliant, and scalable rating solutions across core insurance platforms.",
    features: [
      "Bureau-compliant rate table configuration",
      "Proprietary rate routine development",
      "Rating engine implementation for core platforms",
      "Regulatory alignment and compliance validation",
      "Testing, versioning, and rate change management"
    ]
  },
  {
    id: "ui-ux",
    icon: MonitorSmartphone,
    title: "UI and UX Design",
    subtitle: "Intuitive and User-Centered Digital Experiences",
    description: "Design modern, accessible, and conversion-focused interfaces that enhance usability, streamline workflows, and elevate customer and agent experiences.",
    features: [
      "User research and persona development",
      "Information architecture and journey mapping",
      "Wireframing and interactive prototyping",
      "Responsive and accessible UI design",
      "Design system creation and usability testing"
    ]
  },
  {
    id: "api",
    icon: ArrowRightLeft,
    title: "Enterprise API Solutions",
    subtitle: "Enterprise APIs for Your Infrastructure",
    description: "Design and deploy secure, scalable APIs that seamlessly connect systems, applications, and data across your enterprise.",
    features: [
      "API architecture and design",
      "REST, GraphQL & event-driven APIs",
      "API gateway implementation",
      "Authentication & authorization (OAuth2, JWT)",
      "API lifecycle management and monitoring"
    ]
  },


  {
    id: "legacy",
    icon: Boxes,
    title: "Legacy System Modernization",
    subtitle: "Transform Outdated Systems",
    description: "Transform your legacy systems into modern, scalable platforms without disrupting ongoing operations.",
    features: [
      "Legacy system assessment and roadmap",
      "Incremental modernization strategies",
      "Data migration and validation",
      "API-first architecture design",
      "Parallel run and cutover planning"
    ]
  },

  {
    id: "integration",
    icon: GitBranch,
    title: "System Integration",
    subtitle: "Seamless Connectivity",
    description: "Connect disparate systems seamlessly with our integration expertise, enabling real-time data flow and operational efficiency.",
    features: [
      "API design and development",
      "ESB and middleware solutions",
      "Real-time data synchronization",
      "Third-party vendor integrations",
      "Integration testing and monitoring"
    ]
  },
  {
    id: "consulting",
    icon: Headset,
    title: "Digital Consulting",
    subtitle: "Strategic Technology Guidance",
    description: "Strategic consulting to help you navigate the complex insurance technology landscape and make informed decisions.",
    features: [
      "Technology roadmap development",
      "Vendor selection and evaluation",
      "Process optimization",
      "Change management",
      "Training and knowledge transfer"
    ]
  }
];

const Solutions = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-secondary border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Our Solutions</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Technology for the Modern Insurer
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From Guidewire implementation to cloud transformation, we provide end-to-end technology solutions designed for the property and casualty insurance industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                id={solution.id}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? "" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded bg-primary flex items-center justify-center text-primary-foreground">
                      <solution.icon size={28} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">{solution.title}</h2>
                      <p className="text-accent font-medium text-sm">{solution.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {solution.description}
                  </p>

                  <Button variant="default" asChild>
                    <Link to="/contact">
                      Get Started
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="bg-secondary rounded-lg p-8 border border-border">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
                      Key Capabilities
                    </h3>
                    <ul className="space-y-4">
                      {solution.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="text-accent mt-0.5 flex-shrink-0" size={18} />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Not sure which solution fits your needs?</h2>
              <p className="text-primary-foreground/70">Our experts can help assess your situation and recommend the right approach.</p>
            </div>
            <Button variant="gold" size="xl" asChild>
              <Link to="/contact">
                Talk to an Expert
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
