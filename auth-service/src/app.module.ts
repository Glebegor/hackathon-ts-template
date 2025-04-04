import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {configuration, configValidationSchema} from './bootstrap/config';
@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration],
            validationSchema: configValidationSchema
        }),
    ],
})
export class AppModule {}
