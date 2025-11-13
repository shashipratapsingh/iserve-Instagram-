import { HomeComponent } from './home/home.component';
import { ReelsComponent } from './reels/reels.component';
import { UploadComponent } from './upload/upload.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';

export const routes = [
  { path: '', component: HomeComponent },
  { path: 'reels', component: ReelsComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'notifications', component: NotificationComponent },
  { path: 'profile', component: ProfileComponent }
];
