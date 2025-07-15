"use client";
import React, { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  FileText,
  DollarSign,
  Code,
  CheckCircle,
  AlertTriangle,
  Printer,
  Users,
  TrendingUp,
  Shield
} from 'lucide-react';

export default function PCBuilderPartnershipContract() {
  const [contractData] = useState({
    // Pre-filled client info
    clientName: 'Hasan El-Haj',
    clientEmail: 'hasanmelhaj@gmail.com',
    clientPhone: '+1 (425) 354-0302',
    clientAddress: 'Seattle, Washington',
    
    // Pre-filled project details
    projectTitle: 'Custom PC Parts Builder E-commerce Platform',
    
    // Pre-filled pricing structure
    initialPayment: '$5,000 - $10,000',
    monthlyMaintenance: '$500 - $1,000',
    affiliateCommission: '10% each (30% total Amazon affiliate split) 20% goes to CodeWithAli, The Remaining 10% to PhantomForge',
    
    // Contract details
    contractDate: new Date().toLocaleDateString('en-US'),
    startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    
    // Partnership details
    partnershipDuration: 'Ongoing with 90-day termination notice'
  });

  const contractRef = useRef(null);

  const generateContractId = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const random = Math.random().toString(36).substr(2, 6).toUpperCase();
    return `CWA-PCB-${year}${month}${day}-${random}`;
  };

  const contractId = generateContractId();

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const coreFeatures = [
    'Interactive PC parts builder/configurator',
    'Compatibility checking system',
    'Real-time pricing calculations',
    'Shopping cart and checkout system',
    'Stripe payment gateway integration',
    'Customer account management',
    'Order tracking and management',
    'Admin dashboard for business operations',
    'Mobile-responsive design',
    'SEO optimization and meta tags'
  ];

  const advancedFeatures = [
    'Amazon affiliate link integration',
    'Automated commission tracking',
    'Inventory management system',
    'Customer support integration',
    'Email notification system',
    'Performance analytics dashboard',
    'Security and SSL implementation',
    'Backup and recovery systems',
    'Load balancing for high traffic',
    'API integrations for parts data'
  ];

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black p-6">
        <div className="max-w-6xl mx-auto">
          {/* Quick Actions */}
          <div className="flex justify-center gap-4 mb-6 no-print">
            <Button onClick={handlePrint} className="bg-blue-600 hover:bg-blue-700">
              <Printer className="w-4 h-4 mr-2" />
              Print Contract
            </Button>
          </div>

          {/* Contract Document */}
          <Card>
            <CardContent className="p-8 dark:bg-black" ref={contractRef}>
              {/* Contract Header */}
              <div className="text-center mb-8 border-b pb-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  PC PARTS BUILDER WEBSITE
                </h1>
                <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                  SERVICE & PARTNERSHIP AGREEMENT
                </h2>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>Contract ID: <strong>{contractId}</strong></span>
                  <span>•</span>
                  <span>Date: <strong>{contractData.contractDate}</strong></span>
                </div>
                <Badge className="mt-2 bg-blue-600 hover:bg-blue-600">
                  <FileText className="w-3 h-3 mr-1" />
                  Development & Revenue-Sharing Agreement
                </Badge>
              </div>

              {/* Parties Section */}
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                  <Users className="w-5 h-5 text-red-600" />
                  Contracting Parties
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-black p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 dark:text-white">Development Partner</h3>
                    <p className="dark:text-gray-300"><strong>CodeWithAli</strong></p>
                    <p className="dark:text-gray-300">Professional Web Development Services</p>
                    <p className="dark:text-gray-300">San Jose, California, United States</p>
                    <p className="dark:text-gray-300">Email: unfold@codewithali.com</p>
                    <p className="text-sm mt-2 text-red-600 font-medium">Role: Lead Developer & Technical Partner</p>
                  </div>
                  <div className="bg-white dark:bg-black p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 dark:text-white">Business Owner</h3>
                    <p className="dark:text-gray-300"><strong>{contractData.clientName}</strong></p>
                    <p className="dark:text-gray-300">{contractData.clientEmail}</p>
                    <p className="dark:text-gray-300">{contractData.clientPhone}</p>
                    <p className="text-sm mt-2 dark:text-gray-300">{contractData.clientAddress}</p>
                    <p className="text-sm mt-2 text-blue-600 font-medium">Role: Business Owner & Operations Lead</p>
                  </div>
                </div>
              </section>

              {/* Project Overview */}
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                  <Code className="w-5 h-5 text-blue-600" />
                  Project Overview
                </h2>
                <div className="bg-white dark:bg-black p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 dark:text-white">
                    {contractData.projectTitle}
                  </h3>
                  <Badge className="mb-3 bg-gradient-to-r from-red-600 to-blue-600 text-white">
                    E-commerce Platform + Affiliate Partnership
                  </Badge>
                  
                  <div className="space-y-3 text-gray-700 dark:text-gray-300">
                    <p>
                      <strong>Business Model:</strong> Online PC parts selection, configuration, and e-commerce platform where 
                      customers can build custom PCs online and purchase through integrated payment systems.
                    </p>
                    <p>
                      <strong>Target Market:</strong> PC enthusiasts, gamers, professionals, and businesses requiring custom computer builds.
                    </p>
                    <p>
                      <strong>Revenue Streams:</strong> Direct PC sales (Phantom Forge retains 100%) + Amazon affiliate commissions (shared revenue model).
                    </p>
                  </div>
                </div>
              </section>

              {/* Technical Deliverables */}
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                  CodeWithAli Development Deliverables
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 dark:text-white">Core Platform Features</h3>
                    <ul className="space-y-2">
                      {coreFeatures.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm dark:text-gray-300">
                          <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 dark:text-white">Advanced Features</h3>
                    <ul className="space-y-2">
                      {advancedFeatures.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm dark:text-gray-300">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Financial Structure */}
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                  <DollarSign className="w-5 h-5 text-red-600" />
                  Financial Structure & Revenue Sharing
                </h2>
                
                {/* Service Fees */}
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-3 dark:text-white">Development Service Fees</h3>
                  <div className="bg-white dark:bg-black p-6 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">
                          {contractData.initialPayment}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Initial Development (One-time)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-blue-600">
                          {contractData.monthlyMaintenance}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Monthly Maintenance & Support</div>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4 dark:border-gray-700">
                      <h4 className="font-semibold mb-2 dark:text-white">Payment Schedule</h4>
                      <ul className="text-sm space-y-1 dark:text-gray-300">
                        <li>• 50% of development fee due upon contract signing</li>
                        <li>• 50% due upon project completion and launch</li>
                        <li>• Monthly maintenance billed in advance each month</li>
                        <li>• All payments processed through agreed banking methods</li>
                        <li>• Late payments subject to 1.5% monthly service charge</li>
                      </ul>
                    </div>

                    <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded border-l-4 border-green-500">
                      <p className="text-sm font-medium text-green-700 dark:text-green-400">
                        <strong>SPECIAL ARRANGEMENT:</strong> Due to Phantom Forge&aposs current financial circumstances, CodeWithAli agrees to defer the initial deposit and provide flexible payment terms until client achieves financial stability. However, standard IP protection terms apply.
                      </p>
                    </div>

                    <div className="mt-4 p-3 bg-white dark:bg-black rounded  ">
                      <h4 className="font-semibold mb-2 text-black darkk:text-white ">Non-Payment Protection</h4>
                      <ul className="text-sm space-y-1 text-black darkk:text-white ">
                        <li>• CodeWithAli retains full copyright and IP ownership until final payment</li>
                        <li>• Website access/hosting may be suspended for payments over 30 days late</li>
                        <li>• Outstanding balances over 60 days may result in project termination</li>
                        <li>• Client responsible for reasonable collection costs if applicable</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Revenue Sharing */}
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-3 dark:text-white">Revenue Sharing Structure</h3>
                  <div className="bg-white dark:bg-black p-6 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-red-600">Direct PC Sales (Phantom Forge Retains 100%)</h4>
                        <ul className="text-sm space-y-1 dark:text-gray-300">
                          <li>• All profits from direct PC sales belong to Phantom Forge</li>
                          <li>• CodeWithAli has NO claim to direct sales revenue</li>
                          <li>• Phantom Forge maintains full ownership of customer relationships</li>
                          <li>• Phantom Forge responsible for inventory, shipping, and customer service</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-blue-600">Amazon Affiliate Commissions (Shared)</h4>
                        <ul className="text-sm space-y-1 dark:text-gray-300">
                          <li>• <strong>Total Amazon affiliate rate:</strong> ~4-10% (varies by category)</li>
                          <li>• <strong>CodeWithAli share:</strong> 20% of gross affiliate revenue</li>
                          <li>• <strong>Phantom Forge share:</strong> 10% of gross affiliate revenue</li>
                          <li>• <strong>Payment method:</strong> Monthly distribution via PayPal/Bank transfer</li>
                          <li>• <strong>Tracking:</strong> Transparent dashboard for all parties</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Ownership & IP Rights */}
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Ownership & Intellectual Property
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-black p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 dark:text-white">Phantom Forge Ownership</h3>
                    <ul className="text-sm space-y-1 dark:text-gray-300">
                      <li>• Complete ownership of the business and brand</li>
                      <li>• 100% ownership of customer data and relationships</li>
                      <li>• Full rights to all business operations and decisions</li>
                      <li>• Ownership of custom website code upon final payment</li>
                      <li>• All direct sales revenue and profits</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-black p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 dark:text-white">CodeWithAli Rights & IP Protection</h3>
                    <ul className="text-sm space-y-1 dark:text-gray-300">
                      <li>• Affiliate commission revenue sharing as specified</li>
                      <li>• Right to use project as portfolio/case study (non-confidential parts)</li>
                      <li>• Retention of general coding methodologies and frameworks</li>
                      <li>• Rights to pre-existing code libraries and tools</li>
                      <li>• <strong>Full copyright ownership until final payment completion</strong></li>
                      <li>• Right to suspend services/access for non-payment</li>
                      <li>• Right to retain all work product until payment obligations fulfilled</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Partnership Terms */}
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  Partnership Terms & Conditions
                </h2>
                <div className="space-y-4">
                  <div className="bg-white dark:bg-black p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 dark:text-white">Partnership Duration</h4>
                    <p className="text-sm dark:text-gray-300">
                      <strong>Initial Term:</strong> {contractData.partnershipDuration}<br/>
                      <strong>Renewal:</strong> Automatic unless either party provides notice<br/>
                      <strong>Service Continuation:</strong> Maintenance services continue independently of revenue sharing
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-black p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 dark:text-white">Clean Termination Terms</h4>
                      <ul className="text-sm space-y-1 dark:text-gray-300">
                        <li>• Either party may terminate with 90-day written notice</li>
                        <li>• No penalty fees or buyout requirements for paid work</li>
                        <li>• Revenue sharing ends 30 days after termination notice</li>
                        <li>• Client retains full ownership of website upon final payment</li>
                        <li>• Outstanding service fees due within 30 days of termination</li>
                        <li>• All paid work delivered becomes client property upon final payment</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-black p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 dark:text-white">Work Suspension for Non-Payment</h4>
                      <ul className="text-sm space-y-1 dark:text-gray-300">
                        <li>• Development work may be suspended after 30 days of non-payment</li>
                        <li>• Website hosting/services suspended after 60 days of non-payment</li>
                        <li>• CodeWithAli retains all work until payment obligations met</li>
                        <li>• Client may recover work upon payment of outstanding balance + reasonable costs</li>
                        <li>• Termination for cause (non-payment) requires no advance notice</li>
                        <li>• Revenue sharing partnership terminated immediately upon payment default</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-black p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 dark:text-white">Performance Expectations</h4>
                      <ul className="text-sm space-y-1 dark:text-gray-300">
                        <li>• Website uptime target: 99.5%</li>
                        <li>• Response time for critical issues: 4 hours</li>
                        <li>• Monthly performance and revenue reports</li>
                        <li>• Quarterly business review meetings (optional)</li>
                        <li>• Transparent affiliate tracking and reporting</li>
                        <li>• Regular security updates and maintenance</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Fair Partnership Philosophy</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      This partnership is built on mutual benefit and respect. Both parties should prosper from the collaboration, 
                      with clear, fair terms that allow either party to exit gracefully if business needs change. 
                      Success is measured by the value created together, not by restrictive clauses.
                    </p>
                  </div>
                </div>
              </section>

              {/* Risk Management */}
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  Risk Management & Legal Protection
                </h2>
                <div className="bg-white dark:bg-black p-6 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 dark:text-white">Business Risk Allocation</h4>
                      <ul className="text-sm space-y-1 dark:text-gray-300">
                        <li>• <strong>Phantom Forge assumes:</strong> All business and market risks</li>
                        <li>• <strong>Phantom Forge responsible for:</strong> Customer service, shipping, returns</li>
                        <li>• <strong>Phantom Forge liable for:</strong> All business operations and legal compliance</li>
                        <li>• <strong>CodeWithAli responsible for:</strong> Technical functionality and maintenance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 dark:text-white">Liability Limitations</h4>
                      <ul className="text-sm space-y-1 dark:text-gray-300">
                        <li>• CodeWithAli&aposs liability capped at total fees paid in last 12 months</li>
                        <li>• No liability for business outcomes or lost revenue</li>
                        <li>• Mutual indemnification for respective areas of responsibility</li>
                        <li>• Good faith dispute resolution before formal proceedings</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border-l-4 border-yellow-500">
                    <p className="text-sm font-medium text-yellow-700 dark:text-yellow-400">
                      <strong>Legal Framework:</strong> This contract operates under standard business-to-business service agreements. 
                      Any disputes will be resolved through mediation first, then binding arbitration if necessary. 
                      Both parties retain rights to legal counsel throughout any proceedings.
                    </p>
                  </div>
                </div>
              </section>

              {/* Execution Section */}
              <section className="border-t pt-8 dark:border-gray-700">
                <h2 className="text-xl font-bold mb-6 text-center dark:text-white">Contract Execution</h2>
                
                <div className="mb-6 p-4 bg-white dark:bg-black rounded-lg">
                  <h3 className="font-semibold mb-2 dark:text-white">Next Steps for Contract Activation</h3>
                  <ol className="text-sm space-y-1 list-decimal list-inside dark:text-gray-300">
                    <li>Phantom Forge reviews and signs this agreement electronically or physically</li>
                    <li>Initial deposit payment (when financially feasible per special arrangement)</li>
                    <li>CodeWithAli countersigns to activate contract</li>
                    <li>Project development begins within 7 business days of activation</li>
                    <li>Regular progress updates and milestone reviews as needed</li>
                  </ol>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 p-6 rounded-lg">
                      <h3 className="font-semibold mb-2 dark:text-white">Client Signature</h3>
                      <div className="h-20 flex items-center justify-center text-gray-500 dark:text-gray-400">
                        [Digital/Physical Signature Area]
                      </div>
                      <p className="text-sm mt-2 dark:text-gray-300">{contractData.clientName}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Date: _______________
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                        Title: Business Owner & Operations Lead
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 p-6 rounded-lg">
                      <h3 className="font-semibold mb-2 dark:text-white">CodeWithAli</h3>
                      <div className="h-20 flex items-center justify-center text-gray-500 dark:text-gray-400">
                        [Digital/Physical Signature Area]
                      </div>
                      <p className="text-sm mt-2 dark:text-gray-300">Ali - Lead Developer</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Date: _______________
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                        Title: Technical Partner & Development Lead
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white dark:bg-black rounded-lg text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    This contract becomes legally binding upon both signatures and activation. 
                    Digital signatures are accepted and legally valid for this agreement.
                  </p>
                </div>
              </section>

              {/* Footer */}
              <div className="mt-8 pt-4 border-t text-center text-xs text-gray-500 dark:text-gray-400 dark:border-gray-700">
                <p>Contract ID: {contractId} | Generated: {contractData.contractDate}</p>
                <p>CodeWithAli Professional Services | San Jose, CA | unfold@codewithali.com</p>
                <p className="mt-2">Professional web development and technical partnership services</p>
                <p className="mt-1 font-medium">CONFIDENTIAL BUSINESS AGREEMENT</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          .max-w-6xl { 
            max-width: none !important; 
          }
          body { 
            -webkit-print-color-adjust: exact; 
          }
          .no-print { 
            display: none !important; 
          }
          .dark\\:black,
          .dark\\:bg-gray-800 {
            background-color: white !important;
            color: black !important;
          }
        }
      `}</style>
    </>
  );
}