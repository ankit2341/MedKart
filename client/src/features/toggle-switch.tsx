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
        <Box pos="absolute" top={"3px"} left={"6px"} color="brand.primary">
          <FontAwesomeIcon icon={faMoon} />
        </Box>
      )}
      {theme === "dark" && (
        <Box pos="absolute" top={"3px"} right={"7px"} color={"brand.primary"}>
          <FontAwesomeIcon icon={faMoon} />
        </Box>
      )}
    </Box>
  );
};

export default ThemeToggle;
