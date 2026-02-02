import { Module } from '@nestjs/common';
import KeyvRedis from '@keyv/redis';
import { CacheModule } from '@nestjs/cache-manager';

import { envs } from './config';

import { PrismaModule } from './module/prisma/prisma.module';
import { UsersModule } from './module/users/users.module';
import { BcryptModule } from './module/bcrypt/bcrypt.module';
@Module({
  imports: [
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () => {
        return {
          ttl: 5000,
          stores: [new KeyvRedis(envs.REDIS_URL)],
        };
      },
    }),
    PrismaModule,
    UsersModule,
    BcryptModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
