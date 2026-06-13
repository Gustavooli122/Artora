import ReactMarkdown from "react-markdown";

export default function Markdown({ contents }) {
  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => (
          <h1 className="text-3xl font-bold text-gray-700 mb-4">
            {children}
          </h1>
        ),
          h2: ({ children }) => (
          <h1 className="text-xl font-bold text-gray-900 mb-4">
            {children}
          </h1>
        ),
        p: ({ children }) => (
          <p className="text-gray-700 mb-2 leading-relaxed">
            {children}
          </p>
        ),
        a: ({ children, href }) => (
          <a
            href={href}
            className="text-blue-500 underline hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        ),
        ul: ({ children }) => (
          <ul className="list-disc pl-6 mb-3">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal pl-6 mb-3">
            {children}
          </ol>
        ),
        code: ({ children }) => (
          <code className="bg-gray-200 px-1 py-0.5 rounded">
            {children}
          </code>
        ),
        hr: () => (
          <hr className="my-8 border-t border-gray-300" />
        ),
      }}
    >
      {typeof contents === "string" ? contents : ""}
    </ReactMarkdown>
  );
}