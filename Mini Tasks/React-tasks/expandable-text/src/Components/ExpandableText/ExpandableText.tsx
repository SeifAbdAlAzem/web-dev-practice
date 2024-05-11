import { useState } from "react";
import styles from "./ExpandableText.module.css";

interface ExpandableTextProps {
  maxChars?: number;
  children: string;
}

const ExpandableText = ({ maxChars = 100, children }: ExpandableTextProps) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggle = () => {
    setExpanded(!isExpanded);
  };

  const truncatedText = children.slice(0, maxChars) + "...";
  const displayText = isExpanded ? children : truncatedText;

  return (
    <div className={styles.expandableText}>
      <p
        className={isExpanded ? styles.animateReveal : styles.hide}
        aria-expanded={isExpanded}
        aria-label="Expandable Text"
      >
        {displayText}
        {children.length > maxChars && (
          <button
            type="button"
            onClick={toggle}
            className={styles.toggleButton}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        )}
      </p>
    </div>
  );
};

export default ExpandableText;
