import { Racket } from './racket';

export interface SetFavoriteParams {
  racketId: Racket['id'];
  isFavorite: boolean
}
