
import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using the CodeCraft website, you agree to these Terms of Service. If you do not agree with these terms, please refrain from using the website.",
      "These terms apply to visitors, prospective clients, and individuals who contact CodeCraft through this website.",
    ],
  },
  {
    title: "2. Services",
    content: [
      "CodeCraft provides digital services that may include website development, custom software development, UI/UX design, database solutions, maintenance, and technical support.",
      "The availability, scope, deliverables, timelines, and specifications of any project will be discussed and agreed upon separately with the client.",
    ],
  },
  {
    title: "3. Project Inquiries and Agreements",
    content: [
      "Submitting an inquiry through our website does not automatically create a client relationship or guarantee that CodeCraft will accept a project.",
      "Project requirements, quotations, payment arrangements, deadlines, revisions, and deliverables must be confirmed through a separate agreement or written communication before work begins.",
    ],
  },
  {
    title: "4. Client Responsibilities",
    content: [
      "Clients are responsible for providing accurate project information, necessary content, feedback, approvals, and materials required for the agreed work.",
      "Clients must ensure they have the legal right to provide any text, images, logos, data, or other materials supplied for a project.",
    ],
  },
  {
    title: "5. Payments and Project Changes",
    content: [
      "Fees, payment schedules, deposits, and other financial arrangements will be communicated and agreed upon before a project begins.",
      "Requests that substantially change the original project scope may require additional fees, revised timelines, or a separate agreement.",
    ],
  },
  {
    title: "6. Intellectual Property",
    content: [
      "Ownership and usage rights for project deliverables will be determined by the specific agreement between CodeCraft and the client.",
      "Unless otherwise agreed in writing, CodeCraft retains rights to its pre-existing tools, reusable components, development methods, and materials.",
      "Third-party software, libraries, fonts, images, and other resources remain subject to their respective licenses and terms.",
    ],
  },
  {
    title: "7. Website Use",
    content: [
      "You agree not to misuse this website, attempt unauthorized access, interfere with its operation, distribute malicious code, or use the website for unlawful activities.",
      "Website content, branding, and materials may not be copied, reproduced, or redistributed for commercial purposes without appropriate permission.",
    ],
  },
  {
    title: "8. Third-Party Services and Links",
    content: [
      "Our website may use or link to third-party services and platforms. CodeCraft does not control these external services and is not responsible for their content, availability, policies, or practices.",
    ],
  },
  {
    title: "9. Limitation of Liability",
    content: [
      "To the extent permitted by applicable law, CodeCraft is not responsible for indirect, incidental, or consequential losses resulting from the use of this website or temporary service interruptions.",
      "Nothing in these terms excludes liability that cannot legally be excluded under applicable law.",
    ],
  },
  {
    title: "10. Changes to These Terms",
    content: [
      "CodeCraft may revise these Terms of Service when necessary. Updated terms will be published on this page with a revised effective date.",
      "Continued use of the website after changes are published constitutes acceptance of the revised terms, to the extent permitted by applicable law.",
    ],
  },
  {
    title: "11. Contact",
    content: [
      "For questions about these Terms of Service or our services, contact us through the email address below.",
    ],
  },
];

export default function TermsOfService() {
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
            <FileText size={27} />
          </div>

          <p className="mt-7 text-xs font-bold tracking-[0.25em] text-blue-600">
            CODECRAFT / LEGAL
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight text-[#06193E] sm:text-5xl">
            Terms of Service
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            These terms explain the conditions for using the CodeCraft website
            and provide general guidelines for engaging with our digital
            services.
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
            Need clarification?
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-500">
            If you have questions about these terms or want to discuss a
            project, get in touch with us.
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
