const category = [
  {
    id: 1,
    title: 'For Parents',
    subTitle: '父母的行動',
    description:
      '家長們可以共同協作，建立四項新準則，以減少手機型童年的影響，改善家庭生活，並保護孩子的心理健康。',
    name: 'ForParents',
    href: '#ForParents',
  },
  {
    id: 2,
    title: 'For Schools',
    subTitle: '老師和學校的行動',
    description:
      '學校和教育部門可以率先建立新規範，減少手機型童年的影響，恢復更多自由遊戲與獨立性，並提升心理健康。',
    name: 'ForSchools',
    href: '#ForSchools',
  },
  {
    id: 3,
    title: 'For Gen Z',
    subTitle: 'Z 世代的行動',
    description:
      'Z世代可以採取以下步驟，幫助減少手機型童年的影響，恢復更多自由遊戲與獨立性，並提升心理健康⸺包括那些在智能手機和社交媒體伴隨下度過青春期的人也可以。',
    name: 'ForGenZ',
    href: '#ForGenZ',
  },
  {
    id: 4,
    title: 'For Legislators',
    subTitle: '立法者的行動',
    description:
      '中央及地方政府可以率先支持四項新準則，減少手機型童年的影響，恢復更多自由遊戲與獨立性，並提升心理健康。',
    name: 'ForLegislators',
    href: '#ForLegislators',
  },
  {
    id: 5,
    title: 'For Everyone',
    subTitle: '每個人的行動',
    description: '',
    name: 'ForEveryone',
    href: '#ForEveryone',
  },
  {
    id: 6,
    title: 'Organizations',
    subTitle: '合作單位',
    description: '',
    name: 'Organizations',
    href: '#Organizations',
  },
  {
    id: 7,
    title: 'Share Your Story',
    subTitle: '我們想聽你的故事',
    description: '',
    name: 'ShareYourStory',
    href: '#ShareYourStory',
  },
]
const parents = [
  {
    id: 1,
    title: '家長行動指南',
    content:
      '這是一份非常實用的入門指南，包含關鍵行動步驟和資源，幫助任何家長在不花費額外成本的情況下顯著改善孩子的心理健康。',
    href: 'https://www.anxiousgeneration.com/pdfs/for-parents.pdf',
    imageSrc: 'https://www.anxiousgeneration.com/_next/image?url=%2Fparents.jpeg&w=640&q=75',
    imageAlt: '家長行動指南',
    secret:
      'https://www.anxiousgeneration.com/_next/image?url=%2Fparents.jpeg&w=384&q=75 1x, https://www.anxiousgeneration.com/_next/image?url=%2Fparents.jpeg&w=640&q=75 2x',
    buttonText: 'Download PDF',
  },
  {
    id: 2,
    title: 'Good Inside x TAG 指南',
    content:
      '我們與 Good Inside 的創始人貝基·肯尼迪博士（Dr. Becky Kennedy）攜手合作，為家長製作了這本實用且充滿力量的指南。',
    href: 'https://www.goodinside.com/access-anxiousgenerationguide-lp/?utm_source=free_guide&utm_medium=partner&utm_campaign=tag-parent-lp',
    imageSrc: 'https://www.anxiousgeneration.com/_next/image?url=%2Fgi%2Fgi-guide.png&w=640&q=75',
    imageAlt: 'Good Inside x TAG 指南',
    secret:
      'https://www.anxiousgeneration.com/_next/image?url=%2Fgi%2Fgi-guide.png&w=384&q=75 1x, https://www.anxiousgeneration.com/_next/image?url=%2Fgi%2Fgi-guide.png&w=640&q=75 2x',
    buttonText: 'Download PDF',
  },
  {
    id: 3,
    title: '聯繫其他家長',
    content:
      '發送此範例電子郵件或簡訊給其他家長，讓大家攜手合作，共同減少手機型童年的影響，重建以遊戲為基礎的童年。',
    href: 'https://www.anxiousgeneration.com/pdfs/for-parents.pdf',
    imageSrc: 'https://www.anxiousgeneration.com/_next/image?url=%2Faction-text.jpg&w=640&q=75',
    imageAlt: '聯繫其他家長',
    secret:
      'https://www.anxiousgeneration.com/_next/image?url=%2Faction-text.jpg&w=384&q=75 1x, https://www.anxiousgeneration.com/_next/image?url=%2Faction-text.jpg&w=640&q=75 2x',
    buttonText: 'Send Email',
  },
  {
    id: 4,
    title: '為家長團體尋找演講者',
    content:
      '從我們的合作組織名單中找到一位演講者，為您的家長團體講解如何減少手機型童年的影響，並重建以遊戲為基礎的童年。',
    href: 'https://www.anxiousgeneration.com/aligned-orgs?audience=Parents&speakers=true',
    imageSrc: 'https://www.anxiousgeneration.com/_next/image?url=%2Fspeaker1.jpg&w=640&q=75',
    imageAlt: '為家長團體尋找演講者',
    secret:
      'https://www.anxiousgeneration.com/_next/image?url=%2Fspeaker1.jpg&w=384&q=75 1x, https://www.anxiousgeneration.com/_next/image?url=%2Fspeaker1.jpg&w=640&q=75 2x',
    buttonText: 'Find a Speaker',
  },
]
const school = [
  {
    id: 1,
    title: '教育者行動指南',
    content:
      '這是一份非常實用的入門指南，包含關鍵行動步驟和資源，幫助任何老師在不花費額外成本的情況下顯著改善孩子們的心理健康。（海德特的註釋與鏈接）',
    href: 'https://www.anxiousgeneration.com/pdfs/for-educators.pdf',
    imageSrc: 'https://www.anxiousgeneration.com/_next/image?url=%2Feducators.jpeg&w=640&q=75',
    imageAlt: '教育者行動指南',
    secret:
      'https://www.anxiousgeneration.com/_next/image?url=%2Feducators.jpeg&w=384&q=75 1x, https://www.anxiousgeneration.com/_next/image?url=%2Feducators.jpeg&w=640&q=75 2x',
    buttonText: 'Download PDF',
  },
  {
    id: 2,
    title: '發起請願',
    content: '發起一項請願，倡導無手機環境，並讓學校充滿更多遊戲活動。',
    href: 'https://www.anxiousgeneration.com/sample-petition',
    imageSrc: 'https://www.anxiousgeneration.com/_next/image?url=%2Fpetition.jpg&w=640&q=75',
    imageAlt: '發起請願',
    secret:
      'https://www.anxiousgeneration.com/_next/image?url=%2Fpetition.jpg&w=384&q=75 1x, https://www.anxiousgeneration.com/_next/image?url=%2Fpetition.jpg&w=640&q=75 2x',
    buttonText: 'Print Sample Petition',
  },
  {
    id: 3,
    title: '發送家長備忘錄',
    content:
      '使用我們提供的範本，代表學校管理層向家長發送備忘錄。你還可以參考其他老師與我們分享的範例。',
    href: 'https://www.anxiousgeneration.com/pdfs/for-parents.pdf',
    imageSrc: 'https://www.anxiousgeneration.com/_next/image?url=%2Faction-memo.jpg&w=640&q=75',
    imageAlt: '發送家長備忘錄',
    secret:
      'https://www.anxiousgeneration.com/_next/image?url=%2Faction-memo.jpg&w=384&q=75 1x, https://www.anxiousgeneration.com/_next/image?url=%2Faction-memo.jpg&w=640&q=75 2x',
    buttonText: 'Send Email',
  },
  {
    id: 4,
    title: '為學校尋找演講者',
    content:
      '從我們的合作組織名單中找到一位演講者，為你的學校講解如何減少手機型童年的影響，並重建以遊戲為基礎的童年。',
    href: 'https://www.anxiousgeneration.com/aligned-orgs?audience=Schools+and+Educators&speakers=true',
    imageSrc: 'https://www.anxiousgeneration.com/_next/image?url=%2Fspeaker2.jpg&w=640&q=75',
    imageAlt: '為學校尋找演講者',
    secret:
      'https://www.anxiousgeneration.com/_next/image?url=%2Fspeaker2.jpg&w=384&q=75 1x, https://www.anxiousgeneration.com/_next/image?url=%2Fspeaker2.jpg&w=640&q=75 2x',
    buttonText: 'Find a Speaker',
  },
]
const genZ = [
  {
    id: 1,
    title: '無手機星期五夏日挑戰',
    content:
      '參加從6月14日（星期五）到8月15日的無手機星期五夏日挑戰，承諾每週五或至少每週一天不使用手機。更棒的是，邀請至少三位朋友一起參加！',
    href: 'https://www.anxiousgeneration.com/phonefreefriday',
    imageSrc:
      'https://www.anxiousgeneration.com/_next/image?url=%2Fcampaign%2Fphonefree.webp&w=640&q=75',
    imageAlt: '無手機星期五夏日挑戰',
    secret:
      'https://www.anxiousgeneration.com/_next/image?url=%2Fcampaign%2Fphonefree.webp&w=384&q=75 1x, https://www.anxiousgeneration.com/_next/image?url=%2Fcampaign%2Fphonefree.webp&w=640&q=75 2x',
    buttonText: 'Sign Up',
  },
  {
    id: 2,
    title: '學習繁榮',
    content:
      '跟隨海德特備受讚譽的紐約大學本科課程《繁榮》（Flourishing），學習課程大綱，深入理解促進繁榮的條件，並培養有助於你在學校、工作以及個人關係中茁壯成長的具體習慣。',
    href: 'https://www.anxiousgeneration.com/pdfs/flourishing-fall23-syllabus.pdf',
    imageSrc: 'https://www.anxiousgeneration.com/_next/image?url=%2Faction-flourish.jpg&w=640&q=75',
    imageAlt: '學習繁榮',
    secret:
      'https://www.anxiousgeneration.com/_next/image?url=%2Faction-flourish.jpg&w=384&q=75 1x, https://www.anxiousgeneration.com/_next/image?url=%2Faction-flourish.jpg&w=640&q=75 2x',
    buttonText: 'Download PDF',
  },
  {
    id: 3,
    title: '培養你的反脆弱性',
    content:
      '探索《失控的焦慮世代》中為年輕人推薦的各種資源，包括學徒計劃、間隔年項目以及荒野探險旅行，幫助您在挑戰中成長並變得更加強大。',
    href: '#',
    imageSrc:
      'https://www.anxiousgeneration.com/_next/image?url=%2Faction-antifragile.jpg&w=640&q=75',
    imageAlt: '培養你的反脆弱性',
    secret:
      'https://www.anxiousgeneration.com/_next/image?url=%2Faction-antifragile.jpg&w=384&q=75 1x, https://www.anxiousgeneration.com/_next/image?url=%2Faction-antifragile.jpg&w=640&q=75 2x',
    buttonText: 'Learn More',
  },
  {
    id: 4,
    title: '為下一代發聲',
    content: '加入越來越多的青年領導組織，推動數字媒體改革，並倡導更多更優質的現實世界體驗。',
    href: 'https://www.anxiousgeneration.com/aligned-orgs?audience=Schools+and+Educators&speakers=true',
    imageSrc: 'https://www.anxiousgeneration.com/_next/image?url=%2Faligned-orgs.webp&w=640&q=75',
    imageAlt: '為下一代發聲',
    secret:
      'https://www.anxiousgeneration.com/_next/image?url=%2Faligned-orgs.webp&w=384&q=75 1x, https://www.anxiousgeneration.com/_next/image?url=%2Faligned-orgs.webp&w=640&q=75 2x',
    buttonText: 'Find Youth Led Orgs',
  },
]
const legislators = [
  {
    id: 1,
    title: '關注最新立法動態',
    content:
      '通過我們的開放資源協作 Google 文檔和 Integrity Institute 的政策追蹤器，隨時了解有關社交媒體改革的最新立法努力。想了解政府在解決這一集體行動問題中的作用，可參閱Substack 平台上的這篇文章。',
    href: 'https://www.afterbabel.com/p/solving-the-social-dilemma',
    imageSrc: 'https://www.anxiousgeneration.com/_next/image?url=%2Flegislators.jpg&w=640&q=75',
    imageAlt: '關注最新立法動態',
    secret:
      'https://www.anxiousgeneration.com/_next/image?url=%2Flegislators.jpg&w=384&q=75 1x, https://www.anxiousgeneration.com/_next/image?url=%2Flegislators.jpg&w=640&q=75 2x',
    buttonText: 'Download PDF',
  },
  {
    id: 2,
    title: '政策制定者指南',
    content:
      '提供針對青少年社交媒體平台的九項解決方案建議。內容涵蓋了易於實施的具體建議，以及更宏觀的全面解決方案，以協助改善社交媒體對青少年的影響。',
    href: 'https://docs.google.com/document/d/1QPI7M6hmnWJ7OfooyxN7_Z6zkOhCXTYRjtURhcwqSgY/edit',
    imageSrc: 'https://www.anxiousgeneration.com/_next/image?url=%2Faction-protect.jpg&w=640&q=75',
    imageAlt: '政策制定者指南',
    secret:
      'https://www.anxiousgeneration.com/_next/image?url=%2Faction-protect.jpg&w=384&q=75 1x, https://www.anxiousgeneration.com/_next/image?url=%2Faction-protect.jpg&w=640&q=75 2x',
    buttonText: 'Print Sample Petition',
  },
  {
    id: 3,
    title: '支持澳洲社交媒體立法',
    content:
      '觀看喬納森·海特（Jon Haidt）於2024年10月11日在阿德萊德舉行的社交媒體峰會第二天的視頻講話。',
    href: 'https://www.youtube.com/watch?v=ZpnZIzU3TLE&t=4s',
    imageSrc: 'https://www.anxiousgeneration.com/_next/image?url=%2Faction-adelaide.png&w=640&q=75',
    imageAlt: '支持澳洲社交媒體立法',
    secret:
      'https://www.anxiousgeneration.com/_next/image?url=%2Faction-adelaide.png&w=384&q=75 1x, https://www.anxiousgeneration.com/_next/image?url=%2Faction-adelaide.png&w=640&q=75 2x',
    buttonText: 'Send Email',
  },
]
const everyone = [
  {
    id: 1,
    title: '在社交媒體上傳播訊息',
    content:
      '想幫助「一起挽救焦慮世代」嗎？在社交媒體上與您的網絡分享更多有關這一運動的資訊。請點擊查看可共享圖像和社交媒體貼文。',
    href: 'https://www.anxiousgeneration.com/social-media',
    imageSrc: 'https://www.anxiousgeneration.com/social.svg',
    imageAlt: '教育者行動指南',
    buttonText: 'Spread the Word',
  },
  {
    id: 2,
    title: '捐款',
    content:
      '你可以通過多種方式支持我們的研究和「一起挽救焦慮世代」行動。請看我們的捐款頁面以了解更多詳情。',
    href: 'https://www.anxiousgeneration.com/social-media',
    imageSrc: 'https://www.anxiousgeneration.com/donate.svg',
    imageAlt: '教育者行動指南',
    buttonText: 'Download Now',
  },
]

export default {
  parents,
  school,
  genZ,
  legislators,
  everyone,
  category,
}
