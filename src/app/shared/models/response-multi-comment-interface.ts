import { SingleComment } from 'src/app/shared/models/comment-interface';

export interface ResponseMultiComment {
  comments: [SingleComment];
}
