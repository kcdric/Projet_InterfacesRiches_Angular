import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-chapters-component',
  templateUrl: './chapters-component.component.html',
  styleUrls: ['./chapters-component.component.css']
})
export class ChaptersComponentComponent implements OnInit {
	chapters : JSON 
	@Output() onChapter = new EventEmitter<number>()
  	constructor(private http: HttpClient) { }

	ngOnInit() {
		this.http.get('./assets/chapters.json', {responseType:'json'}).subscribe(data => {
			console.log(data['Chapters']); 
			this.chapters = data['Chapters'];
		});
	}
	onSelect(chapter){
 		this.onChapter.emit(chapter.pos) 
	}

}
