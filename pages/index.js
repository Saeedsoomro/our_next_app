import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layouts/layout";
import { Container } from "postcss";
import ParallaxContainer from "../components/Parallax";
import { useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [val, setVal] = useState();
  const [openServiceCard, setOpenServiceCard] = useState("none");
  return (
    <>
      <Layout>
        <ParallaxContainer />
        <div id="about" className="text-center py-10 bg-graylight">
          <h1 className="text-4xl  pb-10 font-roboto text-graydark">
            AS SEEN IN
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:px-20 lg:px-60 2xl:px-80 ">
            <img src="assets/images/logo.png" />
            <img src="assets/images/logo.png" />
            <img src="assets/images/logo.png" />
            <img src="assets/images/logo.png" />
            <img src="assets/images/logo.png" />
            <img src="assets/images/logo.png" />
            <img src="assets/images/logo.png" />
            <img src="assets/images/logo.png" />
          </div>
        </div>
        <div className=" text-center px-10 md:px-20 lg:px-60 2xl:px-80  md:py-10">
          <h1 className="text-2xl text-graydark font-extrabold fonto-roboto py-4">
            Vision
          </h1>
          <p className="py-4 font-roboto text-xl text-graydark ">
            To empower individuals with special needs, support families, and
            partner with schools to create a more inclusive and supportive
            society.
          </p>
          <h1 className="text-2xl text-graydark font-extrabold fonto-roboto py-4">
            Mission & Purpose
          </h1>
          <p className="py-4 font-roboto text-xl text-graydark ">
            To provide exceptional services and resources to create a more
            supportive and inclusive community.
            <br />
            {/* <br /> */}
            The purpose of Support Works Consulting (SWC)is to provide
            individuals with the support, guidance, and resources they need to
            achieve their goals and improve their quality of life. Support Works
            Consulting services can be particularly beneficial for individuals
            with special needs, as they may require specialized support to
            achieve their full potential. The main goal of SWC is to identify
            the unique needs of each individual and create a personalized plan
            to meet those needs. This may include developing new skills,
            reinforcing positive behaviors, and addressing any challenges or
            barriers that might hinder their progress. UltimatelySWC’s main aim
            is to empower individuals to live their best lives and reach their
            full potential.
          </p>
          <h1 className="text-2xl text-graydark font-extrabold fonto-roboto py-4">
            Services
          </h1>
          <p className="py-4 font-roboto text-xl text-graydark ">
            Applied Behavior Analysis is the study of the functional
            relationship between one’s behaviors and their environment. Data is
            collected on the stimuli that elicit, increase, decrease or maintain
            the child’s behavior. The data is analyzed and a treatment plan or
            an individualized ABA program is implemented. Data is collected and
            analyzed again as the child’s treatment progresses to determine
            treatment effectiveness. The goal of a behavior analyst is to
            utilize behavioral contingencies to help the child learn more
            functional skills that can replace undesirable behaviors and improve
            quality of life. We seek to produce significant results enabling the
            child to adapt to their environment, thus preparing him for a
            brighter future.
            <br />
            {/* <br /> */}
            Support Works Consulting provides a range of services to support
            individuals with special needs and their families, as well as
            schools and educators who work with these individuals. Here are some
            of the services that Support Works Consulting may offer:
          </p>

          <h1 className="text-2xl text-graydark font-extrabold fonto-roboto py-4">
            1. Family Consultation
          </h1>
          <h1 className="text-2xl font-semibold text-black font-roboto py-6">
            Applied Behavior Analysis (ABA) Therapy
          </h1>
          <p className="py-4 font-roboto text-xl text-graydark ">
            ABA therapy is a treatment approach that uses principles of behavior
            analysis to teach new skills and improve behaviors. Support Works
            Consulting offers ABA therapy services to individuals with special
            needs to help them learn new skills and improve their social,
            communication, and adaptive behavior skills.
          </p>
          <h1 className="text-2xl font-semibold text-black font-roboto py-6">
            Counseling and Behavior Support
          </h1>
          <p className="py-4 font-roboto text-xl text-graydark ">
            Support Works Consulting provides counseling and behavior support
            services to individuals with special needs and their families. This
            may include helping them manage challenging behaviors, cope with
            stress and anxiety, and improve their social skills.
          </p>
          <h1 className="text-2xl font-semibold text-black font-roboto py-6">
            Parent Training and Support
          </h1>
          <p className="py-4 font-roboto text-xl text-graydark ">
            Support Works Consulting provides parent training and support
            services to help parents of individuals with special needs better
            understand their child's needs and how to support them. This may
            include coaching on how to manage challenging behaviors, how to
            support their child's education, and how to access community
            resources.
          </p>

          <h1 className="text-2xl font-semibold text-black font-roboto py-6">
            Functional Communication Training (FCT):
          </h1>
          <p className="py-4 font-roboto text-xl text-graydark ">
            FCT is used to teach and establish replacement behaviors for
            inappropriate or harmful behaviors such as aggression,
            escape/elopement, non-compliance, etc. When a child is regularly
            engaging in disruptive, challenging behaviors, the child is having
            difficulty communicating or meeting their wants and needs. Even for
            a verbal child, but particularly for a non-verbal child, the
            behavior is a way of communicating. It is our role to develop a
            comprehensive ABA program to replace challenging behaviors with more
            effective and efficient positive/functional behaviors in order to
            get their needs and wants to be met in a more socially acceptable
            manner.
          </p>

          <h1 className="text-2xl text-graydark font-extrabold fonto-roboto py-4">
            2. Schools Consultation
          </h1>
          <h1 className="text-2xl font-semibold text-black font-roboto py-6">
            Applied Behavior Analysis (ABA) Therapy
          </h1>
          <p className="py-4 font-roboto text-xl text-graydark ">
            ABA therapy is a treatment approach that uses principles of behavior
            analysis to teach new skills and improve behaviors. Support Works
            Consulting offers ABA therapy services to individuals with special
            needs to help them learn new skills and improve their social,
            communication, and adaptive behavior skills.
          </p>
          <h1 className="text-2xl font-semibold text-black font-roboto py-6">
            Educational Consulting
          </h1>
          <p className="py-4 font-roboto text-xl text-graydark ">
            Support Works Consulting provides educational consulting services to
            schools and educators who work with individuals with special needs.
            This may include helping schools develop individualized education
            plans (IEPs), Behavior Intervention Plan (BIP), providing teacher
            training and coaching, and conducting assessments to identify the
            needs of individual students.
          </p>
          <h1 className="text-2xl font-semibold text-black font-roboto py-6">
            Parent Training and Support:
          </h1>
          <p className="py-4 font-roboto text-xl text-graydark ">
            Support Works Consulting provides parent training and support
            services to help parents of individuals with special needs better
            understand their child's needs and how to support them. This may
            include coaching on how to manage challenging behaviors, how to
            support their child's education, and how to access community
            resources.
          </p>

          <h1 className="text-2xl text-graydark font-extrabold fonto-roboto py-4">
            3. RBT\Qasp-s\ABA therapists Supervision:
          </h1>
          <p className="py-4 font-roboto text-xl text-graydark ">
            ABA services may be conducted at home, school and/or community. SWC
            provides supervision and training for ABA therapists who work
            directly with clients.
          </p>

          {/* <p className="py-4 font-roboto text-xl text-graydark ">
            We are diligent about guiding you through the many choices and
            decisions, and help you avoid costly mistakes.
          </p>
          <p className="py-4 font-roboto text-xl text-graydark">
            Our menu of flexible design services means that you can have luxury
            interior design by a top Houston design firm at a price point that
            works for you.
          </p>
          <h1 className="text-2xl text-graydark font-extrabold fonto-roboto py-4">
            Let's Talk Style
          </h1>
          <p className="py-4 font-roboto text-xl text-graydark">
            Your preferred style is important to us; whatever your style is. We
            create spaces that will address your functional needs, but we also
            want it to speak to your personality and aesthetic vision.
          </p>
          <p className="py-4 font-roboto text-xl text-graydark">
            While most of our clients seek us out for our bold, unique and
            well-layered interiors, we welcome every genre of design styles,
            from mid century modern to new traditional, and everything in
            between
          </p>
          <p className="py-4 font-roboto text-xl text-graydark">
            The basis of our designs can be summed up as eclectic, storied,
            classic, bold, timeless, thoughtful, with the masterful use of
            color, pattern-mix and textures.
          </p>
          <p className="py-4 font-roboto text-xl text-graydark">
            Will you be next?
          </p>
          <p className="py-4 font-roboto text-xl text-graydark">
            Let's get started with creating your ideal version of luxury in your
            home
          </p> */}
        </div>
        <div className="text-center">
          <button className="bg-red-400 px-5 py-2 font-samibold text-white font-noto hover:text-blaxk uppercase">
            let's talk about our project
          </button>

          <div className="px-10 md:px-20 lg:px-40 2xl:px-60 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
            <div class="h-[60vh] lg:h-[90vh] bg-transparent cursor-pointer group perspective ">
              <div
                class={
                  openServiceCard == "card1"
                    ? "relative preserve-3d my-rotate-y-180 w-full h-full duration-1000"
                    : "relative preserve-3d  w-full h-full duration-1000"
                }
              >
                <div class="absolute backface-hidden  w-full h-full  flex flex-col items-center justify-center">
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.M2gm-z7jGsS9zC5KC5pmbwHaIm&pid=Api&P=0"
                    class="w-full h-full"
                  />
                  <button
                    onClick={() => setOpenServiceCard("card1")}
                    className="px-6 py-2 font-semibold text-black-600 bg-graylight  absolute bottom-10 "
                  >
                    Family Consultation
                  </button>
                </div>
                <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-graylight shadow-xl overflow-hidden">
                  <div class="text-center flex flex-col items-center justify-center h-full text-graydark px-2 pb-24">
                    <h1 class="text-3xl font-semibold">
                      Multidisciplinary meeting
                    </h1>
                    {/* <p class="my-2">9.0 Rating</p> */}
                    <p>
                      SWC believes in multidisciplinary approach, the progress
                      of the individual with special needs depends on the role
                      of each member of the team.The consultant will meet all
                      other therapists who work with the client (Teachers,
                      Specialty Teachers, Occupational, Speech, Psychology, RBT,
                      family, etc) to answer their questions, guide them throw
                      any challenges they face, and to conduct any required
                      training.
                    </p>
                    <button
                      onClick={() => setOpenServiceCard("none")}
                      class="bg-red-400 px-6 py-2 font-semibold text-white absolute bottom-10 "
                    >
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="h-[60vh] lg:h-[90vh] bg-transparent cursor-pointer group perspective ">
              <div
                class={
                  openServiceCard == "card2"
                    ? "relative preserve-3d my-rotate-y-180 w-full h-full duration-1000"
                    : "relative preserve-3d  w-full h-full duration-1000"
                }
              >
                <div class="absolute backface-hidden  w-full h-full  flex flex-col items-center justify-center">
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.jOxRE3HQun6L5EQqxc45IwHaLH&pid=Api&P=0"
                    class="w-full h-full"
                  />
                  <button
                    onClick={() => setOpenServiceCard("card2")}
                    className="px-6 py-2 font-semibold text-black-600 bg-graylight absolute bottom-10 "
                  >
                    Schools Consultation
                  </button>
                </div>
                <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-graylight shadow-xl overflow-hidden">
                  <div class="text-center flex flex-col items-center justify-center h-full text-graydark px-2 pb-24">
                    <h1 class="text-3xl font-semibold">
                      Functional Communication Training (FCT):
                    </h1>
                    {/* <p class="my-2">9.0 Rating</p> */}
                    <p>
                      FCT is used to teach and establish replacement behaviors
                      for inappropriate or harmful behaviors such as aggression,
                      escape/elopement, non-compliance, etc. When a child is
                      regularly engaging in disruptive, challenging behaviors,
                      the child is having difficulty communicating or meeting
                      their wants and needs. Even for a verbal child, but
                      particularly for a non-verbal child, the behavior is a way
                      of communicating. It is our role to develop a
                      comprehensive ABA program to replace challenging behaviors
                      with more effective and efficient positive/functional
                      behaviors in order to get their needs and wants to be met
                      in a more socially acceptable manner.
                    </p>
                    <button
                      onClick={() => setOpenServiceCard("none")}
                      class="bg-red-400 px-6 py-2 font-semibold text-white absolute bottom-10 "
                    >
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="h-[60vh] lg:h-[90vh] bg-transparent cursor-pointer group perspective ">
              <div
                class={
                  openServiceCard == "card3"
                    ? "relative preserve-3d my-rotate-y-180 w-full h-full duration-1000"
                    : "relative preserve-3d  w-full h-full duration-1000"
                }
              >
                <div class="absolute backface-hidden  w-full h-full  flex flex-col items-center justify-center">
                  <img
                    src="https://tse2.mm.bing.net/th?id=OIP.sgJoK9FsH-Wvp9uRER8JjAHaJ6&pid=Api&P=0"
                    class="w-full h-full"
                  />
                  <button
                    onClick={() => setOpenServiceCard("card3")}
                    className="px-6 py-2 font-semibold text-black-600 bg-graylight shadow absolute bottom-10 "
                  >
                    ABA therapists Supervision
                  </button>
                </div>
                <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-graylight shadow-xl overflow-hidden">
                  <div class="text-center flex flex-col items-center justify-center h-full text-graydark px-2 pb-24">
                    {/* <h1 class="text-3xl font-semibold">The King's Man</h1> */}
                    {/* <p class="my-2">9.0 Rating</p> */}
                    <p>
                      ABA services may be conducted at home, school and/or
                      community. SWC provides supervision and training for ABA
                      therapists who work directly with clients.
                    </p>
                    <button
                      onClick={() => setOpenServiceCard("none")}
                      class="bg-red-400 px-6 py-2 font-semibold text-white absolute bottom-10 "
                    >
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className="h-full w-full bg-no-repeat bg-cover opacity-10 text-center absolute top-0"
            style={{
              backgroundImage:
                "url('https://tse2.mm.bing.net/th?id=OIP.mLUJw_huvTCMPb0bqIixjAHaFK&pid=Api&P=0')",
            }}
          >
            the
          </div>
          <div className="px-10 md:px-20 lg:px-60 2xl:px-80  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 text-center   ">
            <div className="flex flex-col items-center justify-between">
              <img className="w-16 h-16 m-2" src="assets/images/home.png" />
              <p className="font-roboto ">
                A fundamental value of SWC is compassion. Professionals who work
                in this field are committed to providing caring, empathetic, and
                non-judgmental support to individuals with special needs and
                their families.
                <br />
                Support Works Consulting services prioritize providing
                individualized support that is tailored to the unique needs and
                goals of each individual. We recognize that every person is
                different and that a one-size-fits-all approach is not
                effective.
              </p>
              <button className="uppercase border text-xl  px-2 py-1 my-5">
                Compassion & Individualized Support
              </button>
            </div>
            <div className="flex flex-col items-center justify-between">
              <img className="w-16 h-16 m-2" src="assets/images/home.png" />
              <p className="font-roboto">
                Support works consulting services are committed to using
                evidence-based practices that are effective in improving
                behavior and achieving positive outcomes.
                <br />
                Support Works Consulting services recognize that family support
                and involvement are critical to achieving positive outcomes for
                individuals with special needs. Westrive to work collaboratively
                with families to ensure our services are aligned with the
                family's goals and values.
              </p>
              <button className="uppercase text-xl border px-2 py-1 my-5">
                Evidence-Based Practices & Family-Centered Care
              </button>
            </div>
            <div className="flex flex-col items-center justify-between">
              <img className="w-16 h-16 m-2" src="assets/images/home.png" />
              <p className="font-roboto">
                Support Works Consulting iscommitted to empowering individuals
                with special needs to take an active role in their own care and
                decision-making. Wework to build skills, confidence, and
                independence in individuals, enabling them to lead fulfilling
                and meaningful lives.
                <br />
                Support Works Consulting prioritizes accountability to
                ourclients, families, and stakeholders. Weare committed to
                delivering high-quality services, measuring outcomes, and
                continually evaluating and improving ourpractices to ensure the
                best possible outcomes for the individuals they serve.
              </p>
              <button className="uppercase text-xl border px-2 py-1 my-5">
                Empowerment & Accountability
              </button>
            </div>
            <div className="flex flex-col items-center justify-between">
              <img className="w-16 h-16 m-2" src="assets/images/home.png" />
              <p className="font-roboto">
                Support Works Consulting services for schools prioritize
                collaboration with school staff, teachers, and other
                professionals. Wework closely with schools to ensure that
                ourservices align with the school's goals and priorities.
                <br />
                We provide education and training to school staff, teachers, and
                parents to help them better understand the needs of students
                with special needs. This helps to create a more inclusive and
                supportive learning environment for all students.
              </p>
              <button className="uppercase text-xl border px-2 py-1 my-5">
                Collaboration & Education and Training
              </button>
            </div>
            <div className="flex flex-col items-center justify-between">
              <img className="w-16 h-16 m-2" src="assets/images/home.png" />
              <p className="font-roboto">
                Our services for schools prioritize inclusion and we work to
                create a learning environment that is welcoming and supportive
                of all students, regardless of their abilities.
                <br />
                Support Works Consulting services for schools advocate for the
                rights of students with special needs and work to ensure that
                they receive the support and accommodations they need to succeed
                in school.
              </p>
              <button className="uppercase text-xl border px-2 py-1 my-5">
                Inclusion & Advocacy
              </button>
            </div>
            <div className="flex flex-col items-center justify-between">
              <img className="w-16 h-16 m-2 " src="assets/images/home.png" />
              <p className="font-roboto">
                Support Works Consulting services for schools use data to inform
                their decision-making and measure the effectiveness of their
                services. This helps ensure that the services provided are
                evidence-based and achieve positive student outcomes.
                <br />
                Our services for schools value and respect diversity, and
                recognizing that each student is unique and may require
                different types of support. Westrive to provide culturally
                responsive services that are sensitive to the needs and values
                of all students and their families.
              </p>
              <button className="uppercase text-xl border px-2 py-1 my-5 ">
                Data-Driven Decision Making & Respect for Diversity
              </button>
            </div>
          </div>
        </div>

        <div className=" md:px-20 lg:px-60 2xl:px-80 mt-10 md:mt-20">
          <div className="bg-[url('https://tse4.mm.bing.net/th?id=OIP.wK8KjOjCkpE1fblJkTPsQwHaEW&pid=Api&P=0')]  hover:bg-[url('https://tse3.mm.bing.net/th?id=OIP.uQPMykkDg8jY9zuwFdbO5gHaFW&pid=Api&P=0')] bg-no-repeat bg-center bg-cover relative h-[20rem] md:h-[35rem]">
            <div className="border border-gray p-2 absolute top-1/2 mx-5 md:mx-20 lg:mx-40  bg-white bg-opacity-30  ">
              <div className="border border-gray text-center p-10 md:p-10 bg-white bg-gray bg-opacity-90">
                <h1 className=" text-3xl md:text-5xl  font-noto text-black uppercase font-bold border-b-2 inline px-5">
                  the blog
                </h1>
                <p className="font-bold font-roboto mt-10 mb-2">
                  Ever wonder what's involved in hiring an interior designer?
                </p>
                <p className=" mb-2 font-roboto">
                  Follow our blog, Lux Living Weekly to learn the behind the
                  scenes of working with an interior designer. Our blog is
                  dedicated to opening the conversation, transparency and taking
                  the mystery out of the design process.
                </p>
                <p className=" mb-2 font-roboto">
                  We also share tons of inspiration through our room tours, lots
                  of design tips and ideas to get you started on your very own
                  design project
                </p>
                <button className="px-5 py-2 border mt-4 uppercase hover:bg-blue">
                  subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <AwesomeSlider className="h-screen w-screen bg-white  mt-48">
          <div className="h-screen w-screen grid gap-4 grid-cols-2 p-48 bg-white ">
            <div className=" shadow-lg">
              <h2 className=" text-2xl text-center text-black text-justify p-4 ">
                "يعطيكيالف عافية دورة رائعة وممتعة جدا" "يعطيكم العافيه وبارك
                الله فيكم ونفع بعلمكم" اخصائية نفسيه اسماء الدريبي "تعلمنا
                الكثيرو استفدنا كيف نتعامل مع أطفالنا و سلوكاتهم جزاك الله كل
                خير و نتمنى محاضرات أخرى من حضرتك" "اسلوب رائع ومفهوم وشكرا
                جزيلا" "تخطى توقعاتي" "كانت محاضرات رائعة و استفدنا كثيرا شكرا
                كثيرا" "دورة رائعة جدا، اسلوب الدكتورة يشد السامع، استفدت كثيرا
                واترقب الدورات القادمة" "الاستاذه تسنيم رائعه جدا وخبره ماشاء
                الله طويله" "اسلوب سلس وممتع" "كل شيء كان ممتاز جدًا . طريقة شرح
                الاستاذة تسنيم رائع جدًا و وواضح و طريقة اعطاءها للامثلة سهل
                كثيرًا الشرح"
              </h2>
            </div>
            <div className="flex items-center justify-center   ">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3NtYW58ZW58MHx8MHx8&w=1000&q=80"
                alt=""
                className="w-1/2 h-full rounded-md shadow-2xl"
              />
            </div>
          </div>
          {/* <div className="grid gap-4 grid-cols-2 p-48 text-white">
            <div className="h-80 w-72 rounded-lg">
              <img
                src="https://img.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg"
                alt=""
                className="w-full h-full rounded-sm animate-bounce"
              />
            </div>
            <div className="h-full w-full border-2 border-solid border-white p-1 animate-pulse">
              <h2 className="border-2 border-solid border-white h-full w-full p-4 text-2xl text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sapiente tempora veniam delectus! Unde perferendis ex reiciendis
                facilis id asperiores molestiae nesciunt corporis veniam esse
                facere qui, ullam atque nam ipsam?
              </h2>
            </div>
          </div>

          <div className="grid gap-4 grid-cols-2 p-48 text-white">
            <div className="h-80 w-72 rounded-lg">
              <img
                src="https://media.istockphoto.com/id/1069160140/photo/back-view-of-the-thoughtful-businessman-wearing-a-suit-standing-in-his-office-hands-in.jpg?s=612x612&w=0&k=20&c=XJ7VYP7kogblV83Qyj91OCQY3Ycg9W1qawk5L8_LsMo="
                alt=""
                className="w-full h-full rounded-sm animate-bounce"
              />
            </div>
            <div className="h-full w-full border-2 border-solid border-white p-1 animate-pulse">
              <h2 className="border-2 border-solid border-white h-full w-full p-4 text-2xl text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sapiente tempora veniam delectus! Unde perferendis ex reiciendis
                facilis id asperiores molestiae nesciunt corporis veniam esse
                facere qui, ullam atque nam ipsam?
              </h2>
            </div>
          </div> */}
        </AwesomeSlider>
      </Layout>
    </>
  );
}
