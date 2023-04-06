import FaqQuestion from "./FaqCard";

function FAQ() {
  const faqData = [
    {
      question: "What is Dinerpro software?",
      answer:
        "DinerPro is an end-to-end solution that allows you take control of your kitchen processes. Your kitchen business can use this comprehensive solution to generate and manage order inbounds, establish a kitchen business infrastructure, and manage its internal and external relationships. ",
    },
    {
      question: "Pricing and Services",
      answer:
        "The software uses a subscription based model, alongside a commission based model for certain transaction types. Procurement recommendations and food sales inbound generation are among theservices with a commission based model.",
    },
    {
      question: "Legal Statement",
      answer:
        "DinerPro is a business software that has integrations to help its users derive the utmost value from the entire kitchen experience spectrum. Procurement and sales inbounds are categorized as recommendation and processing is at the discretion of the software’s users.",
    },
  ];

  return (
    <div className="w-screen flex flex-col items-center space-y-8 py-[6vh]">
      <h1 className="headers">Frequently Asked Questions</h1>
      {faqData.map((faq) => (
        <FaqQuestion
          key={faq.question}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
}

export default FAQ;
