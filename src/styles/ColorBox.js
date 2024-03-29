const styles = {
  "@global": {
    ".ColorBox": {
      display: "flex",
      flexDirection: "column",
      flexBasis: "20%",
      position: "relative",
      cursor: "pointer",
      "@media (max-width: 720px)": {
        flexBasis: '100%'
      },
    },
    ".ColorBox button": {
      cursor: "pointer",
    },
    ".copy-button": {
      width: "7rem",
      height: "2rem",
      top: "50%",
      left: "50%",
      position: "absolute",
      transform: "translate(-50%, -50%)",
      outline: "none",
      lineHeight: "2rem",
      textTransform: "uppercase",
      border: "none",
      fontSize: "1rem",
      opacity: "0",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      "@media (max-width: 720px)": {
        height: '1rem'
      },
    },
    ".ColorBox-overlay": {
      opacity: "0",
      width: "100%",
      height: "100%",
      transition: "transform .6s ease-in-out",
    },
    ".ColorBox-overlay.show": {
      opacity: "1",
      transform: "scale(10)",
      zIndex: "9",
    },
    ".copy-msg": {
      position: "fixed",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      visibility: "hidden",
      opacity: "0",
      transition: "visibility 0s, opacity 0.5s linear",
      fontSize: "4rem",
      transform: "scale(.1)",
      fallbacks: [
        {
          opacity: "0",
        },
      ],
    },
    ".copy-msg h1": {
      fontWeight: "400",
      textShadow: "1px 2px black",
      width: "100%",
      marginBottom: "0",
      textAlign: "center",
      padding: "1rem",
      textTransform: "uppercase",
    },
    ".copy-msg.show": {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      fontSize: "4rem",
      transform: "scale(1)",
      zIndex: "99",
      opacity: "1",
      visibility: "visible",
      transitionDelay: ".3s",
    },
    ".ColorBox:hover .copy-button": {
      opacity: "1",
      transition: ".4s ease-in-out",
    },
    ".box-content": {
      position: "absolute",
      bottom: "0",
      padding: ".4rem",
      fontWeight: "600",
      letterSpacing: "1px",
      textTransform: "uppercase",
      "@media (max-width: 720px)": {
        padding: '0',
        position: 'relative',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center'
      },
    },
    ".see-more": {
      position: "absolute",
      border: "none",
      right: "0",
      bottom: "0",
      fontSize: "1rem",
      textTransform: "uppercase",
      padding: ".4rem",
      letterSpacing: "1px",
    },
  },
};

export default styles