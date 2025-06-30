import { CSSProperties } from "react";

const HintBox = ({
  message,
  type,
  style,
}: {
  message: string;
  type: "info" | "error" | "warning";
  style?: CSSProperties
}) => {
  const getTypeStyles = () => {
    switch (type) {
      case "error":
        return "text-red-600";
      case "warning":
        return "text-amber-600";
      case "info":
      default:
        return "text-blue-600";
    }
  };

  return (
    <div className={`text-sm ${getTypeStyles()}`} style={style}>
      <span dangerouslySetInnerHTML={{ __html: message as string }} />
    </div>
  );
};

export { HintBox }