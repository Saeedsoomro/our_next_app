import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider_Values = () => {
  return (
    <AutoplaySlider
      play={true}
      infinite={true}
      bullets={false}
      interval={5000}
      transitionDelay={100}
      cancelOnInteraction={false} // should stop playing on user interaction
      mobileTouch={true}
      className=""
    >
      <div className="bg-white h-full lg:pt-10 ">
        <h1 className="text-xl md:text-2xl text-graydark font-extrabold fonto-roboto py-2 md:py-4">
          VALUES
        </h1>
        <h2 className="text-lg md:text-xl text-graydark font-bold fonto-roboto md:py-4">
          Compassion
        </h2>
        <p className="md:py-4 font-roboto text-sm md:text-xl text-graydark">
          A fundamental value of SWC is compassion. Professionals who work in
          this field are committed to providing caring, empathetic, and
          non-judgmental support to individuals with special needs and their
          families.
        </p>
      </div>

      <div className="bg-white h-full lg:lg:pt-10 ">
        <h1 className="text-xl md:text-2xl text-graydark font-extrabold fonto-roboto py-2 md:py-4">
          VALUES
        </h1>
        <h2 className="text-lg md:text-xl text-graydark font-bold fonto-roboto md:py-4">
          Individualized Support
        </h2>
        <p className="md:py-4 font-roboto text-sm md:text-xl text-graydark">
          Support Works Consulting services prioritize providing individualized
          support that is tailored to the unique needs and goals of each
          individual. We recognize that every person is different and that a
          one-size-fits-all approach is not effective.
        </p>
      </div>
      <div className="bg-white h-full lg:pt-10">
        <h1 className="text-xl md:text-2xl text-graydark font-extrabold fonto-roboto py-2 md:py-4">
          VALUES
        </h1>
        <h2 className="text-lg md:text-xl text-graydark font-bold fonto-roboto md:py-4">
          Evidence-Based Practices
        </h2>
        <p className="md:py-4 font-roboto text-sm md:text-xl text-graydark">
          Support works consulting services are committed to using
          evidence-based practices that are effective in improving behavior and
          achieving positive outcomes.
        </p>
      </div>
      <div className="bg-white h-full lg:pt-10 ">
        <h1 className="text-xl md:text-2xl text-graydark font-extrabold fonto-roboto py-2 md:py-4">
          VALUES
        </h1>
        <h2 className="text-lg md:text-xl text-graydark font-bold fonto-roboto md:py-4">
          Family-Centered Care
        </h2>
        <p className="md:py-4 font-roboto text-sm md:text-xl text-graydark">
          Support Works Consulting services recognize that family support and
          involvement are critical to achieving positive outcomes for
          individuals with special needs. Westrive to work collaboratively with
          families to ensure our services are aligned with the family's goals
          and values.
        </p>
      </div>
      <div className="bg-white h-full lg:pt-10 ">
        <h1 className="text-xl md:text-2xl text-graydark font-extrabold fonto-roboto py-2 md:py-4">
          VALUES
        </h1>
        <h2 className="text-lg md:text-xl text-graydark font-bold fonto-roboto md:py-4">
          Empowerment
        </h2>
        <p className="md:py-4 font-roboto text-sm md:text-xl text-graydark">
          Support Works Consulting iscommitted to empowering individuals with
          special needs to take an active role in their own care and
          decision-making. Wework to build skills, confidence, and independence
          in individuals, enabling them to lead fulfilling and meaningful lives.
        </p>
      </div>
      <div className="bg-white h-full lg:pt-10">
        <h1 className="text-xl md:text-2xl text-graydark font-extrabold fonto-roboto py-2 md:py-4">
          VALUES
        </h1>
        <h2 className="text-lg md:text-xl text-graydark font-bold fonto-roboto md:py-4">
          Accountability
        </h2>
        <p className="md:py-4 font-roboto text-sm md:text-xl text-graydark">
          Support Works Consulting prioritizes accountability to ourclients,
          families, and stakeholders. Weare committed to delivering high-quality
          services, measuring outcomes, and continually evaluating and improving
          ourpractices to ensure the best possible outcomes for the individuals
          they serve.
        </p>
      </div>
      <div className="bg-white h-full lg:pt-10 ">
        <h1 className="text-xl md:text-2xl text-graydark font-extrabold fonto-roboto py-2 md:py-4">
          VALUES
        </h1>
        <h2 className="text-lg md:text-xl text-graydark font-bold fonto-roboto md:py-4">
          Collaboration
        </h2>
        <p className="py-4 font-roboto text-sm md:text-xl text-graydark">
          Support Works Consulting services for schools prioritize collaboration
          with school staff, teachers, and other professionals. Wework closely
          with schools to ensure that ourservices align with the school's goals
          and priorities.
        </p>
      </div>
      <div className="bg-white h-full lg:pt-10">
        <h1 className="text-xl md:text-2xl text-graydark font-extrabold fonto-roboto py-2 md:py-4">
          VALUES
        </h1>
        <h2 className="text-lg md:text-xl text-graydark font-bold fonto-roboto md:py-4">
          Education and Training
        </h2>
        <p className="md:py-4 font-roboto text-sm md:text-xl text-graydark">
          We provide education and training to school staff, teachers, and
          parents to help them better understand the needs of students with
          special needs. This helps to create a more inclusive and supportive
          learning environment for all students.
        </p>
      </div>
      <div className="bg-white h-full lg:pt-10 ">
        <h1 className="text-xl md:text-2xl text-graydark font-extrabold fonto-roboto py-2 md:py-4">
          VALUES
        </h1>
        <h2 className="text-lg md:text-xl text-graydark font-bold fonto-roboto md:py-4">
          Inclusion
        </h2>
        <p className="md:py-4 font-roboto text-sm md:text-xl text-graydark">
          Our services for schools prioritize inclusion and we work to create a
          learning environment that is welcoming and supportive of all students,
          regardless of their abilities.
        </p>
      </div>
      <div className="bg-white h-full lg:pt-10">
        <h1 className="text-xl md:text-2xl text-graydark font-extrabold fonto-roboto py-2 md:py-4">
          VALUES
        </h1>
        <h2 className="text-lg md:text-xl text-graydark font-bold fonto-roboto md:py-4">
          Advocacy
        </h2>
        <p className="md:py-4 font-roboto text-sm md:text-xl text-graydark">
          Support Works Consulting services for schools advocate for the rights
          of students with special needs and work to ensure that they receive
          the support and accommodations they need to succeed in school.
        </p>
      </div>
      <div className="bg-white h-full lg:pt-10 ">
        <h1 className="text-xl md:text-2xl text-graydark font-extrabold fonto-roboto py-2 md:py-4">
          VALUES
        </h1>
        <h2 className="text-lg md:text-xl text-graydark font-bold fonto-roboto md:py-4">
          Data-Driven Decision Making
        </h2>
        <p className="md:py-4 font-roboto text-sm md:text-xl text-graydark">
          Support Works Consulting services for schools use data to inform their
          decision-making and measure the effectiveness of their services. This
          helps ensure that the services provided are evidence-based and achieve
          positive student outcomes.
        </p>
      </div>
      <div className="bg-white h-full lg:pt-10">
        <h1 className="text-xl md:text-2xl text-graydark font-extrabold fonto-roboto py-2 md:py-4">
          VALUES
        </h1>
        <h2 className="text-lg md:text-xl text-graydark font-bold fonto-roboto md:py-4">
          Respect for Diversity
        </h2>
        <p className="md:py-4 font-roboto text-sm md:text-xl text-graydark">
          Our services for schools value and respect diversity, and recognizing
          that each student is unique and may require different types of
          support. Westrive to provide culturally responsive services that are
          sensitive to the needs and values of all students and their families.
        </p>
      </div>
    </AutoplaySlider>
  );
};

export default Slider_Values;
