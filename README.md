# qrpack receiver

The scanning page for qrpack, hosted with GitHub Pages at
<https://zachd95.github.io/qrpack-receiver/>.

Open it on a phone, tap **Start camera**, and point it at the QR player that
`qrpack.py encode` opens on the computer. When every frame is in, it gives you
the files as a `.zip`, or a single file to save or share.

Everything is decoded in the browser. The page only downloads the jsQR decoder
from jsDelivr; the files you scan are never uploaded anywhere. Transfers made with
`qrpack.py encode --encrypt` ask for their passphrase and are decrypted on the phone.

## Install as an app

In Safari on iPhone: **Share → Add to Home Screen**. It opens full screen,
works offline after the first visit, and saves files through the share sheet.

## Files

| File | What it is |
| --- | --- |
| `index.html` | A copy of `receiver.html` from the qrpack repo. Make changes there, then copy it here. |
| `manifest.webmanifest`, `*.png` | App name and icons for the home screen |
| `sw.js` | Offline support: the network first, the saved copy when there's no connection |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |
