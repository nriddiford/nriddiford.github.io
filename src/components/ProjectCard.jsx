import { Box, Button, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

export default function ProjectCard({
  title,
  description,
  features,
  tags,
  icon: Icon,
  websiteUrl,
  githubUrl,
  reversed = false,
  accentColor = "blue",
}) {
  const accentColors = {
    blue: "from-blue-400/10 to-blue-500/10",
    cyan: "from-cyan-400/10 to-blue-400/10",
    slate: "from-slate-400/10 to-slate-500/10",
    sky: "from-sky-400/10 to-blue-500/10",
  };

  const iconColors = {
    blue: "text-blue-400",
    cyan: "text-cyan-400",
    slate: "text-slate-400",
    sky: "text-sky-400",
  };

  return (
    <Flex
      direction={{ initial: "column", md: reversed ? "row-reverse" : "row" }}
      gap={{ initial: "6", md: "6", lg: "8" }}
      align="center"
      className="py-6 md:py-8 lg:py-12"
    >
      {/* Visual Side */}
      <Box className="w-full md:w-1/2 px-4 md:px-0">
        <Card
          size="4"
          onClick={() => window.open(websiteUrl, "_blank")}
          className="group overflow-hidden relative transition-all duration-200 hover:translate-y-[-2px] cursor-pointer"
          style={{
            background: "rgba(18, 18, 18, 0.8)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(107, 163, 208, 0.1)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "linear-gradient(135deg, rgba(107, 163, 208, 0.03), rgba(107, 163, 208, 0.01))",
            }}
          ></div>

          <Flex
            direction="column"
            align="center"
            justify="center"
            className="relative z-10 p-8 md:p-12 lg:p-16"
            gap={{ initial: "4", md: "6" }}
          >
            {/* Large Icon */}
            <Box className="relative">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${accentColors[accentColor]} blur-3xl opacity-30`}
              ></div>
              <Flex
                align="center"
                justify="center"
                className="relative w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-3xl transition-transform duration-200 group-hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(107, 163, 208, 0.1), rgba(107, 163, 208, 0.05))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(107, 163, 208, 0.2)",
                }}
              >
                <Icon
                  size={56}
                  className={`${iconColors[accentColor]} md:w-16 md:h-16 lg:w-18 lg:h-18`}
                  strokeWidth={1.2}
                />
              </Flex>
            </Box>

            {/* Logo/Title */}
            <Heading
              size={{ initial: "6", md: "7", lg: "8" }}
              className="font-light text-center transition-colors duration-200"
              style={{ color: "var(--text-contrast)" }}
            >
              {title}
            </Heading>

            {/* View Project Button */}
            <Button size="2" variant="soft" className="mt-2">
              View Project
              <ArrowUpRight size={14} />
            </Button>
          </Flex>
        </Card>
      </Box>

      {/* Content Side */}
      <Flex
        direction="column"
        gap={{ initial: "4", md: "5" }}
        className="w-full md:w-1/2 px-4 md:px-0"
      >
        <Box>
          <Heading
            size={{ initial: "6", md: "7", lg: "8" }}
            className="font-light mb-4 md:mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            {title}
          </Heading>

          {/* Tags */}
          {tags && (
            <Flex gap="2" wrap="wrap" className="mt-2">
              {tags.map((tag, index) => (
                <Box
                  key={index}
                  className="px-3 py-1 rounded-full text-xs"
                  style={{
                    background: "rgba(107, 163, 208, 0.1)",
                    border: "1px solid rgba(107, 163, 208, 0.2)",
                    color: "var(--brand-blue)",
                  }}
                >
                  {tag}
                </Box>
              ))}
            </Flex>
          )}
        </Box>

        <Text
          size={{ initial: "3", md: "4" }}
          style={{ color: "var(--text-faded)", lineHeight: "1.8" }}
        >
          {description}
        </Text>

        {/* Features List */}
        <Box className="space-y-2 md:space-y-3 mt-2">
          <Text
            size={{ initial: "1", md: "2" }}
            weight="medium"
            style={{
              color: "var(--text-contrast)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Key Features
          </Text>
          <Flex direction="column" gap={{ initial: "2", md: "3" }}>
            {features.map((feature, index) => (
              <Flex key={index} gap="3" align="start">
                <div
                  className={`w-1 h-1 rounded-full ${
                    accentColor === "blue"
                      ? "bg-blue-400"
                      : accentColor === "cyan"
                      ? "bg-cyan-400"
                      : accentColor === "slate"
                      ? "bg-slate-400"
                      : "bg-sky-400"
                  } mt-2 flex-shrink-0`}
                ></div>
                <Text
                  size={{ initial: "2", md: "3" }}
                  style={{ color: "var(--gray-11)", lineHeight: "1.6" }}
                >
                  {feature}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Box>

        {/* Action Buttons */}
        <Flex gap="3" className="mt-4 md:mt-6" wrap="wrap">
          {websiteUrl && (
            <Box
              onClick={() => window.open(websiteUrl, "_blank")}
              className="cursor-pointer px-6 py-3 rounded-lg transition-all duration-300 hover:translate-y-[-2px]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(107, 163, 208, 0.2), rgba(107, 163, 208, 0.1))",
                border: "1px solid rgba(107, 163, 208, 0.3)",
              }}
            >
              <Flex align="center" gap="2">
                <Text
                  size="3"
                  weight="medium"
                  style={{ color: "var(--brand-blue)" }}
                >
                  Visit Site
                </Text>
                <ExternalLink
                  size={16}
                  style={{ color: "var(--brand-blue)" }}
                />
              </Flex>
            </Box>
          )}

          {githubUrl && (
            <Box
              onClick={() => window.open(githubUrl, "_blank")}
              className="cursor-pointer px-6 py-3 rounded-lg transition-all duration-300 hover:translate-y-[-2px]"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <Flex align="center" gap="2">
                <Github size={16} style={{ color: "var(--text-faded)" }} />
                <Text
                  size="3"
                  weight="medium"
                  style={{ color: "var(--text-faded)" }}
                >
                  GitHub
                </Text>
              </Flex>
            </Box>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
