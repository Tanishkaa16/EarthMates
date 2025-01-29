import * as Minio from 'minio';
import config from '../config';

const minioClient = new Minio.Client({
  endPoint: config.MINIO_END_POINT,
  port: config.MINIO_PORT,
  useSSL: false,
  accessKey: config.ACCESS_KEY,
  secretKey: config.SECRET_KEY,
});

export { minioClient };
