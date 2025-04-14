export default function FaqItem({ question, answer }: { question: string; answer: string }) {
    return (
      <div className="border-b border-gray-200 pb-6">
        <h3 className="text-lg font-bold mb-2">{question}</h3>
        <p className="text-gray-600">{answer}</p>
      </div>
    );
  }