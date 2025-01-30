import path from 'node:path';
import type { Request } from 'express';
import multer, { type FileFilterCallback } from 'multer';

export const fileFilter = (
  _req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback,
) => {
  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
  const fileExtension = path.extname(file.originalname).toLowerCase();

  if (allowedExtensions.includes(fileExtension)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only images are allowed.'));
  }
};

export const fileUpload = multer({
  storage: multer.memoryStorage(),
  fileFilter: fileFilter,
});
