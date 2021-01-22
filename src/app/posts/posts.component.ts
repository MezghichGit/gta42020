import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts;
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private Http: HttpClient) {

    

   }

  ngOnInit(): void {
    this.Http.get(this.url).subscribe(
      response => {
        this.posts = response;
        console.log(this.posts)
      }
    )
  }

  createPost(title) { 
    let post : any = {'title':title.value};
    this.Http.post(this.url, post).subscribe( 
      response => {
        post['id'] = response['id'];
        post['userId'] = response['userId'];
        this.posts.splice(0, 0, post);
        // we can see if we update posts, thanks to the method Subscribe, we get notified of this modifiations
        //console.log(this.posts.splice(0,0,post));
      }
    )
  }

  updatePost(post) { 
    post['title'] = "java";
    post['body'] = "Très bon langage";
    this.Http.put(this.url+'/'+post['id'], post).subscribe(
      response => {
        //post = response;
        console.log(response);
      }
    )

  }

  deletePost(post) {
    this.Http.delete(this.url + '/' + post['id']).subscribe(
      response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1)
        console.log(response);
      }
    )
  }



}
