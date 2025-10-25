import { Box, Container, Flex, Text, Separator } from "@radix-ui/themes";
import { Github, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      className="py-12"
      style={{
        background: "var(--color-surface)",
        borderTop: "1px solid var(--gray-4)",
      }}
    >
      <Container size="4">
        <Flex direction="column" gap="6">
          {/* Main Footer Content */}
          <Flex
            direction={{ initial: "column", md: "row" }}
            justify="between"
            align={{ initial: "center", md: "start" }}
            gap="6"
          >
            {/* Brand Section */}
            <Flex
              direction="column"
              gap="2"
              align={{ initial: "center", md: "start" }}
            >
              <Text size="5" weight="medium" className="font-light">
                forthdot
              </Text>
              <Text size="2" style={{ color: "var(--gray-11)" }}>
                Building the future, one project at a time
              </Text>
            </Flex>

            {/* Links Section */}
            <Flex
              direction="column"
              gap="3"
              align={{ initial: "center", md: "end" }}
            >
              <Text
                size="2"
                weight="medium"
                style={{ color: "var(--gray-12)" }}
              >
                Connect
              </Text>
              <Flex gap="4">
                <a
                  href="https://github.com/nriddiford"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="GitHub"
                >
                  <Flex
                    align="center"
                    justify="center"
                    className="w-10 h-10 rounded-lg glass transition-all hover:scale-110"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <Github
                      size={20}
                      className="transition-colors group-hover:text-blue-400"
                      style={{ color: "var(--gray-11)" }}
                    />
                  </Flex>
                </a>

                <a
                  href="mailto:nick@forthdot.com"
                  className="group"
                  aria-label="Email"
                >
                  <Flex
                    align="center"
                    justify="center"
                    className="w-10 h-10 rounded-lg glass transition-all hover:scale-110"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <Mail
                      size={20}
                      className="transition-colors group-hover:text-blue-400"
                      style={{ color: "var(--gray-11)" }}
                    />
                  </Flex>
                </a>
              </Flex>
            </Flex>
          </Flex>

          <Separator size="4" />

          {/* Copyright */}
          <Flex justify="center">
            <Text size="2" style={{ color: "var(--gray-11)" }}>
              © {currentYear} forthdot. All rights reserved.
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
