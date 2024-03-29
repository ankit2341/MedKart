import { useTheme } from "@/context/theme-context";
import { Box, Switch } from "@chakra-ui/react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeToggle = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <Box pos="relative">
      <Switch
        onChange={toggleTheme}
        size="lg"
        isChecked={theme === "dark"}
        colorScheme="cyan"
      />
      {theme === "light" && (
        <Box pos="absolute" top={"3px"} right={1} color="brand.background">
          <FontAwesomeIcon icon={faMoon} />
        </Box>
      )}
      {theme === "dark" && (
        <Box pos="absolute" top={"3px"} left={"6px"}>
          <FontAwesomeIcon icon={faSun} />
        </Box>
      )}
    </Box>
  );
};

export default ThemeToggle;
