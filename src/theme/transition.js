const transition = Object.freeze({
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",

  // Editorial movement
  gentle: "500ms",

  // Luxury image movement
  cinematic: "700ms",

  // Brand rhythm
  easing: {
    standard: "ease-in-out",
    smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
    elegant:
      "cubic-bezier(0.22, 1, 0.36, 1)",
  },
});

export default transition;
