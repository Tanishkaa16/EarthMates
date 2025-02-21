import bcrypt from 'bcryptjs';
import pool from '../../loaders/mysql'; 
import { ROUNDS } from '../../shared/constants';
import { ERRORS } from '../../shared/errors';
import generateToken from '../../shared/middlewares/jwt';
import type { UserSchemaType } from '../user/user.schema';
import type { AuthSchemaType } from './auth.schema';
import { RowDataPacket } from 'mysql2';

export async function usernameExists(username: string): Promise<boolean> {
  const query = `SELECT COUNT(*) FROM users WHERE username = ?`;
  const [rows] = await pool.execute<RowDataPacket[]>(query, [username]);
  const count = rows[0].count;
  return count > 0;
}

export async function handleSignUp({
  username,
  password,
  email,
}: AuthSchemaType) {
  const exists = await usernameExists(username);

  if (exists) {
    throw {
      statusCode: ERRORS.USER_ALREADY_EXISTS.code,
      message: ERRORS.USER_ALREADY_EXISTS.message.error,
    };
  }

  const hash = await bcrypt.hash(password, ROUNDS);

  const query = `
    INSERT INTO users (username, password, email, points)
    VALUES (?, ?, ?, ?)
  `;
  await pool.execute(query, [username, hash, email, 0]);
}

export async function handleLogin({
  username,
  password,
}: AuthSchemaType): Promise<string> {
  const query = `SELECT * FROM users WHERE username = ?`;
  const [rows] = await pool.execute<RowDataPacket[]>(query, [username]);

  if (rows.length === 0) {
    throw {
      statusCode: ERRORS.USER_NOT_FOUND.code,
      message: ERRORS.USER_NOT_FOUND.message.error,
    };
  }
  const user = rows[0];
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw {
      statusCode: ERRORS.UNAUTHORIZED.statusCode,
      message: ERRORS.UNAUTHORIZED.message.error,
    };
  }

  return generateToken(username);
}
