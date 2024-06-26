interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: '作怪的 轨迹',
  siteUrl: 'https://run.zuoguai.xyz',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtc69JxHNcmN1ETpMUX4dozAgAN6iPjWalQ&usqp=CAU',
  description: '天生我材必有用',
  navLinks: [
    {
      name: '作怪',
      url: 'https://zuoguai.github.io',
    },
    {
      name: 'github',
      url: 'https://github.com/zuoguai',
    },
  ],
};

export default data;
