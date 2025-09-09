import { Container } from "../../components/container";
import { SectionHeading } from "../../components/section-heading";

const About = () => {
  return (
    <div className="pt-20">
      <Container className="border-divide border-x">
        <div className="py-20">
          <SectionHeading>About Notus</SectionHeading>
          <div className="mt-8 max-w-3xl">
            <p className="text-lg text-gray-600 dark:text-neutral-400">
              Notus is a cutting-edge platform that empowers technical teams to create, 
              simulate, and manage AI-driven workflows visually. Our intuitive platform 
              helps you build the next generation of intelligent applications with confidence.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
