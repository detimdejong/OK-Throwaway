import React from "react";

export default function useBarcodeScanner() {
  const [barcode, setBarcode] = React.useState<string | undefined>();
  const validKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const handleKeyPressed = (event: KeyboardEvent) => {
    const { key } = event;
    if (validKeys.includes(key))
      setBarcode(barcode => `${barcode ?? ''}${key}`);
    else if (key === "Enter")
      setBarcode(undefined);
  }

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyPressed);

    return () => window.removeEventListener("keydown", handleKeyPressed);
  }, []);

  return barcode;
}