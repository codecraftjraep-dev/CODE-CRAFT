
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "When you contact CodeCraft through our website, we may collect the information you voluntarily provide, including your name, email address, requested service, and project details.",
      "We do not ask visitors to provide information that is unrelated to their inquiries or project requests.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "We use submitted information to respond to inquiries, understand project requirements, communicate about requested services, and provide relevant project-related updates.",
      "We do not sell your personal information.",
    ],
  },
  {
    title: "3. Third-Party Services",
    content: [
      "Our contact form uses EmailJS to transmit submitted messages to our designated email address. Information submitted through the form may be processed by EmailJS in accordance with its own privacy policy and terms.",
      "Our website may also link to third-party platforms, including Facebook and Instagram. Any information you share on those platforms is governed by their respective privacy policies.",
    ],
  },
  {
    title: "4. Data Storage and Security",
    content: [
      "We take reasonable measures to protect the information shared with us against unauthorized access, disclosure, or misuse.",
      "However, no method of transmitting or storing information online can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "5. Data Retention",
    content: [
      "We retain inquiry information only for as long as reasonably necessary to respond to requests, manage project communications, maintain relevant business records, or comply with applicable legal obligations.",
    ],
  },
  {
    title: "6. Your Privacy Rights",
    content: [
      "You may contact us to request access to, correction of, or deletion of personal information you have submitted, subject to applicable laws and legitimate recordkeeping requirements.",
      "If you have questions about how your information is handled, please contact us using the email address below.",
    ],
  },
  {
    title: "7. Changes to This Policy",
    content: [
      "We may update this Privacy Policy when our practices or services change. Any revised version will be published on this page with an updated effective date.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#F5F8FF] px-5 pb-20 pt-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-blue-600"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <header className="mt-12 border-b border-slate-200 pb-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
            <ShieldCheck size={27} />
          </div>

          <p className="mt-7 text-xs font-bold tracking-[0.25em] text-blue-600">
            CODECRAFT / LEGAL
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight text-[#06193E] sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Your privacy matters to us. This policy explains what information
            we collect, how we use it, and the choices available to you when
            interacting with CodeCraft.
          </p>

          <p className="mt-5 text-xs font-medium text-slate-400">
            Effective date: November 12, 2026
          </p>
        </header>

        <div className="divide-y divide-slate-200">
          {sections.map((section) => (
            <section key={section.title} className="py-8">
              <h2 className="text-lg font-bold text-[#06193E] sm:text-xl">
                {section.title}
              </h2>

              <div className="mt-4 space-y-4">
                {section.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-sm leading-8 text-slate-600 sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-blue-100 bg-white p-6 sm:p-8">
          <h2 className="text-lg font-bold text-[#06193E]">
            Questions about your privacy?
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-500">
            For privacy-related questions or requests, contact us at:
          </p>
          <a
            href="mailto:codecraft.jra.ep@gmail.com"
            className="mt-3 inline-block text-sm font-semibold text-blue-600 transition hover:text-blue-700"
          >
            codecraft.jra.ep@gmail.com
          </a>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} CodeCraft. All rights reserved.
        </div>
      </div>
    </main>
  );
}
