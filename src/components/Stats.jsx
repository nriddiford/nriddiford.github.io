import { Box, Container, Flex, Text, Section } from "@radix-ui/themes";

export default function Stats() {
  const stats = [
    { value: "2", label: "Active Projects" },
    { value: "10K+", label: "Active Users" },
    { value: "100%", label: "Open Source" },
    { value: "2024", label: "Founded" },
  ];

  return (
    <Section
      size="2"
      className="border-y border-gray-800/50"
      style={{
        background: "rgba(0, 0, 0, 0.2)",
      }}
    >
      <Container size="4">
        <Flex
          direction={{ initial: "column", sm: "row" }}
          justify="between"
          gap="6"
          className="py-8"
        >
          {stats.map((stat, index) => (
            <Flex
              key={index}
              direction="column"
              align="center"
              gap="2"
              className="flex-1"
            >
              <Text
                size="8"
                weight="bold"
                style={{
                  color: "var(--brand-blue)",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                }}
              >
                {stat.value}
              </Text>
              <Text
                size="2"
                style={{
                  color: "var(--text-faded)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {stat.label}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Container>
    </Section>
  );
}
