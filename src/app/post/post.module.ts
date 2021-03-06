import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PostPage } from "./post.page";
import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";

import { PostPageRoutingModule } from "./post-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: "", component: PostPage }]),
    PostPageRoutingModule,
  ],
  declarations: [PostPage],
})
export class PostPageModule {}
