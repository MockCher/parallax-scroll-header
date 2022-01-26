import "./styles.css";

export default function ParalaxHeader({ children, layer1, layer2, layer3 }) {
  return (
    <div>
      <div className="paralax-wrapper">
        <header>
          {layer1}
          <div className="background">{layer2}</div>
          <div className="foreground">{layer3}</div>
        </header>
        <section>{children}</section>
      </div>
    </div>
  );
}
