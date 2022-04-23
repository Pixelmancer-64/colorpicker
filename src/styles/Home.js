const styles = {
  root: {
    fontFamily: '"Rubik", "sans-serif"',
  },

  hero: {},

  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "1vh 3vw",
    maxWidth: "130rem",
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "8vh",
    gap: "5vw",
  },

  button: {
    fontSize: "2rem",
    padding: "1vh 3vw",
    borderRadius: "16px",
    fontWeight: "500",
    border: "2px solid #999",
    color: "#4A74FF",
    transition: "filter 150ms",
    "&:hover":{
      filter: "brightness(95%)",
    }
  },

  special: {
    backgroundColor: "#4A74FF",
    color: "white",
    border: "2px solid #4A74FF",
    transition: "filter 150ms",
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
    fontSize: "1.5em",
  },

  rainbowAnimated: {
    background:
      "linear-gradient(to right, #6666ff, #0099ff , #EC0F47, #6666ff)",
    backgroundClip: "text",
    color: "transparent",
    animation: "$rainbowAnimation 10s infinite forwards",
    backgroundSize: "750px",
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
