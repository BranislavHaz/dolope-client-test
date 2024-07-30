import * as $ from "@/styles/components/steps/step4/ConfettiAnimation.styled";

const ConfettiAnimation = () => {
  const confettiColors = [
    "#FFC700",
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FF00FF",
  ];

  const confettiElements = Array.from({ length: 100 }).map((_, index) => {
    const color =
      confettiColors[Math.floor(Math.random() * confettiColors.length)];
    const duration = Math.random() * 3 + 2; // Trvanie animácie medzi 2 a 5 sekundami
    const leftPosition = Math.random() * 100; // Náhodná pozícia zľava

    return (
      <$.ConfettiPiece
        key={index}
        color={color}
        duration={duration}
        style={{ left: `${leftPosition}%` }}
      />
    );
  });

  return <$.ConfettiWrapper>{confettiElements}</$.ConfettiWrapper>;
};

export default ConfettiAnimation;
