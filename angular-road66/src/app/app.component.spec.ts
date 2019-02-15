import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { VideoComponent } from "./video/video.component";
import {ChaptersComponentComponent} from "./chapters-component/chapters-component.component";
import {MapsComponent} from "./maps/maps.component";
import {HttpClientModule} from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
 		imports: [HttpClientModule,MatMenuModule,BrowserAnimationsModule], 
      	declarations: [
        	AppComponent, VideoComponent, ChaptersComponentComponent, MapsComponent
     	 ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-road66'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-road66');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-road66!');
  });
});
