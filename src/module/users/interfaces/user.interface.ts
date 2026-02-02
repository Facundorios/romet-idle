import { AuthProviderEnum, UserStatusEnum } from '@prisma/client';

export interface CreateUserInterface {
  name?: string;
  lastName?: string;
  avatar?: string;
  email: string;
  backupEmail?: string;
  phone?: string;
  password?: string;
  country?: string;
  language?: string;
  emailConfirm?: boolean;
  backupEmailConfirm?: boolean;
  phoneConfirm?: boolean;
  twoFactorEnabled?: boolean;
  twoFactorSecret?: string;
  status?: UserStatusEnum;
  authProvider?: AuthProviderEnum;
}

export interface UpdateUserInterface {
  name?: string;
  lastName?: string;
  avatar?: string;
  email?: string;
  backupEmail?: string;
  phone?: string;
  password?: string;
  country?: string;
  language?: string;
  emailConfirm?: string;
  backupEmailConfirm?: string;
  phoneConfirm?: string;
  twoFactorEnabled?: string;
  twoFactorSecret?: string;

  status?: UserStatusEnum;
  authProvider?: AuthProviderEnum;
}
