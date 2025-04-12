export default function TestimonialCard({
    quote,
    author,
    role,
  }: {
    quote: string;
    author: string;
    role: string;
  }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <div className="mb-4 text-primary">"</div>
        <p className="text-gray-600 mb-6">{quote}</p>
        <div>
          <p className="font-bold">{author}</p>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    );
  }