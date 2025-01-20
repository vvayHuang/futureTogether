const category = [
  {
    id: 1,
    title: '書籍',
    name: 'books',
    href: '#books',
    imageSrc: 'https://www.anxiousgeneration.com/resource-images/book-open.svg',
  },
  {
    id: 2,
    title: '家長資源',
    name: 'parent',
    href: '#parent',
    imageSrc: 'https://www.anxiousgeneration.com/resource-images/family.svg',
  },
  {
    id: 3,
    title: '教學資源',
    name: 'educator',
    href: '#educator',
    imageSrc: 'https://www.anxiousgeneration.com/resource-images/school.svg',
  },
  {
    id: 4,
    title: '電子報',
    name: 'tools',
    href: '#tools',
    imageSrc: 'https://www.anxiousgeneration.com/resource-images/email.svg',
  },
  {
    id: 5,
    title: '影片與演講',
    name: 'videos',
    href: '#videos',
    imageSrc: 'https://www.anxiousgeneration.com/resource-images/video.svg',
  },
  {
    id: 6,
    title: 'Podcasts',
    name: 'podcasts',
    href: '#podcasts',
    imageSrc: 'https://www.anxiousgeneration.com/resource-images/mic.svg',
  },
  {
    id: 7,
    title: '科技',
    name: 'tech',
    href: '#tech',
    imageSrc: 'https://www.anxiousgeneration.com/resource-images/tech.svg',
  },
]
const books = [
  {
    id: 1,
    title: 'From David Courtwright',
    href: 'https://www.hup.harvard.edu/books/9780674248229',
    imageSrc:
      'https://www.anxiousgeneration.com/_next/image?url=%2Fresource-images%2Fbook-age.jpeg&w=1080&q=75',
    imageAlt: 'The Age of Addiction: How Bad Habits Became Big Business',
  },
  {
    id: 2,
    title: 'From David LookUp Nonprofit',
    href: 'https://www.amazon.com/Sake-Our-Youth-Therapists-Perspective/dp/1632992876/ref=sr_1_1?crid=1LDXCQEEJ8344&dib=eyJ2IjoiMSJ9.26O0n-e61PDU5yrK8dpDlukDLDoZ242_9XFrj81Q6aAS1tw6w_bepWCmaYg_9K6gcs1pgMD-O_xo-5C6IO1XCxrNeHyduN8EDkQ3GCjfH6-u1DsfJggEk5LHgzvFU1LJXApdjlMhp29Pej5QsO3nJQYi2S53Fsm5U0UdO75wnJ8SqRleLXucEeEtBfvVnncOuoK-yToGU_tjUYkNP_4XHJ7YCorPhG12bYjyBgqMZF8.GdWwQ37n7mcPivoEj8Imw-s324KJKTblPs3APVtO7qQ',
    imageSrc:
      'https://www.anxiousgeneration.com/_next/image?url=%2Fresource-images%2Fbook-youth.jpg&w=1080&q=75',
    imageAlt:
      'For the Sake of Our Youth: A Therapists Perspective on Raising Your Family in Todays Culture',
  },
  {
    id: 3,
    title: 'From Johann Hari',
    href: 'https://stolenfocusbook.com/',
    imageSrc:
      'https://www.anxiousgeneration.com/_next/image?url=%2Fresource-images%2Fbook-focus.jpg&w=1080&q=75',
    imageAlt: 'Stolen Focus: Why You Cant Pay Attention - and How to Think Deeply Again',
  },
  {
    id: 4,
    title: 'From Seth Kaplan',
    href: 'https://sethkaplan.org/',
    imageSrc:
      'https://www.anxiousgeneration.com/_next/image?url=%2Fresource-images%2Fbook-fragile.jpg&w=1080&q=75',
    imageAlt: 'The Age of Addiction: How Bad Habits Became Big Business',
  },
  {
    id: 5,
    title: 'From Catherine Price',
    href: 'https://www.amazon.com/How-Break-Up-Your-Phone/dp/039958112X?crid=2LCH62A76EJP2&keywords=how%20to%20break%20up%20with%20your%20phone&language=en_US&linkCode=sl1&linkId=430ca7c80e7aecc63e8cef9f607a1d68&qid=1656180608&ref_=as_li_ss_tl&sprefix=how%20to%20break%20up%20with%20your%20phon%2Caps%2C147&sr=8-1&tag=catherinepric-20',
    imageSrc:
      'https://www.anxiousgeneration.com/_next/image?url=%2Fresource-images%2Fbook-break.jpeg&w=1080&q=75',
    imageAlt: 'How to Break Up With Your Phone: The 30-Day Plan to Take Back Your Life',
  },
  {
    id: 6,
    title: 'From Jean Twenge',
    href: 'https://www.simonandschuster.com/books/Generations/Jean-M-Twenge/9781982181611',
    imageSrc:
      'https://www.anxiousgeneration.com/_next/image?url=%2Fresource-images%2Fbook-generations.jpeg&w=1080&q=75',
    imageAlt: 'Generations',
  },
  {
    id: 7,
    title: 'From Lenore Skenazy',
    href: 'https://letgrow.org/book/free-range-kids/',
    imageSrc:
      'https://www.anxiousgeneration.com/_next/image?url=%2Fresource-images%2Fbook-free-range.jpeg&w=1080&q=75',
    imageAlt: 'Free Range Kids: How parents and teachers can learn to let go and let grow',
  },
  {
    id: 8,
    title: 'From The Screentime Consultant',
    href: 'https://a.co/d/1LTVZ4o',
    imageSrc:
      'https://www.anxiousgeneration.com/_next/image?url=%2Fresource-images%2Fbook-solution.jpg&w=1080&q=75',
    imageAlt:
      'The Screentime Solution: A Judgment-Free Guide to Becoming a Tech-Intentional Family',
  },
  {
    id: 9,
    title: 'From Anna Lembke',
    href: 'https://www.amazon.com/Dopamine-Nation-Finding-Balance-Indulgence/dp/152474672X',
    imageSrc:
      'https://www.anxiousgeneration.com/_next/image?url=%2Fresource-images%2Fdopamine-nation.png&w=1080&q=75',
    imageAlt: 'Dopamine Nation: Finding Balance in the Age of Indulgence',
  },
  {
    id: 10,
    title: 'From Screen Sanity',
    href: 'https://screensanity.org/tool/elementary-school-plugged-in-planner/',
    imageSrc:
      'https://www.anxiousgeneration.com/_next/image?url=%2Fresource-images%2Fbook-plugged.jpg&w=1080&q=75',
    imageAlt: 'Plugged-in Planner Series',
  },
  {
    id: 11,
    title: 'From Screen Strong',
    href: 'https://kidsbrainsandscreens.com/what-is-kbs/',
    imageSrc:
      'https://www.anxiousgeneration.com/_next/image?url=%2Fresource-images%2Fkidsbrains.png&w=1080&q=75',
    imageAlt: 'Kids Brains & Screens: A ScreenStrong Student Course',
  },
  {
    id: 12,
    title: 'From Screen Sanity',
    href: 'https://screensanity.org/tool/social-media-playbook/',
    imageSrc:
      'https://www.anxiousgeneration.com/_next/image?url=%2Fresource-images%2Fbook-playbook.jpg&w=1080&q=75',
    imageAlt: 'Social Media Playbook',
  },
  {
    id: 13,
    title: 'From Better Screen Time',
    href: 'https://www.amazon.com/Creating-Tech-Healthy-Family-Must-Have-Conversations/dp/1734885904/ref=sr_1_1?crid=GMUXXXOB1M10&dib=eyJ2IjoiMSJ9.ZKEDgY4rSWQR6hwk6GEzEVl3jZ8Oq_AEJXZormQLVVWyuIGn_Ef92f8CHHLI6K_ozKrGLd9_uB5pBUivTWekAx0jO6t7TT2aTVpg65XSrgr3QCs2jqHxRv4PSw4iJ1v1nG3fHpYz7J4KZQyc63tjzK2mn-Vr00mC6iM4zwRdXRrRJzH5lB3nUmre8qV991OCe6Y3uOcKHaWbGJEiQC7MtqhTIMBsr3oUtfXmxBW-TpM.asD7-GgOqKZh-WwKHVjVFVJfP1SHPXC0kdBFKAvPlk4&dib_tag=se&keywords=creating+a+tech+healthy+family&qid=1714422941&sprefix=creating+a+tech%2Caps%2C424&sr=8-1',
    imageSrc:
      'https://www.anxiousgeneration.com/_next/image?url=%2Fresource-images%2Fbook-healthy.jpg&w=1080&q=75',
    imageAlt: 'Creating a Tech-Healthy Family Discussion Guide',
  },
  {
    id: 14,
    title: 'From Richard Reeves',
    href: 'https://www.brookings.edu/books/of-boys-and-men/',
    imageSrc:
      'https://www.anxiousgeneration.com/_next/image?url=%2Fresource-images%2Fbook-boys.webp&w=1080&q=75',
    imageAlt:
      'Of Boys and Men: Why the Modern Male Is Struggling, Why It Matters, and What to Do about It',
  },
  {
    id: 15,
    title: 'From Gaia Bernstein',
    href: 'https://gaiabernstein.com/',
    imageSrc:
      'https://www.anxiousgeneration.com/_next/image?url=%2Fresource-images%2Funwired.png&w=1080&q=75',
    imageAlt: 'Unwired: Gaining Control Over Addictive Technologies',
  },
  {
    id: 16,
    title: 'From Peter Gray',
    href: 'https://outdoorschoolshop.com/free-to-learn-why-unleashing-the-instinct-to-play-will-make-our-children-happier-more-self-reliant-and-better-students-for-life/',
    imageSrc:
      'https://www.anxiousgeneration.com/_next/image?url=%2Fresource-images%2Fbook-learn.jpg&w=1080&q=75',
    imageAlt:
      'Free to Learn: Why unleashing the instinct to play will make our children happier, more self-reliant, and better students for life',
  },
  {
    id: 17,
    title: 'From Kara Alaimo',
    href: 'https://www.penguinrandomhouse.com/books/738356/over-the-influence-by-kara-alaimo/',
    imageSrc:
      'https://www.anxiousgeneration.com/_next/image?url=%2Fresource-images%2Fover-the-influence.png&w=1080&q=75',
    imageAlt: 'Over the Influence: Understanding and Addressing Social Medias Impact',
  },
  {
    id: 18,
    title: 'From Jean Twenge',
    href: 'https://www.jeantwenge.com/igen-book-by-dr-jean-twenge/',
    imageSrc:
      'https://www.anxiousgeneration.com/_next/image?url=%2Fresource-images%2Fbook-igen.jpeg&w=1080&q=75',
    imageAlt: 'iGen',
  },
  {
    id: 19,
    title: 'From Jonathan Haidt and Greg Lukianoff',
    href: 'https://www.thecoddling.com/',
    imageSrc:
      'https://www.anxiousgeneration.com/_next/image?url=%2Fresource-images%2Fbook-coddling.jpeg&w=1080&q=75',
    imageAlt:
      'The coddling of the american mind: how good intentions and bad ideas are setting up a generation for failure',
  },
]
const familyResources = [
  {
    id: '1',
    title: 'How to Break Up With Your Phone 30-day text message-based course',
    href: 'https://catherineprice.com/phone-break-up-challenge',
    imageSrc: 'https://www.anxiousgeneration.com/resource-images/course.svg',
    content:
      'A interactive, 30-day, text-message-based course from Catherine Price, author of How to Break Up With Your Phone, designed to help you establish...',
    linkText: 'From Catherine Price',
  },
  {
    id: '2',
    title: '"Am I Ready for a Personal Device?" a self-evaluations for parents and teens.',
    href: 'https://www.betterscreentime.com/am-i-ready-for-a-personal-device-a-self-evaluation-for-teens/',
    imageSrc: 'https://www.anxiousgeneration.com/resource-images/guide.svg',
    content:
      'Our "Am I Ready" self-evaluation has helped thousands of families delay the smartphone and make a better choice once kids start asking, "Can I h...',
    linkText: 'From Better Screen Time',
  },
  {
    id: '3',
    title: 'Digital Addictions: A Family Guide to Prevention, Signs, and Treatment',
    href: 'https://www.childrenandscreens.org/learn-explore/research/digital-addictions-a-family-guide-to-prevention-signs-and-treatment/am-i-ready-for-a-personal-device-a-self-evaluation-for-teens/',
    imageSrc: 'https://www.anxiousgeneration.com/resource-images/guide.svg',
    content:
      'A guide to assist families in preventing, recognizing, and coping with youth digital addiction....',
    linkText: 'From Children and Screens: Institute of Digital Media and Child Development',
  },
  {
    id: '4',
    title: 'Parent Night Kit',
    href: 'https://screensanity.org/training/parent-night-kit/',
    imageSrc: 'https://www.anxiousgeneration.com/resource-images/tool.svg',
    content:
      "The Parent Night Kit is a turnkey resource to bring Screen Sanity's highly acclaimed program to your school or organization. The all-inclusive k...",
    linkText: 'From Screen Sanity',
  },
  {
    id: '5',
    title: "Let Grow's Parent Resources",
    href: 'https://letgrow.org/program/parents-and-families/',
    imageSrc: 'https://www.anxiousgeneration.com/resource-images/course.svg',
    content:
      "To bring more independence and free play into kids' lives, we've got an 'Independence Kit' for parents that helps get kids doing more on their o...",
    linkText: 'From Let Grow',
  },
  {
    id: '6',
    title: 'Smartphones: Assessing Readiness',
    href: 'https://www.waituntil8th.org/family-guides',
    imageSrc: 'https://www.anxiousgeneration.com/resource-images/guide.svg',
    content: 'A tip sheet for parents and caregivers on introducing a smartphone....',
    linkText: 'From Children and Screens: Institute of Digital Media and Child Development',
  },
  {
    id: '7',
    title: 'Wait Until 8th Digital Training Family Conversation Guides',
    href: 'https://www.waituntil8th.org/family-guides',
    imageSrc: 'https://www.anxiousgeneration.com/resource-images/guide.svg',
    content:
      'Our family guides help your team learn and grow together in the digital arena. Print these downloadable guides to facilitate meaningful conversa...',
    linkText: 'From Wait Until 8th',
  },
  {
    id: '8',
    title: 'Parent Risky Play Tool',
    href: 'https://www.outsideplay.org/tool-microsites/parent-tool',
    imageSrc: 'https://www.anxiousgeneration.com/resource-images/tool.svg',
    content:
      'This tool helps parents and caregivers develop skills and confidence that enables outdoor play for the children in their lives...',
    linkText: 'From Outside Play Lab, University of British Columbia',
  },
  {
    id: '9',
    title: 'How to organize a block party',
    href: 'https://www.blockpartyusa.org/how-to',
    imageSrc: 'https://www.anxiousgeneration.com/resource-images/gdide.svg',
    content:
      'No expensive venue. No decorations or favors. No elaborate menu. Block Party USA is simply about relaxing with your neighbors....',
    linkText: 'From Block Party USA',
  },
  {
    id: '10',
    title: 'Tech-Healthy Family Hub',
    href: 'https://www.betterscreentime.com/hub/',
    imageSrc: 'https://www.anxiousgeneration.com/resource-images/course.svg',
    content:
      'In the Tech-Healthy Family Hub you’ll learn from experts and like-minded parents, access proven resources, and take our self-guided courses to p...',
    linkText: 'From Better Screen Time',
  },
  {
    id: '11',
    title: 'Tech Guideline + Family Agreement',
    href: 'https://www.lookupnonprofit.com/techagreement',
    imageSrc: 'https://www.anxiousgeneration.com/resource-images/guide.svg',
    content:
      "It's so nice when everyone is on the same page and there are clear understandings/expectations for the whole family. Our tech agreement is meant...",
    linkText: 'From LookUp Foundation',
  },
]
const educatorResources = [
  {
    id: '1',
    title: 'How to Break Up With Your Phone 30-day text message-based course',
    href: 'https://catherineprice.com/phone-break-up-challenge',
    imageSrc: 'https://www.anxiousgeneration.com/resource-images/course.svg',
    content:
      'A interactive, 30-day, text-message-based course from Catherine Price, author of How to Break Up With Your Phone, designed to help you establish a new, healthier relationship with technology. Each day...',
    linkText: 'From Catherine Price',
  },
  {
    id: '2',
    title: 'Be Tech Ready Digital Discipleship Curriculum',
    href: 'https://protectyoungeyes.com/be-tech-ready-biblical-digital-citizenship/',
    imageSrc: 'https://www.anxiousgeneration.com/resource-images/course.svg',
    content:
      'BTR is a streaming video curriculum, aligned with ISTE and Catholic Theology Standards, that teaches students how to honor God, humanity, and themselves with their digital choices. We do this through ...',
    linkText: 'From Protect Young Eyes',
  },
  {
    id: '3',
    title: 'The Educational Technology Industrial Complex Timeline',
    href: 'https://environmentalprogress.org/education-timeline',
    imageSrc: 'https://www.anxiousgeneration.com/resource-images/tool.svg',
    content: 'A detailed timeline of the rise ed tech since 1979....',
    linkText: 'From Denise Champney',
  },
  {
    id: '4',
    title: 'Social Media Literacy Course',
    href: 'https://www.khanacademy.org/college-careers-more/social-media-challenges-and-opportunities',
    imageSrc: 'https://www.anxiousgeneration.com/resource-images/course.svg',
    content:
      'Our social media environment is broken. Want a roadmap to help fix it? Integrating expertise across technology, mindfulness, and educational instruction, this interactive course helps young people nav...',
    linkText: 'From Center for Humane Technology',
  },
]
const newsletter = [
  {
    id: '1',
    title: 'Techno Sapiens',
    href: 'https://technosapiens.substack.com/',
    imageSrc:
      'https://www.anxiousgeneration.com/_next/image?url=%2Fresource-images%2Fsub-sapiens.jpeg&w=64&q=75',
    content:
      'Find the latest research on psychology and technology, to strategies for improving mental health, to tips for living and parenting in the digital age....',
    linkText: 'From Tech Without Stress',
  },
]
const video = [
  {
    id: '1',
    title: 'Jonathan Haidt and First Lady of Virginia Suzanne S. Youngkin',
    href: 'https://youtu.be/1w287BCT4Mw?feature=shared',
    imageSrc:
      'https://www.anxiousgeneration.com/_next/image?url=%2Fresource-images%2Fvid-youngkin.jpg&w=1920&q=75',
    content:
      'Watch Jon’s conversation with the First Lady about how to roll-back the phone-based childhood in schools and at home....',
    linkText: 'From Jonathan Haidt',
  },
]
const podcasts = [
  {
    id: '1',
    title: 'Lenore Skenazy on Armchair Expert',
    href: 'https://armchairexpertpod.com/pods/lenore-skenazy',
    imageSrc:
      'https://www.anxiousgeneration.com/_next/image?url=%2Fresource-images%2Fpodf-lenore-skenazy.jpeg&w=640&q=75',
    linkText: 'From Let Grow',
  },
]
const tech = [
  {
    id: '1',
    title: 'USA Alternatives to Smartphones',
    href: 'https://armchairexpertpod.com/pods/lenore-skenazy',
    imageSrc:
      'https://www.anxiousgeneration.com/_next/image?url=%2Fresource-images%2Fus-phone.jpg&w=1920&q=75',
    content: 'A list of smartphone alternatives for families in the USA....',
    linkText: 'From Wait Until 8th',
  },
]
export default {
  books,
  familyResources,
  educatorResources,
  newsletter,
  video,
  podcasts,
  tech,
  category,
}
