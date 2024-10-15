/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com", // Replace with your actual site URL
  generateRobotsTxt: true, // Optional: generate robots.txt file
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ar"], // Add your locales here
  },
  additionalPaths: async (config) => [await config.transform(config, "/")],
};
