import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";

import { ShippingOrdersPage } from "./shipping-orders.page";

describe("ShippingOrdersPage", () => {
  let component: ShippingOrdersPage;
  let fixture: ComponentFixture<ShippingOrdersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShippingOrdersPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ShippingOrdersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
