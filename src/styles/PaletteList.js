const styles = {
  "@global": {
    body: {
      height: "100%",
      backgroundColor: "#071A2E",
    },
  },
  root: {
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    color: "white",
    fontSize: '1.5rem'
  },
  miniPalettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  },
};

export default styles;
