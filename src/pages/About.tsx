import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { 
  Target, 
  Eye, 
  ArrowRight,
  Users,
  Award,
  Lightbulb,
  Handshake
} from "lucide-react";
import teamImage from "@/assets/team-collaboration.jpg";
import codeScreen2 from '../assets/codeScreen2.jpg';
import satyaImg from '@/assets/satya2.png'
import guruImg from '@/assets/guru2.png'


const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace cutting-edge technologies to deliver transformative solutions."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We are committed to delivering the highest quality in every engagement."
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We build lasting relationships based on trust and mutual success."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work together with clients to achieve exceptional outcomes."
  }
];

const leadership = [
  { name: "Satya Sakhinetipalli", role: "Founder and Chief Strategist", image: <img className="rounded-full" src={satyaImg} alt="Satya" /> },
  { name: "Guru Srinivas BMV", role: "Chief Operations Officer", image:  <img className="rounded-full" src={guruImg} alt="Satya" /> },

  // { name: "James Chen", role: "Chief Technology Officer", initials: "JC" },
  // { name: "Amanda Rodriguez", role: "VP of Client Success", initials: "AR" },
  // { name: "Michael Thompson", role: "VP of Delivery", initials: "MT" }
];

const milestones = [
  { year: "2022", event: "Company founded in Hyderabad" },
  { year: "2023", event: "Team gets certified as Guidewire Practitioners" },
  { year: "2024", event: "Expanded to 5+ clients " },
  { year: "2025", event: "Launched Quality Assurance and API Services" },
  { year: "2026", event: "Improving scale of operations and developing integrations for Insurance Applications" }
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-secondary border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">About Us</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Transforming Insurance Through Technology
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
               Founded to drive innovation in the insurance sector, LeftBrain Path has evolved into a leading technology consulting firm, with our experts supporting carriers across the P&C industry..
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={codeScreen2} alt="code" className="w-full h-auto object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="card-corporate p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded bg-primary flex items-center justify-center text-primary-foreground mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
             To enable insurance carriers with market-leading technology solutions that improve operational efficiency, elevate customer engagement, and accelerate digital innovation.
              </p>
            </motion.div>

            <motion.div
              className="card-corporate p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-12 h-12 rounded bg-accent flex items-center justify-center text-accent-foreground mb-6">
                <Eye size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become a globally recognized leader in insurance technology consulting, distinguished by industry expertise, forward-thinking solutions, and a steadfast dedication to client success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Key Milestones</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="flex gap-6 pb-8 last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pt-3">
                  <p className="text-foreground font-medium">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">What Drives Us</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <value.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Leadership</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Meet Our Team</h2>
          </div>

          <div className="flex justify-around">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                className="text-center rounded-xl drop-shadow-lg p-10 bg-gradient-hero"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Removed*/}
                <div className=" w-22  rounded-full  flex items-center justify-center mx-auto mb-4">
                  {leader.image}
                </div>
                <h3 className="text-lg  font-semibold text-foreground">{leader.name}</h3>
                <p className="text-sm  text-muted-foreground">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Be Part of Our Story?</h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
              Join our growing team and help shape the future of insurance technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <Link to="/careers">
                  View Open Positions
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
