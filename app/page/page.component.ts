import { Component, OnInit } from '@angular/core';
import { PostService } from '../_services/post.service';
import { Post } from '../_models/post';

@Component({
    selector: 'page-component',
    templateUrl: 'app/page/page.component.html'
})
export class PageComponent implements OnInit {
    posts = [
        {Message: "Post Message 1"},
        {Message: "Post Message 2"},
        {Message: "Post Message 3"},
    ];
    ngOnInit() {
    }

    constructor(private _postService: PostService) 
    {
    }
}