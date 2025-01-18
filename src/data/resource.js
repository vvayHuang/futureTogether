const category = [
  {
    id: 1,
    title: 'books',
    href: 'books',
    imageSrc: 'https://www.anxiousgeneration.com/resource-images/book-open.svg',
  },
  {
    id: 2,
    title: 'Family Resources',
    href: 'parent',
    imageSrc: 'https://www.anxiousgeneration.com/resource-images/family.svg',
  },
  {
    id: 3,
    title: 'Educator Resources',
    href: 'educator',
    imageSrc: 'https://www.anxiousgeneration.com/resource-images/school.svg',
  },
  {
    id: 4,
    title: 'Newsletters',
    href: 'tools',
    imageSrc: 'https://www.anxiousgeneration.com/resource-images/email.svg',
  },
  {
    id: 5,
    title: 'Videos',
    href: 'videos',
    imageSrc: 'https://www.anxiousgeneration.com/resource-images/video.svg',
  },
  {
    id: 6,
    title: 'Podcasts',
    href: 'podcasts',
    imageSrc: 'https://www.anxiousgeneration.com/resource-images/mic.svg',
  },
  {
    id: 7,
    title: 'Tech',
    href: 'tech',
    imageSrc: 'https://www.anxiousgeneration.com/resource-images/mic.svg',
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
]
export default { books, category }
