import { ConfigModule } from '@nestjs/config';
ConfigModule.forRoot();

export const Config = {
  mongoURI: process.env.MONGO_URI,
  port: process.env.PORT
}
