# qrpack receiver

The scanning page for qrpack, hosted with GitHub Pages at
<https://zachd95.github.io/qrpack-receiver/>.

Open it on a phone, tap **Start camera**, and point it at the QR player that
`qrpack.py encode` opens on the computer. When every frame is in, it gives you
the files as a `.zip`, or a single file to save or share.

Everything is decoded in the browser. The page only downloads the jsQR decoder
from jsDelivr; the files you scan are never uploaded anywhere.

`index.html` is a copy of `receiver.html` from the qrpack repo. Make changes
there, then copy the file here as `index.html`.
