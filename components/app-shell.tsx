import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Box,
  NavLink,
  Center,
  Group,
  ActionIcon,
  useMantineColorScheme,
} from "@mantine/core";
import {
  IconMoonStars,
  IconPhotoSensor,
  IconPhotoSensor2,
  IconSun,
} from "@tabler/icons-react";
import { useRouter } from "next/router";

export interface ContentProps {
  children: JSX.Element;
}

export default function AppShellDemo(props: ContentProps) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const router = useRouter();

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Navbar.Section>
            <Box>
              <Navbar.Section>
                <Box>
                  <NavLink
                    label="IR Sensor"
                    icon={
                      <div style={{ width: "8px", marginRight: "10px" }}>
                        <IconPhotoSensor2></IconPhotoSensor2>
                      </div>
                    }
                    onClick={() => {
                      router.push("/ir");
                    }}
                  />
                </Box>
              </Navbar.Section>
              <Navbar.Section>
                <Box>
                  <NavLink
                    label="Ultrasonic"
                    icon={
                      <div style={{ width: "8px", marginRight: "10px" }}>
                        <IconPhotoSensor></IconPhotoSensor>
                      </div>
                    }
                    onClick={() => {
                      router.push("/ultrasonic");
                    }}
                  />
                </Box>
              </Navbar.Section>
            </Box>
          </Navbar.Section>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Group position="left">
              <ActionIcon
                variant="outline"
                color={dark ? "yellow" : "blue"}
                onClick={() => toggleColorScheme()}
                title="Toggle color scheme"
              >
                {dark ? (
                  <IconSun size="1.1rem" />
                ) : (
                  <IconMoonStars size="1.1rem" />
                )}
              </ActionIcon>
              <Text>Change Theme</Text>
            </Group>
          </Aside>
        </MediaQuery>
      }
      footer={
        <Footer height={60} p="md">
          <Center mx={"auto"}>
            <Text fw={"bold"}>© Cloud Sensor Data 2023</Text>
          </Center>
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Cloud Sensor Data</Text>
          </div>
        </Header>
      }
    >
      {props.children}
    </AppShell>
  );
}
