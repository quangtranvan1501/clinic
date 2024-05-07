import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzImageModule } from 'ng-zorro-antd/image';
import { FormGroup, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    WelcomeRoutingModule,
    CommonModule,
    FormsModule,
    NzCascaderModule,
    NzLayoutModule,
    NzAvatarModule,
    NzBadgeModule,
    NzInputModule,
    NzIconModule,
    NzGridModule,
    NzCarouselModule,
    NzImageModule,
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
