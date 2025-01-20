import { ref } from 'vue'
const category = [
  {
    id: 1,
    title: '了解問題',
    href: '#understand',
    name: 'understand',
  },
  {
    id: 2,
    title: '開始對話',
    href: '#conversation',
    name: 'conversation',
  },
  {
    id: 3,
    title: '採取行動',
    href: '#action',
    name: 'action',
  },
  {
    id: 4,
    title: '成功的故事',
    href: '#success',
    name: 'success',
  },
  {
    id: 5,
    title: '無手機校園的 FAQ',
    href: '#faq',
    name: 'faq',
  },
]
const conversations = ref({
  辦討論會: [
    {
      id: 1,
      title: 'Here are three of our favorite talks and films to spark discussion:',
      srcset:
        'https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Fdiscussion.jpg&w=128&q=75 1x , https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Fdiscussion.jpg&w=256&q=75 2x',
      imagSrc:
        'https://www.anxiousgeneration.com/_next/image?url=%2Fphone-free-schools%2Fdiscussion.jpg&w=256&q=75',

      listItem: [
        {
          id: 1,
          title: 'Discussion prompts for parents',
          href: 'https://www.anxiousgeneration.com/pdfs/thought-starters-for-parents.pdf',
        },
        {
          id: 2,
          title: 'Discussion prompts for school administrators and teachers',
          href: 'https://www.anxiousgeneration.com/pdfs/thought-starters-for-educators.pdf',
        },
      ],
    },
  ],
  一起看影片: [
    {
      id: 1,
      title: 'Here are three of our favorite talks and films to spark discussion:',

      listItem: [
        {
          id: 1,
          title:
            'Jonathan Haidt: Smartphones vs. Smart Kids: Watch Jon’s presentation from the 2023 ExcelinEd conferenc',
          href: 'https://www.youtube.com/watch?v=yVq4ARIlNVg',
        },
        {
          id: 2,
          title:
            'Jonathan Haidt and First Lady of Virginia Suzanne S. Youngkin: Watch Jon’s conversation with the First Lady about how to roll back the phone-based childhood in schools and at home',
          href: 'https://youtu.be/1w287BCT4Mw?feature=shared',
        },
        {
          id: 3,
          title:
            'Kids, Smartphones and Social Media: The Risks and the Solutions: a parent talk given by Catherine Price, author of How to Break Up With Your Phone, referred to by Jon Haidt as “the talk every parent should watch”',
          href: 'https://www.youtube.com/watch?v=Ro-XgHp7OPA',
        },
      ],
    },
  ],
  請人演講: [
    {
      id: 1,
      title:
        'Host a speaker from our esteemed panel, including Zach Rausch, Catherine Price, and Lenore Skenazy.',

      listItem: [
        {
          id: 1,
          title: 'Click here to learn more and inquire about speaking availability.',
          href: 'https://www.anxiousgeneration.com/speakers',
        },
      ],
    },
  ],
})
const takeActions = ref({
  父母的行動: [
    {
      id: 1,
      title:
        'Educate Parents and Admin: If your school does not already have a phone-free policy from bell to bell, the first step is to educate your school’s administration and parent community about why such a policy is necessary. Read and share: The Case for Phone-Free Schools and How Schools Can Help End the Phone-Based Childhood and of course The Anxious Generation (here’s a discussion guide you can offer to parents). ',
    },
    {
      id: 2,
      title:
        'Implement a Phone-Free Policy: If your school is considering a phone-free policy (or if it already has one, but there are problems) we recommend downloading the Phone-Free Schools Movements Phone-Free School Administrator Toolkit — its a detailed, step-by-step guide for how to roll out a phone-free policy at your school (courtesy of PhoneFreeSchoolMovement.org). ',
    },
    {
      id: 3,
      title:
        'Plan for Storing Phones: Make sure that any discussion at your school about a phone-free policy includes a plan for where students’ phones will be stored during the day, whose responsibility it is to enforce the rules (ideally, it’s not the teachers’!), and what the consequences will be for breaking them.',
    },
    {
      id: 4,
      title:
        'Provide Students With Play-Based Alternatives: Phone-free policies are most effective when students are also offered opportunities for play, independence, and social engagement during times when they might otherwise have reached for their phones. For example, if you’re a homeroom teacher, you could keep a few board games in your classrooms for use before school and during breaks.',
    },
  ],
  老師的行動: [
    {
      id: 1,
      title:
        'Make the Case: If your child’s school has not yet committed to going phone-free, the first step is to educate your community about why such a policy is necessary. If school administrators, educators, students, and parents don’t understand why you’re banning smartphones from school, they are more likely to resist. Read and share: The Case for Phone-Free Schools and our Substack Series: What Schools and Educators Can Do Now and of course, The Anxious Generation (here’s a discussion guide you can offer to parents). ',
    },
    {
      id: 2,
      title:
        'Rally Support: Use this petition form to invite fellow parents and community members to petition your local school or school board to go phone-free from bell to bell. You may also want to read this guide from Protect Young Eyes about How to Talk to Your School District about Removing Smartphones.',
    },
    {
      id: 3,
      title:
        'Let Your Kids School Know: School administrators often want to implement bell-to-bell phone-free schools, but they hesitate because of pushback from parents, who want to be able to reach their child during the school day. We respond to these concerns on our FAQ page. In sum, we believe that, when needed, parents should contact their child through the school, and allow other exchanges to wait until after last bell. This would improve their childs ability to focus in class, would enable them to socialize with other students, and it would translate to fewer dopamine hikes during the day and reduced screen time overall. If you agree that this exchange is worth it, please let your childs school know!',
    },
    {
      id: 4,
      title:
        'Advocate for Play and Independence: Encourage your child’s school to go a step further by starting a Let Grow Play Club for students in K-8: keeping the playground open before or after school as a no-phone-zone for mixed-age free play with minimal adult intervention.',
    },
  ],
  校長的行動: [
    {
      id: 1,
      title:
        'Make The Case To Parents and Students: If your school does not already have a phone-free policy from bell to bell, the first step is to educate your school’s administration, parent, and student community about why such a policy is necessary. Read and share: The Case for Phone-Free Schools and How Schools Can Help End The Phone-Based Childhood and of course, The Anxious Generation (here’s a discussion guide you can offer to parents).',
    },
    {
      id: 2,
      title:
        'Create and Implement A Phone-Free Policy: If your school is in the process of considering a phone-free policy (or if it already has one, but there are implementation issues) we recommend downloading the Phone-Free Schools Movements Phone-Free School Administrator Toolkit—its a detailed, step-by-step guide for how to roll out a phone-free policy at your school. (courtesy of PhoneFreeSchoolMovement.org).',
    },
    {
      id: 3,
      title:
        'Communicate With Parents: In order to succeed, you’ll need to get parents on board. Here’s a template email that you can send to parents to invite them to learn more about why your phone is going phone-free (and here is a sample letter from a school announcing its phone-free policy). Be sure to also include a way for parents to reach out to you with questions or concerns.',
    },
    {
      id: 4,
      title:
        'Anticipate Parental Anxiety – And Have A Plan: Establish a system for how parents can communicate with their children during the school day about schedule changes or family emergencies. ',
    },
  ],
})
const faq = [
  {
    id: 1,
    question: 'How can my school go phone-free?',
    answer:
      'If your school wants to go phone-free, we recommend downloading and following the steps in the Phone-Free School Administrator Toolkit (created by our colleagues at PhoneFreeSchoolMovement.org). Comprehensive and packed with practical resources, it’s a step-by-step guide for how schools can go phone-free, including how to prepare, how to roll out the policy, how to get parents on board, and how to deal with pushback. It’s the closest thing to a plug-and-play solution that we’ve found.',
  },
  {
    id: 2,
    question: 'What’s the most common mistake schools make in going phone-free?',
    answer:
      'One of the most common mistakes we see is schools that claim to have a phone-free policy, but don’t have a system in place to enforce it. This essentially means that phones are simply discouraged. Students end up continuing to use their phones, and classroom teachers are put in charge of enforcing the so-called “rule,” adding to their workload and resulting in even more missed class time. This is why it is essential to have a detailed plan for where phones will be stored during the day, who will be responsible for enforcing the policy, and what the consequences will be for violating it.',
  },
  {
    id: 3,
    question:
      'Is it enough to have students keep their phones off (or on do-not-disturb) during class in their backpacks, or stow them away in hallway phone holders that they can access between classes?',
    answer:
      'No, unfortunately neither kept in backpacks nor accessible during breaks is enough, because it means students will be on their phones during recess, mealtimes, and “bathroom breaks” — thus interfering with valuable opportunities for in-person socialization with friends and classmates.A 2023 study from Common Sense Media of 11- to 17-year-olds found that they received a median 237 notifications a day, about a quarter of which were delivered during school hours. That’s a lot of temptation for students to resist. Also, when students are minutes away from getting on their phones, they are less focused in class.',
  },
  {
    id: 4,
    question:
      'What does it mean for a school to go phone-free “bell-to-bell” — and why is this important?',
    answer:
      '“Bell to bell” refers to requiring students to keep their phones away from the very start of the school day all the way to the final bell. (The alternative, which we do not recommend, is to only ban phones during class time but allow them during breaks between classes, recess, and lunch.)As Jon explains in further detail in this post, when phones are allowed in schools, they interfere with attention, learning, relationships, and belonging. Students can’t focus on class — the temptations and dopamine stimuli are never far away — and they are also likely to spend their recess and meal time staring at their phones instead of interacting with their friends and peers.The best solution is to have smartphones locked away for the duration of the school day, giving students a full 6 to 7 hours (or more!) free from distractions and online drama.',
  },
  {
    id: 5,
    question: 'Where do you recommend that students keep their phones during the day?',
    answer:
      'We recommend that students store their phones (and all communication devices, including smartwatches) in Yondr pouches, phone lockers (many options on Amazon), or turned off/on silent in a box or other central storage location for the entire school day. (Yondr pouches are lockable phone pouches that are used in many schools and concert venues. The pouches cost about $30-40 each; the price includes customized help from Yondr in introducing the pouches to your school. (We do not receive a commission from Yondr in exchange for recommending the pouches.)',
  },
  {
    id: 6,
    question: 'What about parents who want to be in touch with their child during the school day?',
    answer:
      'Much of the pushback toward phone-free schools comes from parents who want to communicate with their children during the school day. Some parents argue that they need to be able to get in touch with their children about logistics; others believe that having a phone at school will make their child more safe.In order to successfully go phone-free, schools need to address these parental concerns. Some ideas:For simple logistical things like a change of pickup, schools could have a bulletin board in a central location where notes could be left for particular students (parents would call the office, and the person on call would write down the message and post it on the bulletin board).For a true family emergency that can’t wait till the end of the school day, parents could call the office, and the person on call could simply deliver the message to the student’s teacher, or pull them out of class. (Note that this is how things used to work before smartphones!)For a school-wide change of schedule or emergency that needs to be communicated to parents, such as an early school closing, power outage or, heaven forbid, an intruder or active shooter, the school itself should have a multi-layered system in place to communicate directly with parents—for example, via a combination of text messages, website and social media updates, and perhaps a phone tree.',
  },
  {
    id: 7,
    question: 'What about parents who are worried about emergency situations?',
    answer:
      'An important takeaway when it comes to parental fears about emergencies at school (including school shootings) is that smartphones do not make things safer in a crisis. As Dr. Kenneth S. Trump, a school security expert and founder of National School Safety and Security Services, points out that “student use of cell phones during an unfolding emergency can distract their attention from safety and emergency response directions being given by school staff.” He also explains that, in addition to potentially overwhelming cell networks, “Cell phone use, texting, and other outside communications by students during a crisis also expedites parental flocking to the school at a time when school and public safety officials may need parents to be away from the school site due to evacuations, emergency response, and/or other tactical or safety reasons. This could delay or otherwise hinder timely and efficient parent-student reunification. It could potentially thrust parents into a zone of potential harm.”Public officials also say kids are less safe with a phone during an emergency, because they are more distracted (many of them have the impulse to film) and less likely to listen to directions. Smartphones are likely to create noise in situations where silence is imperative. Cell phone use can also accelerate the unintentional — and potentially intentional — spread of misinformation, rumors, and fear. In cases like these, which thankfully are exceedingly rare, would a parent want their child to be on the phone with them or to be listening to instructions from emergency-trained staff? (For more information, we recommend this article from The Washington Post.)',
  },
  {
    id: 8,
    question: 'What about students who need phones for IEP/504 or medical situations?',
    answer:
      'There are legitimate situations in which particular students may require access to a smartphone during the day — for example, a student with Type 1 diabetes who monitors their blood sugar or controls an insulin pump through their phone.As our colleagues at Protect Young Eyes point out, “Exceptions can be made, and there should be processes and training for these limited but important situations.” They go on to quote this statement from a closed parent Facebook group where parents were commenting on the idea of an “away for the day” policy:“I have a child on a 504 and she has a ‘chill pass’ accommodation where she gives the pass to the teacher, retrieves her phone and goes to the counselor’s office to contact me. That’s a perfectly acceptable anxiety accommodation.”',
  },
  {
    id: 9,
    question:
      'What are possible legal boundaries teachers and staff may run into — is it legal to confiscate a phone? Are teachers liable if a phone falls and breaks while confiscated or locked away?',
    answer:
      'This depends on state laws; your district legal counsel can advise. If liability is a concern, you may want to consider using a solution such as Yondr pouches, which allow students to maintain possession of their phones but don’t allow them access to their phones unless they unlock the bag at one of several unlocking stations.”',
  },
  {
    id: 10,
    question:
      'Many teachers use smartphones in class, such as to have students scan QR codes, to take pictures of the board, or to photograph their projects. Are these not good reasons to allow smartphones?',
    answer:
      'There are ways in which smartphones can be useful classroom tools. However, it is difficult — if not impossible — to allow students access to these positive functions without also allowing them access to distractions. Experiments show that even having a phone in sight is distracting. What’s more, requiring students to use smartphones for in-class assignments can present access problems and lead to possible accusations of discrimination (what if a student does not have a smartphone, whether because of the price, or because their caregivers have chosen not to give them a smartphone?).While there may be situations in which a teacher or school decides to make an exception, we believe it’s best to encourage teachers to design lesson plans that do not require students to have smartphones. (Yes, this may require some creativity and an adjustment period.) We also recommend that teachers and school administrators use The EdTech Triangle from our colleagues at EverySchool.org. It’s an evidence-backed visual resource that can help guide decisions about when — and when not — to incorporate technology into lesson plans.”',
  },
  {
    id: 11,
    question: 'Where can I learn more about schools that have banned phones?',
    answer:
      'For inspirational success stories about what a phone-free school could look like, check out these articles from The Washington Post, The Spectator, and The Guardian about schools that have gone phone-free, as well as our list of schools and school districts that have already committed themselves to going phone-free.You may also want to check out The Effects of Phone-Free Schools: A Collaborative Review, an ongoing open-source literature review posted and curated by Jonathan Haidt (NYU-Stern) and Zach Rausch (NYU-Stern). This document collects and organizes the published studies and essays addressing the questions: (1) What do we know about phone-free schools’ social, educational, and mental health impacts? And (2) how can elementary and middle schools best manage smartphone use during the school day?”',
  },
]
export default { category, conversations, takeActions, faq }
