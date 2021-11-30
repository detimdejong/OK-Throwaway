import React from "react";

export default function useBarcodeScanner() {
  const [barcode, setBarcode] = React.useState<string>("");
  const validKeys = React.useMemo(() => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Enter"], []);

  const handleKeyPressed = React.useCallback((event: KeyboardEvent) => {
    const { key } = event;

    if (validKeys.includes(key))
      setBarcode(barcode => `${barcode}${key === "Enter" ? ';' : key}`);

  }, [barcode]);

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyPressed);

    return () => window.removeEventListener("keydown", handleKeyPressed);
  }, []);

  return { barcode, setBarcode };
}