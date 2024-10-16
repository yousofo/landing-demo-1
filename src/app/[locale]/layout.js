import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import NavList from "@/components/navList/NavList";
import ProviderWrapper from "@/state/ProviderWrapper";
// import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Cairo } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const cairo = Cairo({
  subsets: ["latin"],
  display: "swap",
});
const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "RSAY | رسائي",
  description: "RSAY for cyber security services.",
  keywords: [
    "RSAY",
    "رسائي",
    "cyber",
    "cybersecurity",
    "cyber security",
    "hack",
    "hacking",
    "security",
    "company",
    "learn",
    "courses",
    "universities",
    "contact",
    "services",
    "Cybersecurity in Saudi Arabia",
    "Cybersecurity Training Saudi Arabia",
    "Information Security Services Riyadh",
    "Saudi Arabian Cybersecurity Solutions",
    "RSAY Cybersecurity Courses",
    "Network Management in Saudi Arabia",
    "IT Risk Management Services KSA",
    "Cloud Computing Training Saudi Arabia",
    "AI and Machine Learning Training KSA",
    "Software Development Training Saudi Arabia",
    "Database Management Training KSA",
    "Programming Languages Course Riyadh",
    "Secure Database Design Course",
    "Software Performance Optimization Training",
    "Software Quality Assurance Course",
    "AI and Machine Learning Training Saudi Arabia",
    "Business AI Solutions KSA",
    "Predictive Models in AI",
    "AI Use Cases in Business Innovation",
    "AI Integration Training",
    "Cloud Computing Services Saudi Arabia",
    "SaaS, PaaS, IaaS Training Riyadh",
    "Secure Cloud Migration KSA",
    "Cloud Resource Management Training",
    "Business Flexibility with Cloud Solutions",
    "Project Management Training Saudi Arabia",
    "Total Quality Management (TQM) Course",
    "Performance Improvement Strategies",
    "Project Execution and Monitoring Tools",
    "Service Quality Management Riyadh",
    "Digital Transformation Consulting KSA",
    "Technology Adoption in Business",
    "Business Operations Optimization Riyadh",
    "Managing Organizational Change",
    "Digital Strategies and Transformation Training",
    "Cybersecurity Awareness Courses KSA",
    "Malware and Virus Protection Training",
    "Encryption Techniques Course Riyadh",
    "Data Protection Regulations Compliance KSA",
    "Incident Response Planning Training",
    "Risk Assessment Training Riyadh",
    "Emergency Planning Course KSA",
    "Scenario Analysis and Risk Matrices",
    "Workplace Risk Mitigation Training",
    "Organizational Risk Management Strategies",
    "Network Management Training KSA",
    "Wired and Wireless Network Setup Riyadh",
    "Network Performance Optimization Course",
    "Troubleshooting Network Issues Course",
    "Systems Design and Management Training",
    "Cybersecurity Consulting KSA",
    "IT Infrastructure Management Saudi Arabia",
    "Network Security Solutions Riyadh",
    "Digital Innovation Consulting KSA",
    "Cloud Security Services Riyadh",
    "Data Encryption and Firewall Protection",
    "Risk Analysis and Mitigation Services",
    "Cybersecurity Company Riyadh",
    "IT Services in Jeddah",
    "Cybersecurity Consulting Saudi Arabia",
    "Technology Training Programs Riyadh",
    "Network Management Services Dammam",
    "Best Cybersecurity Courses in Saudi Arabia",
    "How to Secure Business Networks in KSA",
    "Software Quality Management Strategies for Startups",
    "AI Training for Business Leaders in Riyadh",
    "Cloud Computing Certifications in Saudi Arabia",
    "Risk Management Tools for Enterprises in KSA",
  ],
};

// const availableLocales = ['en', 'ar'];
// export async function generateStaticParams() {
//   return availableLocales.map((locale) => ({ locale }));
// }

export default async function LocaleLayout({ children, params: { locale } }) {
  // const { locale } = params;
  const messages = await getMessages();
  // if (!availableLocales.includes(locale)) {
  //   notFound(); // Handle unknown locales
  // }

  return (
    <html lang={locale ?? "en"} dir={locale === "ar" ? "rtl" : "ltr"}>
      <ProviderWrapper>
        <body
          // ${geistSans.variable} ${geistMono.variable}
          // ${roboto_Flex.className}
          className={`${cairo.className} antialiased`}
        >
          <NextIntlClientProvider messages={messages}>
            <Header />
            <NavList />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </body>
      </ProviderWrapper>
    </html>
  );
}

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <ProviderWrapper>
//         <body
//           className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//         >
//           <Header />
//           <NavList />
//           {children}
//           <Footer />
//         </body>
//       </ProviderWrapper>
//     </html>
//   );
// }
