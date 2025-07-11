"use client";
import { useEffect, useRef, useState } from "react";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";
import {
  Book,
  CheckCircle,
  Clock,
  CreditCard,
  Edit,
  Eye,
  FileText,
  Globe,
  Hash,
  Lock,
  MapPin,
  RotateCcw,
  Save,
  Shield,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Time for some zod validaation schema
const contractSchema = z.object({
  clientName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Name too long")
    .regex(
      /^[a-zA-Z\s\-\.]+$/,
      "Name can only contain letters,spaces, hyphens, and periods."
    ),
  clientEmail: z.string().email("Please enter a valid email").toLowerCase(),
  companyName: z.string().optional(),
  projectDescription: z
    .string()
    .min(10, "Please provide a detailed project description")
    .max(2000, "Description too long"),
  // using refine to accept ONLY True, without it we would be accepting both true and false which is not what we want
  agreedToTerms: z.boolean().refine((val) => val === true, {
    message: "You must aggree to the Terms and Conditions",
  }),
  agreedToRevisionPolicy: z.boolean().refine((val) => val === true, {
    message: "You must acknowledge the revision policy",
  }),
  agreedToPaymentTerms: z.boolean().refine((val) => val === true, {
    message: "You must agreee to the Payment Terms",
  }),
  agreedToPrivacy: z.boolean().refine((val) => val === true, {
    message: "You must agree to our Privacy terms",
  }),
  agreedToTimeline: z.boolean().refine((val) => val === true, {
    message: "You must accept our timeline schedule",
  }),
  signature: z
    .string()
    .min(2, "Digital signature is required")
    .max(100, "Signature too long"),
  // I'll let you decided if we should make the phone number optional or required @blaze
  clientPhone: z.string().optional(),
  projectBudget: z.string().optional(),
});
// z.infer is a utility that extracts typescript from a zod schema and then automatically  converts the validation rules into typescript types, so we don't need to manually define them

type ContractFormData = z.infer<typeof contractSchema>;

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

        <div className="mb-10">
          {/* Session information Paanel - Display only */}

          <div className="dark:bg-black/40 border border-red-950 rounded-2xl backdrop-blur-sm p-6">
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
        <div className="dark:bg-black/80 border-red-950 border-3 rounded-2xl  backdrop-blur-sm">
          <div className="p-6 border-b border-red-950/20">
            <h2 className="flex items-center gap-2  text-black dark:text-white text-xl font-semibold">
              Client Information
            </h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {/* ==== CLIENT NAME ==== */}
              {/* Just for my own benefit of understanding  */}
              <form.Field
                name="clientName" // Tanstack Form
                validators={{
                  onChange: contractSchema.shape.clientName, // Zod Validation here
                }}
              >
                {(
                  field // TanStack form render prop
                ) => (
                  // JSX HERE
                  <div>
                    <label className="text-black dark:text-white block text-sm font-medium mb-2">
                      Full Legal Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      // Field States and Methods ( all from tanstacky )
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      className="w-full px-3 py-1 bg-black/10 border border-black dark:border-white/50 dark:bg-gray-900/50  rounded-sm text-black dark:text-white focus:ring-2 focus:ring-red-500 focus-border-transparent transition-all"
                      placeholder="Enter Your Full Legal Name"
                    />
                    {/* Zod generates these error messages */}
                    {field.state.meta.errors && (
                      <p className="text-red-400 text-sm mt-1">
                        {/* this would crash without .message */}
                        {/* displays the first error message that is written out  ( once the user fixes that first issue, then the second error slides into the 0 index meaning we never need to show more than 0 index and 
                                if we did it must display multiple errors at the same time to the user aand thaat might just scare off the user
                            ) */}
                        {field.state.meta.errors[0]?.message}{" "}
                        {/* usually good to add a fallback without option changing in case there is no message from zod, ( format issues ) might give the user an undefined error message for strings for example*/}
                      </p>
                    )}
                  </div>
                )}
              </form.Field>

              <form.Field
                name="clientEmail"
                validators={{
                  onChange: contractSchema.shape.clientEmail,
                }}
              >
                {(field) => (
                  <div>
                    <label className="text-black dark:text-white block text-sm font-medium mb-2">
                      Email Address
                      <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      className="w-full px-3 py-1 bg-black/10 border border-black dark:border-white/50 dark:bg-gray-900/50  rounded-sm text-black dark:text-white focus:ring-2 focus:ring-red-500 focus-border-transparent transition-all"
                      placeholder="Enter Email Adddress"
                    />
                    {/* Zod validations time again */}
                    {field.state.meta.errors && (
                      <p className="text-redd-400 text-sm mt-1">
                        {field.state.meta.errors[0]?.message}
                      </p>
                    )}
                  </div>
                )}
              </form.Field>

              <div className="grid md:grid-cols-2 gap-4">
                <form.Field name="companyName">
                  {(field) => (
                    <div>
                      <label className="text-black dark:text-white">
                        Company Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="Company Name"
                        onBlur={field.handleBlur}
                        className="w-full px-3 py-1 bg-black/10 border border-black dark:border-white/50 dark:bg-gray-900/50  rounded-sm text-black dark:text-white focus:ring-2 focus:ring-red-500 focus-border-transparent transition-all"
                      />

                      {/* If thats true then I simply don't even needd this zod validation right?  */}
                      {/* {field.state.meta.errors && (
                                <p className="text-red-400 mt-1"> */}
                      {/* Is this an error because its optional ? which would make the most sense since there would be no errors if the user wrote or didn't write in the box */}
                      {/* field.state.meta.errors[0]?.message || */}
                      {/* { field.state.meta.errors}
                                </p>
                             )} */}
                    </div>
                  )}
                </form.Field>

                <form.Field
                  // no need for validator since its optional
                  name="clientPhone"
                >
                  {(field) => (
                    <div>
                      <label className="text-black dark:text-white">
                        Telephone Number
                      </label>
                      <input
                        type="tel"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        onBlur={field.handleBlur}
                        placeholder="+1 (533) 490-5902"
                        className="w-full px-3 py-1 bg-black/10 border border-black dark:border-white/50 dark:bg-gray-900/50  rounded-sm text-black dark:text-white focus:ring-2 focus:ring-red-500 focus-border-transparent transition-all"
                      />
                    </div>
                  )}
                </form.Field>

                <form.Field
                  name="projectDescription"
                  validators={{
                    onChange: contractSchema.shape.projectDescription,
                  }}
                >
                  {(field) => (
                    <div>
                      <label className="text-black dark:text-white">
                        Project Description{" "}
                        <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        onBlur={field.handleBlur}
                        rows={4}
                        className="w-full px-3 py-1 bg-black/10 border border-black dark:border-white/50 dark:bg-gray-900/50  rounded-sm text-black dark:text-white focus:ring-2 focus:ring-red-500 focus-border-transparent transition-all"
                      />

                      {field.state.meta.errors && (
                        <p className="text-red-400 mt-1">
                          {field.state.meta.errors[0]?.message}
                        </p>
                      )}
                    </div>
                  )}
                </form.Field>
                <form.Field name="projectBudget">
                  {(field) => (
                    <div>
                      <label className="text-black dark:text-white">
                        Project Budget
                      </label>
                      <select
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select Budget</option>
                        <option value="under-5k">Under 50000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="over 5k+">over $50,000</option>
                      </select>
                    </div>
                  )}
                </form.Field>

                {/* Terms Summary */}
                <div className="bg-white text-black  dark:bg-black/40 border border-red-950/20 rounded-2xl backdrop-blur-sm">
                  <div className="p-6 border-b border-red-950">
                    <h2 className="flex items-center gap-2 text-black dark:text-white text-xl font-semibold">
                      <FileText className="h-4 w-4" />
                      Key Terms Summary
                    </h2>
                  </div>
                  <div className="p-6 gap-6">
                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                      <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                        <CreditCard className="w-4 h-4 text-red-500" />
                        <h4 className="font-semibold text-black dark:text-white">
                          Payment Terms
                        </h4>
                        {/* === PAYMENT TERMS ====  */}
                        <ul className="text-sm text-black dark:text-gray-300 space-y-1">
                          <li>• 50% deposit due upon agreement</li>
                          <li>• 50% final payment upon completion</li>
                          <li>• Late payments incur 1.5% monthly fee</li>
                          <li>• All payments in USD</li>
                        </ul>
                      </div>
                    </div>

                    {/* ===== REVISION POLICY ==== */}
                    <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg mb-4">
                      <div className="flex items-centeer gap-2 mb-2 text-yellow-500">
                        <RotateCcw className="h-4 w-4" />
                        <h4 className="font-semibold text-black dark:text-white">
                          Revision Policy
                        </h4>
                      </div>
                      <ul className="text-sm text-black dark:text-gray-300 space-y-1">
                        <li>
                          • <strong>NO REFUNDS</strong> - Revisions only
                        </li>
                        <li>• 3 design revision rounds included</li>
                        <li>• Additional revisions: $75/hour</li>
                        <li>• Unlimited commitment to satisfaction</li>
                      </ul>
                    </div>

                    {/* ==== PROJECT TIMELINE ==== */}
                    <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-blue-500" />
                        <h4 className="font-semibold text-black dark:text-white">
                          Project Timeline
                        </h4>
                      </div>
                      <ul className="text-sm text-black dark:text-gray-300 space-y-1">
                        <li>• Typical projects: 2-12 weeks</li>
                        <li>• Client response: within 3 business days</li>
                        <li>• Delays may extend timeline</li>
                        <li>• Final delivery upon approval</li>
                      </ul>
                    </div>

                    {/* ==== Intellectual Property ==== */}
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="h-4 w-4 text-green-500" />
                        <h4 className="font-semibold  text-black dark:text-white">
                          Intellectual Property
                        </h4>
                      </div>
                      <ul className="text-black dark:text-gray-300 space-y-1 text-sm">
                        <li>• Client owns final deliverables</li>
                        <li>• Ownership transfers upon full payment</li>
                        <li>• CodeWithAli retains methodologies</li>
                        <li>• Portfolio display rights reserved</li>
                      </ul>
                    </div>

                    <div className="flex items-center justify-center">
                      <Button
                        type="button"
                        variant={"default"}
                        onClick={() => window.open("/terms", "_blank")}
                        className="border border-red-500/20 text-white  bg-red-950 hover:bg-red-500/10 px-6 py-2 rounded-lg flex items-center gap-2 transition-all"
                      >
                        {/* might remove eye bc it might just look creepy */}
                        <Book className="h-4 w-4" />
                        View Complete Terms and Conditions
                      </Button>
                    </div>

                    {/* This is the important part */}
                    {/* ===== Agreeement Checkboxes */}
                    <div className="bg-white dark:bg-black/40 border-red-950/20 rounded-2xl backdrop-blur-sm">
                    <div className="p-6 border-b border-red-950/20">
                        <h2 className="flex items-center gap-2 text-black dark:text-white text-xl font-semibold">
                            <CheckCircle className="h-4 w-4" />
                            Required Agreements
                        </h2>
                    </div>
                    <div className="p-6 space-y-6">
                        <div className="space-y-4">
                            {[
                                { name : 'agreedToTerms', label: 'Terms and Conditions', desc: 'I have read, understood, and agree to be bound by the Terms and Conditions of CodeWithAli.'},
                                { name: 'agreedToRevisionPolicy', label: 'Revision Policy', desc: 'I acknowledge and agree to the NO REFUND policy and revision-based satisfication approach.'},
                                { name: 'agreedToPaymentTerms', label: "Payment Term", desc: 'I agree to the payment terms including the 50% deposit requirement aand latae payment fees.'},
                                { name: 'agreedToTimeline', label: 'Project Timeilne', desc: 'I understand the project timeline requiurements and agree to provide timely feedback'},
                                { name: 'agreedToPrivacy' , label: 'Privacy Terms', desc: 'I agree to the private privacy and the data collection practices for this contract'}
                            ].map((item) => (
                                <form.Field
                                key={item.name}
                                name={item.name as keyof ContractFormData}
                                validators={{
                                    onChange: contractSchema.shape[item.name as keyof typeof contractSchema.shape],
                                }}
                                >
                                    {(field) => (
                                        <div className="p-4 border border-gray-700/50 rounded-lg hover:border-red-500/30 transition-colors">
                                            <div className="flex items-start space-x-3">
                                                <input type="checkbox" 
                                                id={item.name}
                                                checked={field.state.value as boolean}
                                                onChange={(e) => field.handleChange(e.target.checked)}
                                                 className="mt-1 w-4 h-4 text-red-600 bg-gray-900 border-gray-700 rounded focus:ring-red-500" />
                                                
                                                <div className="flex-1">
                                                    <label htmlFor={item.name} className="text-black dark:text-white">
                                                        {item.label} <span className="text-red-400">*</span>
                                                    </label>
                                                    <p className="text-sm text-black dark:text-gray-400 mt-1"> {item.desc}</p>
                                                </div>
                                            </div>
                                            {field.state.meta.errors && (
                                                <p className="text-red-400 text-sm mt-2 ml-7">
                                                    {field.state.meta.errors[0]?.message}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </form.Field>
                            ))}
                        </div>
                    </div>
                    </div>

                    {/* Digital Signature */}
                    <div className="bg-white dark:bg-black/40 border border-red-950 rounded-2xl backdrop-blur-sm">
                        <div className="p-6 bordder-b border-red-950">
                            <h2 className="flex items-center gap-2 text-black dark:text-white text-xl font-semibold">
                                <Edit className="h-4 w-4 text-red-800" />
                                Digital Signature
                            </h2>
                        </div>
                        <div className="p-6 space-y-4">
                            <form.Field
                            name="signature"
                            validators={{
                                onChange: contractSchema.shape.signature,
                            }}
                            >
                                {(field) => (
                                    <div>
                                        <label className="text-black dark:text-white">Signature <span className="text-red-400">*</span></label>
                                        <input
                                         type="text" 
                                         value={field.state.value}
                                         onChange={(e) => field.handleChange(e.target.value)}
                                         placeholder="Type your Full Name as your Digital Signature"
                                         className="w-full px-4 py-2 bg-white/80 border rounded-md text-lg  focus:ring-2 focus:ring-red-800 focus:border-transparent transition-all" />

                                         {field.state.meta.errors  && (
                                            <p className="text-red-400 text-sm mt-1">
                                                {field.state.meta.errors[0]?.message}
                                            </p>
                                         )}
                                         <p className="text-xs dark:text-gray-400 text-black/70 mt-1">
                                            By Typing your name above, you are providing a legally binding digital signature
                                         </p>
                                    </div>
                                )}

                            </form.Field>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </form.provider> */}
      </div>
    </div>
  );
}
