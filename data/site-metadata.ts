export const SITE_METADATA = {
  title: `Sudar Blogger - Blog's coding journey`,
  author: 'Mengke',
  headerTitle: `Sudar Blogger`,
  description:
    'A personal space on the cloud where I document my programming journey, sharing lessons, insights, and resources for fellow developers.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://sudar.id',
  siteRepo: 'https://github.com/sudarcode',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/profile.webp`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.jpeg`,

  locale: 'en-US',
  stickyNav: true,
  analytics: {
    umamiAnalytics: {
      websiteId: process.env.NEXT_UMAMI_ID,
      shareUrl: 'https://analytics.umami.is/share/EqvpZYPABxaQA3mr/mengke.me',
    },
  },
  comments: {
    giscusConfig: {
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO!,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID!,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY!,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!,
      mapping: 'title', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    kbarConfigs: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}
