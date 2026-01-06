// Site-wide configuration
export const siteConfig = {
  // Site metadata
  name: "Tom Yao",
  title: "Tom Yao Portfolio",
  description: "Tom Yao's personal portfolio and blog.",
  
  // Navigation
  navigation: {
    home: "Home",
    posts: "Posts",
    contact: "Contact",
  },
  
  // Hero Section
  hero: {
    prefix: "I am",
    name: "Tom Yao",
    intro: "I am a Full Stack Developer, passionate about sharing knowledge and building cool things with code.\nWelcome to my portfolio blog!",
    avatar: "/image/20943608.jpeg",
    buttons: {
      viewPosts: "View Posts",
      contactMe: "Contact Me",
    },
    socialLinks: [
      { name: "GitHub", icon: "/svg/github.svg", url: "https://github.com/chownty" },
    ],
  },
  
  // About Section
  about: {
    title: "About Me",
    text: "Hi, I'm Tom Yao, a passionate Full Stack Developer. I love exploring new technologies and sharing knowledge with the community. On this blog, you'll find my thoughts on web development, tutorials, and project showcases. I hope my content can inspire others in their coding journey.",
  },
  
  // Contact Page
  contact: {
    title: "Get In Touch",
    subtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    info: {
      email: {
        label: "Email",
        value: "chownty@gmail.com",
        link: "mailto:chownty@gmail.com",
      },
      location: {
        label: "Location",
        value: "San Francisco, CA",
      },
    },
    followMe: {
      title: "Follow Me",
      links: [
        { name: "GitHub", icon: "/svg/github.svg", url: "https://github.com/chownty" },
      ],
    },
    footerText: [
      "I typically respond to messages within 24 hours during business days.",
      "Looking forward to hearing from you! 🚀",
    ],
  },
  
  // Footer
  footer: {
    copyright: "© 2026 chownty studio. All rights reserved.",
  },
  
  // Posts Page
  posts: {
    title: "Blog Posts",
    subtitle: "Explore our latest articles on web development, design, and technology",
    searchPlaceholder: "Search posts...",
  },
};

