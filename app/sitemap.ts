import type { MetadataRoute } from "next";

const GITHUB_USER = "metzevandro";
const GITHUB_REPO = "evandrometz";

async function getLastCommitDateByPath(path: string): Promise<Date> {
  try {
    const url = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/commits?path=${encodeURIComponent(path)}&per_page=1`;

    const res = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
        ...(process.env.GITHUB_TOKEN && {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        }),
      },
      next: { revalidate: 86400 },
    });

    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

    const commits = await res.json();
    if (!commits.length) return new Date();

    return new Date(commits[0].commit.committer.date);
  } catch {
    return new Date();
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://evandrometz.com.br";

  const [portalDate, meudimDate, zerozDate] = await Promise.all([
    getLastCommitDateByPath("app/portal-cidadao-estancia-velha"),
    getLastCommitDateByPath("app/meudim"),
    getLastCommitDateByPath("app/design-system-zeroz"),
  ]);

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/portal-cidadao-estancia-velha`,
      lastModified: portalDate,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/meudim`,
      lastModified: meudimDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/design-system-zeroz`,
      lastModified: zerozDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}