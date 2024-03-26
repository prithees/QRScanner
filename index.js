import inquirer from 'inquirer';
import qrImage from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
      message: "Write the URL to change",
      name: "url",
    }
  ])
  .then((answer) => {
    var URL = answer.url;
    console.log(URL);
    const qr_png = qrImage.image(URL, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('qr.png'));
  })
