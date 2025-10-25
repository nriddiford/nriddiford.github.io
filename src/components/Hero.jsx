import { Box, Container, Flex, Heading, Text, Section } from "@radix-ui/themes";

export default function Hero() {
  return (
    <Section
      size="3"
      className="relative overflow-hidden py-12 md:py-20 lg:py-32"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-background), var(--color-surface))",
      }}
    >
      {/* Background gradient mesh */}
      <div className="absolute inset-0 gradient-mesh opacity-30"></div>

      {/* Radial gradient overlays */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>

      <Container size="4" className="relative z-10 px-4 md:px-6">
        <Flex direction="column" align="center" gap={{ initial: "4", md: "6" }} className="text-center">
          {/* Logo/Brand Icon */}
          <Box className="relative">
            <div className="absolute inset-0 bg-blue-400/20 blur-xl animate-pulse"></div>
            <Box className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
              <img
                src="/forthdot-logo-dark.svg"
                alt="forthdot logo"
                className="w-full h-full object-contain"
              />
            </Box>
          </Box>

          {/* Main Heading */}
          <Heading
            size={{ initial: "8", md: "9" }}
            className="font-light tracking-tight mb-4 md:mb-6"
            style={{
              background: "linear-gradient(to right, #fff, #a0a0a0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            forthdot
          </Heading>

          {/* Tagline */}
          <Box className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-blue-400/20 bg-blue-400/5">
            <Text size={{ initial: "1", md: "2" }} style={{ color: "var(--brand-blue)" }}>
              Software Development & Product Design
            </Text>
          </Box>

          {/* Subtitle */}
          <Text
            size={{ initial: "4", md: "5", lg: "6" }}
            className="max-w-2xl font-light px-4"
            style={{ color: "var(--text-contrast)" }}
          >
            Building innovative tools that transform how people connect
          </Text>

          {/* Description */}
          <Text
            size={{ initial: "2", md: "3" }}
            className="max-w-3xl leading-relaxed px-4"
            style={{ color: "var(--text-faded)" }}
          >
            We create products that solve real problems. From career transition
            platforms to community-building tools, our focus is on designing
            elegant solutions with lasting impact.
          </Text>

          {/* Decorative elements */}
          <Flex gap="2" className="mt-4">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
            <div
              className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
}
