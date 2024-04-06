// import path from "path";
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// import express from "express";
// import multer from "multer";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// console.log("************* __filename ************* ",__filename)

// const router = express.Router();

// // Path to the 'uploads' directory in the root of the project
// console.log("***********  __dirname  *****************", __dirname)
// const uploadDir = path.join(__dirname, '../../uploads');
// console.log("***********uploadDir  ************",uploadDir)

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, uploadDir);
//   },
//   filename(req, file, cb) {
//     cb(
//       null,
//       `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
//     );
//   },
// });

// function fileFilter(req, file, cb) {
//   const filetypes = /jpe?g|png|webp/;
//   const mimetypes = /image\/jpe?g|image\/png|image\/webp/;

//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = mimetypes.test(file.mimetype);

//   if (extname && mimetype) {
//     cb(null, true);
//   } else {
//     cb(new Error('Images only!'), false);
//   }
// }

// const upload = multer({ storage, fileFilter });
// const uploadSingleImage = upload.single('image');

// router.post('/', (req, res) => {
//   uploadSingleImage(req, res, function (err) {
//     if (err) {
//       return res.status(400).send({ message: err.message });
//     }

//     // Check if req.file is defined before accessing its properties
//     if (!req.file) {
//       return res.status(400).send({ message: 'No file uploaded' });
//     }

//     // Adjust the path to correctly point to the uploaded file
//     const relativeImagePath = path.relative(__dirname, req.file.path);

//     res.status(200).send({
//       message: 'Image uploaded successfully',
//       image: `/${relativeImagePath}`,
//     });
//   });
// });

// export default router;

import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from "express";
import multer from "multer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__filename);

const router = express.Router();

const uploadDir = path.join(__dirname, '../../uploads');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, uploadDir);
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function fileFilter(req, file, cb) {
  const filetypes = /jpe?g|png|webp/;
  const mimetypes = /image\/jpe?g|image\/png|image\/webp/;

  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = mimetypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error('Images only!'), false);
  }
}

const upload = multer({ storage, fileFilter });
const uploadMultipleImages = upload.array('images', 5); // Max 5 images

router.post('/', (req, res) => {
  uploadMultipleImages(req, res, function (err) {
    if (err) {
      return res.status(400).send({ message: err.message });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).send({ message: 'No files uploaded' });
    }
    console.log("hahahahhahahaha", req.files);

    const uploadedImages = req.files.map(file => {
      const relativeImagePath = path.relative(__dirname, file.path);
      return `/${relativeImagePath}`;
    });

    res.status(200).send({
      message: 'Images uploaded successfully',
      images: uploadedImages,
    });
  });
});

export default router;
