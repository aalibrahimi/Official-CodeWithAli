'use client';

import { useState } from 'react';
import { create } from 'zustand';

interface FormTutoringSate {
    name: string
    setName: (name: string) => void
    email: string
    setEmail: (name: string) => void
    codingLesson: string
    setCodingLesson: (codingLesson: string) => void
    supportStatus: string
    setSupportStatus: (supportStatus: string) => void
    hours: number
    setHours: (hours: number) => void
    startingTime: string
    setStartingTime: (startingTime: string) => void
}

export const useTutoringFormStore = create<FormTutoringSate>()((set) => ({
   name: '',
   setName: (name: string) => set({ name }),
   email: '',
   setEmail: (email:string ) => set({ email }),
   codingLesson: '',
   setCodingLesson: (codingLesson: string) => set({ codingLesson }),
   supportStatus: '',
   setSupportStatus: (supportStatus: string) => set({ supportStatus }),
   hours: 0,
   setHours: (hours: number) => set({ hours }),
   startingTime: '',
   setStartingTime: (startingTime: string) => set({ startingTime })
}));

const UserStatus = [
    "I am currently a highschool student",
    "I am currently a college student",
    "I am a learner",
    "I am a working professional",
    "I am preparing coding interviews",    
    "I am a self-taught coder",
    "I am exploring coding as a new skill"
];

export function TutoringForm() {
    const { 
        name, setName, 
        email, setEmail, 
        hours, setHours, 
        startingTime, setStartingTime, 
        supportStatus, setSupportStatus 
    } = useTutoringFormStore();

    return (
        <form className="max-w-2xl mx-auto space-y-6 p-4">
            <div className="space-y-4">
            <h6>What is your name</h6>
                <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="w-full p-2 border rounded  text-black"
                />
            <h6>What is your email</h6>
                <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full p-2 border rounded  text-black"
                />
                <h6>How many hours would you like to commit per week</h6>
                <input 
                    
                    type="number"
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    placeholder="How many hours per week"
                    className="w-full p-2 border rounded  text-black"
                />
                <h6>When will you like to start</h6>
                <input 
                    type="text"
                    value={startingTime}
                    onChange={(e) => setStartingTime(e.target.value)}
                    placeholder="When would you like to start"
                    className="w-full p-2 border rounded  text-black"
                />
                 <h6>What is your current status</h6>
                <select
                    value={supportStatus}
                    onChange={(e) => setSupportStatus(e.target.value)}
                    className="w-full p-2 border rounded  text-black"
                >
                    <option value="" disabled>
                        Select your status
                    </option>
                    {UserStatus.map((status, index) => (
                        <option key={index} value={status}>
                            {status}
                        </option>
                    ))}
                </select>
            </div>
        </form>
    );
}