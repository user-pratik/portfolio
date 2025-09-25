import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Send, MessageCircle, Zap, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import emailjs from 'emailjs-com';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
    rootMargin: '-30px 0px'
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_9z957sp',
        'template_8hv5o9s',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Pratik Anand'
        },
        'U4X1hdrXt4Qyks9V0'
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 5000,
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header slides in from right */}
        <motion.div
          ref={ref}
          initial={{ x: 50 }}
          animate={inView ? { x: 0 } : { x: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold text-neon-green mb-4">
            Let's Connect
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-neon-green to-purple-accent mx-auto mb-6" />
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto px-4">
            Have a project in mind or want to collaborate? Let's build something amazing together!
          </p>
        </motion.div>

        {/* Main contact card slides in from right with scale */}
        <motion.div
          initial={{ x: 80, scale: 0.95 }}
          animate={inView ? { x: 0, scale: 1 } : { x: 80, scale: 0.95 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="group relative"
        >
          <div className="bg-surface-light rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 border border-border-subtle relative overflow-hidden transition-all duration-500 group/card">
            
            {/* Progressive border highlight animation starting from top-right */}
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none">
              {/* Top border - starts from right */}
              <div className="absolute top-0 right-0 h-0.5 bg-gradient-to-l from-neon-green to-purple-accent w-0 group-hover/card:w-full transition-all duration-1000 ease-out" />
              
              {/* Right border - starts after top completes */}
              <div className="absolute top-0 right-0 w-0.5 bg-gradient-to-b from-neon-green to-purple-accent h-0 group-hover/card:h-full transition-all duration-1000 ease-out delay-300" />
              
              {/* Bottom border - starts from right, goes left */}
              <div className="absolute bottom-0 right-0 h-0.5 bg-gradient-to-l from-purple-accent to-neon-green w-0 group-hover/card:w-full transition-all duration-1000 ease-out delay-600" />
              
              {/* Left border - completes the loop */}
              <div className="absolute bottom-0 left-0 w-0.5 bg-gradient-to-t from-purple-accent to-neon-green h-0 group-hover/card:h-full transition-all duration-1000 ease-out delay-900" />
            </div>
            
            {/* Subtle background decoration */}
            <div className="absolute top-8 right-8 w-20 h-20 border border-neon-green/10 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-8 left-8 w-16 h-16 border border-purple-accent/10 rounded-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                
                {/* Left Content */}
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="bg-neon-green/10 p-3 sm:p-4 rounded-xl transition-all duration-300 group-hover:scale-105">
                      <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-neon-green" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-space font-bold text-text-primary transition-colors duration-300 group-hover:text-neon-green">
                        Send a Message
                      </h3>
                      <p className="text-sm sm:text-base text-text-muted">
                        I'd love to hear from you
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="bg-background/50 rounded-xl p-4 sm:p-6 border border-border-subtle transition-all duration-300 hover:border-neon-green/20 hover:bg-background/70">
                      <div className="flex items-center space-x-3 mb-4">
                        <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-purple-accent" />
                        <h4 className="text-base sm:text-lg font-inter font-semibold text-purple-accent">
                          Let's Discuss:
                        </h4>
                      </div>
                      <ul className="space-y-2 text-sm sm:text-base text-text-secondary">
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-neon-green rounded-full" />
                          <span>Full-Stack Development Projects</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-neon-green rounded-full" />
                          <span>AI & Machine Learning Solutions</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-neon-green rounded-full" />
                          <span>Cloud Architecture & AWS</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-neon-green rounded-full" />
                          <span>Technical Consultations</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-background/50 rounded-xl p-4 sm:p-6 border border-border-subtle transition-all duration-300 hover:border-neon-green/20 hover:bg-background/70">
                      <div className="flex items-center space-x-3 mb-4">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-purple-accent" />
                        <h4 className="text-base sm:text-lg font-inter font-semibold text-purple-accent">
                          Quick Response
                        </h4>
                      </div>
                      <p className="text-sm sm:text-base text-text-secondary">
                        I typically respond within 24 hours. For urgent matters, 
                        feel free to reach out directly via email or phone at +91-7903956084.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-text-primary font-inter font-medium mb-2 text-sm sm:text-base">
                          Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your full name"
                          className="bg-background/50 border-border-subtle text-text-primary placeholder:text-text-muted focus:border-neon-green transition-all duration-300 h-11 sm:h-12 hover:border-neon-green/20"
                        />
                      </div>
                      <div>
                        <label className="block text-text-primary font-inter font-medium mb-2 text-sm sm:text-base">
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your.email@example.com"
                          className="bg-background/50 border-border-subtle text-text-primary placeholder:text-text-muted focus:border-neon-green transition-all duration-300 h-11 sm:h-12 hover:border-neon-green/20"
                        />
                      </div>
                      <div>
                        <label className="block text-text-primary font-inter font-medium mb-2 text-sm sm:text-base">
                          Message *
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          placeholder="Tell me about your project or how we can collaborate..."
                          className="bg-background/50 border-border-subtle text-text-primary placeholder:text-text-muted focus:border-neon-green transition-all duration-300 resize-none hover:border-neon-green/20"
                        />
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-transparent border border-neon-green/30 text-neon-green hover:bg-neon-green/10 hover:border-neon-green/50 font-inter font-semibold py-5 sm:py-6 rounded-xl transition-all duration-300 disabled:opacity-50 group/btn"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center space-x-2">
                            <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-neon-green border-t-transparent rounded-full animate-spin" />
                            <span className="text-sm sm:text-base">Sending...</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center space-x-2">
                            <Send className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                            <span className="text-sm sm:text-base">Send Message</span>
                          </div>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer slides in from bottom */}
        <motion.div
          initial={{ y: 30, scale: 0.95 }}
          animate={inView ? { y: 0, scale: 1 } : { y: 30, scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="text-center mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border-subtle"
        >
          <p className="text-sm sm:text-base text-text-muted font-inter">
            © 2025 Pratik Anand. Built with passion for innovation and technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;