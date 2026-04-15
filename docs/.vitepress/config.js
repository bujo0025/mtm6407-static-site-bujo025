export default {
    title: "LEGO Star Wars UCS",
    description: "Ultimate Collector Series LEGO Star Wars showcase",
  
    themeConfig: {
      nav: [
        { text: "Home", link: "/" },
        { text: "About", link: "/about" },
        { text: "Sets", link: "/sets" },
        { text: "Collection", link: "/collection" },
        { text: "Contact", link: "/contact" }
      ],
  
      sidebar: [
        {
          text: "UCS Sets",
          items: [
            { text: "Millennium Falcon", link: "/ucs/millennium-falcon" },
            { text: "Star Destroyer", link: "/ucs/star-destroyer" }
          ]
        }
      ]
    }
  }