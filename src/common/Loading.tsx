import { Dots } from "react-activity";
import "./loading.css";
import "react-activity/dist/library.css";

const Loading = () => {
  return (
    <div className="loading">
      <Dots color="#727981" size={32} speed={1} animating={true} />
    </div>
  );
};

export default Loading;
