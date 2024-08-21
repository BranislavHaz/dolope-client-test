require("dotenv").config();

const fs = require("fs");
const path = require("path");

// Základná URL vášho webu na základe jazyka
const siteUrl =
  process.env.NEXT_PUBLIC_LANGUAGE === "cz"
    ? "https://dolope.cz"
    : "https://dolope.sk";

// Názov súboru sitemap na základe jazyka
const sitemapName =
  process.env.NEXT_PUBLIC_LANGUAGE === "cz"
    ? "sitemap_cz.xml"
    : "sitemap_sk.xml";

// Funkcia na generovanie sitemap
const generateSitemap = () => {
  if (!process.env.NEXT_PUBLIC_LANGUAGE) {
    console.error(
      "NEXT_PUBLIC_LANGUAGE is not set. Skipping sitemap generation."
    );
    return;
  }

  // Vytvorte správnu cestu k priečinku `out`
  const pagesDirectory = path.resolve(__dirname, "../out");

  if (!fs.existsSync(pagesDirectory)) {
    console.error(
      `Directory ${pagesDirectory} does not exist. Skipping sitemap generation.`
    );
    return;
  }

  const staticPages = fs
    .readdirSync(pagesDirectory)
    .filter((file) => file.endsWith(".html"));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map((page) => {
        const pagePath = page === "index.html" ? "" : page.replace(".html", "");
        const priority = page === "index.html" ? "1.0" : "0.8";
        return `
          <url>
            <loc>${siteUrl}/${pagePath}</loc>
            <changefreq>weekly</changefreq>
            <priority>${priority}</priority>
          </url>
        `;
      })
      .join("")}
  </urlset>`;

  // Zapíšte súbor sitemap s dynamickým názvom na základe jazyka
  fs.writeFileSync(path.join(pagesDirectory, sitemapName), sitemap, "utf8");
  console.log(
    `sitemap generated successfully as ${sitemapName} for ${siteUrl}`
  );
};

// Generujte sitemap len pre jeden jazyk
generateSitemap();
