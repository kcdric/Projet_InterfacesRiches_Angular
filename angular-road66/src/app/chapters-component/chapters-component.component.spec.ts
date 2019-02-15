import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from '../app.component';
import { VideoComponent } from "../video/video.component";
import { ChaptersComponentComponent } from './chapters-component.component';
import { MapsComponent } from './maps.component';

describe('ChaptersComponentComponent', () => {
  let component: ChaptersComponentComponent;
  let fixture: ComponentFixture<ChaptersComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
 		imports: [HttpClientModule,MatMenuModule,BrowserAnimationsModule],
 declarations: [AppComponent, VideoComponent,ChaptersComponentComponent,MapsComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaptersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
