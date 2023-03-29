import { dimension } from "@constants";

const base = {
  width: 375,
  height: 812,
};

const responsive = {
  horizontal: (size) => (dimension.width / base.width) * size,
  vertical: (size) => (dimension.height / base.height) * size,
  moderate: (size, factor = 0.5) =>
    size + (responsive.horizontal(size) - size) * factor,
};

export default responsive;

// Path: src\helpers\responsive.js
