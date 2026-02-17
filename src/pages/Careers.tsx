import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { 
  MapPin, 
  Clock, 
  ArrowRight,
  Award,
  IndianRupee,
  Briefcase,
  GraduationCap,
  Heart,
  Coffee,
  TrendingUp,
  Plane,
  DollarSign
} from "lucide-react";
 

const benefits = [
  { icon: IndianRupee, title: "Competitive Pay", description: "Industry-leading salaries with bonuses" },
  { icon: Award, title: "Performance Rewards", description: "Incentives tied to impact and results" },
  { icon: GraduationCap, title: "Learning", description: "Certifications and training" },
  { icon: Plane, title: "Flexible PTO", description: "Generous vacation policy" },
  { icon: Briefcase, title: "Hybrid Work", description: "Work flexibily while prioritizing company goals" },
  { icon: TrendingUp, title: "Career Growth", description: "Clear advancement paths" }
];

const jobs = [
  { id: 1, title: "Senior Guidewire Developer", department: "Engineering", location: "Office", type: "Full-time" },
  { id: 3, title: "QA Automation Engineer", department: "Quality Assurance", location: "Office", type: "Full-time" },
  { id: 4, title: "Project Manager", department: "HR", location: "Office", type: "Full-time" },
  { id: 5, title: "Business Analyst", department: "Consulting", location: "Office", type: "Full-time" },
  { id: 6, title: "Integration Specialist", department: "Engineering", location: "Office", type: "Full-time" }
];

const Careers = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-foreground/10 text-sm font-medium mb-6">
              <Briefcase size={14} />
              We're Hiring
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Build Your Career With Us</h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Join a team of passionate experts shaping the future of insurance technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Why Join Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Benefits & Perks</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="card-corporate p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <benefit.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Stats */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Our Culture</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">A Place Where You Can Thrive</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At LeftBrainPath, we cultivate a culture of continuous growth and collaboration, empowering you to deliver your best work with flexibility and purpose.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We celebrate diversity and inclusion, knowing different perspectives make us stronger as a team.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary text-primary-foreground rounded-lg p-6">
                <div className="text-3xl font-bold mb-1">30+</div>
                <div className="text-sm text-primary-foreground/70">Team Members</div>
              </div>
              <div className="card-corporate p-6">
                <div className="text-3xl font-bold text-foreground mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Ongoing Projects</div>
              </div>
              <div className="card-corporate p-6">
                <div className="text-3xl font-bold text-foreground mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Retention Rate</div>
              </div>
              <div className="bg-accent text-accent-foreground rounded-lg p-6">
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-sm text-accent-foreground/70">Career Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20 scroll-mt-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Opportunities</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Open Positions</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                className="card-corporate p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase size={14} />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/contact">
                      Apply
                      <ArrowRight size={14} />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Don't See the Right Role?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            We're always looking for talented individuals. Send us your resume.
          </p>
          <Button variant="default" size="lg" asChild>
            <Link to="/contact">
              Send Your Resume
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
