"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  FileText,
  CheckCircle,
  Code,
  CreditCard,
  RefreshCw,
  Users,
  Shield,
  AlertTriangle,
  Scale,
  Mail,
  ChevronUp,
  Globe,
  Settings,
  Clock,
} from "lucide-react";

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
}

const sections: Section[] = [
  { id: "overview", title: "Overview", icon: <FileText className="w-4 h-4" /> },
  { id: "acceptance", title: "Acceptance of Terms", icon: <CheckCircle className="w-4 h-4" /> },
  { id: "services", title: "Services Description", icon: <Code className="w-4 h-4" /> },
  { id: "client-responsibilities", title: "Client Responsibilities", icon: <Users className="w-4 h-4" /> },
  { id: "payment", title: "Payment Terms", icon: <CreditCard className="w-4 h-4" /> },
  { id: "intellectual-property", title: "Intellectual Property", icon: <Shield className="w-4 h-4" /> },
  { id: "revisions", title: "Revision Policy", icon: <RefreshCw className="w-4 h-4" /> },
  { id: "project-timeline", title: "Project Timeline", icon: <Clock className="w-4 h-4" /> },
  { id: "limitations", title: "Limitations & Liability", icon: <AlertTriangle className="w-4 h-4" /> },
  { id: "governing-law", title: "Governing Law", icon: <Scale className="w-4 h-4" /> },
  { id: "contact", title: "Contact Information", icon: <Mail className="w-4 h-4" /> },
];

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState("overview");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Update active section based on scroll position
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      ).filter(Boolean);

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b dark:from-black dark:via-black bg-white dark:to-black">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Navigation */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <Card className="bg-white dark:bg-black/80 backdrop-blur-sm border-red-950/50 p-4">
          <div className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center gap-2 p-2 rounded-md text-sm transition-all duration-200 w-full text-left ${
                  activeSection === section.id
                    ? "bg-red-500 dark:bg-red-500/20 dark:text-white text-white border-l-2 border-red-950 dark:border-red-500"
                    : "text-black dark:text-gray-400 hover:text-white  dark:hover:text-white hover:bg-red-700 dark:hover:bg-gray-800/50"
                }`}
              >
                {section.icon}
                <span className="hidden xl:inline">{section.title}</span>
              </button>
            ))}
          </div>
        </Card>
      </div>

      <div className="container mx-auto px-6 pt-24 pb-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 dark:bg-red-500/20 bg-red-500 text-white dark:text-red-400 border-red-500/50">
            <FileText className="w-3 h-3 mr-1" />
            Terms of Service
          </Badge>b
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black bg-gradient-to-r dark:from-white dark:via-red-200 dark:to-red-300 bg-clip-text dark:text-transparent">
            Terms and Conditions
          </h1>
          <p className="text-black dark:text-gray-400 text-lg">
            These terms govern your use of CodeWithAli's website development and digital services.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Overview Section */}
        <section id="overview" className="mb-16">
          <Card className="bg-white dark:bg-black/40 border-red-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 dark:text-white text-black">
                <FileText className="w-5 h-5 text-red-700 dark:text-red-400" />
                Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-black/70 dark:text-gray-300">
              <p>
                Welcome to CodeWithAli. These Terms and Conditions ("Terms") govern your use of our website development, application development, and digital services. By contacting us or engaging our services, you agree to be bound by these Terms.
              </p>
              <p>
                CodeWithAli is a professional web development company specializing in custom websites, web applications, mobile apps, UI/UX design, e-commerce solutions, SEO optimization, and hosting services for businesses and individuals.
              </p>
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-sm dark:text-red-400 text-red-800">
                  <strong>Important:</strong> By contacting us, you acknowledge that you have read and agree to these Terms. If you do not agree with any part of these Terms, please do not use our services.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Acceptance of Terms */}
        <section id="acceptance" className="mb-16">
          <Card className="bg-white dark:bg-black/40 border-red-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 dark:text-white text-black">
                <CheckCircle className="w-5 h-5 dark:text-red-400 text-red-800" />
                Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-black/70 dark:text-gray-300">
              <p>
                By contacting CodeWithAli, visiting our website, or engaging our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold dark:text-white text-black mb-2">Eligibility</h4>
                  <ul className="space-y-1 list-disc list-inside text-sm">
                    <li>You must be at least 18 years old or the legal age of majority in your jurisdiction</li>
                    <li>You must have the legal capacity to enter into binding contracts</li>
                    <li>You must not be prohibited from using our services under applicable law</li>
                    <li>All information provided must be accurate and truthful</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold dark:text-white text-black mb-2">Agreement Formation</h4>
                  <p className="text-sm">
                    These Terms become effective when you first contact us via email, phone, contact form, or any other communication method. A binding agreement is formed upon your acceptance of our project proposal and payment of the required deposit.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold dark:text-white text-black mb-2">Modifications</h4>
                  <p className="text-sm">
                    We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of the modified Terms.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Services Description */}
        <section id="services" className="mb-16">
          <Card className="bg-white dark:bg-black/40 border-red-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 dark:text-white text-black">
                <Code className="w-5 h-5 dark:text-red-400 text-red-800" />
                Services Description
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-black/70 dark:text-gray-300">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold dark:text-white text-black mb-3">Development Services</h4>
                  <ul className="space-y-1 list-disc list-inside text-sm">
                    <li>Custom website development</li>
                    <li>Web application development</li>
                    <li>Mobile application development</li>
                    <li>E-commerce solutions</li>
                    <li>Database design and integration</li>
                    <li>API development and integration</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold dark:text-white text-black mb-3">Design & Support Services</h4>
                  <ul className="space-y-1 list-disc list-inside text-sm">
                    <li>UI/UX design and prototyping</li>
                    <li>Responsive design implementation</li>
                    <li>SEO optimization</li>
                    <li>Web hosting and maintenance</li>
                    <li>Technical consulting</li>
                    <li>Performance optimization</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold dark:text-white text-black mb-2">Service Scope</h4>
                <p className="text-sm mb-3">
                  All services are provided on a project basis according to the scope and specifications agreed upon in writing. Any additional work outside the original scope will be quoted separately and requires written approval.
                </p>
                <p className="text-sm text-black dark:text-gray-400">
                  Project timelines typically range from 2-12 weeks depending on complexity and client responsiveness.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Client Responsibilities */}
        <section id="client-responsibilities" className="mb-16">
          <Card className="bg-white dark:bg-black/40 border-red-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 dark:text-white text-black">
                <Users className="w-5 h-5 dark:text-red-400 text-red-800" />
                Client Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-black/70 dark:text-gray-300">
              <div>
                <h4 className="font-semibold dark:text-white text-black mb-3">Required Client Actions</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium dark:text-white text-black mb-2">Content & Materials</h5>
                    <ul className="space-y-1 list-disc list-inside text-sm">
                      <li>Provide all necessary content, images, and text</li>
                      <li>Ensure all materials are original or properly licensed</li>
                      <li>Supply high-quality images and assets</li>
                      <li>Review and approve all design mockups</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium dark:text-white text-black mb-2">Communication & Feedback</h5>
                    <ul className="space-y-1 list-disc list-inside text-sm">
                      <li>Respond to communications within 3 business days</li>
                      <li>Provide clear, specific feedback on deliverables</li>
                      <li>Attend scheduled meetings and calls</li>
                      <li>Designate a single point of contact for the project</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold dark:text-white text-black mb-3">Technical Requirements</h4>
                <ul className="space-y-1 list-disc list-inside text-sm">
                  <li>Provide access to hosting accounts, domains, and third-party services</li>
                  <li>Share login credentials for necessary platforms and tools</li>
                  <li>Make payments according to the agreed schedule</li>
                  <li>Test and approve functionality before final delivery</li>
                </ul>
              </div>

              <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                <p className="text-sm text-orange-500 dark:text-orange-400">
                  <strong>Important:</strong> Delays in client responses or provision of materials may result in project timeline extensions and potential additional fees for extended project management.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Payment Terms */}
        <section id="payment" className="mb-16">
          <Card className="bg-white dark:bg-black/40 border-red-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 dark:text-white text-black">
                <CreditCard className="w-5 h-5 dark:text-red-400 text-red-800" />
                Payment Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-black/70 dark:text-gray-300">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold dark:text-white text-black mb-3">Payment Schedule</h4>
                  <div className="space-y-3">
                    <div className="p-3  rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <CreditCard className="w-4 h-4 dark:text-red-400 text-red-800" />
                        <span className="font-medium dark:text-white text-black">Project Deposit</span>
                      </div>
                      <p className="text-sm">50% due upon project agreement</p>
                    </div>
                    <div className="p-3  rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="font-medium dark:text-white text-black">Final Payment</span>
                      </div>
                      <p className="text-sm">50% due upon project completion</p>
                    </div>
                    <div className="p-3  rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <RefreshCw className="w-4 h-4 text-blue-400" />
                        <span className="font-medium dark:text-white text-black">Ongoing Services</span>
                      </div>
                      <p className="text-sm">Monthly billing for maintenance & hosting</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold dark:text-white text-black mb-3">Payment Methods</h4>
                  <ul className="space-y-2 list-disc list-inside text-sm">
                    <li>Bank transfer (ACH/Wire)</li>
                    <li>Credit/Debit cards</li>
                    <li>PayPal</li>
                    <li>Check (for established clients)</li>
                    <li>Cryptocurrency (Bitcoin, Ethereum)</li>
                  </ul>
                  
                  <h4 className="font-semibold dark:text-white text-black mb-2 mt-4">Currency</h4>
                  <p className="text-sm text-black dark:text-gray-400">
                    All prices are quoted in USD unless otherwise specified. International clients may be subject to currency conversion fees.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <h5 className="font-medium dark:text-white text-black mb-2">Late Payment Policy</h5>
                <p className="text-sm dark:text-red-400 text-red-800">
                  Payments not received within 30 days of the due date will incur a 1.5% monthly service charge. Projects may be suspended until payment is received. We reserve the right to pursue legal action for severely delinquent accounts.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Intellectual Property */}
        <section id="intellectual-property" className="mb-16">
          <Card className="bg-white dark:bg-black/40 border-red-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 dark:text-white text-black">
                <Shield className="w-5 h-5 dark:text-red-400 text-red-800" />
                Intellectual Property Rights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-black/70 dark:text-gray-300">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <h5 className="font-medium dark:text-white text-black mb-2">Client Ownership</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Final delivered code and designs</li>
                    <li>• Custom graphics and content created for the project</li>
                    <li>• Project-specific documentation</li>
                    <li>• Ownership transfers upon full payment</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <h5 className="font-medium dark:text-white text-black mb-2">CodeWithAli Retention</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• General methodologies and techniques</li>
                    <li>• Pre-existing code libraries and frameworks</li>
                    <li>• Business processes and know-how</li>
                    <li>• Right to display work in portfolio</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold dark:text-white text-black mb-2">Third-Party Components</h4>
                <p className="text-sm mb-3">
                  Projects may incorporate third-party libraries, frameworks, plugins, or tools. These components remain subject to their respective licenses and terms of use. Client is responsible for compliance with third-party license requirements.
                </p>
              </div>

              <div>
                <h4 className="font-semibold dark:text-white text-black mb-2">Client-Provided Materials</h4>
                <p className="text-sm">
                  Client warrants that all materials, content, images, and information provided for the project are either original work or properly licensed. Client indemnifies CodeWithAli against any claims of copyright or trademark infringement related to client-provided materials.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Revision Policy */}
        <section id="revisions" className="mb-16">
          <Card className="bg-white dark:bg-black/40 border-red-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 dark:text-white text-black">
                <RefreshCw className="w-5 h-5 dark:text-red-400 text-red-800" />
                Revision Policy (No Refund Policy)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-black/70 dark:text-gray-300">
              <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <p className="text-sm dark:text-yellow-400 text-yellow-800">
                  <strong>No Refunds:</strong> We do not offer refunds under any circumstances. Instead, we are committed to working with you through revisions and adjustments to ensure your complete satisfaction with the final deliverable.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold dark:text-white text-black mb-3">Included Revisions</h4>
                  <div className="space-y-3">
                    <div className="p-3  rounded-lg">
                      <h5 className="font-medium dark:text-white text-black mb-1">Design Phase</h5>
                      <p className="text-sm">Up to 3 rounds of design revisions</p>
                    </div>
                    <div className="p-3  rounded-lg">
                      <h5 className="font-medium dark:text-white text-black mb-1">Development Phase</h5>
                      <p className="text-sm">Up to 2 rounds of functionality revisions</p>
                    </div>
                    <div className="p-3  rounded-lg">
                      <h5 className="font-medium dark:text-white text-black mb-1">Content Updates</h5>
                      <p className="text-sm">Minor text and image updates</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold dark:text-white text-black mb-3">Additional Services</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Extra Revisions:</strong> $75 per hour</li>
                    <li><strong>Scope Changes:</strong> Quoted separately</li>
                    <li><strong>Content Rewrites:</strong> $50 per hour</li>
                    <li><strong>New Features:</strong> Priced as addon project</li>
                    <li><strong>Emergency Support:</strong> $100 per hour</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold dark:text-white text-black mb-2">Our Satisfaction Guarantee</h4>
                <p className="text-sm">
                  We are dedicated to your complete satisfaction. If you're not happy with any aspect of the project, we will work tirelessly to address your concerns through additional revisions, adjustments, or alternative solutions. Our goal is to deliver a final product that exceeds your expectations and drives real business results.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Project Timeline */}
        <section id="project-timeline" className="mb-16">
          <Card className="bg-white dark:bg-black/40 border-red-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 dark:text-white text-black">
                <Clock className="w-5 h-5 dark:text-red-400 text-red-800" />
                Project Timeline & Delivery
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-black/70 dark:text-gray-300">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold dark:text-white text-black mb-3">Typical Project Phases</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Discovery & Planning</span>
                      <span className="text-sm text-black dark:text-gray-400">1-2 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Design & Mockups</span>
                      <span className="text-sm text-black dark:text-gray-400">1-3 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Development & Testing</span>
                      <span className="text-sm text-black dark:text-gray-400">2-8 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Review & Launch</span>
                      <span className="text-sm text-black dark:text-gray-400">1 week</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold dark:text-white text-black mb-3">Timeline Factors</h4>
                  <ul className="space-y-1 list-disc list-inside text-sm">
                    <li>Project complexity and scope</li>
                    <li>Client response time for feedback</li>
                    <li>Availability of required content and materials</li>
                    <li>Third-party integrations and dependencies</li>
                    <li>Number of revision rounds</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold dark:text-white text-black mb-2">Delivery Terms</h4>
                <p className="text-sm">
                  Project timelines are estimates based on normal circumstances and assume timely client feedback and material provision. Final delivery occurs upon completion of all agreed-upon features and client approval. Rush delivery may be available for an additional fee.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Limitations & Liability */}
        <section id="limitations" className="mb-16">
          <Card className="bg-white dark:bg-black/40 border-red-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-black dark:dark:text-white ">
                <AlertTriangle className="w-5 h-5 dark:text-red-400 text-red-800" />
                Limitations of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-black/70 dark:text-gray-300">
              <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <p className="text-sm dark:text-yellow-400 text-yellow-800">
                  <strong>Important Legal Notice:</strong> Please read this section carefully as it affects your legal rights and remedies.
                </p>
              </div>

              <div>
                <h4 className="font-semibold dark:text-white text-black mb-2">Liability Limitation</h4>
                <p className="text-sm mb-3">
                  CodeWithAli's liability for any claim related to our services is limited to the total amount paid for the specific project or service in question. Under no circumstances shall our liability exceed this amount.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold dark:text-white text-black mb-3">Excluded Damages</h4>
                  <ul className="space-y-1 list-disc list-inside text-sm">
                    <li>Indirect or consequential damages</li>
                    <li>Loss of profits or business opportunities</li>
                    <li>Loss of data or information</li>
                    <li>Business interruption or downtime</li>
                    <li>Loss of goodwill or reputation</li>
                    <li>Punitive or exemplary damages</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold dark:text-white text-black mb-3">Force Majeure</h4>
                  <p className="text-sm mb-3">
                    We are not liable for delays or failures due to circumstances beyond our reasonable control, including:
                  </p>
                  <ul className="space-y-1 list-disc list-inside text-sm">
                    <li>Natural disasters or acts of God</li>
                    <li>Government actions or regulations</li>
                    <li>Internet or hosting provider outages</li>
                    <li>Third-party service failures</li>
                    <li>Pandemics or public health emergencies</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold dark:text-white text-black mb-2">Warranty Disclaimer</h4>
                <p className="text-sm">
                  Our services are provided "as is" except for the express warranties in our revision policy. We disclaim all other warranties, express or implied, including warranties of merchantability and fitness for a particular purpose.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Governing Law */}
        <section id="governing-law" className="mb-16">
          <Card className="bg-white dark:bg-black/40 border-red-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 dark:text-white text-black">
                <Scale className="w-5 h-5 dark:text-red-400 text-red-800" />
                Governing Law & Dispute Resolution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-black/70 dark:text-gray-300">
              <div>
                <h4 className="font-semibold dark:text-white text-black mb-2">Applicable Law</h4>
                <p className="text-sm mb-3">
                  These Terms and Conditions are governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law principles.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold dark:text-white text-black mb-3">Dispute Resolution Process</h4>
                  <ol className="space-y-2 list-decimal list-inside text-sm">
                    <li><strong>Good Faith Negotiation</strong> - Initial attempt to resolve disputes directly</li>
                    <li><strong>Mediation</strong> - Neutral third-party mediation if negotiation fails</li>
                    <li><strong>Arbitration</strong> - Binding arbitration under California law</li>
                    <li><strong>Court Jurisdiction</strong> - California state courts as last resort</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold dark:text-white text-black mb-3">Jurisdiction & Venue</h4>
                  <p className="text-sm mb-3">
                    Any legal proceedings must be brought in the state or federal courts located in San Jose, California. Both parties consent to the exclusive jurisdiction of these courts.
                  </p>
                  <p className="text-sm text-black/70 dark:text-gray-300">
                    We encourage resolving any disputes through direct communication and good faith negotiation before pursuing formal legal proceedings.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Information */}
        <section id="contact" className="mb-16">
          <Card className="bg-white dark:bg-black/40 border-red-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 dark:text-white text-black">
                <Mail className="w-5 h-5 dark:text-red-400 text-red-800" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-black/70 dark:text-gray-300">
              <p>
                For questions about these Terms and Conditions, project inquiries, or support issues, please contact us:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 dark:text-red-400 text-red-800" />
                    <div>
                      <p className="font-semibold dark:text-white text-black">Email Support</p>
                      <p className="text-sm">unfold@codewithali.com</p>
                      <p className="text-sm text-black/70 dark:text-gray-400">Response within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 dark:text-red-400 text-red-800" />
                    <div>
                      <p className="font-semibold dark:text-white text-black">Website</p>
                      <p className="text-sm">www.codewithali.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Settings className="w-5 h-5 dark:text-red-400 text-red-800 mt-1" />
                    <div>
                      <p className="font-semibold dark:text-white text-black">Business Location</p>
                      <p className="text-sm">
                        San Jose, California<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 dark:text-red-400 text-red-800 mt-1" />
                    <div>
                      <p className="font-semibold dark:text-white text-black">Business Hours</p>
                      <p className="text-sm">
                        Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                        <span className="text-black/70 dark:text-gray-400">Emergency support available</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="bg-gray-700" />

              <div className="text-center">
                <p className="text-sm text-black dark:text-gray-400 mb-4">
                  These Terms and Conditions constitute the entire agreement between you and CodeWithAli regarding the use of our services.
                </p>
                <Button 
                  variant="outline" 
                  className="border-red-500/20 dark:text-red-400 text-red-800 hover:bg-red-500/10"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <ChevronUp className="w-4 h-4 mr-2" />
                  Back to Top
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Final Agreement Card */}
        <section className="mb-16">
          <Card className="bg-red-800 dark:bg-red-950/20 border-red-500/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold dark:text-white text-white mb-4">Agreement Acknowledgment</h3>
              <p className="text-white dark:text-gray-300 mb-6">
                By contacting CodeWithAli, submitting a project inquiry, or engaging our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions in their entirety.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm dark:text-red-400 text-white">
                <CheckCircle className="w-4 h-4" />
                <span>Effective as of the date you first contact us or engage our services</span>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}