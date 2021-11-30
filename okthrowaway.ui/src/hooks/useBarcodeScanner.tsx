import React from "react";
import { finished } from "stream";

export default function useBarcodeScanner() {
  const [barcode, setBarcode] = React.useState<{ code: string, finished: boolean, returned: boolean } | undefined>();
  const validKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const handleKeyPressed = React.useCallback((event: KeyboardEvent) => {
    const { key } = event;

    console.log(barcode);
    if (barcode?.returned)
      setBarcode({ code: '', finished: false, returned: false });

    if (validKeys.includes(key))
      setBarcode(barcode => { return { code: `${barcode?.code ?? ''}${key}`, finished: false, returned: false } });
    else if (key === "Enter") {
      setBarcode(barcode => {
        return {
          code: barcode?.code ?? '',
          finished: true,
          returned: false
        }
      });
    }
  }, [barcode]);

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyPressed);

    return () => window.removeEventListener("keydown", handleKeyPressed);
  }, []);

  if (barcode?.finished) {
    setBarcode(barcode => { 
      return {
        returned: true,
        code: barcode?.code ?? '',
        finished: false
      }
    });
    return barcode.code;
  }
}