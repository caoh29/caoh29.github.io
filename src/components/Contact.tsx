import React, { useState } from 'react';
import Section from './common/Section';
import RevealAnimation from './common/RevealAnimation';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  LoaderCircle,
} from 'lucide-react';
import { contactData } from '@/lib/constants';

const Contact: React.FC = () => {
  // Function to get the appropriate icon based on platform
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github className='w-5 h-5' />;
      case 'Linkedin':
        return <Linkedin className='w-5 h-5' />;
      case 'Twitter':
        return <Twitter className='w-5 h-5' />;
      default:
        return <Github className='w-5 h-5' />;
    }
  };

  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Function to handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setInputs((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const data = inputs;

    const response = await fetch(`/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Error sending message to backend');
    }

    setLoading(false);
    // e.currentTarget.reset();
    setInputs({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    alert(`Message sent successfully!`);
  };

  return (
    <Section id='contact'>
      <RevealAnimation>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-display font-bold mb-4'>
            Get In Touch
          </h2>
          <p className='text-foreground/80 max-w-2xl mx-auto'>
            I'm currently open to new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>
      </RevealAnimation>

      <div className='grid md:grid-cols-2 gap-12'>
        <RevealAnimation animation='fade-in-right'>
          <div className='glass rounded-xl p-8 h-full'>
            <h3 className='text-xl font-semibold mb-6'>Contact Information</h3>

            <div className='space-y-6'>
              <div className='flex items-start gap-4'>
                <div className='bg-accent/10 p-3 rounded-lg'>
                  <Mail className='w-5 h-5 text-accent' />
                </div>
                <div>
                  <p className='text-sm text-foreground/60 mb-1'>Email</p>
                  <a
                    href={`mailto:${contactData.email}`}
                    className='font-medium hover:text-accent transition-colors'
                  >
                    {contactData.email}
                  </a>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='bg-accent/10 p-3 rounded-lg'>
                  <Phone className='w-5 h-5 text-accent' />
                </div>
                <div>
                  <p className='text-sm text-foreground/60 mb-1'>Phone</p>
                  <a
                    href={`tel:${contactData.phone}`}
                    className='font-medium hover:text-accent transition-colors'
                  >
                    {contactData.phone}
                  </a>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='bg-accent/10 p-3 rounded-lg'>
                  <MapPin className='w-5 h-5 text-accent' />
                </div>
                <div>
                  <p className='text-sm text-foreground/60 mb-1'>Location</p>
                  <p className='font-medium'>{contactData.location}</p>
                </div>
              </div>
            </div>

            <div className='mt-12'>
              <h3 className='text-xl font-semibold mb-6'>Follow Me</h3>
              <div className='flex gap-4'>
                {contactData.socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-secondary p-3 rounded-lg hover:bg-accent/10 hover:text-accent transition-colors'
                    aria-label={`${social.platform} Profile`}
                  >
                    {getSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </RevealAnimation>

        <RevealAnimation animation='fade-in-left'>
          <div className='glass rounded-xl p-8'>
            <h3 className='text-xl font-semibold mb-6'>Send Me a Message</h3>

            <form className='space-y-6' onSubmit={handleSubmit} method='POST'>
              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium mb-2'
                  >
                    Your Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    className='w-full bg-white/5 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors'
                    placeholder='John Doe'
                    required
                    value={inputs.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium mb-2'
                  >
                    Your Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='w-full bg-white/5 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors'
                    placeholder='john@example.com'
                    required
                    value={inputs.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium mb-2'
                >
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  className='w-full bg-white/5 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors'
                  placeholder='Project Inquiry'
                  required
                  value={inputs.subject}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={5}
                  className='w-full bg-white/5 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors resize-none'
                  placeholder="Hello, I'd like to talk about..."
                  required
                  value={inputs.message}
                  onChange={handleInputChange}
                />
              </div>

              <button
                type='submit'
                className={`flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-lg transition-colors w-full sm:w-auto justify-center ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={loading}
              >
                <span>{loading ? 'Sending...' : 'Send Message'}</span>
                {loading ? (
                  <LoaderCircle className='w-4 h-4 animate-spin' />
                ) : (
                  <Send className='w-4 h-4' />
                )}
              </button>
            </form>
          </div>
        </RevealAnimation>
      </div>
    </Section>
  );
};

export default Contact;
