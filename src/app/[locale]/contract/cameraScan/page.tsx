"use client";
import React, { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DollarSign,
  Smartphone,
  CheckCircle,
  AlertTriangle,
  Printer,
  Users,
  TrendingUp,
  Shield,
  Camera,
  Brain,
  Database,
  Settings
} from 'lucide-react';

export default function JamesChengContractAgreement() {
  const [contractData] = useState({
    // Pre-filled client infofww
    clientName: 'James Cheng',
    clientEmail: 'jcusa168@gmail.com',
    clientPhone: '+1 (408) 394-7480',
    clientAddress: 'San Jose, California, United States',
    
    // Pre-filled project details
    projectTitle: 'AI-Powered Object Scanning Mobile Application',
    
    // Pre-filled pricing structure
    initialDeposit: '$200',
    totalProjectCost: '$2,500 - $3,000',
    milestonePayments: 'Percentage-based milestone payments',
    
    // Contract details
    contractDate: new Date().toLocaleDateString('en-US'),
    startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    
    // Project details
    projectDuration: '5 weeks (including preparation phase)',
    deliveryTimeline: 'Week 5 - Final delivery and testing'
  });

  const contractRef = useRef(null);

  const generateContractId = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const random = Math.random().toString(36).substr(2, 6).toUpperCase();
    return `CWA-AIS-${year}${month}${day}-${random}`;
  };

  const contractId = generateContractId();

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const coreFeatures = [
    'Native mobile application (iOS/Android)',
    'Advanced camera integration with real-time scanning',
    'AI/LLM-powered object recognition and description',
    'Support for paintwork, scriptures, and artwork analysis',
    'Comprehensive admin dashboard for content management',
    'Training data upload and management system',
    'Offline scanning capabilities with cloud sync',
    'Image preprocessing and enhancement algorithms',
    'Custom AI model training pipeline'
  ];

  const advancedFeatures = [
    'AI descriptions and analysis',
    'Historical scan data and analytics',
    'Advanced image filtering and enhancement',
    'Batch processing for multiple scans',
    'API integration for external data sources',
  
    'Advanced security and data encryption',
    'Performance optimization and caching',
    'Comprehensive error handling and logging',
    'Automated backup and recovery systems'
  ];

  const weeklyTimeline = [
    {
      week: 'Week 0',
      title: 'Project Foundation & Preparation',
      tasks: [
        'Project wireframing and technical architecture design',
        'Data collection and AI model research',
        'Repository setup and development environment configuration',
        'Third-party service integration planning (AI/ML APIs)',
        'Technical documentation and project roadmap finalization'
      ]
    },
    {
      week: 'Week 1',
      title: 'Initial Setup & Core Infrastructure',
      tasks: [
        'Mobile app framework setup (React Native/Flutter)',
        'Basic camera functionality implementation',
        'Database design and backend infrastructure setup ',
        'Admin dashboard foundation and basic UI'
        // 'Initial API endpoints for data retrieval and storage
        
      ]
    },
    {
      week: 'Week 2',
      title: 'AI Integration & Scanning Features',
      tasks: [
        'AI/LLM API integration and configuration',
        'Advanced camera scanning functionality',
        'Image preprocessing and enhancement algorithms',
        'Object recognition pipeline development',
        'Initial AI model training with sample data'
      ]
    },
    {
      week: 'Week 3',
      title: 'Admin Dashboard & Content Management',
      tasks: [
        'Complete admin dashboard development',
        'Training data upload and management system',
        'AI model retraining capabilities',
        'Content categorization and tagging system',
        'User management and analytics features'
      ]
    },
    {
      week: 'Week 4',
      title: 'Testing, Optimization & Integration',
      tasks: [
        'Comprehensive testing across different devices',
        'Performance optimization and bug fixes',
        'AI model fine-tuning and accuracy improvements',
        'Security implementation and data protection',
        'User interface polish and user experience optimization'
      ]
    },
    {
      week: 'Week 5',
      title: 'Final Delivery & Deployment',
      tasks: [
        'Final testing and quality assurance',
        'Transfer codebse to client repository',
        'Documentation and user manual creation',
        'Client training and handover',
        'Post-launch support setup and monitoring'
      ]
    }
  ];

  const milestonePayments = [
    { milestone: 'Contract Signing & Week 0 Completion', percentage: '8%', amount: '$200 (Deposit)' },
    { milestone: 'Week 1 Completion - Basic App Setup', percentage: '20%', amount: '$500-$600' },
    { milestone: 'Week 2 Completion - AI Integration', percentage: '25%', amount: '$625-$750' },
    { milestone: 'Week 3 Completion - Admin Dashboard', percentage: '25%', amount: '$625-$750' },
    { milestone: 'Week 4 Completion - Testing & Optimization', percentage: '12%', amount: '$300-$360' },
    { milestone: 'Final Delivery & Launch', percentage: '10%', amount: '$250-$300' }
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
                  AI-POWERED OBJECT SCANNING APPLICATION
                </h1>
                <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                  DEVELOPMENT SERVICE AGREEMENT
                </h2>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>Contract ID: <strong>{contractId}</strong></span>
                  <span>•</span>
                  <span>Date: <strong>{contractData.contractDate}</strong></span>
                </div>
                <Badge className="mt-2 bg-blue-600 hover:bg-blue-600">
                  <Smartphone className="w-3 h-3 mr-1" />
                  Mobile AI Application Development
                </Badge>
              </div>

              {/* Parties Section */}
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                  <Users className="w-5 h-5 text-blue-600" />
                  Contracting Parties
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-black p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold mb-2 dark:text-white">Development Partner</h3>
                    <p className="dark:text-gray-300"><strong>CodeWithAli</strong></p>
                    <p className="dark:text-gray-300">Professional Mobile & AI Development Services</p>
                    <p className="dark:text-gray-300">San Jose, California, United States</p>
                    <p className="dark:text-gray-300">Email: unfold@codewithali.com</p>
                    <p className="text-sm mt-2 text-blue-600 font-medium">Role: Lead Developer & Technical Partner</p>
                  </div>
                  <div className="bg-white dark:bg-black p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold mb-2 dark:text-white">Client</h3>
                    <p className="dark:text-gray-300"><strong>{contractData.clientName}</strong></p>
                    <p className="dark:text-gray-300">{contractData.clientEmail}</p>
                    <p className="dark:text-gray-300">{contractData.clientPhone}</p>
                    <p className="text-sm mt-2 dark:text-gray-300">{contractData.clientAddress}</p>
                    <p className="text-sm mt-2 text-green-600 font-medium">Role: Client </p>
                  </div>
                </div>
              </section>

              {/* Project Overview */}
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                  <Brain className="w-5 h-5 text-green-600" />
                  Project Overview
                </h2>
                <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-lg mb-2 dark:text-white">
                    {contractData.projectTitle}
                  </h3>
                  <Badge className="mb-3 bg-gradient-to-r from-blue-600 to-green-600 text-white">
                    Mobile AI Application + Admin Dashboard
                  </Badge>
                  
                  <div className="space-y-3 text-gray-700 dark:text-gray-300">
                    <p>
                      <strong>Application Purpose:</strong> Development of a sophisticated mobile application that uses artificial intelligence to scan and analyze various objects including paintwork, scriptures, artwork, and other visual content, providing users with detailed AI-generated descriptions and analysis.
                    </p>
                    <p>
                      <strong>Core Technology:</strong> Advanced camera integration with machine learning models, real-time image processing, and custom AI/LLM integration for intelligent object recognition and description generation.
                    </p>
                    <p>
                      <strong>Admin Capabilities:</strong> Comprehensive dashboard allowing client to upload training data, manage content categories, retrain AI models, and monitor application usage and performance.
                    </p>
                    <p>
                      <strong>Target Users:</strong> Art enthusiasts, researchers, students, tourists, and anyone interested in learning about visual objects through AI-powered analysis.
                    </p>
                  </div>
                </div>
              </section>

              {/* Technical Deliverables */}
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Technical Deliverables & Features
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 dark:text-white">Core Application Features</h3>
                    <ul className="space-y-2">
                      {coreFeatures.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm dark:text-gray-300">
                          <Camera className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
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
                          <Brain className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Project Timeline */}
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  Detailed Project Timeline
                </h2>
                <div className="space-y-4">
                  {weeklyTimeline.map((week, index) => (
                    <div key={index} className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-15 h-15 mr-5 self-center rounded-full bg-blue-500 border  flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{week.week}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg dark:text-white">{week.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {index === 0 ? 'Foundation Phase' : index === weeklyTimeline.length - 1 ? 'Delivery Phase' : 'Development Phase'}
                          </p>
                        </div>
                      </div>
                      <ul className="space-y-1 ml-22">
                        {week.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start gap-2 text-sm dark:text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Financial Structure */}
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  Financial Structure & Payment Schedule
                </h2>
                
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-3 dark:text-white">Project Investment</h3>
                  <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">
                          {contractData.totalProjectCost}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Total Project Cost</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-blue-600">
                          {contractData.initialDeposit}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Initial Deposit</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">
                          5 Milestones
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Payment Schedule</div>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4 dark:border-gray-700">
                      <h4 className="font-semibold mb-3 dark:text-white">Milestone Payment Schedule</h4>
                      <div className="space-y-2">
                        {milestonePayments.map((payment, index) => (
                          <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800/20 rounded-lg">
                            <div>
                              <span className="font-medium dark:text-white">{payment.milestone}</span>
                              <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">({payment.percentage})</span>
                            </div>
                            <div className="font-semibold text-green-600">{payment.amount}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded border-l-4 border-blue-500">
                      <p className="text-sm font-medium text-blue-700 dark:text-blue-400">
                        <strong>Payment Terms:</strong> All milestone payments are due within 7 days of milestone completion notification. Project progression depends on timely payment receipt.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Scope Management */}
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                  <Settings className="w-5 h-5 text-orange-600" />
                  Scope Management & Additional Features
                </h2>
                <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-green-600">Included in Base Scope</h4>
                      <ul className="text-sm space-y-1 dark:text-gray-300">
                        <li>• All features listed in the core deliverables section</li>
                        <li>• Up to 3 rounds of revisions per development phase</li>
                        <li>• Basic AI model training with initial dataset</li>
                        <li>• Standard deployment and launch support</li>
                        <li>• 30 days of post-launch bug fixes and minor adjustments</li>
                        <li>• Documentation and basic user training</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-orange-600">Additional Scope (Extra Cost)</h4>
                      <ul className="text-sm space-y-1 dark:text-gray-300">
                        <li>• Additional object categories beyond initial scope</li>
                        <li>• Advanced AI model customization or specialized training</li>
                        <li>• Integration with third-party services not specified</li>
                        <li>• Additional mobile platforms (if not initially specified)</li>
                        <li>• Advanced analytics and reporting features</li>
                        <li>• Custom branding and white-label solutions</li>
                        <li>• Extended post-launch support beyond 30 days</li>
                        <li>• Additional admin dashboard features</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-orange-50 dark:bg-orange-900/20 rounded border-l-4 border-orange-500">
                    <h5 className="font-semibold mb-2 text-orange-700 dark:text-orange-400">Additional Features Policy</h5>
                    <p className="text-sm text-orange-700 dark:text-orange-400">
                      Any features, modifications, or enhancements not explicitly listed in the original project scope will be considered additional work and will require a separate estimate and approval. Additional work will be billed at $85/hour for development time and $65/hour for design work, with a minimum 4-hour billing increment.
                    </p>
                  </div>
                </div>
              </section>

              {/* Technical Specifications */}
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                  <Database className="w-5 h-5 text-blue-600" />
                  Technical Specifications & Requirements
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-black p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold mb-2 dark:text-white">Mobile Application</h4>
                    <ul className="text-sm space-y-1 dark:text-gray-300">
                      <li>• Cross-platform development (iOS & Android)</li>
                      <li>• Native camera integration with advanced controls</li>
                      <li>• Real-time image processing capabilities</li>
                      <li>• Offline functionality with cloud synchronization</li>
                      <li>• Secure user authentication and data encryption</li>
                      <li>• Responsive design optimized for various screen sizes</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-black p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold mb-2 dark:text-white">AI & Backend Systems</h4>
                    <ul className="text-sm space-y-1 dark:text-gray-300">
                      <li>• Custom AI/LLM integration for object analysis</li>
                      <li>• Scalable cloud infrastructure and database design</li>
                      <li>• Image preprocessing and enhancement algorithms</li>
                      <li>• Machine learning model training pipeline</li>
                      <li>• RESTful API architecture with proper documentation</li>
                      <li>• Admin dashboard with real-time analytics</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Legal & Compliance */}
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                  <Shield className="w-5 h-5 text-red-600" />
                  Legal Framework & Compliance
                </h2>
                <div className="space-y-4">
                  <div className="bg-white dark:bg-black p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold mb-2 dark:text-white">Governing Law & Jurisdiction</h4>
                    <p className="text-sm dark:text-gray-300">
                      This agreement is governed by the laws of the State of California, United States. Any disputes arising from this contract shall be resolved through binding arbitration in Santa Clara County, California, in accordance with the rules of the American Arbitration Association.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-black p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                      <h4 className="font-semibold mb-2 dark:text-white">Intellectual Property Rights</h4>
                      <ul className="text-sm space-y-1 dark:text-gray-300">
                        <li>• Client retains full ownership of delivered application upon final payment</li>
                        <li>• CodeWithAli retains rights to general methodologies and frameworks</li>
                        <li>• Third-party libraries subject to their respective licenses</li>
                        <li>• CodeWithAli may showcase work in portfolio (non-confidential aspects)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-black p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                      <h4 className="font-semibold mb-2 dark:text-white">Liability & Risk Management</h4>
                      <ul className="text-sm space-y-1 dark:text-gray-300">
                        <li>• CodeWithAli&apos;s liability limited to total project cost</li>
                        <li>• Client assumes responsibility for application content and usage</li>
                        <li>• No warranties regarding business outcomes or AI accuracy</li>
                        <li>• Client responsible for compliance with applicable laws</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded border-l-4 border-red-500">
                    <h5 className="font-semibold mb-2 text-red-700 dark:text-red-400">Important Legal Notice</h5>
                    <p className="text-sm text-red-700 dark:text-red-400">
                      Client acknowledges that AI-generated content may not always be 100% accurate and agrees to use appropriate disclaimers in the application. CodeWithAli is not liable for the accuracy of AI-generated descriptions or any consequences arising from their use. Client is responsible for ensuring compliance with all applicable laws, including data privacy regulations, content licensing, and AI usage guidelines.
                    </p>
                  </div>
                </div>
              </section>

              {/* Risk Factors & Contingencies */}
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  Risk Factors & Project Contingencies
                </h2>
                <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 dark:text-white">Technical Risk Factors</h4>
                      <ul className="text-sm space-y-1 dark:text-gray-300">
                        <li>• AI model performance may vary based on image quality and object types</li>
                        <li>• Third-party AI service limitations or cost changes</li>
                        <li>• Mobile platform updates affecting camera functionality</li>
                        <li>• Network connectivity requirements for AI processing</li>
                        <li>• Device compatibility variations across different models</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 dark:text-white">Project Success Factors</h4>
                      <ul className="text-sm space-y-1 dark:text-gray-300">
                        <li>• Timely client feedback and approval at each milestone</li>
                        <li>• Quality of training data provided by client</li>
                        <li>• Clear communication of requirements and expectations</li>
                        <li>• Realistic expectations regarding AI accuracy and capabilities</li>
                        <li>• Adequate testing on various devices and scenarios</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border-l-4 border-yellow-500">
                    <p className="text-sm text-yellow-700 dark:text-yellow-400">
                      <strong>Timeline Contingency:</strong> While we commit to a 5-week delivery timeline, complex AI integration projects may encounter unforeseen technical challenges. If significant delays occur due to technical complexity beyond initial scope, client will be notified immediately with options for scope adjustment or timeline extension at no additional cost for reasonable delays.
                    </p>
                  </div>
                </div>
              </section>

              {/* Execution Section */}
              <section className="border-t pt-8 dark:border-gray-700">
                <h2 className="text-xl font-bold mb-6 text-center dark:text-white">Contract Execution & Next Steps</h2>
                
                <div className="mb-6 p-4 bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold mb-2 dark:text-white">Project Initiation Process</h3>
                  <ol className="text-sm space-y-1 list-decimal list-inside dark:text-gray-300">
                    <li>Client reviews and signs this comprehensive service agreement</li>
                    <li>Initial deposit payment of $200 to secure project slot and begin Week 0</li>
                    <li>CodeWithAli countersigns to officially activate the contract</li>
                    <li>Week 0 (Preparation Phase) begins within 2 business days of signed contract</li>
                    <li>Regular milestone reviews and approvals throughout development process</li>
                    <li>Final delivery, testing, and deployment in Week 5</li>
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
                        Title: Project Client
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 p-6 rounded-lg">
                      <h3 className="font-semibold mb-2 dark:text-white">CodeWithAli</h3>
                      <div className="h-20 flex items-center justify-center text-gray-500 dark:text-gray-400">
                        [Digital/Physical Signature Area]
                      </div>
                      <p className="text-sm mt-2 dark:text-gray-300">Ali - Lead Developer & Technical Director</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Date: _______________
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                        Title: Technical Partner & Development Lead
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    This contract becomes legally binding upon both signatures and receipt of initial deposit. 
                    Digital signatures are accepted and legally valid for this agreement. Electronic execution creates 
                    the same legal obligations as physical signatures.
                  </p>
                </div>
              </section>

              {/* Footer */}
              <div className="mt-8 pt-4 border-t text-center text-xs text-gray-500 dark:text-gray-400 dark:border-gray-700">
                <p>Contract ID: {contractId} | Generated: {contractData.contractDate}</p>
                <p>CodeWithAli Professional Development Services | San Jose, CA | unfold@codewithali.com</p>
                <p className="mt-2">Specialized AI & Mobile Application Development Services</p>
                <p className="mt-1 font-medium">CONFIDENTIAL DEVELOPMENT AGREEMENT</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Print Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
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
            .dark\\:bg-black,
            .dark\\:bg-gray-800 {
              background-color: white !important;
              color: black !important;
            }
          }
        `
      }} />
    </>
  );
}