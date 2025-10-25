import {
  Box,
  Container,
  Heading,
  Section,
  Separator,
  Text,
} from "@radix-ui/themes";
import { Brain, Music } from "lucide-react";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";

function App() {
  return (
    <Box
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--color-background)",
      }}
    >
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* Projects Section */}
      <Section size="3" className="py-8 md:py-12 lg:py-16">
        <Container size="4" className="px-4 md:px-6">
          {/* Section Header */}
          <Box className="text-center mb-8 md:mb-12 lg:mb-16">
            <Heading
              size={{ initial: "6", md: "7", lg: "8" }}
              className="font-light mb-3 md:mb-4"
              style={{
                background: "linear-gradient(to right, #fff, #a0a0a0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our Projects
            </Heading>
            <Text size={{ initial: "3", md: "4" }} style={{ color: "var(--text-faded)" }}>
              Innovative solutions that make an impact
            </Text>
          </Box>

          {/* Researching.io Project */}
          <ProjectCard
            title="researching.io"
            description="A career transition platform connecting PhD students and postdocs with mentors who have successfully moved from academia to industry. Helping early career researchers discover opportunities, upskill, and connect with companies seeking PhD-level talent."
            tags={["Career Transitions", "Mentorship", "Recruitment", "Job Board"]}
            features={[
              "Connect with an international network of PhD mentors",
              "Get career advice from ex-academics in various industries",
              "Browse company career fairs and job opportunities",
              "Access skills database to prepare for non-academic careers",
              "Free platform for mentees, mentors, and companies",
            ]}
            icon={Brain}
            websiteUrl="https://www.researching.io"
            githubUrl="https://github.com/nriddiford/researching"
            accentColor="blue"
            reversed={false}
          />

          <Separator size="4" className="my-12 opacity-30" />

          {/* Jamdar Project */}
          <ProjectCard
            title="jamdar"
            description="A community platform connecting musicians in their local area. Jamdar makes it easy to find jam buddies, discover local music events, and build your music network. Not just a platform — your local music map!"
            tags={["Community Building", "Find Musicians", "Start a Band", "Connect"]}
            features={[
              "Interactive map showing musicians in your neighborhood",
              "Advanced filtering by instrument, genre, and skill level",
              "Direct messaging and real-time chat functionality",
              "Event discovery and jam session planning",
              "Community wall for local music scene updates",
              "Progressive Web App with offline support",
            ]}
            icon={Music}
            websiteUrl="https://jamdar.app"
            githubUrl="https://github.com/nriddiford/jamjar"
            accentColor="cyan"
            reversed={true}
          />
        </Container>
      </Section>

      {/* Call to Action Section */}
      <Section
        size="3"
        className="py-8 md:py-12 lg:py-16"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--color-surface))",
        }}
      >
        <Container size="3" className="px-4 md:px-6">
          <Box
            className="glass p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl text-center"
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            <Heading size={{ initial: "5", md: "6" }} className="font-light mb-3 md:mb-4">
              Interested in collaborating?
            </Heading>
            <Text
              size={{ initial: "2", md: "3" }}
              style={{ color: "var(--text-faded)" }}
              className="mb-4 md:mb-6 block"
            >
              We're always looking for interesting projects and partnerships.
              <br className="hidden md:block" />
              Get in touch to discuss how we can work together.
            </Text>
            <a href="mailto:nick@forthdot.com" className="inline-block">
              <Box
                className="px-6 py-3 rounded-lg glass hover-lift transition-all"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(59, 130, 246, 0.2))",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                }}
              >
                <Text size="3" weight="medium">
                  Get in Touch
                </Text>
              </Box>
            </a>
          </Box>
        </Container>
      </Section>

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default App;
