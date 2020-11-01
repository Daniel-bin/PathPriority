import { WatchListComponent } from "./watch-list/watch-list.component";
import { ActorListComponent } from "./actor-list/actor-list.component";
import { FlopListComponent } from "./flop-list/flop-list.component";
import { FlopDetailsComponent } from "./flop-details/flop-details.component";
import { FlopEditComponent } from "./flop-edit.component";
import { LoginComponent } from "./login/login.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { FlopSuggestionComponent } from "./flop-suggestion/flop-suggestion.component";

export const routingTable = [
  { path: "", redirectTo: "/flops", pathMatch: "full" },
  { path: "watchlist", component: WatchListComponent },
  { path: "actors", component: ActorListComponent },
  { path: "login", component: LoginComponent },
  { path: "flops", component: FlopListComponent },
  { path: "flops/:id", component: FlopDetailsComponent },
  { path: "flops/:id/edit", component: FlopEditComponent },
  { path: "flops/suggestion", component: FlopSuggestionComponent },
  { path: "**", component: NotFoundComponent }
];
