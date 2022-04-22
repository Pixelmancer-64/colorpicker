const styles = {
  root: {
    fontFamily: '"Rubik", "sans-serif"',
  },

  hero: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "4.8rem 5.2rem",
  },

  container: {
    maxWidth: "130rem",
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "9.6rem",
    alignItems: "center",
  },

  buttons: {
    display: "flex",
    gap: "1.6rem",
  },
  button: {
    fontSize: "2rem",
    padding: "1.2rem 3.2rem",
    borderRadius: "12px",
    fontWeight: "500",
    transition: "background-color 250ms ease-out",
    display: "inline-block",
  },

  introduction: {
    fontSize: "4rem",
    fontWeight: "700",
    lineHeight: "1.1em",
    color: "#000",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },

  description: {
    fontSize: "2rem",
  },

  rainbow: {
    fontSize: "1.5em"
  },

  rainbowAnimated: {
    background:
      "linear-gradient(to right, #6666ff, #0099ff , #EC0F47, #6666ff)",
    backgroundClip: "text",
    color: "transparent",
    animation: "$rainbowAnimation 10s infinite forwards",
    backgroundSize: "50vw 50vh",
  },

  "@keyframes rainbowAnimation": {
    "0%": {
      backgroundPositionX: "0%",
    },
    "100%": {
      backgroundPositionX: "50vw",
    },
  },
};

export default styles;
