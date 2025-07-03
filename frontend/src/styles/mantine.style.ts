import { MantineThemeOverride } from "@mantine/core";

export default <MantineThemeOverride>{
  colors: {
    flame: [
      "#FFE5E0", // 0 - lightest
      "#FFCFC2", // 1
      "#FFB39E", // 2
      "#FF9477", // 3
      "#FF6F4E", // 4
      "#FF4E33", // 5 - main
      "#E6452D", // 6
      "#CC3C27", // 7
      "#B23322", // 8
      "#8C2719", // 9 - darkest
    ],
  },
  primaryColor: "flame",
  components: {
    Modal: {
      styles: (theme) => ({
        title: {
          fontSize: theme.fontSizes.lg,
          fontWeight: 700,
        },
      }),
    },
  },
};
