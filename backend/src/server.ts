import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { ValidateEnv } from '@utils/validateEnv';
import { KYCRoutes } from '@/routes/kyc.route';
import { VideoRoute } from './routes/video.route';
ValidateEnv();

const app = new App([new UserRoute(), new AuthRoute(),   new KYCRoutes(), new VideoRoute()]);
app.listen();
