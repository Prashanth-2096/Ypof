import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    { question: "What is YPOF?", answer: "YPOF is an online marketplace for pet food, toys, and accessories." },
    { question: "How can I track my order?", answer: "You can track your order from the 'Orders' section in your account." },
    { question: "Do you offer returns?", answer: "Yes, we offer a 7-day return policy for unused products." },
    { question: "How do I contact support?", answer: "You can contact us via email or our customer support chat." },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>

            {/* FAQ Items */}
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div 
                        key={index} 
                        className="border border-gray-300 rounded-lg shadow-md bg-white overflow-hidden"
                    >
                        <button
                            className="w-full flex justify-between items-center p-4 bg-ypof text-lg font-medium"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="text-left w-full">{faq.question}</span>
                            {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>

                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="relative w-full"
                                >
                                    <div className="p-4 w-full bg-gray-50 border-t text-gray-700 break-words max-w-full">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
}
