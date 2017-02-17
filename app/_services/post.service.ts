import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Post } from '../_models/post';

@Injectable()
export class PostService {
    constructor(private http: Http) {   
    }
}