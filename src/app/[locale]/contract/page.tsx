"use client";
import { useEffect, useRef, useState } from "react";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from '@tanstack/zod-form-adapter';
import { z } from 'zod';
import {
  Clock,
  FileText,
  Globe,
  Hash,
  Lock,
  MapPin,
  Save,
  Shield,
  Smartphone,
} from "lucide-react";



// Time for some zod validaation schema
const contractSchema = z.object({
    clientName: z.string()
        .min(2, 'Full name must be at least 2 characters')
        .max(100, 'Name too long')
        .regex(/^[a-zA-Z\s\-\.]+$/, 'Name can only contain letters,spaces, hyphens, and periods.'),
    clientEmail: z.string()
        .email("Please enter a valid email")
        .toLowerCase(),
    companyName: z.string().optional(),
    projectDescription: z.string()
        .min(10, 'Please provide a detailed project description')
        .max(2000, 'Description too long'),
        // using refine to accept ONLY True, without it we would be accepting both true and false which is not what we want
    agreedToTerms: z.boolean().refine(val => val === true, {
        message: 'You must aggree to the Terms and Conditions'
    }),
      agreedToRevisionPolicy: z.boolean().refine(val => val === true,  {
         message: 'You must acknowledge the revision policy'
    }),
    agreedToPaymentTerms: z.boolean().refine(val => val === true, {
        message:'You must agreee to the Payment Terms'
    }),
    agreedToPrivacy:  z.boolean().refine(val => val === true, {
        message: 'You must agree to our Privacy terms'
    }),
    agreedToTimeline: z.boolean().refine(val => val === true, {
        message: 'You must accept our timeline schedule'
    }),
    signature: z.string()
        .min(2, 'Digital signature is required')
        .max(100, 'Signature too long'),
    // I'll let you decided if we should make the phone number optional or required @blaze
    clientPhone: z.string().optional(),
    projectBudget: z.string().optional()
})

type ContractFormData = z.infer<typeof contractSchema>

export default function ContractForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  // const [sessionData, setSessionData] = useState({

  // })
  const [formProgress, setFormProgress] = useState(0);
  const [autoSaved, setAutoSaved] = useState(false);
  const autoSavedTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const today = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCurrentDate(today);
  });

  // Initialize session data (no actual detection)
  //     const sessionId = `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  //     setSessionData(prev => ({
  //       ...prev,
  //       userAgent: navigator.userAgent,
  //       timestamp: new Date().toISOString(),
  //       sessionId
  //     }));
  //   }, []);

  const form = useForm({
    defaultValues: {
      clientName: "",
      clientEmail: "",
      companyName: "",
      projectDescription: "",
      agreedToTerms: false,
      agreedToRevisionPolicy: false,
      agreedToPaymentTerms: false,
      agreedToTimeline: false,
      agreedToPrivacy: false,
      signature: "",
      clientPhone: "",
      projectBudget: "",
    } as ContractFormData,
    onSubmit: async ({ value }) => {
      setIsSubmitting(true);

      try {
        const contractData = {
          ...value,
          // ...sessionData,
          signatureDate: currentDate,
          formVersion: "2.0",
          // just want to use scaare tactic
          deviceInfo: {
            screen: `${screen.width}x${screen.height}`,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            language: navigator.language,
          },
        };
        // simulate the api here for endpoint
        console.log("Contract Data: ", contractData);

        // simulate the api delayo
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setShowSuccess(true);
        localStorage.removeItem("contract-draft");
      } catch (error) {
        console.error("Error submitting contract: ", error);
        alert("Failed to submit contract. Please try again");
      } finally {
        setIsSubmitting(false);
      }
    },
    // validatorAdapter: zodValidator,
  });

  // Auto-save functionality
  //   const autoSave = (values: Partial<ContractFormData>) => {
  //     if (autoSaveTimeoutRef.current) {
  //       clearTimeout(autoSaveTimeoutRef.current);
  //     }

  //     autoSaveTimeoutRef.current = setTimeout(() => {
  //       localStorage.setItem('contract-draft', JSON.stringify(values));
  //       setAutoSaved(true);
  //       setTimeout(() => setAutoSaved(false), 2000);
  //     }, 2000);
  //   };

  //   // Load saved draft on mount
  //   useEffect(() => {
  //     const savedDraft = localStorage.getItem('contract-draft');
  //     if (savedDraft) {
  //       try {
  //         const draftData = JSON.parse(savedDraft);
  //         Object.keys(draftData).forEach(key => {
  //           form.setFieldValue(key as keyof ContractFormData, draftData[key]);
  //         });
  //       } catch (error) {
  //         console.error('Failed to load draft:', error);
  //       }
  //     }
  //   }, []);

  // Fun way to calculate all the progress thats being saved and furthered along the way
  useEffect(() => {
    const allFields = [
      "clientName",
      "clientEmail",
      "projectDescription",
      "signature",
      "agreedToTerms",
      "agreedToRevisionPolicy",
      "agreedToPaymentTerms",
      "agreedToTimeline",
      "agreedToPrivacy",
    ];

    const completedFields = allFields.filter((field) => {
      const value = form.getFieldValue(field as keyof ContractFormData);
      return typeof value === "boolean" ? value : Boolean(value);
    });

    const progress = (completedFields.length / allFields.length) * 100;
    setFormProgress(progress);
  }, [form.state.values]);

  // monitor the changes for auto save
  // useEffect(() => {
  //     autoSave(form.state.values);
  // }, [form.state.values]);

  const allAgreed =
    form.getFieldValue("agreedToTerms") &&
    form.getFieldValue("agreedToRevisionPolicy") &&
    form.getFieldValue("agreedToPaymentTerms") &&
    form.getFieldValue("agreedToTimeline") &&
    form.getFieldValue("agreedToPrivacy");

  if (showSuccess) {
    <p>hi</p>;
  }

  return (
    <div className="min-h-screen dark:bg-gradient-to-b dark:from-black dark:via-black dark:to-red-950 bg-white">
      {/* Progress bar here */}
      <div className="text-white fixed top-0 left-0 w-full bg-gray-800 z-50 ">
        <div
          className="h-full bg-gradient-to-r from-red-500 to-red-500 transition-all duration-500 ease-out"
          style={{ width: `${formProgress}%` }}
        />
      </div>

      {/* auto saved indicator */}
      {autoSaved && (
        <div className="fixed top-4 right-4 z-50 bg-green-500/20 border border-green-500/40 text-green-400 px-4 py-2 rounded-lg flex items-center gap-2 backdrop-blur-sm">
          <Save className="w-4 h-4" />
          <span className="text-sm">Draft saved</span>
        </div>
      )}

      <div className="container mx-auto px-6 pt-24 pb-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 b-red-500/20  text-black border-black dark:text-red-400 border dark:border-red-500/50 px-4 py-2 roundedd-full text-sm">
            <FileText className="w-4 h-4" />
            Service Agreeement - {Math.round(formProgress)}% Complete
          </div>
          <h1 className="text-4xl  md:text-5xl font-bold mb-4 bg-gradient-to-r dark:from-white from-red-900 to-red-900 dark:via-red-200 dark:to-red-300 bg-clip-text text-transparent">
            Service Agreement
          </h1>
          <p className="text-black dark:text-gray-200 text-lg max-w-2xl mx-auto">
            Secure, legally binding contract execution with comprehensive
            tracking and validation.
          </p>
          <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4" />
              <span>Secure</span>
            </div>

            <div className="flex items-center gap-1">
              <Lock className="w-4 h-4" />
              <span>Encrypted</span>
            </div>
            <div className="flex items-center gap-1">
              <Hash className="w-4 h-4" />
              <span>Tracked</span>
            </div>
          </div>
        </div>
        {/* <form.provider> */}

        <div className="space-y-8">
          {/* Session information Paanel - Display only */}

          <div className="dark:bg-black/40 border border-red-950/20 rounded-2xl backdrop-blur-sm p-6">
            <h3 className="text-black dark:text-white font-semibold mb-4 flex items-center gap-2">
              <Hash className="h-4 w-4" />
              Session Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-black dark:text-gray-300">
                <Globe className="h-4 w-4" />
                {/* <span>IP: {sessionDate.ipAddress}</span> */}
                <span>IP: Tracking IP address...</span>
              </div>
              <div className="flex items-center gap-2 text-black dark:text-gray-300">
                <MapPin className="w-4 h-4 text-green-400" />
                <span>Location: </span>
              </div>
              <div className="flex items-center gap-2 text-black dark:text-gray-300">
                <Clock className="w-4 h-4 dark:text-yellow-400 text-yellow-800" />
                <span>Time: {currentDate}</span>
              </div>
              <div className="flex items-center gap-2 text-black dark:text-gray-300">
                <Smartphone className="w-4 h-4 text-purple-800 dark:text-purple-400" />
                <span>Session: </span>
              </div>
            </div>
          </div>
        </div>

      {/* Client Information */}
      <div className="dark:bg-black/80 border-red-950/20 rounded-2xl backdrop-blur-sm">
        <div className="p-6 border-b border-red-950/20">
            <h2 className="flex items-center gap-2 text-white text-xl font-semibold">
                Client Information
            </h2>
        </div>
        <div className="p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
                <form.Field
                name="clientName"
                validators={{
                    onChange: contractSchema.shape.clientName
                }}
                >

                </form.Field>
            </div>
        </div>
      </div>
        {/* </form.provider> */}
      </div>
    </div>
  );
}
