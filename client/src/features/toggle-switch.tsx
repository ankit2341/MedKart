import { useTheme } from "@/context/theme-context";
import { Switch } from "@chakra-ui/react";

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();

  return <Switch onChange={toggleTheme} size="lg" colorScheme="cyan" />;
};

export default ThemeToggle;
