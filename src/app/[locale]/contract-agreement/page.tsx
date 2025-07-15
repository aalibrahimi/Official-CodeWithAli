"use client";
import React, { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  FileText,
  Copy,
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
    partnershipDuration: 'Permanent term'
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

//   const copyContract = async () => {
//     if (typeof navigator !== 'undefined' && navigator.clipboard && contractRef.current) {
//       try {
//         const contractText = contractRef.current.innerText || '';
//         await navigator.clipboard.writeText(contractText);
//         alert('Contract copied to clipboard!');
//       } catch (err) {
//         console.error('Failed to copy contract:', err);
//         alert('Failed to copy contract to clipboard');
//       }
//     }
//   };

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
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-black p-6">
        <div className="max-w-6xl mx-auto">
          {/* Quick Actions */}
          <div className="flex justify-center gap-4 mb-6 no-print">
            <Button onClick={handlePrint} className="bg-blue-600 hover:bg-blue-700">
              <Printer className="w-4 h-4 mr-2" />
              Print Contract
            </Button>
            {/* <Button variant="outline" onClick={copyContract}>
              <Copy className="w-4 h-4 mr-2 text-black dark:text-white" />
              <span className="text-black dark:text-white">Copy Text</span> 
            </Button> */}
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
                <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                  <span>Contract ID: <strong>{contractId}</strong></span>
                  <span>•</span>
                  <span>Date: <strong>{contractData.contractDate}</strong></span>
                </div>
                <Badge className="mt-2 bg-blue-600 hover:bg-blue-600">
                  <FileText className="w-3 h-3 mr-1" />
                  Hybrid Development & Revenue-Sharing Agreement
                </Badge>
              </div>

              {/* Parties Section */}
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-red-600" />
                  Contracting Parties
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-red-950/60 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Development Partner</h3>
                    <p><strong>CodeWithAli</strong></p>
                    <p>Professional Web Development Services</p>
                    <p>San Jose, California, United States</p>
                    <p>Email: unfold@codewithali.com</p>
                    <p className="text-sm mt-2 text-red-600 font-medium">Role: Lead Developer & Technical Partner</p>
                  </div>
                  <div className="bg-white dark:bg-blue-600/20 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Business Owner</h3>
                    <p><strong>{contractData.clientName}</strong></p>
                    <p>{contractData.clientEmail}</p>
                    <p>{contractData.clientPhone}</p>
                    <p className="text-sm mt-2">{contractData.clientAddress}</p>
                    <p className="text-sm mt-2 text-blue-600 font-medium">Role: Business Owner & Operations Lead</p>
                  </div>
                </div>
              </section>

              {/* Project Overview */}
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-600" />
                  Project Overview
                </h2>
                <div className="bg-white dark:bg-black p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">
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
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                  CodeWithAli Development Deliverables
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Core Platform Features</h3>
                    <ul className="space-y-2">
                      {coreFeatures.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Advanced Features</h3>
                    <ul className="space-y-2">
                      {advancedFeatures.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
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
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-red-600" />
                  Financial Structure & Revenue Sharing
                </h2>
                
                {/* Service Fees */}
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-3">Development Service Fees</h3>
                  <div className="bg-white dark:bg-black p-6 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">
                          {contractData.initialPayment}
                        </div>
                        <div className="text-sm text-gray-600">Initial Development (One-time)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-blue-600">
                          {contractData.monthlyMaintenance}
                        </div>
                        <div className="text-sm text-gray-600">Monthly Maintenance & Support</div>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <h4 className="font-semibold mb-2">Payment Schedule</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 50% of development fee typically due upon contract signing</li>
                        <li>• 50% due upon project completion and launch</li>
                        <li>• Monthly maintenance billed in advance each month</li>
                        <li>• All payments processed through agreed banking methods</li>
                      </ul>
                    </div>

                    <div className="mt-4 p-3 bg-white dark:bg-black rounded border-l-4 border-green-500">
                      <p className="text-sm font-medium text-green-700 dark:text-green-400">
                        <strong>SPECIAL ARRANGEMENT:</strong> Due to Phantom Forge&apos;s current financial circumstances, CodeWithAli agrees to defer the initial deposit and provide flexible payment terms until client achieves financial stability.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Revenue Sharing */}
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-3">Revenue Sharing Structure</h3>
                  <div className="bg-white dark:bg-black p-6 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-red-600">Direct PC Sales (Phantom Forge Retains 100%)</h4>
                        <ul className="text-sm space-y-1">
                          <li>• All profits from direct PC sales belong to Phantom Forge</li>
                          <li>• CodeWithAli has NO claim to direct sales revenue</li>
                          <li>• Phantom Forge maintains full ownership of customer relationships</li>
                          <li>• Phantom Forge responsible for inventory, shipping, and customer service</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-blue-600">Amazon Affiliate Commissions (Shared)</h4>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Total Amazon affiliate rate:</strong> ~15-30% (varies by category)</li>
                          <li>• <strong>CodeWithAli share:</strong> 20% of gross affiliate revenue</li>
                          <li>• <strong>Phantom Forge share:</strong> 10% of gross affiliate revenue</li>
                          <li>• <strong>Payment method:</strong> Automated monthly distribution</li>
                          <li>• <strong>Tracking:</strong> Transparent dashboard for all parties</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Ownership & IP Rights */}
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Ownership & Intellectual Property
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-black p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Phantom Forge Ownership</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Complete ownership of the business and brand</li>
                      <li>• 100% ownership of customer data and relationships</li>
                      <li>• Full rights to all business operations and decisions</li>
                      <li>• Ownership of custom Website upon final payment</li>
                      <li>• All direct sales revenue and profits</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-black p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">CodeWithAli Rights</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Affiliate commission revenue sharing as specified</li>
                      <li>• Right to use project as portfolio/case study</li>
                      <li>• Retention of general coding methodologies</li>
                      <li>• Rights to pre-existing code libraries and frameworks</li>
                      <li>• Technical consulting and advisory role</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Partnership Terms */}
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  Partnership Terms & Conditions
                </h2>
                <div className="space-y-4">
                  <div className="bg-white dark:bg-black p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Partnership Duration</h4>
                    <p className="text-sm">
                      <strong>Initial Term:</strong> {contractData.partnershipDuration} from project launch<br/>
                      <strong>Service Continuation:</strong> Maintenance services can continue independently of partnership
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-black p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Partnership Transition</h4>
                      <ul className="text-sm space-y-1">
                        <li>• CodeWithAli may conclude partnership with 90-day notice</li>
                        <li>• Phantom Forge transition subject to standard industry provisions</li>
                        <li>• Affiliate revenue sharing concludes upon partnership end</li>
                        <li>• Phantom Forge retains full ownership rights to website and business</li>
                        <li>• Outstanding service fees due within 30 days</li>
                        <li>• Standard non-compete period: 12 months</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-black p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Performance Expectations</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Website uptime target: 99.5%</li>
                        <li>• Response time for critical issues: 4 hours</li>
                        <li>• Monthly performance and revenue reports</li>
                        <li>• Quarterly business review meetings</li>
                        <li>• Transparent affiliate tracking and reporting</li>
                      </ul>
                    </div>
                  </div>

                  {/* Partnership Value Protection */}
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3 text-blue-600">Partnership Value & Transition Framework</h4>
                    <div className="bg-white dark:bg-black p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Industry-Standard Value Protection</h5>
                      <p className="text-sm mb-3">
                        To ensure fair compensation for development investment and ongoing partnership value, 
                        standard business transition provisions apply when Phantom Forge chooses to transition away from the partnership structure:
                      </p>
                      
                      <div className="bg-white dark:bg-black p-3 rounded mb-3">
                        <h6 className="font-semibold text-sm mb-2">Partnership Transition Compensation:</h6>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Value Assessment:</strong> Based on standard 2-year revenue multiple (industry norm)</li>
                          <li>• <strong>Transition Fee:</strong> 25% of assessed partnership value</li>
                          <li>• <strong>Minimum Investment Recovery:</strong> $15,000 development cost protection</li>
                          <li>• <strong>Alternative Method:</strong> 5-year profit projection model (whichever benefits Phantom Forge)</li>
                        </ul>
                      </div>

                      <div className="bg-white dark:bg-black p-3 rounded mb-3">
                        <h6 className="font-semibold text-sm mb-2">Flexible Implementation:</h6>
                        <ul className="text-sm space-y-1">
                          <li>• Calculation based on actual performance period (minimum 6 months)</li>
                          <li>• Third-party business valuation available if requested</li>
                          <li>• Flexible payment terms: up to 6 months at competitive rates</li>
                          <li>• Early settlement discounts available for immediate payment</li>
                        </ul>
                      </div>

                      <div className="bg-white dark:bg-black p-3 rounded">
                        <h6 className="font-semibold text-sm mb-2">Standard Business Exceptions:</h6>
                        <ul className="text-sm space-y-1">
                          <li>• Service performance issues (with reasonable cure period)</li>
                          <li>• Mutual business decision to restructure</li>
                          <li>• External market conditions beyond either party&apos;s control</li>
                          <li>• Material changes in business model by mutual agreement</li>
                        </ul>
                      </div>

                      <p className="text-xs mt-3 font-medium text-blue-700 dark:text-blue-300">
                        <strong>Business Rationale:</strong> This framework follows industry best practices for development partnerships, 
                        ensuring both parties benefit fairly from the business value created together while providing clear, 
                        professional transition pathways.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Risk Management */}
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  Risk Management & Legal Protection
                </h2>
                <div className="bg-white dark:bg-black p-6 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Business Risk Allocation</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Phantom Forge assumes:</strong> All business and market risks</li>
                        <li>• <strong>Phantom Forge responsible for:</strong> Customer service, shipping, returns</li>
                        <li>• <strong>Phantom Forge liable for:</strong> All business operations and legal compliance</li>
                        <li>• <strong>CodeWithAli responsible for:</strong> Technical functionality only</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Liability Limitations</h4>
                      <ul className="text-sm space-y-1">
                        <li>• CodeWithAli&apos;s liability capped at service fees paid</li>
                        <li>• No liability for business outcomes or revenue</li>
                        <li>• Phantom Forge indemnifies CodeWithAli for business operations</li>
                        <li>• Binding arbitration for all disputes</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-white dark:bg-black rounded border-l-4 border-red-500">
                    <p className="text-sm font-medium text-red-700 dark:text-red-400">
                      <strong>Important:</strong> This contract incorporates CodeWithAli&apos;s complete Terms and Conditions 
                      (available at www.codewithali.com/terms) including liability waivers, indemnification clauses, 
                      and mandatory arbitration requirements.
                    </p>
                  </div>
                </div>
              </section>

              {/* Execution Section */}
              <section className="border-t pt-8">
                <h2 className="text-xl font-bold mb-6 text-center">Contract Execution</h2>
                
                <div className="mb-6 p-4 bg-white dark:bg-black rounded-lg">
                  <h3 className="font-semibold mb-2">Next Steps for Contract Activation</h3>
                  <ol className="text-sm space-y-1 list-decimal list-inside">
                    <li>Phantom Forge signs this agreement electronically or physically</li>
                    <li>Initial deposit payment of 50% development fee</li>
                    <li>CodeWithAli countersigns to activate contract</li>
                    <li>Project development begins within 7 business days</li>
                    <li>Regular progress updates and milestone reviews</li>
                  </ol>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg">
                      <h3 className="font-semibold mb-2">Client Signature</h3>
                      <div className="h-20 flex items-center justify-center text-gray-500">
                        [Digital/Physical Signature Area]
                      </div>
                      <p className="text-sm mt-2">{contractData.clientName}</p>
                      <p className="text-xs text-gray-500">
                        Date: _______________
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Title: Business Owner & Operations Lead
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg">
                      <h3 className="font-semibold mb-2">CodeWithAli</h3>
                      <div className="h-20 flex items-center justify-center text-gray-500">
                        [Digital/Physical Signature Area]
                      </div>
                      <p className="text-sm mt-2">Ali - Lead Developer</p>
                      <p className="text-xs text-gray-500">
                        Date: _______________
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Title: Technical Partner & Development Lead
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white dark:bg-black rounded-lg text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    This contract becomes legally binding upon both signatures and initial payment. 
                    Digital signatures are accepted and legally valid for this agreement.
                  </p>
                </div>
              </section>

              {/* Footer */}
              <div className="mt-8 pt-4 border-t text-center text-xs text-gray-500">
                <p>Contract ID: {contractId} | Generated: {contractData.contractDate}</p>
                <p>CodeWithAli Professional Services | San Jose, CA | unfold@codewithali.com</p>
                <p className="mt-2">This contract incorporates CodeWithAli&apos;s Terms and Conditions available at www.codewithali.com/terms</p>
                <p className="mt-1 font-medium">CONFIDENTIAL BUSINESS AGREEMENT - NOT FOR REDISTRIBUTION</p>
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
        }
      `}</style>
    </>
  );
}