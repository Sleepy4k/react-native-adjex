// Import Helpers
import Dimension from "./Dimension";

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const Responsive = {
  horizontal: (size) => (Dimension.width / guidelineBaseWidth) * size,
  vertical: (size) => (Dimension.height / guidelineBaseHeight) * size,
  moderate: (size, factor = 0.5) =>
    size + (Responsive.horizontal(size) - size) * factor,
};

export default Responsive;
