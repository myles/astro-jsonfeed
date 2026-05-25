export const fullOptions = {
  title: "Arrietty's Blog",
  home_page_url: "https://arrietty.example.com/",
  feed_url: "https://arrietty.example.com/feed.json",
  description: "Adventures of a tiny borrower beneath the floorboards.",
  user_comment:
    "This feed is for humans and feed readers alike. Enjoy the stories.",
  next_url: "https://arrietty.example.com/feed.json?page=2",
  icon: "https://arrietty.example.com/icon.png",
  favicon: "https://arrietty.example.com/favicon.ico",
  authors: [
    {
      name: "Arrietty Clock",
      url: "https://arrietty.example.com/about",
      avatar: "https://arrietty.example.com/avatar.png",
    },
  ],
  language: "en-US",
  expired: false,
  items: [
    {
      id: "https://arrietty.example.com/posts/kitchen",
      url: "https://arrietty.example.com/posts/kitchen",
      external_url: "https://en.wikipedia.org/wiki/The_Borrowers",
      title: "Life Under the Kitchen",
      content_html:
        "<p>The kitchen is vast — a land of towering table legs and endless crumbs.</p>",
      content_text:
        "The kitchen is vast — a land of towering table legs and endless crumbs.",
      summary: "Exploring the kitchen floor from a borrower's perspective.",
      image: "https://arrietty.example.com/posts/kitchen/cover.jpg",
      banner_image: "https://arrietty.example.com/posts/kitchen/banner.jpg",
      date_published: "2024-06-01T08:00:00Z",
      date_modified: "2024-06-15T12:30:00Z",
      authors: [
        {
          name: "Arrietty Clock",
          url: "https://arrietty.example.com/about",
          avatar: "https://arrietty.example.com/avatar.png",
        },
        {
          name: "Pod Clock",
          url: "https://arrietty.example.com/about/pod",
        },
      ],
      tags: ["borrowers", "kitchen", "adventure"],
      language: "en-US",
      attachments: [
        {
          url: "https://arrietty.example.com/posts/kitchen/audio.mp3",
          mime_type: "audio/mpeg",
          title: "Kitchen Audio Tour",
          size_in_bytes: 2048000,
          duration_in_seconds: 128,
        },
      ],
    },
    {
      id: "https://arrietty.example.com/posts/garden",
      url: "https://arrietty.example.com/posts/garden",
      title: "The Garden Beyond the Door",
      content_html:
        "<p>Stepping outside for the first time is terrifying — and wonderful.</p>",
      content_text:
        "Stepping outside for the first time is terrifying — and wonderful.",
      summary: "A first glimpse of the garden.",
      date_published: "2024-07-10T09:00:00Z",
      tags: ["borrowers", "garden", "outdoors"],
      attachments: [
        {
          url: "https://arrietty.example.com/posts/garden/photo.jpg",
          mime_type: "image/jpeg",
          title: "Garden Photo",
          size_in_bytes: 512000,
        },
      ],
    },
  ],
};

export const fullOutput = {
  version: "https://jsonfeed.org/version/1.1",
  title: "Arrietty's Blog",
  home_page_url: "https://arrietty.example.com/",
  feed_url: "https://arrietty.example.com/feed.json",
  description: "Adventures of a tiny borrower beneath the floorboards.",
  user_comment:
    "This feed is for humans and feed readers alike. Enjoy the stories.",
  next_url: "https://arrietty.example.com/feed.json?page=2",
  icon: "https://arrietty.example.com/icon.png",
  favicon: "https://arrietty.example.com/favicon.ico",
  authors: [
    {
      name: "Arrietty Clock",
      url: "https://arrietty.example.com/about",
      avatar: "https://arrietty.example.com/avatar.png",
    },
  ],
  language: "en-US",
  expired: false,
  items: [
    {
      id: "https://arrietty.example.com/posts/kitchen",
      url: "https://arrietty.example.com/posts/kitchen",
      external_url: "https://en.wikipedia.org/wiki/The_Borrowers",
      title: "Life Under the Kitchen",
      content_html:
        "<p>The kitchen is vast — a land of towering table legs and endless crumbs.</p>",
      content_text:
        "The kitchen is vast — a land of towering table legs and endless crumbs.",
      summary: "Exploring the kitchen floor from a borrower's perspective.",
      image: "https://arrietty.example.com/posts/kitchen/cover.jpg",
      banner_image: "https://arrietty.example.com/posts/kitchen/banner.jpg",
      date_published: new Date("2024-06-01T08:00:00Z"),
      date_modified: new Date("2024-06-15T12:30:00Z"),
      authors: [
        {
          name: "Arrietty Clock",
          url: "https://arrietty.example.com/about",
          avatar: "https://arrietty.example.com/avatar.png",
        },
        {
          name: "Pod Clock",
          url: "https://arrietty.example.com/about/pod",
        },
      ],
      tags: ["borrowers", "kitchen", "adventure"],
      language: "en-US",
      attachments: [
        {
          url: "https://arrietty.example.com/posts/kitchen/audio.mp3",
          mime_type: "audio/mpeg",
          title: "Kitchen Audio Tour",
          size_in_bytes: 2048000,
          duration_in_seconds: 128,
        },
      ],
    },
    {
      id: "https://arrietty.example.com/posts/garden",
      url: "https://arrietty.example.com/posts/garden",
      title: "The Garden Beyond the Door",
      content_html:
        "<p>Stepping outside for the first time is terrifying — and wonderful.</p>",
      content_text:
        "Stepping outside for the first time is terrifying — and wonderful.",
      summary: "A first glimpse of the garden.",
      date_published: new Date("2024-07-10T09:00:00Z"),
      tags: ["borrowers", "garden", "outdoors"],
      attachments: [
        {
          url: "https://arrietty.example.com/posts/garden/photo.jpg",
          mime_type: "image/jpeg",
          title: "Garden Photo",
          size_in_bytes: 512000,
        },
      ],
    },
  ],
};
